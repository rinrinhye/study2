import { Outlet } from 'react-router';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="font-[Pretendard]">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
