import { useState, useEffect } from 'react';
import Cookies from "universal-cookie";
import MobileSocialHeader from '../../components/molecules/MobileSocialHeader';
import Post from '../../components/molecules/Post';

import useWindowDimensions from '../../utils/windowDimensions';
import { GetUserInformation } from "../../services/AuthService";
import { api } from '../../services/api';

import S from './style';

function Feed () {
  const dimensions = useWindowDimensions();

  const [profile, setProfile] = useState('');

  const cookies = new Cookies();
  const bearerToken = cookies.get('@oliveirinha:bearerToken');

  api.post('/auth/get-user-by-token', null, {
    headers: {
      "Authorization": `Bearer ${bearerToken}`,
    },
  }).then(response => {
    setProfile(response.data.body.profile_picture);
  })

  return (
    <S.Container>
      {
        dimensions.width < 800 ?
        <>
          <S.HeaderContainer>
            <MobileSocialHeader profile={profile} />
          </S.HeaderContainer>
          <S.MiddleContainer>
            <Post />
          </S.MiddleContainer>
          <MenuFooter />
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
