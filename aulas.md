
# Promises com Fetch

```js
fetch('https://api.github.com/users/maykbrito')
.then(response=>{
  response.json()
  .then(data=>{
    fetch(data.repos_url)
    .then(res=>res.json().then(d=>console.log(d)))
})
 })
```
Promise chaining

```js
fetch("https://api.github.com/users/maykbrito")
  .then((response) => response.json())
  .then((data) => fetch(data.repos_url))
  .then((res) => res.json())
  .then((d) => console.log(d))
  .catch((err) => console.log(err));
```

# Promises com axios

```js
import axios from'axios'

axios
  .get('https://api.github.com/users/maykbrito')
  .then(response => {
    const user = response.data

    axios.get(user.repos_url)
    .then(repos => console.log(repos.data))
    .catch(error => console.log(error))
 })
  .catch(error => console.log(error))
```
Promise chaining

```js
import axios from "axios";

axios
  .get("https://api.github.com/users/maykbrito")
  .then((response) => {
    const user = response.data;
    return axios.get(user.repos_url);
  })
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));
```

# 
```js

```