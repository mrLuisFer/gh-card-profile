import "../css/style.css";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
import { profileCard } from './profileCard.js'

const ghToken = import.meta.env.VITE_GH_TOKEN;
const octokit = new Octokit({ auth: ghToken });

// const response = await octokit.request("GET /users/{username}", {
//   username: "mrLuisFer",
// });

const inputUsername = document.getElementById("gh-username");
const content = document.getElementById("content");

let user;
inputUsername.addEventListener("change", async (event) => {
  const username = event.target.value;
  const response = await octokit.request("GET /users/{username}", {
    username: username,
  });
  console.log(response);

  if (response.status === 200) {
    user = response.data;

    content.innerHTML = profileCard(user)
  }
});
