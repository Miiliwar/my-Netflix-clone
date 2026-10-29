import axios from 'axios'
// Requests go through the Netlify Function proxy, which adds the TMDB API key server-side
const movieInstance= axios.create({
  baseURL :"/api/tmdb"
})
export {movieInstance}
