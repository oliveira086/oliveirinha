import { Pause, Play, Trash } from 'phosphor-react';
import React, { useRef } from 'react'
import { useState } from 'react';
import * as S from './style'
import ReactHowler from 'react-howler';
import Cookies from "universal-cookie";
import { ToastContainer, toast } from 'react-toastify';
import { api } from '../../../services/api';

function deleteAudio (id) {
  const cookies = new Cookies();
  const bearerToken = cookies.get('@oliveirinha:bearerToken');

  api.post("/audios/delete-audio", {audio_id: id}, {
    headers: {
      "Authorization": `Bearer ${bearerToken}`,
    },
  }).then(response => {
    toast.success('Audio deletado', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    window.location.reload();
  }).catch(error => {
    toast.error('Houve um problema, tente novamente mais tarde', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  });
}


export function Audio({
  id,
  command,
  audioSrc,
  imageSrc,
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  if(command.length > 10) {
    command = command.substr(0, 10) + '...'
  }

  return (
    <>
      <ToastContainer />
      <S.Container pinkDetail={isPlaying} src={imageSrc}>
        <div className={isPlaying ? 'pinkDetail active' : 'pinkDetail'}></div>
        <div className="infos">
          <div className="img" src={imageSrc}></div>
          <p>!{command}</p>
        </div>
        <div className="buttons">
          <button className="delete" onClick={() => deleteAudio(id)}>
            <Trash color="white" size={16} />
          </button>

          <button
            className="togglePlay"
            onClick={() => setIsPlaying((current) => !current)}
          >
            {isPlaying ? (
              <Pause weight="fill" color="white" size={20} />
            ) : (
              <Play weight="fill" color="white" size={20} />
            )}
          </button>

          <ReactHowler
            src={audioSrc}
            playing={isPlaying}
            onEnd={() => setIsPlaying(false)}
          />
        </div>
      </S.Container>
    </>
  );
}