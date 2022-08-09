import styled from "styled-components";

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 180vh;
    background-color: var(--color-neutral-darkest);
    /* justify-content: center; */
    align-items: center;

    @media(max-width: 600px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 280vh;
      background-color: var(--color-neutral-darkest);
      /* justify-content: center; */
      align-items: center;
    }
  `,
  TextContainer: styled.div`
    width: 50vw;
    height: 20vw;
    color: var(--color-neutral-lighest);
    font-size: var(--font-size-md);
    text-align: center;
    margin-top: var(--spacing-xxxxl);

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
      height: 20%;
      font-size: var(--font-size-xxxs);
      text-align: center;
      margin-top: var(--spacing-sm);

      span {
        color: var(--color-secondary);
        font-size: var(--font-size-md);
      }

      h2 {
        font-size: '.3rem';
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
    margin-bottom: var(--spacing-sm);
  `,

  FeaturesContainer: styled.div`
    display: flex;
    width: 80vw;
    height: 30vh;
    background-color: #464B4C;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-radius: 6px;

    @media(max-width: 600px) {
      width: 90vw;
      height: auto;
      padding: var(--spacing-nano);
    }

  `,

  FeatureItem: styled.div`
    width: 20vw;
    height: 10vh;
    background-color: #757D7F;
    margin: 5px;
    border-radius: 10px;

    @media(max-width: 600px) {
      width: 60vw;
      height: 10vh;
      margin-bottom: 10px;
    }
  `,

  SecondTextContainer: styled.div`
    display: flex;
    width: 50vw;
    height: 10vw;
    color: var(--color-neutral-lighest);
    font-size: var(--font-size-md);
    text-align: center;
    margin-top: var(--spacing-xxxs);
    justify-content: center;
    align-items: center;

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
      display: flex;
      width: 90vw;
      height: 15vh;
      font-size: var(--font-size-xxxs);
      text-align: center;
      margin-top: var(--spacing-xxxs);
      justify-content: center;
      align-items: center;

      span {
        color: var(--color-secondary);
        font-size: var(--font-size-md);
      }

      h2 {
        font-size: '.3rem';
        font-weight: var(--font-weight-regular);
        color: var(--color-primary-lightest);
      }
    }
  `,

  BankFeaturesContainer: styled.div`
    width: 76vw;
    height: auto;
    background-color: #2E174C;
    padding: var(--spacing-xxs);
    color: #fff;
    border-radius: 10px;

    @media(max-width: 600px) {
      padding: var(--spacing-xxxs);
    }

    #bank-icon {
      font-size: var(--font-size-xxl);
    }
  `

}

export default S;
