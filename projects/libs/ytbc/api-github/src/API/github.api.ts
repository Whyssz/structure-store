import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GitHubResponse, IUser } from '../models/modelst';
import { IRepo } from './../models/modelst';

export const githubApi = createApi({
	reducerPath: 'githubAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/'
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		searchUsers: build.query<IUser[], string>({
			query: (search: string) => ({
				url: 'search/users',
				params: {
					q: search,
					per_page: 10
				}
			}),
			transformResponse: (response: GitHubResponse<IUser>) => response.items
		}),
		getUserRepos: build.query<IRepo[], string>({
			query: (name: string) => ({
				url: `users/${name}/repos`
			})
		}),
		// createUser: build.mutation<any, void>()
	})
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;