import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import { ToastProvider } from "./components/Tab6/ToastPractice/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <div className="font-[Pretendard]">
        <Header />
        <Outlet />
      </div>
    </ToastProvider>
  );
}

export default App;
