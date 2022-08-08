import styled from "styled-components";
import Button from "../atoms/Button";
import { FiPhoneCall } from "react-icons/fi";
import oliveirinhaProfilePic from '../../assets/images/oliveirinha.png';

function Header () {
  return (
    <>
      <S.Container>
        <S.ImageContainer />
        <S.ButtonFunctionContainer>
          <Button width='var(--spacing-lg)' label="SUPORTE"/>
          <Button width='var(--spacing-lg)' label="COMANDOS"/>
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

const S = {
  Container: styled.section`
    display: flex;
    width: 99vw;
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
    width: 20vw;
    height: 6vh;
  `,

  AuthButtonsContainer: styled.div`
    display: flex;
    width: 40vw;
    height: 6vh;
    justify-content: flex-end;
    align-items: center;
  `


}

export default Header;
