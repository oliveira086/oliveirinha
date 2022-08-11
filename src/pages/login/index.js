import Header from "../../components/molecules/Header";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import useWindowDimensions from '../../utils/windowDimensions';

import S from "./style";

function Login () {
  let dimensions = useWindowDimensions();

  return (
    <>
      <Header />
      <S.Container id="input-container">
        <S.LeftContainer>
          <S.AuthContainer>
            <h1>Entrar</h1>
            { dimensions.width < 800 ?
              (
                <div>
                  <Input width={'15rem'} height={'2rem'} placeholder="Telefone" />
                  <Input width={'15rem'} height={'2rem'} placeholder="Senha" password />
                  <Button width={'12.3rem'} label="Entrar" primary/>
                  <span>Ainda não tem conta? <b>Cadastra-se</b></span>
                </div>
              ) :
              <div>
                <Input width={'18rem'} placeholder="Telefone" />
                <Input width={'18rem'} placeholder="Senha" password/>
                <Button width={'19.3rem'} label="Entrar" primary/>

                <span>Ainda não tem conta? <b>Cadastra-se</b></span>
              </div>
            }

          </S.AuthContainer>

        </S.LeftContainer>

        { dimensions.width < 800 ?
          (
            <></>
          ) :
          <S.RigthContainer>
            <S.ShadowContainer />
            <S.ImageContainer />
          </S.RigthContainer>
        }

      </S.Container>
    </>
  )
}

export default Login;
