import {Outlet} from "react-router";
import Header from "./components/Header/Header";
import {ToastProvider} from "./components/Tab6/ToastPractice/ToastProvider";
import {ErrorBoundary} from "./components/Common/ErrorBoundary";
import Fallback from "./components/Common/Fallback";

function App() {
	return (
		<ToastProvider>
			<div>
				<Header />
				<Outlet />
			</div>
		</ToastProvider>
	);
}

export default App;
