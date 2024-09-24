import React from "react";

// Fonts
import "./assets/fonts/Arial/Arial Bold.ttf";
import "./assets/fonts/Arial/Arial.ttf";
import "./assets/fonts/DIN Alternate/DIN Alternate Bold.ttf";
import "./assets/fonts/DIN Condensed/DIN Condensed Bold.ttf";
import "./assets/fonts/Futura/Futura.ttc";
import "./assets/fonts/MyriadPro/MyriadPro-Regular.otf";

import { render } from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// Routing
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// Import Pages
import Login from "./components/Login";
import ResetPasswordComponent from "./components/ResetPasswordComponent";
import { SectionProvider } from "./context/SectionContext";
import CreateAccount from "./pages/create-account";
import Landing from "./pages/index";
import LearnMore from "./pages/LearnMore";
import Logout from "./pages/logout";
import SendRequestResetPasswordComponent from "./pages/send-reset-password";
import Service from "./pages/service";
import UserInfo from "./pages/users";

// Import Components
import Layout from "./components/Layout";

// Import Context
import { AuthProvider } from "./context/AuthContext";
import { MenuProvider } from "./context/MenuContext";

const rootElement = document.getElementById("root");
render(
  <Router>
    <SectionProvider>
      <AuthProvider>
        <MenuProvider>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/studyglobeeducation" element={<Landing />} />
              <Route exact path="/create-account" element={<CreateAccount />} />
              <Route exact path="/service" element={<Service />} />
              <Route exact path="/admin" element={<Login />} />
              <Route exact path="/users" element={<UserInfo />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route exact path="/learnmore/:country" element={<LearnMore />} />
              <Route
                path="reset-password/:uid/:token"
                element={<ResetPasswordComponent />}
              />
              <Route
                path="send-reset-password-request"
                element={<SendRequestResetPasswordComponent />}
              />
            </Routes>
          </Layout>
        </MenuProvider>
      </AuthProvider>
    </SectionProvider>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
