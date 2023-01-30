import axios from 'axios'

const API_URL = 'https://country-api-cq2y.onrender.com'

export const getCountries = async (country) => {
  return axios
    .get(
      `${API_URL}/country/${country}`, { withCredentials: true })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })
}
