import Link from 'next/link';
import React from 'react';

import {
  Container,
  TopSide,
  RepoIcon,
  BotSide,
  StarIcon,
  ForkIcon,
} from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCardComponent: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link href={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </TopSide>

      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language ? `${language.charAt(0).toUpperCase() + language.slice(1)}` : 'none'}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
};

export default RepoCardComponent;
