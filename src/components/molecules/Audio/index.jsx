import { Pause, Play, Trash } from 'phosphor-react';
import React, { useRef } from 'react'
import { useState } from 'react';
import * as S from './style'

import ReactHowler from 'react-howler';

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
    <S.Container pinkDetail={isPlaying} src={imageSrc}>
      <div className="infos">
        <div className="img" src={imageSrc}></div>
        <p>!{command}</p>
      </div>
      <div className="buttons">
        <button className="delete">
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
  );
}
