import styled from "styled-components";
import { FiPlusSquare } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Cookies from "universal-cookie";

import logo from "../../assets/images/oliveirinha.png";
import { api } from '../../services/api';

function MobileSocialHeader () {
  let navigate = useNavigate();
  const [profile, setProfile] = useState('');

  const cookies = new Cookies();
  const bearerToken = cookies.get('@oliveirinha:bearerToken');

  api.post('/auth/get-user-by-token', null, {
    headers: {
      "Authorization": `Bearer ${bearerToken}`,
    },
  }).then(response => {
    setProfile(response.data.body.profile_picture);
  })


  return (
    <S.ConainterHeader>
      <S.LogoContainer onClick={() => navigate('/feed')}>
        <img src={logo} alt="Oliveirinha" className="logo" />
      </S.LogoContainer>
      <S.ButtonsContainer>
        <FiPlusSquare size={26}/>
        <IoMdNotificationsOutline size={26}/>
        <AiOutlineSearch size={26}/>
      </S.ButtonsContainer>
      <S.ProfileContainer>
        <S.ProfilePicture profile={profile} />
      </S.ProfileContainer>
    </S.ConainterHeader>
  )
}

const S = {
  ConainterHeader: styled.div`
    display: flex;
    width: 90vw;
    height: 8vh;
    background-color: #232733;
    border-radius: 10px;
  `,
  LogoContainer: styled.div`
    display: flex;
    width: 30vw;
    height: 8vh;
    justify-content: center;
    align-items: center;

    img {
      width: 26vw;
    }
  `,
  ButtonsContainer: styled.div`
    display: flex;
    width: 40vw;
    height: 8vh;
    justify-content: space-around;
    align-items: center;
    padding-left: 1rem;

    svg {
      color: #A3ABCC
    }
  `,
  ProfileContainer: styled.div`
    display: flex;
    width: 20vw;
    height: 8vh;
    justify-content: center;
    align-items: center;
  `,
  ProfilePicture: styled.div`
    width: 12vw;
    height: 12vw;
    border-radius: 100px;
    background: ${props => `url(${props.profile}) no-repeat`};
    background-size: contain;
  `
}


export default MobileSocialHeader;
