import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../utils/windowDimensions";

import { SocialHeader } from "../../components/molecules/SocialHeader";
import { UploadForm } from "./UploadForm";

import * as S from './style';

function Uploads() {
  let dimensions = useWindowDimensions();
  let navigate = useNavigate();

  return (
    <>
      <S.Container>
        <SocialHeader />

        <S.Content>
          <section>
            <header>
              <h1>Upload de Áudios</h1>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non exercitationem modi quaerat fugit eaque voluptatum officiis et, aliquid quos impedit saepe ducimus velit commodi cumque magni. Et ut animi enim.</p>
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
