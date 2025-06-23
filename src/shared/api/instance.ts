import axios from "axios";

export const instance = axios.create({
	headers: {
		"X-Riot-Token": import.meta.env.VITE_RIOT_API,
	},
});
