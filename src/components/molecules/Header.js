import styled from "styled-components";
import { useState } from "react";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import oliveirinhaProfilePic from '../../assets/images/oliveirinha.png';
import useWindowDimensions from '../../utils/windowDimensions';


function Header () {
  let dimensions = useWindowDimensions();
  let navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  }

  if(dimensions.width >= 830) {
    return (
      <>
        <S.Container>
          <S.ImageContainer onClick={() => navigate('/')} />
          <S.ButtonFunctionContainer>
            <Button width='var(--spacing-lg)' label="SUPORTE"/>
            <Button width='var(--spacing-lg)' label="COMANDOS" onClick={() => navigate('/comands')}/>
            <Button width='var(--spacing-lg)' label="GAMES"/>
          </S.ButtonFunctionContainer>
          <S.AuthButtonsContainer>
            <Button width={'var(--spacing-xl)'} label="LOGIN" primary onClick={() => navigate('/login')}/>
            <Button width='var(--spacing-lg)' label="CADASTRO"/>
          </S.AuthButtonsContainer>
        </S.Container>
      </>
    );
  }

  if(dimensions.width < 830) {
    return (
      <>
        <S.DrawerMobileContainer state={menu == true? 'visible' : 'hidden'}>
          <S.HeaderDrawerContainer>
            <AiOutlineClose size={35} onClick={() => openMenu()}/>
          </S.HeaderDrawerContainer>
          <S.BodyDrawerContainer>
            <Button width='var(--spacing-lg)' label="HOME" onClick={() => navigate('/')}/>
            <Button width='var(--spacing-lg)' label="SUPORTE"/>
            <Button width='var(--spacing-lg)' label="COMANDOS" onClick={() => navigate('/comands')}/>
            <Button width='var(--spacing-lg)' label="GAMES"/>

            <S.AuthButtonsMobileContainer>
              <Button width={'var(--spacing-xl)'} label="LOGIN" primary onClick={() => navigate('/login')}/>
              <Button width='var(--spacing-lg)' label="CADASTRO"/>
            </S.AuthButtonsMobileContainer>

          </S.BodyDrawerContainer>
        </S.DrawerMobileContainer>
        <S.MobileContainer>
          <AiOutlineMenu size={35} onClick={() => openMenu()}/>
          <S.ImageContainerMobile onClick={() => navigate('/comands')} />
        </S.MobileContainer>
      </>
    );
  }
}

const S = {
  Container: styled.section`
    display: flex;
    width: 100vw;
    height: 7vh;
    background-color: var(--color-neutral-darkest);
    justify-content: space-around;
    align-items: center;
    padding-top: 1vh;
  `,
  ImageContainer: styled.div`
    width: 8vw;
    height: 4vh;
    background-image: url(${oliveirinhaProfilePic});
    /* background-color: #999; */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin-top: var(--spacing-quarck);
  `,

  ButtonFunctionContainer: styled.div`
    width: 45vw;
    height: 6vh;
  `,

  AuthButtonsContainer: styled.div`
    display: flex;
    width: 40vw;
    height: 6vh;
    justify-content: flex-end;
    align-items: center;
  `,

  MobileContainer: styled.section`
    display: flex;
    width: 99vw;
    height: 7vh;
    background-color: var(--color-secondary);
    align-items: center;
    padding-left: var(--spacing-quarck);
  `,

  DrawerMobileContainer: styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 90vw;
    height: 100vh;
    cursor: pointer;
    background-color: rgb(35, 37, 38);
    visibility: ${(props => props.state)};
  `,

  HeaderDrawerContainer: styled.div`
    display: flex;
    width: 90vw;
    height: 7vh;
    align-items: center;
    background-color: var(--color-secondary);
  `,

  BodyDrawerContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 80vh;
    align-items: center;
    justify-content: center;
  `,

  AuthButtonsMobileContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 30vh;
    align-items: center;
    justify-content: center;
  `,

  ImageContainerMobile: styled.div`
    width: 46vw;
    height: 6vh;
    background-image: url(${oliveirinhaProfilePic});
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-left: 40%;

    @media (max-width: 600px) {
      width: 44vw;
      height: 5vh;
    }
  `

}

export default Header;
