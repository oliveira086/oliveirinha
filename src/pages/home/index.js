import Header from '../../components/molecules/Header';
import Footer from '../../components/molecules/Footer';
import S from './style';
import Button from '../../components/atoms/Button';

import { BsWhatsapp } from "react-icons/bs";


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
          <S.FeatureItem></S.FeatureItem>
          <S.FeatureItem></S.FeatureItem>
          <S.FeatureItem></S.FeatureItem>

          <S.FeatureItem></S.FeatureItem>
          <S.FeatureItem></S.FeatureItem>
          <S.FeatureItem></S.FeatureItem>

        </S.FeaturesContainer>
        <S.SecondTextContainer>
          <h1>Economia real dentro do Bot</h1>
        </S.SecondTextContainer>
        <S.BankFeaturesContainer>
          <span id="bank-icon">🏛️</span><br></br><span id="text-bank">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </S.BankFeaturesContainer>

      </S.Container>
      <Footer />
    </>
  )
}



export default Home;
