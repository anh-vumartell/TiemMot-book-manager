import axios from "axios";

import { AXIOS_BASE_URL } from "appConstants";

const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL
})

