import styled from "styled-components";
import DadosBackground from '../../assets/images/dados.jpg';

const S = {
  Container: styled.section`
    display: flex;
    width: 100vw;
    height: 80vh;
    background-color: var(--color-neutral-darkest);
  `,
  LeftContainer: styled.div`
    display: flex;
    width: 40vw;
    height: 90vh;
    justify-content: center;
    align-items: center;

    b {
      :hover {
        color: var(--color-primary);
        cursor: pointer;
      }
    }

    @media(max-width: 800px) {
      width: 100vw;
      height: 70vh;
    }
  `,
  AuthContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 36vh;
    justify-content: space-around;
    color: #fff;

    #container-inputs {
      display: flex;
      flex-direction: column;
      width: 16vw;
      height: 28vh;
      justify-content: space-between;
    }

    @media(max-width: 800px) {
      display: flex;
      flex-direction: column;
      width: 76vw;
      height: 50vh;
      justify-content: space-between;

      span, b {
        font-size: 0.9rem;
        margin-top: var(--spacing-xxxs);
      }

      #container-inputs {
        display: flex;
        flex-direction: column;
        width: 74vw;
        height: 100vh;
        justify-content: space-between ;
        align-items: center;
      }
    }

    @media(max-width: 400px) {
      display: flex;
      flex-direction: column;
      width: 76vw;
      height: 50vh;
      justify-content: space-between;

      span, b {
        font-size: 0.9rem;
        margin-top: var(--spacing-xxxs);
      }

      #container-inputs {
        display: flex;
        flex-direction: column;
        width: 74vw;
        height: 100vh;
        justify-content: space-between ;
        align-items: center;
      }
    }
  `,

  RecoveryPassword: styled.div`
    width: 90%;
    height: 5vh;

    span {
      :hover {
        text-decoration: underline;
      }
    }
  `,

  RigthContainer: styled.div`
    width: 60vw;
    height: 100vh;
  `,

  ShadowContainer: styled.div`
    position: absolute;
    width: 60vw;
    height: 80vh;
    background-color: var(--color-neutral-darkest);
    background-image: linear-gradient( to right, var(--color-neutral-darkest), var(--color-neutral-darkest) rgba(255, 255, 255, 0.5));
    opacity: 0.8 ;
    z-index: 10;
  `,

  ImageContainer: styled.div`
    position: relative;
    width: 60vw;
    height: 80vh;
    background-image: url(${DadosBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 100vh;
    z-index: 0;
  `
}

export default S;
