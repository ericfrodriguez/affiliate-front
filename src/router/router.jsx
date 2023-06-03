import { createBrowserRouter } from "react-router-dom";
import { CheckBenefits } from "../pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <CheckBenefits />,
	},
	{
		path: "/auth/signin",
		element: <div>Ingresar como admin</div>,
	},
	{
		path: "/admin",
		element: <div>Cargar nuevo </div>,
	},
]);

export default router;
