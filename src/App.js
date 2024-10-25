import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
import {
  Cmasayal,
  Login,
  Error,
  About,
  Nav,
  Masayal,
  Umasayal,
  MainData,
  Lesson,
  Ask,
  Question,
  QueToanswer,
  Dashboard,
  Student,
  Darulifta,
  Home,
  Service,
  AdminPage,
  Contact,
  Loading,
  Search,
  Loader,
  Login1,
  Clessons,
  Ulesson,
  ChangePassword,
  ForgetPassword,
  Logged,
  OtpVerification,
  UpdateS,
  Teacher,
} from "./importExport.js";

function App() {
  // const [user, setUser] = useState();
  // const isAuthenticated = user;
  //  how to remove 401 error message
  // useEffect(() => {
  //   async function got() {
  //     try {
  //       const { data } = await axios.get("http://localhost:4400/getuser", {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       });
  //       setUser(data?.user?.role);
  //       console.log(data);
  //     } catch (error) {}
  //   }
  //   got();
  // }, []);

  //   // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/dar" element={<Darulifta />} />
        <Route exact path="/student" element={<Student />} />
        <Route exact path="/teacher" element={<Teacher />} />
        <Route exact path="/student/:id" element={<UpdateS />} />
        <Route exact path="/dash" element={<Dashboard />} />
        <Route exact path="/question" element={<Question />} />
        <Route exact path="/quetoanswer" element={<QueToanswer />} />
        <Route exact path="/ask" element={<Ask />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/login/otp" element={<OtpVerification />} />
        <Route exact path="/changepassword" element={<ChangePassword />} />
        <Route exact path="/forgetpassword" element={<ForgetPassword />} />
        <Route exact path="/login1" element={<Login1 />} />
        <Route exact path="/user" element={<Logged />} />
        <Route exact path="/Loading" element={<Loading />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/Search" element={<Search />} />
        <Route exact path="/load" element={<Loader />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/lessons" element={<Lesson />} />
        <Route exact path="/clessons" element={<Clessons />} />
        <Route exact path="/lesson/:id" element={<Ulesson />} />
        <Route exact path="/masayal" element={<Masayal />} />
        <Route exact path="/daruliftahdash" element={<MainData />} />
        <Route exact path="/masayal/updatemasla/:id" element={<Umasayal />} />
        <Route exact path="/answer/:id" element={<Cmasayal />} />
        <Route path="*" element={<Error />} />
        {/* Protected Routes is here */}
        {/* <Route
          exact
          path="/dash"
          element={
            <Protected IsAuth={isAuthenticated}>
              <Dashboard />
            </Protected>
          } */}
        {/* /> */}
        {/* <Route
          exact
          path="/update/:id"
          element={
            <Protected IsAuth={isAuthenticated}>
              <UpdateBlog />
            </Protected>
          }
        />

        <Route
          exact
          path="/changepassword"
          element={
            <Protected IsAuth={isAuthenticated}>
              <ChangePassword />
            </Protected>
          }
        />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
