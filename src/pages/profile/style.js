import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  padding: 1rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background-color: var(--neutral-12);
  border-radius: 16px;
  margin-bottom: 20px;

  .infos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--neutral-02);

      strong {
        font-weight: 600;
        font-size: 1.125rem;
        margin-bottom: 1rem;
      }
      
      p {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 400;
      }
    }
  }
`;

export const Infos = styled.section`
  header {
    strong {
      display: flex;
      align-items: center;
      color: var(--neutral-01);

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--pink-08);
        width: 30px;
        height: 30px;
        border-radius: 999px;
        margin-left: 1rem;
      }
    }

    p {
      margin: 0;
      color: var(--neutral-08);
    }
  }

  .description {
    margin-top: 20px;

    span {
      color: var(--neutral-01);
    }
    
    .more {
      color: var(--pink-08);
      text-decoration: underline;
      margin-left: 5px;
    }
  }

  footer {
    margin-top: 20px;

    .buttons {
      display: grid;
      grid-template-columns: 4.5fr 4.5fr 1fr;
      grid-gap: 10px;

      button {
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 1.125rem;
        padding: 10px 0;
      }
      
      .primary {
        background-color: var(--pink-08);
        color: var(--neutral-01);
        
      }
      
      .secondary {
        background-color: transparent;
        border: 2px solid var(--neutral-01);
        color: var(--neutral-01);

        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .friends {
      margin-top: 20px;
      color: var(--neutral-01);
      display: flex;
      align-items: center;

      .photos {
        span {
          &:nth-child(2) {
            margin-left: -12px;
          }

          &:nth-child(3) {
            margin-left: -12px;
          }
        }
      }

      p {
        margin-left: 8px;
      }
    }
  }
`;

export const Body = styled.main`
  margin-top: 32px;
`;