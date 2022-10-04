import { useNavigate } from "react-router-dom";
import useWindowDimensions from "../../utils/windowDimensions";

import S from "./style";

function Uploads() {
  let dimensions = useWindowDimensions();
  let navigate = useNavigate();

  if (dimensions.width >= 830) {
    return (
      <>
        <S.Container>
          <S.NavBar>
            <S.ImageNav onClick={() => navigate("/")} />
          </S.NavBar>
          <S.MiddleContainer>
            <S.LeftMenuContainer />
            <S.Feed />
          </S.MiddleContainer>
        </S.Container>
      </>
    );
  }
}

export default Uploads;
