import axios from 'axios';

import { User, Repository } from '@types';

const BASE_URL = 'https://api.github.com';

export default class GithubAPI {
  static getUser(username: string | any) {
    return axios.get<User>(`${BASE_URL}/users/${username}`);
  }

  static getRepositories(username: string | any) {
    return axios.get<Repository[]>(`${BASE_URL}/users/${username}/repos`);
  }
}
