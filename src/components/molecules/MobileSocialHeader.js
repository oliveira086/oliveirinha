import styled from "styled-components";
import { FiPlusSquare } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai';
import logo from "../../assets/images/oliveirinha.png";

function MobileSocialHeader () {
  return (
    <S.ConainterHeader>
      <S.LogoContainer>
        <img src={logo} alt="Oliveirinha" className="logo" />
      </S.LogoContainer>
      <S.ButtonsContainer>
        <FiPlusSquare size={26}/>
        <IoMdNotificationsOutline size={26}/>
        <AiOutlineSearch size={26}/>
      </S.ButtonsContainer>
      <S.ProfileContainer>
        <S.ProfilePicture />
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
    background-color: #f0f;
  `
}


export default MobileSocialHeader;
