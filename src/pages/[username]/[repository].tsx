import Link from 'next/link';
import React from 'react';

import Layout from '@layout';
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from '@styles/pages/repository';

const RepositoryPage: React.FC = () => (
  <Layout>
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link href="/zevdvlpr">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="username">zevdvlpr</a>
        </Link>

        <span>/</span>

        <Link href="/zevdvlpr/twitter-clone">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="reponame">twitter-clone</a>
        </Link>
      </Breadcrumb>

      <p>Clone da interface do Twitter para fins de estudo.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href="https://github.com/zevdvlpr/twitter-clone">
        <GithubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  </Layout>
);

export default RepositoryPage;
