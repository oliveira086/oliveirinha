import styled from "styled-components"

function ComandItem (props) {
  return (
    <>
      <S.Container>
        <S.ComandNameContainer>
          <span>{props.command}</span>
        </S.ComandNameContainer>
        <S.DescriptionContainer>
          <span>{props.description}</span>
        </S.DescriptionContainer>
      </S.Container>
    </>
  );
;}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 58vw;
    height: 16vh;
    background-color: #333;
    margin-bottom: var(--spacing-nano);
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    padding-bottom: var(--spacing-nano);

    @media(max-width: 600px) {
      width: 76vw;
    }
  `,

  ComandNameContainer: styled.div`
    width: 56vw;
    height: 4vh;
    padding-left: var(--spacing-nano);
    padding-top: var(--spacing-nano);

    span {
      color: #fff;
      font-weight: var(--font-weight-bold);
    }

    @media(max-width: 600px) {
      width: 68vw;
    }
  `,
  DescriptionContainer: styled.div`
    width: 56vw;
    height: 8vh;
    background-color: #464B4C;
    border-radius: 6px;
    padding-left: var(--spacing-nano);
    padding-top: var(--spacing-nano);

    span {
      color: #fff;
      font-weight: var(--font-weight-regular);
    }

    @media(max-width: 600px) {
      width: 68vw;
    }
  `
};

export default ComandItem;
