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
}

export function fetchBlog(id) {
  return client.getEntry(id.id).then((response) => response).catch((err) => console.log(err))
}