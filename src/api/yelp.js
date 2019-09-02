import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer q3oacokRLa6iLs0ukDW2EsFnwZo1EUGTWHaJgR_VrFszPUXqYVerV1hm6j_SEpZ9ebhRk9AvrG3WbwZa-nCiGKC8wp2N3mrgnH8RYrpl8s0cBuUeo4ZnktHaRtFsXXYx"
  }
});
