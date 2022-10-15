import { House, MusicNotes, MusicNotesPlus } from 'phosphor-react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import useWindowDimensions from '../../../utils/windowDimensions';
import * as S from './style';
import logo from "../../../assets/images/oliveirinha.png";


const profilePic = "https://github.com/magaliais.png";

export function SocialHeader() {
  const dimension = useWindowDimensions();

  return (
    <S.Container>
      <img src={logo} alt="Oliveirinha" className="logo" />

      <S.Navbar>
        <NavLink to="/feed">
          <House weight="fill" size={24} />
          <p>Home</p>
        </NavLink>
        <NavLink to="/audios">
          <MusicNotes weight="fill" size={24} />
          <p>Meus Áudios</p>
        </NavLink>
        <NavLink to="/uploads">
          <MusicNotesPlus weight="fill" size={24} />
          <p>Novo Áudio</p>
        </NavLink>
      </S.Navbar>

      <S.Profile src={profilePic}>
        <div className="picture"></div>
        <div className="info">
          <p className="name">Gabriel</p>
          <p className="email">gabriel@email.com</p>
        </div>
      </S.Profile>
    </S.Container>
  );
}
