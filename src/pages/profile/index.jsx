import React from 'react'
import * as S from './style';
import { Avatar } from './Avatar';
import { Tabs } from './Tabs';
import { Crown, ShareNetwork } from 'phosphor-react';

export function Profile() {
  return (
    <S.Container>
      <S.Header>
        <Avatar size='88px' />
        <div className="infos">
          <div className="posts">
            <strong>600</strong>
            <p>Posts</p>
          </div>
          <div className="followers">
            <strong>6k</strong>
            <p>Seguidores</p>
          </div>
          <div className="following">
            <strong>246k</strong>
            <p>Seguindo</p>
          </div>
        </div>
      </S.Header>

      <S.Infos>
        <header>
          <strong>
            FranciscoLimpurra
            <div className="icon">
              <Crown color="var(--neutral-01)" size={20} />
            </div>
          </strong>
          <p>@franciscolimpurra</p>
        </header>

        <div className="description">
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia...
          </span>
          <span className='more'>Mais</span>
        </div>

        <footer>
          <div className="buttons">
            <button className='primary'>Seguir</button>
            <button className='secondary'>Mensagem</button>
            <button className='secondary'>
              <ShareNetwork color='var(--neutral-01)' size={20} />
            </button>
          </div>
          <div className="friends">
            <div className="photos">
              <Avatar size='24px' />
              <Avatar size='24px' />
              <Avatar size='24px' />
            </div>
            <p>+300 amigos em comum</p>
          </div>
        </footer>
      </S.Infos>

      <S.Body>
        <Tabs />
      </S.Body>
    </S.Container>
  );
}