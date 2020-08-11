import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  
  cursor: pointer;
  
  transition: opacity .2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background-color: var(--search);
    color: var(--primary);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    
    &::placeholder {
      color: var(--search-placeholder)
    }

    &:focus {
      width: 318px;
      
      color: var(--black);
      
      background-color: var(--primary);
    }

    transition: width 0.2s ease-out, color 0.2s ease-out;
  }
`;
