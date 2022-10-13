import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  height: calc(80px - 1rem);
  background-color: var(--blue-700);
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;

  .logo {
    width: 150px;
  }
`;

export const Navbar = styled.nav`
  margin: 0 auto;
  height: 100%;
  display: flex;
  gap: .5rem;
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100px;
    color: var(--white);
    text-decoration: none;
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.2s ease;
    border-radius: 5px;
  
    &:hover, &.active {
      background-color: var(--gray-700);
    }

    p {
      margin: .25rem 0 0 0;
      text-align: center;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;

  .picture {
    background-image: ${(props) => `url(${props.src})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 999px;
    height: 55px;
    width: 55px;
  }

  .info {
    p {
      color: var(--white);
      margin: 0;

      &.name {
        font-weight: bold;
        letter-spacing: 1px;
      }
    }
  }
`;