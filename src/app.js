import fs from "fs/promises";
import { requestUser, requestKinderRepo } from "./api/index.js";

(async function app() {
	try {
		// const userReq = await requestUser("irizzo");

		// await fs.writeFile("userRequestResult.txt", JSON.stringify(userReq, null, 3));
		// await fs.writeFile("irizzoData.txt", JSON.stringify(userReq.data, null, 3));


		// const repo = await requestKinderRepo();
		// await fs.writeFile("repoKinder.txt", JSON.stringify(repo, null, 3));

	} catch (error) {
		console.log(error);
	}
})();