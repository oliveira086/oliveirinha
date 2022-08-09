import styled from "styled-components";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import oliveirinhaProfilePic from '../../assets/images/oliveirinha.png';
import useWindowDimensions from '../../utils/windowDimensions';


function Header () {
  let dimensions = useWindowDimensions();
  let navigate = useNavigate();

  if(dimensions.width >= 830) {
    return (
      <>
        <S.Container>
          <S.ImageContainer onClick={() => navigate('/')}/>
          <S.ButtonFunctionContainer>
            <Button width='var(--spacing-lg)' label="SUPORTE"/>
            <Button width='var(--spacing-lg)' label="COMANDOS" onClick={() => navigate('/comands')}/>
            <Button width='var(--spacing-lg)' label="GAMES"/>
          </S.ButtonFunctionContainer>
          <S.AuthButtonsContainer>
            <Button width={'var(--spacing-xl)'} label="LOGIN" primary/>
            <Button width='var(--spacing-lg)' label="CADASTRO"/>
          </S.AuthButtonsContainer>
        </S.Container>
      </>
    );
  }

  if(dimensions.width < 830) {
    return (
      <>
        <S.MobileContainer>
          <S.DrawerMobileContainer>
            <AiOutlineMenu size={35}/>
          </S.DrawerMobileContainer>
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
    width: 4vw;
    height: 6vh;
    background-image: url(${oliveirinhaProfilePic});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
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
    width: 6vh;
    height: 6vh;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,

  ImageContainerMobile: styled.div`
    width: 30vw;
    height: 6vh;
    background-image: url(${oliveirinhaProfilePic});
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-left: 70%;
  `

}

export default Header;
