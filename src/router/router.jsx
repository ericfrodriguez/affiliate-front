import { createBrowserRouter } from "react-router-dom";
import { CheckBenefits, SignIn } from "../pages";

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
		element: <div>Cargar nuevo </div>,
	},
]);

export default router;
