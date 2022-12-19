const URL = process.env.REACT_APP_GITHUB_URL;
const Token = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${Token}`,
    },
  });
  const { items } = await response.json();
  return items;
};

export const getUser = async (login) => {
  const response = await fetch(`${URL}/users/${login}`, {
    headers: {
      Authorization: `token ${Token}`,
    },
  });
  const data = await response.json();
  return data;
};

export const getRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(`${URL}/users/${login}/repos?${params}`, {
    headers: {
      Authorization: `token ${Token}`,
    },
  });
  const data = await response.json();
  return data;
};
