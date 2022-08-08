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
      </S.Container>
      <Footer />
    </>
  )
}



export default Home;
