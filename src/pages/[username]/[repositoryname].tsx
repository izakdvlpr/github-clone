import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import Layout from '@layout';
import {
  Container,
  LoadingContent,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from '@styles/pages/repository';
import { Repository } from '@types';

interface Data {
  repository?: Repository;
  error?: string;
}

const RepositoryPage: React.FC = () => {
  const router = useRouter();
  const { username, repositoryname } = router.query;
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repositoryname}`).then(
      async response => {
        setData(
          response.status === 404
            ? { error: 'Repository not found!' }
            : { repository: await response.json() },
        );
      },
    );
  }, [repositoryname, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.repository) {
    return (
      <Layout>
        <Container>
          <LoadingContent>
            <ReactLoading
              type="bubbles"
              color="#e1e4e8"
              height="5%"
              width="5%"
            />
          </LoadingContent>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <RepoIcon />

          <Link href={`/${username}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="username">{username}</a>
          </Link>

          <span>/</span>

          <Link href={`/${username}/${repositoryname}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="reponame">{repositoryname}</a>
          </Link>
        </Breadcrumb>

        <p>{data.repository?.description}</p>

        <Stats>
          <li>
            <StarIcon />
            <b>{data.repository?.stargazers_count}</b>
            <span>stars</span>
          </li>
          <li>
            <ForkIcon />
            <b>{data.repository?.forks}</b>
            <span>forks</span>
          </li>
        </Stats>

        <LinkButton href={data.repository?.html_url}>
          <GithubIcon />
          <span>View on Github</span>
        </LinkButton>
      </Container>
    </Layout>
  );
};

export default RepositoryPage;
