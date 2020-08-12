import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import Layout from '@layout';
import {
  Container,
  AlertContent,
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
    return (
      <Layout title="Error!" description={data?.error} >
        <Container>
          <AlertContent>
            <h1>{data?.error}</h1>
          </AlertContent>
        </Container>
      </Layout>
    );
  }

  if (!data?.repository) {
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

  return (
    <Layout
      title={`${username}/${repositoryname}`}
      description={data.repository?.description}
      image="https://i.pinimg.com/originals/b1/5e/ed/b15eedbdafbbdbca3249e3942f4faf3b.png"
      url={data.repository?.html_url}
    >
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
