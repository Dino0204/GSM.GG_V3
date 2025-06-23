import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		proxy: {
			"/ddragon-api": {
				target: "https://ddragon.leagueoflegends.com/cdn",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/ddragon-api/, ""),
			},
			"/kr-riot-api": {
				target: "https://kr.api.riotgames.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/kr-riot-api/, ""),
			},
			"/as-riot-api": {
				target: "https://asia.api.riotgames.com",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/as-riot-api/, ""),
			},
		},
	},
});
