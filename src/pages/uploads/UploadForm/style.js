import styled from 'styled-components';

export const Container = styled.form`
  border: var(--gray-100);

  margin: 1.25rem 2rem;

  .inputGroup {
    display: flex;
    flex-direction: column;
    position: relative;

    label {
      color: var(--gray-100);
      font-size: 1.25rem;
      font-weight: 500;
      margin-left: 0.5rem;
      margin-bottom: 0.625rem;
    }

    input {
      padding: 1rem 1.875rem;
      border-radius: 5px;
      background-color: var(--blue-800);
      border: none;
      outline: none;
      color: var(--gray-100);
      font-size: 1rem;
      font-weight: 600;
    }

    .error {
      color: #e83e3e;
    }

    &.command::after {
      content: "!";
      color: var(--white);
      font-weight: 600;
      font-size: 1.5rem;
      position: absolute;
      top: 50%;
      left: 15px;
    }
  }

  .error {
    color: #e83e3e;
  }

  .submitButton {
    background-color: var(--pink);
    width: 100%;
    border: none;
    border-radius: 5px;
    color: var(--white);
    font-weight: 600;
    letter-spacing: 1px;
    padding: 1rem 0;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: var(--pink-hovered);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;

      &:hover {
        background-color: var(--pink);
      }
    }
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 10% 1fr;
  grid-gap: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;

  background-color: var(--blue-800);
  color: var(--blue-200);
  font-size: 1rem;
  font-weight: 500;

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;