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
    height: auto;
    padding-left: var(--spacing-xxxl);
    color: #fff;

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
    height: 20vh;
    /* background-color: #ff0000; */

    @media(max-width: 600px) {
      display: flex;
      width: 85vw;
      height: auto;
      padding-left: var(--spacing-quarck);
      margin-top: var(--spacing-quarck);
    }
  `

}

export default S;
