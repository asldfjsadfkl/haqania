import Home from "./screen/Home";
import Nav from "./components/Layout/NavBar/Nav.jsx";
import About from "./screen/About";
import Service from "./screen/Service";
// import ResetPassword from "./components/Auth/ResetPassword.jsx";
import ChangePassword from "./components/Auth/ChangePassword/ChangePassword";
import ForgetPassword from "./components/Auth/ForgetPassword/ForgetPassword.jsx";
import Loader from "./components/Layout/Loader/Loader";
import { Protected } from "./components/Protected/Protected.js";
import Search from "./components/Layout/Search/Search.jsx";
import Loading from "./components/Layout/Loading/Loading.jsx";
import Contact from "./screen/Contact.jsx";
import AdminPage from "./screen/AdminPage.js";
import Darulifta from "./screen/Darulifta.jsx";
import Student from "./components/Layout/Student/Student.jsx";
import Dashboard from "./components/Layout/Dashboard/Dashboard.jsx";
import Question from "./components/Layout/Questions/Question.jsx";
import QueToanswer from "./components/Layout/Questions/QueToanswer.jsx";
import Ask from "./components/Layout/Ask/Ask.jsx";
import Lesson from "./components/Layout/Lessons/Lesson.jsx";
import Masayal from "./components/Layout/Masayal/Masayal.jsx";
import Umasayal from "./components/Layout/Masayal/Umasayal.jsx";
import Login from "../src/components/Auth/Login/Login";
import Login1 from "../src/components/Auth/Login1/Login1.jsx";
import Clessons from "./components/Layout/Clessons/Clessons.jsx";
import Ulesson from "./components/Layout/Lessons/Ulesson.jsx";
import Cmasayal from "./components/createMasayal/Cmasayal.jsx";
import Logged from "./components/Auth/Logged/Logged";
import OtpVerification from "./components/Auth/Logged/OtpVerification.jsx";
import Teacher from "./components/Layout/Teacher/Teacher.jsx";
import UpdateS from "./components/Layout/UpdateStudents/UpdateS.jsx";
import MainData from "./components/Layout/MainDashBoard/MainData/MianData.jsx";
import Error from '../src/components/Layout/Error/Error.jsx'

export {
  OtpVerification,
  Cmasayal,
  MainData,
  Login,
  Logged,
  Masayal,
  Umasayal,
  Lesson,
  Ask,
  Question,
  QueToanswer,
  Dashboard,
  Student,
  Teacher,
  UpdateS,
  Darulifta,
  ForgetPassword,
  ChangePassword,
  // ResetPassword,
  Home,
  Service,
  AdminPage,
  Contact,
  Loading,
  Search,
  Protected,
  Loader,
  About,
  Nav,
  Login1,
  Clessons,
  Ulesson,
  Error,
};
