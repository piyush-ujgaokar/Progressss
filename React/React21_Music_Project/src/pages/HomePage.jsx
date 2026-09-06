import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

const HomePage = () => {

   const data= useContext(authContext)
    console.log(data);
    

  return (
    <div>
      THis is home page
    </div>
  );
}

export default HomePage;
