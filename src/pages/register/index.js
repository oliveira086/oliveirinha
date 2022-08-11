import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "../../components/molecules/Header";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/Button";
import useWindowDimensions from '../../utils/windowDimensions';

import { RegisterUser } from '../../services/AuthService';

import S from "./style";

function Register () {
  const dimensions = useWindowDimensions();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [phrase, setPhrase] = useState('');


  const handleSubmit = async () => {

    if(phone.length > 11) {
      let object = {
        name: name,
        user_token_id: phone,
        email: email,
        phrase: phrase
      }

      let response = await RegisterUser(object);

      if(response == 401) {
        toast.info('Usuário já cadastrado!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        navigate('/confirm-register');
      }
    }
    else {
      if(!phone.startsWith('55')) {
        toast.info('Seu telefone é do Brasil?!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  }

  return (
    <>
      <Header />
      <S.Container id="input-container">
        <ToastContainer />
        <S.LeftContainer>
          <S.AuthContainer>
            <h1>Cadastre-se</h1>
            { dimensions.width < 800 ?
              (
                <div id='container-inputs'>
                  <Input width={'18rem'} height={'2rem'} placeholder="Nome" onChange={e => setName(e.target.value)}/>
                  <Input width={'18rem'} height={'2rem'} placeholder="Telefone ex: 551199999999" onChange={e => setPhone(e.target.value)}/>
                  <Input width={'18rem'} height={'2rem'} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                  <Input width={'18rem'} height={'2rem'} placeholder="Senha" password onChange={e => setPhrase(e.target.value)}/>
                  <Button width={'12.3rem'} label="Cadastrar" primary onClick={() => handleSubmit()}/>

                  <span>Já tem conta? <b onClick={() => navigate('/login')}>Entrar</b></span>
                </div>
              ) :
              <div id='container-inputs'>
                <Input width={'18rem'} placeholder="Nome" onChange={e => setName(e.target.value)}/>
                <Input width={'18rem'} placeholder="Telefone ex: 551199999999" onChange={e => setPhone(e.target.value)} />
                <Input width={'18rem'} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <Input width={'18rem'} placeholder="Senha" password onChange={e => setPhrase(e.target.value)}/>
                <Button width={'19.3rem'} label="Cadastrar" primary onClick={() => handleSubmit()}/>

                <span>Já tem conta? <b onClick={() => navigate('/login')}>Entrar</b></span>
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

export default Register;
