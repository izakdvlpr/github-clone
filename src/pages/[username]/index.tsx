import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import ProfileData from '@components/ProfileData';
import RandomCalendar from '@components/RandomCalendar';
import RepoCard from '@components/RepoCard';
import Layout from '@layout';
import {
  Container,
  Main,
  AlertContent,
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
  const router = useRouter();
  const { username = 'izakdvlpr' } = router.query;

  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async responses => {
      const [userResponse, repositoriesResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });

        return;
      }

      const user = await userResponse.json();
      const repositories = await repositoriesResponse.json();

      const shuffledRepositories = repositories.sort(() => 0.5 - Math.random());
      const slicedRepositories = shuffledRepositories.slice(0, 6);

      setData({
        user,
        repositories: slicedRepositories,
      });
    });
  }, [username]);

  if (data?.error) {
    return (
      <Layout title="Error!">
        <Container>
          <AlertContent>
            <h1>{data?.error}</h1>
          </AlertContent>
        </Container>
      </Layout>
    );
  }

  if (!data?.user || !data?.repositories) {
    return (
      <Layout title="Loading...">
        <Container>
          <AlertContent>
            <ReactLoading
              type="bubbles"
              color="#e1e4e8"
              height="5%"
              width="5%"
            />
          </AlertContent>
        </Container>
      </Layout>
    );
  }

  const TabContent = () => (
    <div className="content">
      <RepoIcon />

      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
    </div>
  );

  return (
    <Layout title={`${username} (${data.user?.name})`}>
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
              username={data.user?.login}
              name={data.user?.name}
              avatarUrl={data.user?.avatar_url}
              followers={data.user?.followers}
              following={data.user?.following}
              company={data.user?.company}
              location={data.user?.location}
              email={data.user?.email}
              blog={data.user?.blog}
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
                {data.repositories?.map(item => (
                  <RepoCard
                    key={item.name}
                    username={item.owner.login}
                    reponame={item.name}
                    description={item.description}
                    language={item.language}
                    stars={item.stargazers_count}
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
