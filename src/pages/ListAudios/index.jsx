import React, { useEffect } from 'react'
import { useState } from 'react';
import { SocialHeader } from '../../components/molecules/SocialHeader';
import { api } from '../../services/api';

import * as S from './style';

const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1MTE5ODM1MTQ5MzciLCJpYXQiOjE2NjU1MTMzNzMsImV4cCI6MTY2NTUxNjk3M30.sOd9qfs2C1WxRS6GGadwgnooDy0ELApDLsy6svZyhqo";

export function ListAudios() {
  const [audios, setAudios] = useState([]);

  useEffect(() => {
    async function fetchUserAudios() {
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
      api.post("/audios/find-user-audios", null, {
        headers: {
          "Authorization": `Bearer ${bearerToken}`,
        },
      })
        .then(response => {
          setAudios(response.data.body);
        })
        .catch(err => {
          console.log(err);
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

  return (
    <S.Container>
      <SocialHeader />

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

          {audios.length === 0 ? (
            <p>Não há áudios para serem exibidos</p>
          ) : (
            <S.Audios>
              <tr>
                <th width="20%">Comando</th>
                <th width="70%">Áudio</th>
                <th width="10%"></th>
              </tr>
              {audios.map(audio => (
                <tr key={audio.id}>
                  <td>
                    <span>!{audio.command}</span>
                  </td>
                  <td>
                    <audio controls>
                      <source
                        src={audio.link}
                        type="audio/mp3"
                      />
                      Your browser does not support the audio tag.
                    </audio>
                  </td>
                  <td>
                    <span className='deleteButton'>Excluir</span>
                  </td>
                </tr>
              ))}
            </S.Audios>
          )}
        </section>
      </S.Content>
    </S.Container>
  );
}