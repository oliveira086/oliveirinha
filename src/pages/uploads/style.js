import styled from "styled-components";
import oliveirinhaProfilePic from "../../assets/images/oliveirinha.png";

// -------------------------------------------------------------------
//      TERMINAR RESPONSIVIDADE e AJUSTES DE CORES
// -------------------------------------------------------------------

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: var(--color-neutral-darkest);
    align-items: center;
    overflow: hidden;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: auto;
      background-color: var(--color-neutral-darkest);
      align-items: center;
    }
  `,
  Header: styled.div`
    display: flex;
    width: 80vw;
    height: 7vh;
    margin-top: 1%;
    border-radius: 10px;
    align-items: center;
    padding-top: 1vh;
    background-color: var(--color-neutral-darkest2);
  `,
  ImageHeader: styled.div`
    width: 8vw;
    margin-left: 2rem;
    height: 4vh;
    margin-top: var(--spacing-quarck);
    background-image: url(${oliveirinhaProfilePic});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  `,
  MiddleContainer: styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 90vh;
    margin-top: 20px;
  `,
  LeftMenuContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 28vh;
    color: #fff;
    justify-content: flex-start;
    background-color: var(--color-neutral-darkest2);
    border-radius: 10px;

    @media (max-width: 600px) {
      width: 85vw;
      height: auto;
      padding-left: 0px;
    }
  `,
  UploadContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: var(--spacing-md);
    width: 55vw;
    height: 80vh;
    color: var(--color-neutral-lighest);
    background-color: var(--color-neutral-darkest2);
    border-radius: 10px;
  `,
  TitleUploadArea: styled.div`
    width: 51vw;
    height: 6vh;
    border-bottom: 1px solid #aba7a7;
    font-size: var(--font-size-nano);

    h1 {
      margin-left: var(--spacing-nano);
    }
  `,
  UploadArea: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #aba7a7;
  `,
  InputCommandArea: styled.div`
    width: 40vw;
    height: 10vh;
    margin-bottom: 2rem;
  `,

  UploadInputArea: styled.div`
    width: 40vw;
    height: 10vh;
    margin-bottom: 10rem;

    input[type="file"] {
      display: none;
    }
    button {
      font-size: 2rem;
      width: 40vw;
      height: 10vh;
      background-color: #333;
      color: #aba7a7;
      text-align: center;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 5px;
      border: 2px dashed #aba7a7;
    }
  `,

  TitleLeftMenu: styled.div`
    font-family: var(--font-family-primary: "Poppins", sans-serif);
    width: 25vw;
    height: 6vh;
    color: var(--color-neutral-lighest);
    font-size: var(--font-size-nano);
    border-bottom: 1px solid #aba7a7;

    h1 {
      margin-left: var(--spacing-nano);
    }
  `,
  InfoLeftMenu: styled.div`
    display: flex;
    font-family: var(--font-family-primary: "Poppins", sans-serif);
    width: 23vw;
    height: 2vh;

    span {
      margin-left: var(--spacing-nano);
      margin-top: 8px;
      color: #aba7a7;
      font-size: var(---font-size-xxxxs);
    }
  `,
};

export default S;
