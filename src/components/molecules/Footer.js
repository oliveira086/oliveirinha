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
          <span>oliveirinhabot@gmail.com</span><br></br>
          <span>© Oliveirinha BOT 2022 - All rights reserved.</span>
        </S.InformationContainer>
        <S.InformationContainer>
          <h3>Funcionalidades</h3>
          <a href="/suporte">Suporte</a><br></br>
          <a href="/comands">Comandos</a><br></br>
          <a href="/games">Games</a><br></br>
        </S.InformationContainer>
      </S.Container>
    </>
  )
}

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: row;
    width: 99.9vw;
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
    padding-top: var(--spacing-nano);

    h3, span {
      line-height: 1%;
    }

    a {
      text-decoration: none;
      color: #fff;
      :hover {
        text-decoration: underline;
      }
    }

    @media(max-width: 600px) {
      width: 100vw;
      height: 25vh;
      margin-bottom: 2px;
      padding: var(--spacing-xxxs);
    }
  `,

  ImageContainer: styled.div`
    width: 16vw;
    height: 8vh;
    background-image: url(${oliveirinhaProfilePic});
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width: 600px) {
      width: 36vw;
      height: 4vh;
      margin-bottom: var(--spacing-quarck);
    }
  `
}


export default Footer;
