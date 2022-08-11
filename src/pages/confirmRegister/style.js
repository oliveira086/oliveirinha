import styled from "styled-components";
import confirmacao from '../../assets/images/cadastro.png'

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-neutral-darkest);
    justify-content: center;
    align-items: center;
  `,
  ImageContainer: styled.div`
    width: 30vw;
    height: 30vh;
    background-image: url(${confirmacao});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (max-width: 800px) {
      width: 75%;
      height: 16vh;
      margin-bottom: var(--spacing-xxs);
    }
  `
}

export default S;
