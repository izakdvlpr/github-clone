import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import GithubAPI from '@api/Github';
import ProfileData from '@components/ProfileData';
import RandomCalendar from '@components/RandomCalendar';
import RepoCard from '@components/RepoCard';
import Layout from '@layout';
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from '@styles/pages/user';
import { User, Repository } from '@types';

interface Data {
  user?: User;
  repositories?: Repository[];
  error?: string;
}

const UserPage: React.FC = () => {
  const { query } = useRouter();
  const { username = 'zevdvlpr' } = query;

  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      GithubAPI.getUser(username),
      GithubAPI.getRepositories(username),
    ]).then(async responses => {
      const [userResponse, repositoriesResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });

        return;
      }

      const user = userResponse.data;
      const repositories = repositoriesResponse.data;

      const shuffledRepositories = repositories.sort(() => 0.5 - Math.random());
      const slicedRepositories = shuffledRepositories.slice(0, 6);

      setData({
        user,
        repositories: slicedRepositories,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repositories) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />

      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  );

  return (
    <Layout>
      <Container>
        <Tab className="desktop">
          <div className="wrapper">
            <span className="offset" />

            <TabContent />
          </div>

          <span className="line" />
        </Tab>

        <Main>
          <LeftSide>
            <ProfileData
              username={data.user.login}
              name={data.user.name}
              avatarUrl={data.user.avatar_url}
              followers={data.user.followers}
              following={data.user.following}
              company={data.user.company}
              location={data.user.location}
              email={data.user.email}
              blog={data.user.blog}
            />
          </LeftSide>

          <RightSide>
            <Tab className="mobile">
              <TabContent />

              <span className="line" />
            </Tab>

            <Repos>
              <h2>Random repos</h2>

              <div>
                {data.repositories.map(item => (
                  <RepoCard
                    key={item.name}
                    username={item.owner.login}
                    reponame={item.name}
                    description={item.description}
                    language={item.language}
                    stars={item.starsgazers_count}
                    forks={item.forks}
                  />
                ))}
              </div>
            </Repos>

            <CalendarHeading>
              Random calendar (do not represent actual data)
            </CalendarHeading>

            <RandomCalendar />
          </RightSide>
        </Main>
      </Container>
    </Layout>
  );
};

export default UserPage;
