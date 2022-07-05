import axios from "axios";

axios
  .get("https://api.github.com/users/maykbrito")
  .then((response) => {
    const user = response.data;
    return axios.get(user.repos_url);
  })
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));
