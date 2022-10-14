
import MobileSocialHeader from '../../components/molecules/MobileSocialHeader';
import Post from '../../components/molecules/Post';

import useWindowDimensions from '../../utils/windowDimensions';

import S from './style';

function Feed () {
  const dimensions = useWindowDimensions();

  return (
    <S.Container>
      {
        dimensions.width < 800 ?
        <>
          <S.HeaderContainer>
            <MobileSocialHeader />
          </S.HeaderContainer>
          <S.MiddleContainer>
            <Post />

          </S.MiddleContainer>
        </>
        :
        <>
          <h2>Essa tela ainda não esta pronta para Computador</h2>
        </>
      }
    </S.Container>
  )
}

export default Feed;
