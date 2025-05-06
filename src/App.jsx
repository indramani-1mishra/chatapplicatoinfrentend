import './App.css';
import Header from './component/header/header';
import Verifyuser from './component/maincontainer/auth/verifyuser/Verifyuser';

import Router from './component/router/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
 
function App() {
  const location = useLocation();

  // Correct comparison
  const shouldHideHeader = location.pathname === '/';

  return (
    <> 
      <ToastContainer position="top-center" reverseOrder={false} />

      {/* Header tabhi dikhayenge jab current path '/' nahi ho */}
      {!shouldHideHeader && <Header />}
      
      <Router />
      
      <Verifyuser />
    </>
  );
}

export default App;
