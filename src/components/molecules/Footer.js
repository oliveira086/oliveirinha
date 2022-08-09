import styled from "styled-components";
import oliveirinhaProfilePic from '../../assets/images/oliveirinha.png';


function Footer () {
  return (
    <>
      <S.Container>
        <S.InformationContainer>
          <S.ImageContainer />
          <h3>OliveirinhaBOT</h3>
          <span>O bot perfeito pra a sua diversão.</span><br></br>
          <a href=""><span>oliveirinhabot@gmail.com</span></a><br></br>
          <span>© Oliveirinha BOT 2022 - All rights reserved.</span>
        </S.InformationContainer>
        <S.InformationContainer>
          <h3>Funcionalidades</h3>
          <a href="">Suporte</a><br></br>
          <a href="">Comandos</a><br></br>
          <a href="">Games</a><br></br>
        </S.InformationContainer>
      </S.Container>
    </>
  )
}

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: auto;
    background-color: var(--color-neutral-dark);
    justify-content: space-around;

    @media(max-width: 600px) {
      display: flex;
      height: auto;
      flex-wrap: wrap;
    }
  `,

  InformationContainer: styled.div`
    width: 25vw;
    height: 30vh;
    color: #fff;

    h3, span {
      line-height: 1%;
    }

    @media(max-width: 600px) {
      width: 100vw;
      height: 25vh;
      margin-bottom: 2px;
      padding: var(--spacing-xxxs);
    }
  `,

  ImageContainer: styled.div`
    width: 5vw;
    height: 5vw;
    background-image: url(${oliveirinhaProfilePic});
    background-size: contain;
    background-repeat: no-repeat;

    @media(max-width: 600px) {
      width: 15vw;
      height: 15vw;
    }
  `
}


export default Footer;
