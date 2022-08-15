import styled from "styled-components";

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
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

    @media(max-width: 800px) {
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

    @media(min-width: 800px) {
      width: 90vw;
      height: 20%;
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
    height: auto;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: var(--spacing-xxxs);
    border-top: 1px solid #fff;

    @media(max-width: 800px) {
      display: flex;
      width: 80vw;
      height: auto;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  `,

  FeatureItem: styled.div`
    display: flex;
    width: 20vw;
    height: 10vh;
    background-color: #232526;
    margin: 5px;
    border-radius: 10px;
    justify-content: space-between;
    color: #F2F8FA;
    padding: var(--spacing-xxxs);

    @media(max-width: 1800px) {
      flex-direction: column;
      width: 20vw;
      height: auto;
      margin-bottom: 10px;
      justify-content: center;
      align-items: center;
      padding: var(--spacing-nano);
    }

    @media(max-width: 550px) {
      display: flex;
      width: 60vw;
      height: 22vh;
      margin: 5px;
      border-radius: 10px;
      justify-content: space-between;
    }
  `,

  FeatureItemIconContainer: styled.div`
    display: flex;
    width: 10vh;
    height: 10vh;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 56px;
    }
  `,

  FeatureItemTextContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 14vw;
    height: 10vh;

    @media(max-width: 1800px) {
      width: 20vw;
      height: auto;
    }

    @media(max-width: 550px) {
      width: 60vw;
      height: auto;
    }

    #item-title {
      font-weight: var(--font-weight-bold);
      font-size: var(--font-size-xxs);
      margin-bottom: var(--spacing-quarck);
    }

    #text-item {
      font-weight: var(--font-weight-light);
      font-size: 14px;
    }
  `,

  SecondTextContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 10vw;
    color: var(--color-neutral-lighest);
    font-size: var(--font-size-md);
    text-align: center;
    margin-top: var(--spacing-xxxs);
    justify-content: center;
    align-items: center;

    #separator {
      width: 80vw;
      border-top: 1px solid #fff;
    }

    span {
      color: var(--color-secondary);
      font-size: var(--font-size-xxl);
    }

    h2 {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
      color: #fff;
    }

    @media(max-width: 800px) {
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
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-bold);
        color: #fff;
      }
    }

    @media(min-width: 801px) {
      display: flex;
      width: 90vw;
      height: 20vh;
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
        font-size: var(--font-size-lg);
        font-weight: var(--font-weight-bold);
        color: #fff;
      }
    }
  `,

  BankFeaturesContainer: styled.div`
    width: 80vw;
    height: auto;
    background-color: #2E174C;
    padding: var(--spacing-xxs);
    color: #fff;
    border-radius: 10px;
    font-size: var(--font-size-xs);

    @media(max-width: 800px) {
      padding: var(--spacing-xxxs);
      font-size: var(--font-size-xxxxs);
    }

    #bank-icon {
      font-size: var(--font-size-xxl);
    }
  `,

  PlansContainer: styled.div`
    display: flex;
    width: 84vw;
    height: 64vh;
    justify-content: space-between;

    @media(max-width: 800px) {
      display: flex;
      height: 260vh;
      flex-direction: column;
      justify-content: space-around;
    }

    @media only screen and (max-width: 500px) and (min-width: 400px)  {
      height: 260vh;
    }

    @media only screen and (max-width: 399px) and (min-width: 300px)  {
      height: 320vh;
    }
  `,

  PlansItems: styled.div`
    width: 22vw;
    height: 62vh;
    background-color: ${(props) => props.background};
    border-radius: var(--border-radius-xxs);
    padding: var(--spacing-nano) 0 var(--spacing-nano) var(--spacing-nano);

    @media(max-width: 800px) {
      width: 80vw;
      height: auto;
    }
  `,

  PlansHeader: styled.div`
    display: flex;
    flex-direction: column;
    width: 22vw;
    height: 16vh;

    #price-plan-value {
      font-size: var(--font-size-lg);
      font-weight: var(--font-weight-bold);
    }

    #plan-price {
      display: flex;
      align-items: baseline;
    }

    @media(max-width: 800px) {
      width: 80vw;
      height: auto;

      #price-plan-value {
        font-size: var(--font-size-xxs);
      }

      #text-description-plan {
        font-size: 14px;
      }
    }
  `,

  FunctionsPlans: styled.div`
    display: flex;
    flex-direction: column;
    width: 22vw;
    height: auto;
    margin-top: var(--spacing-xxxs);

    span {
      display: flex;
      align-items: center;
    }
  `,

  FunctionsItems: styled.div`
    display: flex;
    width: 22vw;
    height: auto;
    margin-bottom: var(--spacing-quarck);

    #funtion-items-icon {
      display: flex;
      width: 2vw;
      height: 2vw;
      align-items: center;
    }

    @media(max-width: 800px) {
      width: 80vw;
      span {
        font-size: 16px;
      }

      #funtion-items-icon {
        display: flex;
        width: 8vw;
        height: 10vw;
        align-items: center;
        margin-right: var(--spacing-quarck);
      }

    }
  `,

  NewsContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: auto;
    background-color: #4D7AFF;
    justify-content: center;
    border-radius: 6px;
    padding: var(--spacing-xxxs) var(--spacing-xxxs);
    margin-bottom: var(--spacing-sm);
  `,

  NewsItem: styled.div`
    width: 75vw;
    height: auto;
    /* background-color: #E5EBFF; */
    color: #fff;
    margin-bottom: var(--spacing-nano);
    padding: var(--spacing-nano);
  `
}

export default S;
