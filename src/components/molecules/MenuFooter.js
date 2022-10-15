import styled from "styled-components";
import {  useNavigate } from "react-router-dom";
import { House, MusicNotesSimple, Sticker, ChatCircle, GameController } from "phosphor-react";



function MenuFooter(){
  let navigate = useNavigate();

  
  return(
    <S.ContainerFooter>
      <S.ContainerButtons>

        <S.FooterButton >
          <House size={30}/>
          <span>Home</span>
        </S.FooterButton>

         <S.FooterButton onClick={() => {navigate('/audios')}}>
          <MusicNotesSimple size={30} />
          <span>Áudios</span>
        </S.FooterButton>

        <S.FooterButton>
          <Sticker size={30} />
          <span>Stickers</span>
        </S.FooterButton>

        <S.FooterButton>
          <ChatCircle size={30}/>
          <span>Chat</span>
        </S.FooterButton>

        <S.FooterButton>
          <GameController size={30}/>
          <span>Jogos</span>
        </S.FooterButton>


      </S.ContainerButtons>
    </S.ContainerFooter>
  )



}

const S = {
  
  ContainerFooter: styled.div`
    width: 100vw;
    height: 8vh;

    position: fixed;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-700);
    
  `,
  ContainerButtons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 100%;


  `,
  FooterButton: styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 15vw;
    height: 100%;
    color: #8D8D99;
    background: transparent;
    border: none;
  `,
}


export default MenuFooter;
