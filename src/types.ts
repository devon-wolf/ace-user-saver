export interface User {
	login: string; 
	id: number;
	url: string; 
	name: string | null; 
	public_repos: number; 
	public_gists: number;
	followers: number; 
	following: number; 
	created_at: string;
}

export interface GitHubUser extends User {
	node_id: string; 
	avatar_url: string | null; 
	gravatar_id: string | null; 
	html_url: string; 
	followers_url: string; 
	following_url: string; 
	gists_url: string; 
	starred_url: string; 
	subscriptions_url: string; 
	organizations_url: string; 
	repos_url: string; 
	events_url: string; 
	received_events_url: string; 
	type: string; 
	site_admin: boolean; 
	company: string | null; 
	blog: string | null; 
	location: string | null; 
	email: string | null; 
	hireable: boolean | null; 
	bio: string | null; 
	twitter_username: string | null; 
	updated_at: string;
}

/* 
User and GitHubUser copied and adapted from my prior repo: https://github.com/devon-wolf/user-saver/blob/main/src/types.d.ts
*/
