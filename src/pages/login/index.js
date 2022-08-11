import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/molecules/Header";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import useWindowDimensions from '../../utils/windowDimensions';

import { AuthUser } from '../../services/AuthService';

import S from "./style";

function Login () {
  let dimensions = useWindowDimensions();
  let navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [phrase, setPhrase] = useState('');

  const handleSubmit = async () => {
    let object = {
      user_token_id: phone,
      phrase: phrase
    }

    let response = await AuthUser(object);
    // console.log(response);
  }

  return (
    <>
      <Header />
      <S.Container id="input-container">
        <S.LeftContainer>
          <S.AuthContainer>
            <h1>Entrar</h1>
            { dimensions.width < 800 ?
              (
                <div id="container-inputs">
                  <Input width={'15rem'} height={'2rem'} placeholder="Telefone ex: 551199999999" value={phone} onChange={e => setPhone(e.target.value)} />
                  <Input width={'15rem'} height={'2rem'} placeholder="Senha" password value={phrase} onChange={e => setPhrase(e.target.value)} />
                  <S.RecoveryPassword>
                    <span>Esqueceu a senha?</span>
                  </S.RecoveryPassword>
                  <Button width={'12.3rem'} label="Entrar" primary onClick={() => handleSubmit()} />
                  <span>Ainda não tem conta? <b onClick={() => navigate('/register')}>Cadastra-se</b></span>
                </div>
              ) :
              <div id="container-inputs">
                <Input width={'19rem'} placeholder="Telefone ex: 551199999999" value={phone} onChange={e => setPhone(e.target.value)}/>
                <Input width={'19rem'} placeholder="Senha" password value={phrase} onChange={e => setPhrase(e.target.value)}/>
                <Button width={'19.3rem'} label="Entrar" primary onClick={() => handleSubmit()} />

                <span>Ainda não tem conta? <b onClick={() => navigate('/register')}>Cadastra-se</b></span>
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
