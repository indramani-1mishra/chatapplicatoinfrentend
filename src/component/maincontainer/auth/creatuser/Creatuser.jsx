import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Submitmutform from '../../../reuseblecomponents/submitformreusble/submitmutform';
import Context from '../../../../context/formresultcontext';
import { toast } from 'react-toastify';

function Createuser() {
  const [name, setUsername1] = useState('');
  const [password, setPassword1] = useState('');
  const [email, setEmail1] = useState('');
  const [profileimage, setPhoto1] = useState(null);

  const { setsuccess } = useContext(Context);
  const navigate = useNavigate();

  const fields = [
    { name: 'username', label: 'Username', type: 'text', placeholder: 'Enter username', className: 'input-username', onChange: (e) => setUsername1(e.target.value) },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email', className: 'input-email', onChange: (e) => setEmail1(e.target.value) },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter password', className: 'input-password', onChange: (e) => setPassword1(e.target.value) },
    { name: 'photo', label: 'Photo', type: 'file', placeholder: 'Select photo', className: 'input-photo', onChange: (e) => setPhoto1(e.target.files[0]) },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
         formData.append("name",name);
         formData.append("email",email);
         formData.append("password",password);
         formData.append("profileimage",profileimage)

      const response = await axios.post(
        'http://localhost:3001/api/v1/users/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log("Response:", response.data);

      // API se success boolean mil raha hai toh usko handle karo
      if (response.data.success) {
        setsuccess("true");
        toast.success(response.data.Message);
        navigate('/login');
      }

      // Reset form
      setUsername1('');
      setEmail1('');
      setPassword1('');
      setPhoto1(null);

    } catch (error) {
      console.error("Error while submitting form:", error);
      toast.error(error.message)
    }
  };

  return (
    <Submitmutform
      onSubmit={handleSubmit}
      fields={fields}
      title="Welcome to ChatApp..."
      btntext="Submit"
      ptext="Already have an account?"
      linkbtn="Login"
      linkpath="/login"
    />
  );
}

export default Createuser;
