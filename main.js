import "./style.css";
import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

const ghToken = import.meta.env.VITE_GH_TOKEN;

const octokit = new Octokit({ auth: ghToken });

const response = await octokit.request("GET /users/{username}", {
  username: "mrLuisFer",
});

console.log(response);

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
