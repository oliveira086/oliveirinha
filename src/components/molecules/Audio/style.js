import styled, { css } from 'styled-components';
import src from '../../../assets/images/audio-wave.png'

export const Container = styled.div`
  background-color: var(--blue-900);
  border-radius: 8px;
  padding: 0.5rem 0.75rem 0.5rem 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${props =>
    props.pinkDetail &&
    css`
      &::before {
        content: '';
        height: 100%;
        width: 5px;
        background-color: var(--pink);
        position: absolute;
        left: 0;
        border-radius: 8px 0 0 8px;
    `}
  }

  .infos {
    display: flex;
    align-items: center;

    .img {
      background-image: ${props => !props.src ? `url(${props.src})` : `url(${src})`};
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      height: 60px;
      width: 60px;
    }

    p {
      color: var(--white);
      margin: 0;
      margin-left: 1rem;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .delete {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      background-color: #232733;
      border: none;
      border-radius: 99px;
      margin-right: 0.75rem;
      cursor: pointer;
    }
    
    .togglePlay {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--pink);
      border: none;
      border-radius: 99px;
      cursor: pointer;
    }
  }
`;