import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import Quiz from "./pages/Quiz.tsx";
import Score from "./pages/Score.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ element: <Home />, path: "/" },
			{
				element: <Quiz />,
				path: "/quiz",
			},
			{ element: <Score />, path: "/score" },
		],
	},
]);

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
