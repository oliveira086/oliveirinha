import styled from "styled-components";

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: auto;
    background-color: var(--color-neutral-darkest);
    align-items: center;

    @media(max-width: 600px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: auto;
      background-color: var(--color-neutral-darkest);
      align-items: center;
    }
  `,

  LeftMenuContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 15vw;
    height: 80vh;
    padding-left: var(--spacing-xxxl);
    color: #fff;
    justify-content: flex-start;

    @media(max-width: 600px) {
      width: 85vw;
      height: auto;
      padding-left: 0px;
    }
  `,

  ButtonsContainer: styled.div`
    @media(max-width: 600px) {
      display: flex;
      width: 90vw;
      height: auto;
      overflow-y: scroll;
    }
  `,

  MiddleContainer: styled.div`
    width: 60vw;
    height: 80vh;
    margin-top: var(--spacing-xxxs);

    @media(max-width: 600px) {
      display: flex;
      flex-direction: column;
      width: 85vw;
      height: auto;
      padding-left: var(--spacing-quarck);
      padding-bottom: var(--spacing-nano);
      margin: var(--spacing-quarck) var(--spacing-quarck);
    }
  `,

  ComandsContainer: styled.div`
    width: 60vw;
    height: 60vh;
    margin-top: var(--spacing-xxxs);
    padding-left: var(--spacing-quarck);
    padding-top: var(--spacing-quarck);
    overflow-y: scroll;

    @media(max-width: 600px) {
      width: 80vw;
    }
  `

}

export default S;
