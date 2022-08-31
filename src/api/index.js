import { Octokit } from "octokit";
import * as dotenv from 'dotenv';
dotenv.config();

const octokit = new Octokit({
	auth: process.env.ACCESS_TOKEN
});

export async function requestUser(githubUser) {
	try {
		const userData = await octokit.request("GET /users/{username}", {
			username: githubUser
		});

		return userData;

	} catch (error) {
		console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
	}
}

// pegar os usuários que seguem o usuário autenticado
export async function getUserFollowers() {
	try {
		const userData = await octokit.request("GET /user/followers", {});

	} catch (error) {
		console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`);
	}
}

export async function requestKinderRepo() {
	try {
		const userData = await octokit.request("GET /repos/ekalmentero/ic819projetosoftware");

		return userData;

	} catch (error) {
		console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
	}
}