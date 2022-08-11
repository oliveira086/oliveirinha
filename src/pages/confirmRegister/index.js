import { useNavigate } from "react-router-dom";

import S from "./style";
import Button from "../../components/atoms/Button";

import useWindowDimensions from '../../utils/windowDimensions';

function ConfirmRegister () {
  const dimensions = useWindowDimensions();
  const navigate = useNavigate();

  return (
    <>
      <S.Container>
        <S.ImageContainer></S.ImageContainer>
        { dimensions.width < 800 ?
          <Button label="Ir para Home" width={'16rem'} heigth={'4rem'} onClick={() => navigate('/login')}></Button>
          :
          <Button label="Ir para Home" width={'26rem'} heigth={'4rem'} onClick={() => navigate('/login')}></Button>
        }
      </S.Container>
    </>
  )
}

export default ConfirmRegister;
