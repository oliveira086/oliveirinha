import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - calc(80px - 1rem)); // 100vh - navbar height
  max-width: 100vw;
  padding: 2rem;
  background-color: var(--blue-900);
`;

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2.5rem;
  margin-top: 2.5rem;
  min-width: 90vw;
  max-width: 1120px;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }

  section {
    background-color: var(--blue-700);
    border-radius: 10px;
    height: fit-content;
    max-width: 90vw;

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

  audio::-webkit-media-controls-enclosure {
    background-color: var(--blue-200);
  }

  audio::-webkit-media-controls-timeline-container {
    background-color: white;
  }

  audio::-webkit-media-controls-current-time-display {
    color: var(--white);
    text-shadow: none;
  }

  audio::-webkit-media-controls-time-remaining-display {
    color: var(--white);
    text-shadow: none;
  }

  audio::-webkit-media-controls-timeline {
    box-shadow: none;
    text-shadow: none;
  }
`;

export const Audios = styled.div`
  padding: 1.25rem 2rem;
`;

export const AddAudioButton = styled.button`
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
  text-transform: uppercase;

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
`;

export const AudiosList = styled.div`
  width: 100%;
  /* border-collapse: separate;
  border-spacing: 0 15px;
  table-layout: fixed; */
  margin-top: 1.5rem;

  p {
    text-align: center;
  }

  tr {
    th {
      color: var(--white);
      font-weight: 500;
      font-size: 1.25rem;
      padding-bottom: 2rem;
    }

    td {
      vertical-align: middle;
      text-align: center;
      padding-bottom: 1rem;

      span {
        color: var(--gray-100);
        font-weight: 500;
        font-size: 1.25rem;
      }

      .deleteButton {
        color: #e57878;
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
      }

      audio {
        width: 80%;
        max-width: 300px;
      }
    }
  }
`;