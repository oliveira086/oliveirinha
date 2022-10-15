import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - calc(80px - 1rem));  // 100vh - navbar height
  max-width: 100vw;
  padding: 2rem;
  background-color: var(--blue-900);
  align-items: center;
`;

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2.5rem;
  margin-top: 2.5rem;
  min-width: 90vw;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }

  section {
    background-color: var(--blue-700);
    border-radius: 10px;
    height: fit-content;

    header {
      padding: 1.5rem 2rem;
      border-bottom: 1px solid var(--gray-700);

      h1, h2, h3, h4, h5, h6, p, span {
        color: var(--white);
        margin: 0;
        font-size: 1.25rem;
        font-weight: 500;
      }
    }

    p {
      color: var(--gray-100);
      margin: 1rem 2rem;
      font-weight: 500;
    }
  }
`;
