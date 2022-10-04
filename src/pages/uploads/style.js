import styled from "styled-components";
import oliveirinhaProfilePic from "../../assets/images/oliveirinha.png";

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: var(--color-neutral-darkest);
    align-items: center;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: auto;
      background-color: var(--color-neutral-darkest);
      align-items: center;
    }
  `,
  NavBar: styled.div`
    display: flex;
    width: 80vw;
    height: 7vh;
    margin-top: 1%;
    border-radius: 10px;
    background-color: var(--color-neutral-darkest2);
    justify-content: space-around;
    align-items: center;
    padding-top: 1vh;
  `,
  ImageNav: styled.div`
    width: 8vw;
    height: 4vh;
    background-image: url(${oliveirinhaProfilePic});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    margin-top: var(--spacing-quarck);
  `,
  MiddleContainer: styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 90vh;
    margin-top: 20px;
  `,
  LeftMenuContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 28vh;
    padding-left: var(--spacing-xxxs);
    color: #fff;
    justify-content: flex-start;
    background-color: var(--color-neutral-darkest2);
    border-radius: 10px;

    @media (max-width: 600px) {
      width: 85vw;
      height: auto;
      padding-left: 0px;
    }
  `,
  Feed: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: var(--spacing-md);
    width: 50vw;
    height: 80vh;
    color: #fff;
    background-color: var(--color-neutral-darkest2);
    border-radius: 10px;
  `,
};

export default S;
