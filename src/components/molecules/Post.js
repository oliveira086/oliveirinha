import styled from "styled-components";


function Post () {
  return (
    <S.ContainerPost>
      <S.HeaderPost></S.HeaderPost>
      <S.ImageContainer></S.ImageContainer>
      <S.DescriptionContainer></S.DescriptionContainer>
      <S.ButtonsContainer></S.ButtonsContainer>

    </S.ContainerPost>
  )
}

const S = {
  ContainerPost: styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 60vh;
    background-color: #1B1D29;
    border-radius: 6px;
    justify-content: center;
    align-items: center;

  `,
  HeaderPost: styled.div`
    width: 80vw;
    height: 6vh;
    background-color: #999;
    margin-bottom: 1rem;
  `,

  ImageContainer: styled.div`
    width: 80vw;
    height: 30vh;
    background-color: #fff;
    border-radius: 6px;
    margin-bottom: 1rem;
  `,
  DescriptionContainer: styled.div`
    width: 80vw;
    height: 10vh;
    background-color: #f0f ;
    margin-bottom: 1rem;
  `,
  ButtonsContainer: styled.div`
    width: 80vw;
    height: 5vh;
    background-color: #999 ;
  `
}


export default Post;
