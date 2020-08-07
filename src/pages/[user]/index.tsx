import React from 'react';

import Layout from '@layout';
import { Container, Main, LeftSide, RightSide } from '@styles/pages/user';

import ProfileData from '@components/ProfileData'

const UserPage: React.FC = () => (
  <Layout>
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'zevdvlpr'}
            name={'Zev'}
            avatarUrl={'https://avatars1.githubusercontent.com/u/44278486?s=460&u=584d70d961664888b8ef3ab342b58083f341925d&v=4'}
            followers={887}
            following={7}
            company={'Rocketseat'}
            location={'Minas Gerais, Brazil'}
            email={'zevdvlpr@gmail.com'}
            blog={'https://zevdvlpr.ml'}
          />
        </LeftSide>
        <RightSide />
      </Main>
    </Container>
  </Layout>
);

export default UserPage;
