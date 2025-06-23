import { BrowserRouter, Route, Routes } from "react-router-dom";
import Champions from "../pages/champions/ui";
import Colors from "../pages/colors/ui";
import Detail from "../pages/detail/ui";
import Main from "../pages/main/ui";
import Profile from "../pages/profile/ui";
import RQProvider from "./providers/RQProvider";

export default function Router() {
	return (
		<RQProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}>
						<Route path="champions" element={<Champions />} />
						<Route path="champions/:id" element={<Detail />} />
						<Route path="colors" element={<Colors />} />
						<Route path="profile" element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</RQProvider>
	);
}
