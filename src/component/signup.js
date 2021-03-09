import React, { useState } from 'react';

import { Twitter, Facebook, GitHub } from 'react-feather';
import "../style/signup.css";
import {Form,Button,  Col, FormGroup,Label,Input, Container, Row} from "reactstrap";
import {useForm} from 'react-hook-form';

const Register = (props) => {
  const {register, errors, handleSubmit} = useForm();
  const [formConfig, setFormConfig] = useState([]);

  const handleForm = (data) => {
      setFormConfig([...formConfig, data])
  }
  console.log(...formConfig)
  return (
    <Container fluid={true} className="p-9 login">
      <Row className="login-form">
        <Col  >
          <div className="login-card d-flex justify-content-center">
           
              
              <div className=" login-main  mt-4">
                <Form 
                onSubmit={handleSubmit} className="theme-form form-signup">
                  <h4>{'Create your account'}</h4>
                  <p>{'Enter your personal details to create account'}</p>
                  <FormGroup>
                    <Label className="col-form-label">User Name</Label>
                    <Input
                  className="form-control "
                  type="text"
                  name="username"
                  innerRef={register({
                    required: true
                  })}
                          placeholder="Enter your username"
                />
                  </FormGroup>
                  <FormGroup classname="form-group">
                  <Label className="col-form-label pt-0">Password</Label>
                    <div className="form-row">
                      <Col xs="6">
                      <Input
                  className="form-control"
                  type="password"
                  name="password"
                  innerRef={register({
                    required: true
                  })}
                          placeholder="Enter your password"
                />
                      </Col>
                      <Col xs="6">
                      <Input
                  className="form-control "
                  type="password"
                  name="confirmpassword"
                  innerRef={register({
                    required: true
                  })}
                    placeholder="Confirm Your Password"
                />
                      </Col>
                    </div>
                  
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">Your Name</Label>
                    <div className="form-row">
                      <Col xs="6">
                      <Input
                  className="form-control"
                  type="text"
                  name="firstname"
                  innerRef={register({
                    required: true

                  })}
                          placeholder="Enter your First Name"
                />
                      </Col>
                      <Col xs="6">
                      <Input
                  className="form-control"
                  type="text"
                  name="lastname"
                  innerRef={register({
                    required: true
                  })}
                          placeholder="Enter your Last Name"
                />
                      </Col>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Phone Number</Label>
                    <Input
                  className="form-control"
                  type="number"
                  name="phonenumber"
                  innerRef={register({
                    
                     
                  })}
                          placeholder="Enter your Mobile Number"
                />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">Email Address</Label>
                    <Input
                  className="form-control"
                  type="email"
                  name="email"
                  innerRef={register({
                    required: true
                  })}
                          placeholder="Enter your email"
                />
                  </FormGroup>
                  <div className="form-group mb-0">
                    <div className="checkbox ml-3">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        {'I agree with the'}
                        <a className="ml-2 signup-link" href="#javascript">
                        PrivacyPolicy
                        </a>
                      </Label>
                    </div>
                    <Button color="info" className="btn-block" type="submit">
                      Create Account
                    </Button>
                  </div>
                  <h6 className="text-muted mt-4 or">{'Or Signup with:'}</h6>
                  <div className="social mt-4">
                    <div className="btn-showcase">
                      <Button color="light" className="btn-social">
                        <Facebook className="txt-fb " />
                      </Button>
                     
                      <Button color="light"  className="btn-social">
                        <Twitter className="txt-twitter" />
                      </Button>
                      <Button color="light"  className="btn-social">
                        <GitHub />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-4 mb-0">
                    {'Already have an account?'}
                    <a className="ml-2  signup-link" href="#javascript">
                      SignIn
                    </a>
                  </p>
                </Form>
             
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;