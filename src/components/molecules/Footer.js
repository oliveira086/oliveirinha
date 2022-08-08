import styled from "styled-components";


function Footer () {
  return (
    <>
      <S.Container></S.Container>
    </>
  )
}

const S = {
  Container: styled.section`
    width: 99vw;
    height: 30vh;
    background-color: var(--color-neutral-dark);
  `
}


export default Footer;
