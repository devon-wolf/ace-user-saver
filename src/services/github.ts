import { User } from '../types';

const formatDate = (datestring: string): string => {
    const splitDate = datestring.split('-');
    return splitDate[1] + splitDate[2].slice(0, 1) + splitDate[0];
};

export const fetchGitHubUser = async (username: string): Promise<User | { message: string }> => {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const user = await response.json();
        return {
            login: user.login,
            id: user.id,
            url: user.html_url,
            name: user.name,
            public_repos: user.public_repos,
            public_gists: user.public_gists,
            followers: user.followers,
            following: user.following,
            created_at: formatDate(user.created_at)
        };
    }
    catch (err) {
        return { message: 'Something went wrong' };
    }
};
