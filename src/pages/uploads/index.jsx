import { useNavigate } from "react-router-dom";
import MobileSocialHeader from '../../components/molecules/MobileSocialHeader';
import useWindowDimensions from '../../utils/windowDimensions';

import { SocialHeader } from "../../components/molecules/SocialHeader";
import { UploadForm } from "./UploadForm";

import * as S from './style';

function Uploads() {
  let dimensions = useWindowDimensions();
  let navigate = useNavigate();

  return (
    <>
      <S.Container>
        {dimensions.width < 800 ?
          <MobileSocialHeader />
        :
          <SocialHeader />
        }

        <S.Content>
          <section>
            <header>
              <h1>Upload de Áudios</h1>
            </header>

            <p>- Ao enviar um áudio, você tem a possibilidade de enviar gratuitamente uma figurinha. Para isto, basta enviar um arquivo de áudio e um arquivo de imagem nos respectivos campos.</p>
            <p>- Você tem direito a 3 áudios gratuitos.</p>
          </section>

          <section>
            <header>
              <p>Informações do Áudio</p>
            </header>
            <UploadForm />

          </section>
        </S.Content>
      </S.Container>
    </>
  );
}

export default Uploads;
