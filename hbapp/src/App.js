// import {
//   Routes,
//   Route,
import { useContext, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import "./MediaQuery.css";
import SocialIcons from "./Components/SocialIcons";
import FooterCorse from "./Components/FooterCourse";
import About from "./Components/About";
// import Diploma from "./Components/Diploma";
import {
  Routes,
  Route,
} from "react-router-dom";
import Branch from "./Components/Branch";
import Contact from "./Components/Contact";
import Diploma from "./Components/Course/Diploma";
import Verification from "./Components/Verification";
import Discription from "./Components/Course/Discription";
import ComputerLanguage from "./Components/Course/ComputerLanguage";
import GraphicsDesign from "./Components/Course/GraphicsDesign";
import WebDevelopment from "./Components/Course/WebDevelopment";
import NielitCourse from "./Components/Course/NielitCourse";
import ComputerRepairing from "./Components/Course/ComputeeRepairing";
import Admin from "./Components/Admin";
import AdmissionForm from "./Components/AdmissionForm";
import Gallary from "./Components/Gallary";
import Footer from "./Components/Footer";
import { UniversalContext } from "./context/universal";
function App() {
  const [confermModal, setConfermModal]=useState(false);
  return (
    <>
      <Header />

      <SocialIcons />
      <UniversalContext.Provider value={{confermModal,setConfermModal}}>
      <Routes>
        <Route excact path="/" element={<Home />} />
        <Route excact path="/home" element={<Home />} />
        <Route excact path="/about" element={<About />} />
        <Route excact path="/branch" element={<Branch />} />
        <Route excact path="/contact" element={<Contact />} />
        <Route excact path="/callary" element={<Gallary />} />
        <Route excact path="/cdmissionForm" element={<AdmissionForm />} />
        <Route excact path="/cerification" element={<Verification />} />
        <Route excact path="/course/Discription" element={<Discription />} />
        <Route excact path="/course/Diploma" element={<Diploma />} />
        <Route excact path="/course/ComputerLanguage" element={<ComputerLanguage />} />
        <Route excact path="/course/GraphicsDesign" element={<GraphicsDesign />} />
        <Route excact path="/course/WebDevelopment" element={<WebDevelopment />} />
        <Route excact path="/course/ComputerRepairing" element={<ComputerRepairing />} />
        <Route excact path="/course/NielitCourse" element={<NielitCourse />} />
        <Route excact path="/admin" element={<Admin />} />
      </Routes>
      </UniversalContext.Provider>
      <FooterCorse />
     <Footer/>

    </>
  );
}
export default App;