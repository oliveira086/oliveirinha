import styled from "styled-components";

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #292B37;
    justify-content: center;
    align-items: center;

    h2 {
      color: #fff
    }
  `,
  HeaderContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 20vh;
    align-items: center;
    padding-top: 1rem;
  `,
  MiddleContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 76vh;
    background-color: #ff0000 ;
    align-items: center;
  `
}

export default S;
