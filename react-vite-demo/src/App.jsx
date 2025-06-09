import { BrowserRouter, Routes, Route } from "react-router-dom";  
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
import Modules from "./components/views/Modules.jsx";
import Student from "./components/views/Student.jsx";
import PageNotFound from "./components/views/404.jsx";


function App() {

  const loggedInUser = "Madz";

  return (

    <BrowserRouter>
      <Layout loggedInUser = {loggedInUser}>

        <Routes>

          <Route path = "/" element = {<Home />} />
          <Route path = "/modules" element = {<Modules />} />
          <Route path = "/students" element = {<Student />} />
          <Route path = "/*" element = {<PageNotFound />} />
          

        </Routes>

      </Layout>
    </BrowserRouter>
  );
}

export default App
