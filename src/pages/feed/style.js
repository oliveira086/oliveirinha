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
    height: 14vh;
    align-items: center;
    padding-top: 1rem;
  `,
  MiddleContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 76vh;
    align-items: center;
    overflow-x: scroll;
  `
}

export default S;
