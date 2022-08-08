import styled from "styled-components";

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 150vh;
    background-color: var(--color-neutral-darkest);
    /* justify-content: center; */
    align-items: center;
  `,
  TextContainer: styled.div`
    width: 50vw;
    height: 20vw;
    color: var(--color-neutral-lighest);
    font-size: var(--font-size-md);
    text-align: center;

    span {
      color: var(--color-secondary);
      font-size: var(--font-size-xxl);
    }

    h2 {
      font-size: var(--font-size-xxxxs);
      font-weight: var(--font-weight-regular);
      color: var(--color-primary-lightest);
    }

    @media(max-width: 600px) {
      width: 90vw;
      height: 95vw;
      font-size: var(--font-size-xxxs);
      text-align: center;

      span {
        color: var(--color-secondary);
        font-size: var(--font-size-md);
      }

      h2 {
        font-size: var(--font-size-xxxxs);
        font-weight: var(--font-weight-regular);
        color: var(--color-primary-lightest);
      }
    }

  `,

  WhatsAppButtonContainer: styled.div`
    display: flex;
    width: 100vw;
    height: 10vh;
    margin-top: var(--spacing-xxxs);
    justify-content: center;
    align-items: center;

    @media(max-width: 600px) {}
  `
}

export default S;
