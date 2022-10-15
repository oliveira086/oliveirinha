import styled from "styled-components";
import { HeartStraight, Chat, PaperPlaneTilt, DotsThreeOutline } from "phosphor-react";

const profilePic = "https://s3.us-east-1.wasabisys.com/oliveirinha/profile-pictures/298267294_365816649089795_7023391953308276395_n.jpg";

// const imagepost=
  // "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hfGVufDB8fDB8fA%3D%3D&w=1000&q=80";

const imagepost = "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80" 

function Post() {
  return (
    <S.ContainerPost>
      <S.HeaderPost>
        <S.Profile src={profilePic}>
          <div className="picture"></div>
          <div className="info">
            <p className="name">Oliveirinha</p>
            <p className="user">@oliveirinha</p>
          </div>
        </S.Profile>
        <DotsThreeOutline size={24} color="#fff" weight="fill"/>
      </S.HeaderPost>

      <S.ImageContainer src={imagepost}>
        <div className="image"></div>
      </S.ImageContainer>

      <S.DescriptionContainer>
        <span id="user">@oliveirinha </span>
        <span>
          Sejam bem vindos a nossa comunidade, aqui o foco é a diversão! Aguardem novas atualizações
        </span>
      </S.DescriptionContainer>

      <S.ButtonsContainer>
        <div className="reactions_buttons">
          <button className="like_button">
              <HeartStraight color="var(--pink)" size={24} weight="fill" />
          </button>

          <span className="likes_count">650</span>
          <button className="comments_button">
              <Chat color="#A3ABCC" size={24} />
          </button>

          <span className="comments_count">0</span>
        </div>

        <span>
          <button className="share_button">
            <PaperPlaneTilt color="#A3ABCC" size={24} />
          </button>
        </span>
      </S.ButtonsContainer>

    </S.ContainerPost>
  );
}

const S = {
  ContainerPost: styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 70vh;
    background-color: var(--blue-900);
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    margin-bottom: 2rem;
  `,
  HeaderPost: styled.div`
    width: 80vw;
    height: 6vh;
    margin-bottom: 1rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center
  `,

  ImageContainer: styled.div`
    width: 80vw;
    height: 60vh;
    display: flex;
    align-items: center;
    gap: 1rem;

    .image {
      height: 100%;
      width: 100%;
      background-image: ${(props) => `url(${props.src})`};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 6px;
      margin-bottom: 1rem;
    }
  `,
  DescriptionContainer: styled.div`
    width: 80vw;
    height: 10vh;
    margin-bottom: 1rem;
    overflow: hidden;
    font-size: 16px;
    line-height: 22px;

    #user {
      color: #8099FF;
    }

    span {
      color: #fff;
    }
  `,
  ButtonsContainer: styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
    width: 80vw;
    height: 8vh;

    .reactions_buttons {
      display: flex;
      align-items: center;

      .like_button {
        background: none;
        border: none;
        margin-left: -8px;
        height: auto;
      }
      .likes_count {
        margin-right: 3rem;
        display: flex;

        font-size: 16px;
        color: var(--pink);
      }

      .comments_button {
        background: none;
        border: none;
      }
      .comments_count {
          font-size: 16px;
          color: #a3abcc;
      }
    }

    .share_button {
      background: none;
      border: none;
    }
  `,

  Profile: styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;

    .picture {
      background-image: ${(props) => `url(${props.src})`};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 999px;
      height: 48px;
      width: 48px;
    }

    .info {
      p {
        color: #fff;
        margin: 0;

        &.name {
          font-weight: bold;
          letter-spacing: 1px;
        }
        &.user {
          color: #75757f;
          letter-spacing: 1px;
        }
      }
    }
  `,
};

export default Post;
