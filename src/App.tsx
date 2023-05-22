import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./presentation/global/styles";
import Page404 from "./presentation/pages/404";
import LandingPage from "./presentation/pages/LandingPage";
import NewPost from "./presentation/pages/NewPost";


export default function App(){
  return (
        <RecoilRoot>
          <GlobalStyle/>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<LandingPage/>}/>
                  <Route path="/nova-denuncia" element={<NewPost/>}/>
                  <Route path="*" element={<Page404/>}/>
              </Routes>
          </BrowserRouter>
        </RecoilRoot>
  )
}