import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Container from "../pages/container/container-pages.tsx";
import LoginAndRegister from '../pages/public/LoginAndRegister.tsx';
//import { PrivateRoute } from './private/PrivateRoutes.tsx';

const Root = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <>
            <Route path="/" element={<LoginAndRegister/>}/>
            <Route path="/personagens" element={<Container />} />
            <Route path="/hq" element={<Container />} />
            <Route path="/filmes" element={<Container />} />
          </>
      </Routes>

      </BrowserRouter>
        
  );
};
export default Root