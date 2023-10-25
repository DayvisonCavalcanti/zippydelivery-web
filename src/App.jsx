import { Outlet, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/login/login";
import NavBarComponent from "./pages/components/navBarComponent";

function App() {
  let location = useLocation().pathname
  return (
    <div className="h-screen bg-cinza-100">
      { 
        ((location === '/sign-up' || location === '/' || location === '/confirm-email' || location === '/reset-password')) ? 
        <span></span> : <NavBarComponent /> 
      }
      <Outlet />
    </div>
  );
}

export default App;
