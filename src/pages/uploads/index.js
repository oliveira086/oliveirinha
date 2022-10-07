import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../utils/windowDimensions";
import React from "react";
import Input from "../../components/atoms/Input";

import S from "./style";

function Uploads(props) {
  //-------------------------------------------
  //FUNÇAO FEITA PRA TESTAR O UPLOAD DO ARQUIVO

  let dimensions = useWindowDimensions();
  let navigate = useNavigate();

  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  //-------------------------------------------
  if (dimensions.width >= 830) {
    return (
      <>
        <S.Container>
          <S.Header>
            <S.ImageHeader onClick={() => navigate("/")} />
          </S.Header>

          <S.MiddleContainer>
            <S.LeftMenuContainer>
              <S.TitleLeftMenu>
                <h1>Upload de Áudios</h1>
              </S.TitleLeftMenu>
              <S.InfoLeftMenu>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummytext ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </span>
              </S.InfoLeftMenu>
            </S.LeftMenuContainer>

            <S.UploadContainer>
              <S.TitleUploadArea>
                <h1>Informações de Áudio</h1>
              </S.TitleUploadArea>

              <S.UploadArea>
                <S.InputCommandArea>
                  <span>Comando</span>
                  {/* AJUSTAR INPUT */}
                  <Input width={"40vw"} placeholder="!comando" />
                </S.InputCommandArea>
                {/* ----------------------------------------------------------- */}
                {/* ----------------------------------------------------------- */}
                {/* TRANSFORMAR EM COMPONENTE */}
                <S.UploadInputArea>
                  <span>Áudio</span>
                  <form>
                    <button onClick={handleClick}>+</button>
                    <input
                      ref={hiddenFileInput}
                      onChange={handleChange}
                      type="file"
                      name="upload-audio"
                      id="upload-audio"
                    ></input>
                  </form>
                </S.UploadInputArea>
                <S.UploadInputArea>
                  <span>Imagem</span>
                  <form>
                    <button onClick={handleClick}>+</button>
                    <input
                      ref={hiddenFileInput}
                      onChange={handleChange}
                      type="file"
                      name="upload-image"
                      id="upload-image"
                    ></input>
                  </form>
                </S.UploadInputArea>
                {/* ----------------------------------------------------------- */}
                {/* ----------------------------------------------------------- */}
              </S.UploadArea>
            </S.UploadContainer>
          </S.MiddleContainer>
        </S.Container>
      </>
    );
  }
}

export default Uploads;
