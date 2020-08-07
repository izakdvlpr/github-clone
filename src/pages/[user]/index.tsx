import React from 'react';

import ProfileData from '@components/ProfileData';
import RepoCard from '@components/RepoCard';
import Layout from '@layout';
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
} from '@styles/pages/user';

const UserPage: React.FC = () => (
  <Layout>
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username="zevdvlpr"
            name="Zev"
            avatarUrl="https://avatars1.githubusercontent.com/u/44278486?s=460&u=584d70d961664888b8ef3ab342b58083f341925d&v=4"
            followers={887}
            following={7}
            company="Rocketseat"
            location="Minas Gerais, Brazil"
            email="zevdvlpr@gmail.com"
            blog="https://zevdvlpr.ml"
          />
        </LeftSide>
        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username="zevdvlpr"
                  reponame="twitter-clone"
                  description="Clone da interface do Twitter para fins de estudo."
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  </Layout>
);

export default UserPage;
