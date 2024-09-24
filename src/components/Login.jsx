import React, { useEffect, useState } from "react";

// import { message } from "antd";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
      setLoading(false);
    });
  });

  const handleLogin = async (e) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      console.success("Login Successful!");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error("Login Unsuccessful!!!");

      console.log("Failed to login. Please check your credentials:- " + error);
    }
  };
  if (loading) {
    return <Container>LOADING...</Container>;
  } else {
    return (
      <Container className="login-container">
        <Card className="login-card">
          <Card.Header className="login-card-header">
            <h2 className="login-card-header-h2">Login</h2>
          </Card.Header>

          <Card.Body className="login-card-body">
            <Form className="login-form">
              <Form.Group
                className="mb-3 login-form-group"
                controlId="formBasicLoginEmail"
              >
                <Form.Control
                  type="email"
                  className="login-form-control"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 login-form-group"
                controlId="formBasicLoginPass"
              >
                <Form.Control
                  type="password"
                  className="login-form-control"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="login-signup-res-pass-div">
                <p className="login-new-account-p">
                  <Link
                    to="/send-reset-password-request"
                    className="login-new-account-link"
                  >
                    Reset Password
                  </Link>
                </p>
              </div>

              <div className="login-button-div">
                <Button
                  variant="primary"
                  className="login-button"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? "LOGGING..." : "LOGIN"}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Login;
