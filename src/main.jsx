import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router";
import Tab1 from "./pages/Tab1/Tab1.jsx";
import Tab2 from "./pages/Tab2/Tab2.jsx";
import Tab3 from "./pages/Tab3/Tab3.jsx";
import Tab4 from "./pages/Tab4/Tab4.jsx";
import Tab5 from "./pages/Tab5/Tab5.jsx";
import Tab6 from "./pages/Tab6/Tab6.jsx";
import "swiper/css";
import "./styles/tailwind.css";
import Tab7 from "./pages/Tab7/Tab7.jsx";
import Tab8 from "./pages/Tab8/Tab8.jsx";
import {Suspense} from "react";

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Tab1 />,
//       },
//       { path: 'tab1', element: <Tab1 /> },
//       { path: 'tab2', element: <Tab2 /> },
//       { path: 'tab3', element: <Tab3 /> },
//       { path: 'tab4', element: <Tab4 /> },
//       { path: 'tab5', element: <Tab5 /> },
//       { path: 'tab6', element: <Tab6 /> },
//       { path: 'tab7', element: <Tab7 /> },
//     ],
//   },
// ]);

const tabs = [
	{
		path: "tab1",
		element: (
			<Suspense fallback={<div>로딩딩</div>}>
				<Tab1 />
			</Suspense>
		),
	},
	{path: "tab2", element: <Tab2 />},
	{path: "tab3", element: <Tab3 />},
	{path: "tab4", element: <Tab4 />},
	{path: "tab5", element: <Tab5 />},
	{path: "tab6", element: <Tab6 />},
	{path: "tab7", element: <Tab7 />},
	{path: "tab8", element: <Tab8 />},
];

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			// index → tab1 으로 자동 리디렉션
			{index: true, element: <Navigate to='tab1' replace />},
			...tabs,
		],
	},
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
