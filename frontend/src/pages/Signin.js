import React, {useState} from 'react'
import Axios from 'axios'
import { Button,Form, Col, Container, Row} from "react-bootstrap";
import {Link} from 'react-router-dom'
import jwt from 'jwt-decode'

function Signin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin = async(e) => {
        e.preventDefault()
        // if(email === "customer@totcery.com" && password === "admin123"){
        //   localStorage.setItem("isLoggedIn", true)
        //   localStorage.setItem("user_type", "customer")
        //   window.location.assign("/profile");
        // }else{
        //     alert("Please Enter a valid email and password")
        // }
        if (email === ""){
          alert("Please Enter Email")
        }else if (password === ""){
          alert("Please Enter Password")
        }else{
          console.log("email", email, password);
          try {
          const { data } = await Axios.post('/api/users/login', {
          
            email,
            password,
          });
          console.log("data", data.token);
          const user = jwt(data.token);
          console.log("user", user);
         
          if(user.userType === "customer"){
           localStorage.setItem("isLoggedIn", true)
          localStorage.setItem("user_type", "customer")
          window.location.assign("/profile");
          }else if(user.userType === "vendor"){
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("user_type", "vendor")
            window.location.assign("/vendor-tab");
          }
        } catch (err) {
          alert("Invalid Email or Password") // here I'd like to send the error to the user instead
        }
          // window.location.assign("/login");
          // handleClose()
          // handleLoginClose()
        }
      }
    return (
        <div>
                <Container>
  <Row><Col xs={3}> </Col>
  <Col xs={6}> 
  <div className="card card-body">
      <h5 className="text-center">Customer Log In</h5>
             <Form>

<Form.Group controlId="formBasicEmail">
  {/* <Form.Label>Email address</Form.Label> */}
  <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
  <Form.Text className="text-muted">
  </Form.Text>
</Form.Group>

<Form.Group controlId="formBasicPassword">
  {/* <Form.Label>Password</Form.Label> */}
  <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}  placeholder="Password" />
</Form.Group>
<div className="pb-4">

<button className="btn-form-totcery " onClick={submitLogin}>
  Login
</button>
</div>
<div className="text-center">
 <Link >Forget Password ?</Link>
</div>
<div className="text-center pb-5">
New Here? <Link to="/register" >Create Account</Link>
</div>
</Form>
</div>
</Col> 
<Col xs={3}> </Col>
</Row>
</Container>
        </div>
    )
}

export default Signin
