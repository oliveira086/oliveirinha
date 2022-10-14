import React, { useEffect } from 'react'
import { useState } from 'react';
import { SocialHeader } from '../../components/molecules/SocialHeader';
import MobileSocialHeader from '../../components/molecules/MobileSocialHeader';
import useWindowDimensions from '../../utils/windowDimensions';
import { api } from '../../services/api';
import Cookies from "universal-cookie";

import * as S from './style';
import { Audio } from '../../components/molecules/Audio';
import { useNavigate } from 'react-router-dom';

export function ListAudios() {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dimensions = useWindowDimensions();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserAudios() {
      setIsLoading(true);
      /*
      * {
      *   body: [
      *     {
      *       id: number,
      *       user_id: 64,
      *       link: string,
      *       command: string,
      *       sticker_link: string,
      *       enable: 1,
      *     }
      *   ]
      * }
      */
     const cookies = new Cookies();
     const bearerToken = cookies.get('@oliveirinha:bearerToken');

      api.post("/audios/find-user-audios", null, {
        headers: {
          "Authorization": `Bearer ${bearerToken}`,
        },
      })
        .then(response => {
          setAudios(response.data.body);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        })
    };

    fetchUserAudios();
  }, []);

  function deleteAudio(audioId) {
    const deleteIndex = audios.findIndex(audio => {
      return audio.id === audioId;
    });

    console.log(deleteIndex);
  }

  console.log(audios)
  return (
    <S.Container>

      {dimensions.width < 800 ?
        <MobileSocialHeader />
      :
        <SocialHeader />
      }

      <S.Content>
        <section>
          <header>
            <h1>Meus Áudios</h1>
          </header>
          <p>Aqui estão todos os áudios cadastrados na plataforma.</p>
        </section>

        <section>
          <header>
            <p>Áudios</p>
          </header>

          <S.Audios>
            <S.AddAudioButton onClick={() => navigate('/uploads')}>
              Novo Áudio
            </S.AddAudioButton>
            {audios.length === 0 ? (
              isLoading ? (
                <p>Carregando...</p>
              ) : (
                <p>Não há áudios para serem exibidos</p>
              )
            ) : (
              <S.AudiosList>
                {audios.map(audio => {
                  return(
                    <Audio
                      key={audio.id}
                      id={audio.id}
                      command={audio.command}
                      audioSrc={audio.link}
                      imageSrc={audio.sticker_link}
                    />
                  )
                })}
                </S.AudiosList>
              )}
          </S.Audios>
        </section>
      </S.Content>
    </S.Container>
  );
}
