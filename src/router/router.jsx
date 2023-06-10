import { createBrowserRouter } from "react-router-dom";
import { CheckBenefits, SignIn, AdminPanel } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CheckBenefits />,
	},
	{
		path: "/auth/signin",
		element: <SignIn />,
	},
	{
		path: "/admin",
		element: <AdminPanel />
	},
]);

export default router;
