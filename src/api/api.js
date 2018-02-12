import {createClient} from 'contentful';

const SPACE_ID = 'v5je32ngmw4i'
const ACCESS_TOKEN = 'fb8a82b9f9a0ee939bdd157a265548da5135e2b2fdd23e8ac9fad176a3ec602c'
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

export function fetchBlogs() {
  return client.getEntries({
    content_type: 'blog'
  })
  .then((response) => response.items)
  .catch((error) => {
    console.error(error)
  })
  // const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blog&order=sys.createdAt`);
  // console.log('abc');
  // return {
  //   type: FETCH_BLOGS,
  //   payload: request
  // };
}
// export function fetchBlog(id) {
//   const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}&content_type=blog`);
//   return {
//     type: FETCH_BLOG,
//     payload: request
//   };
// }