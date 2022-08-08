import styled from "styled-components";
import Button from "../atoms/Button";
import oliveirinhaProfilePic from '../../assets/images/oliveirinha.png';
import useWindowDimensions from '../../utils/windowDimensions';
import { AiOutlineMenu } from "react-icons/ai";


function Header () {
  let dimensions = useWindowDimensions();

  if(dimensions.width > 600) {
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

  if(dimensions.width < 600) {
    return (
      <>
        <S.MobileContainer>
          <S.DrawerMobileContainer>
            <AiOutlineMenu size={35}/>
          </S.DrawerMobileContainer>
          <S.ImageContainerMobile />

        </S.MobileContainer>
      </>
    );
  }
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
