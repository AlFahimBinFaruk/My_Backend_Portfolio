import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import "./App.css";
import Header from "./common_components/Header";
import Contact from "./pages/contact";
import PageNotFound from "./pages/error/pageNotFound";
import Home from "./pages/home";
import ProjectDetails from "./pages/projectDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* header */}
        <Header />
        {/* main container */}
        <MDBContainer className="my-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </MDBContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
