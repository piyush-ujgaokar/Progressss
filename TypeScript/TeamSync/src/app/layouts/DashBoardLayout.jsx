
import { Outlet } from 'react-router';

const DashBoardLayout = () => {
  return (
    <div>
        <h1>This is NavBAr</h1>
      <Outlet/>
    </div>
  );
}

export default DashBoardLayout;
