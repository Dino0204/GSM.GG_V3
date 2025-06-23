import { BrowserRouter, Route, Routes } from "react-router-dom";
import Champions from "../pages/champions/ui";
import Colors from "../pages/colors/ui";
import Detail from "../pages/detail/ui";
import Login from "../pages/login/ui";
import Main from "../pages/main/ui";
import Profile from "../pages/profile/ui";
import SignUp from "../pages/signup/ui";
import { AuthLayout } from "../widgets/authLayout/ui";
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
					<Route element={<AuthLayout />}>
						<Route path="signup" element={<SignUp />} />
						<Route path="login" element={<Login />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</RQProvider>
	);
}
