export const API_URL = 'https://content-eu-4.content-cms.com/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1';

export async function loadArticle(id) {
  return fetch(
    `${API_URL}/content/${id}`
  ).then(response => response.json());
}
