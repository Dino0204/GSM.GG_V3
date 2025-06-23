import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router";
import "./globals.css";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<Router />
		</StrictMode>,
	);
} else {
	console.error('Root element with id "root" not found.');
}
