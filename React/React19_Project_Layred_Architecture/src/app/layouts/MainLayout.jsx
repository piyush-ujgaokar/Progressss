import { Outlet } from 'react-router';
import NavBar from '../../shared/ui/components/NavBar';

const MainLayout = () => {
  return (
    <div className=''>
      <NavBar/>
      <div className='p-10'>
        <Outlet/>
      </div>
    </div>
  );
}

export default MainLayout;
