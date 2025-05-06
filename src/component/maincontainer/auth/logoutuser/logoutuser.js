// logoutuser.js
import axios from 'axios';



import { toast } from 'react-toastify';

const logoutuser = async () => {
  
  
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/logout/',
      {},
      {
        withCredentials: true,
      }
    );
    
    console.log(response.data);
    toast.success(response.data.message);

  } catch (error) {
    console.log(error);
    toast.error('User not logged out');
  }
};

export default logoutuser;
