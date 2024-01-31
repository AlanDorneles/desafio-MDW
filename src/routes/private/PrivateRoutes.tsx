import { Navigate } from "react-router";
import { ReactNode} from 'react';


interface PrivateRouteProps {//children : página que será encapsulada pelo container
    children: ReactNode;
  }

export function PrivateRoute ({children}:PrivateRouteProps){
  const flag = localStorage.getItem('flag')

    return(  
            (flag!== 'true' ? children : <Navigate to='/login'/>) // login pela flag ( token) vindo do backend
    )
}
