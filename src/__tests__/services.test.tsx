import { fetchGitHubUser } from '../services/github';

describe('GitHub API interaction', () => {
    it('returns a user object when given a valid GitHub username', async () => {
        const fetchedUser = await fetchGitHubUser('devon-wolf');
        expect(fetchedUser).toEqual({
            login: 'devon-wolf',
            id: 33987744,
            url: 'https://github.com/devon-wolf',
            name: 'Devon Wolfkiel',
            public_repos: expect.any(Number),
            public_gists: expect.any(Number),
            followers: expect.any(Number),
            following: expect.any(Number),
            created_at: '11/25/2017'
        });
    });
});

/*
{
  "login": "devon-wolf",
  "id": 33987744,
  "node_id": "MDQ6VXNlcjMzOTg3NzQ0",
  "avatar_url": "https://avatars.githubusercontent.com/u/33987744?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/devon-wolf",
  "html_url": "https://github.com/devon-wolf",
  "followers_url": "https://api.github.com/users/devon-wolf/followers",
  "following_url": "https://api.github.com/users/devon-wolf/following{/other_user}",
  "gists_url": "https://api.github.com/users/devon-wolf/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/devon-wolf/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/devon-wolf/subscriptions",
  "organizations_url": "https://api.github.com/users/devon-wolf/orgs",
  "repos_url": "https://api.github.com/users/devon-wolf/repos",
  "events_url": "https://api.github.com/users/devon-wolf/events{/privacy}",
  "received_events_url": "https://api.github.com/users/devon-wolf/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Devon Wolfkiel",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 92,
  "public_gists": 0,
  "followers": 42,
  "following": 47,
  "created_at": "2017-11-25T18:38:54Z",
  "updated_at": "2021-09-10T23:14:07Z"
}
*/
