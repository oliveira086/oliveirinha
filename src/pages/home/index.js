import Header from '../../components/molecules/Header';
import Footer from '../../components/molecules/Footer';
import S from './style';
import Button from '../../components/atoms/Button';

import { BsWhatsapp } from "react-icons/bs";
import { BiTable, BiVolumeFull, BiSticker, BiImage, BiMoviePlay, BiMoney } from "react-icons/bi";


function whatsAppClick () {
  window.location.href = 'https://wa.me/559988522522'
}

function Home () {
  return (
    <>
      <Header />
      <S.Container>
        <S.TextContainer>
          <h1>Alegria, diversão, games e tudo que há de bom! Assim nasceu o <span>Oliveirinha</span></h1>
          <h2>Adicione o Oliveirinha no seu WhatsApp</h2>
        </S.TextContainer>

        <S.WhatsAppButtonContainer>
          <Button
            icon={<BsWhatsapp size={25} />}
            label='Clique aqui e adicione'
            width='13rem'
            primary
            heigth={'6vh'}
            onClick={() => whatsAppClick()}
          />
        </S.WhatsAppButtonContainer>

        <S.FeaturesContainer>
          <S.FeatureItem>
            <S.FeatureItemIconContainer>
              <BiTable />
            </S.FeatureItemIconContainer>
            <S.FeatureItemTextContainer>
              <span id="item-title">Bingo</span>
              <span id="text-item">Com o Oliveirinha você poderá criar, jogar e participar de partidas de bingo totalmente online pelo WhatsApp.</span>
            </S.FeatureItemTextContainer>
          </S.FeatureItem>

          <S.FeatureItem>
            <S.FeatureItemIconContainer>
              <BiVolumeFull />
            </S.FeatureItemIconContainer>
            <S.FeatureItemTextContainer>
              <span id="item-title">Audios</span>
              <span id="text-item">Com o Oliveirinha você pode escolher diversos audios e enviar para seus amigos no WhatsApp.</span>
            </S.FeatureItemTextContainer>
          </S.FeatureItem>


          <S.FeatureItem>
            <S.FeatureItemIconContainer>
              <BiSticker />
            </S.FeatureItemIconContainer>
            <S.FeatureItemTextContainer>
              <span id="item-title">Figurinhas</span>
              <span id="text-item">Com o Oliveirinha você poderá criar figurinhas personalizadas e animadas para usar no seu WhatsApp.</span>
            </S.FeatureItemTextContainer>
          </S.FeatureItem>


          <S.FeatureItem>
            <S.FeatureItemIconContainer>
              <BiImage />
            </S.FeatureItemIconContainer>
            <S.FeatureItemTextContainer>
              <span id="item-title">Montagens</span>
              <span id="text-item">Com o Oliveirinha você pode criar montagem com a foto de perfil dos seus amigos.</span>
            </S.FeatureItemTextContainer>
          </S.FeatureItem>

          <S.FeatureItem>
            <S.FeatureItemIconContainer>
              <BiMoviePlay />
            </S.FeatureItemIconContainer>
            <S.FeatureItemTextContainer>
              <span id="item-title">Baixar videos</span>
              <span id="text-item">Com o Oliveirinha você pode baixar videos do youtube.</span>
            </S.FeatureItemTextContainer>
          </S.FeatureItem>

          <S.FeatureItem>
            <S.FeatureItemIconContainer>
              <BiMoney />
            </S.FeatureItemIconContainer>
            <S.FeatureItemTextContainer>
              <span id="item-title">Economia</span>
              <span id="text-item">Com o Oliveirinha você pode usar saldo real para participar de partidas de bingo, transferir e sacar seu dinheiro.</span>
            </S.FeatureItemTextContainer>
          </S.FeatureItem>

        </S.FeaturesContainer>

        <S.SecondTextContainer>
          <h2>Economia Real dentro do Bot</h2>
        </S.SecondTextContainer>

        <S.BankFeaturesContainer>
          <span id="bank-icon">🏛️</span><br></br>
          <span id="text-bank">
          Com o bot Oliveirinha, você poderá usar dinheiro real para diversas funcionalidades! Tais como, comprar cartela de bingo, transferências por pix e muito mais! Nunca foi tão fácil usar saldo real no WhatsApp, nos adicione agora e veja como funciona! 😄
          </span>
        </S.BankFeaturesContainer>

        <S.WhatsAppButtonContainer>
          <Button
            icon={<BsWhatsapp size={25} />}
            label='Clique aqui e adicione'
            width='13rem'
            primary
            heigth={'6vh'}
            onClick={() => whatsAppClick()}
          />
        </S.WhatsAppButtonContainer>

        <S.SecondTextContainer>
          <div id="separator"></div>
          <h2>Novidades e Atualizações</h2>
        </S.SecondTextContainer>

        <S.NewsContainer>
          <S.NewsItem>
            <span><b>Atualizações do BOT:</b></span><br></br>
            <span>✅ 02/08 - Inicio da construção do black jack</span><br/>
            <span>✅ 05/08 - Ajustado alguns bugs do bingo</span><br/>
            <span>✅ 05/08 - Criado a funcionalidade de depósito</span><br/>
            <span>✅ 05/08 - Criado a funcionalidade de saque</span><br/>
            <span>✅ 08/08 - Criação do site com algumas funcionalidades</span><br/>
          </S.NewsItem>
        </S.NewsContainer>

      </S.Container>
    </>
  )
}



export default Home;
