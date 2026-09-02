import { Outlet } from 'react-router';

const PublicProtected = () => {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default PublicProtected;
