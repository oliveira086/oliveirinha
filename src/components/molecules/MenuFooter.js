import styled from "styled-components";
import { House, MusicNotesSimple, Sticker, ChatCircle, GameController } from "phosphor-react";

function MenuFooter(){
  return(
    <S.ContainerFooter>
      <S.ContainerButtons>

        <S.FooterButton>
          <House size={30} color="#fff" />
          <span>Home</span>
        </S.FooterButton>
        
         <S.FooterButton>
          <MusicNotesSimple size={30} color="#fff" />
          <span>Áudios</span>
        </S.FooterButton>

        <S.FooterButton>
          <Sticker size={30} color="#fff" />
          <span>Stickers</span>
        </S.FooterButton>

        <S.FooterButton>
          <ChatCircle size={30} color="#fff" />
          <span>Chat</span>
        </S.FooterButton>

        <S.FooterButton>
          <GameController size={30} color="#fff" />
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

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-700:);
  `,
  ContainerButtons: styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    height: 100%;

    
  `,
  FooterButton: styled.button`
    width: 15vw;
    height: 100%;
    color: #fff;
    background: transparent;
    border: none;
  `,
}


export default MenuFooter;