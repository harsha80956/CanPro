import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button,Form, Col, Container, Row} from "react-bootstrap";
import Axios from 'axios'

export default function RegisterScreen(props) {
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] =useState('customer');
  const [mobileNumber, setNumber] = useState("")
  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';


//   const userRegister = useSelector((state) => state.userRegister);
//   const { userInfo, loading, error } = userRegister;

const  SubmitRegisterHandler = async (e) => {
    e.preventDefault();

    if(fullName === ""){
      alert("Please Enter Name")
    }else if (email === ""){
      alert("Please Enter Email")
    }else if (password === ""){
      alert("Please Enter Password")
    }else if(mobileNumber === ""){
      alert("Please Enter Mobile Number")
    }else if(password !== confirmPassword)
      alert("Please Check the password")
    else{
      
      const { data } = await Axios.post('/api/users/register', {
        fullName,
        email,
        password,
        mobileNumber,
        userType
      });
      console.log("data", data);
      window.location.assign("/mobileVerification");
    }
  };

  const verifyCallback = () => {
  
  }
//   const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
    //   dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
   
  }, []);
  return (
    <div>
      <Container>
  <Row><Col xs={3}> </Col>
  <Col xs={6}> 
  <div className="card card-body">
      <h5 className="text-center">Sign Up</h5>
        <Form>
   <Form.Group controlId="formBasicEmail">
    {/* <Form.Label>Name</Form.Label> */}
    <Form.Control type="text"   onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
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


<Form.Group controlId="formBasicPassword">
    {/* <Form.Label>Conform Password</Form.Label> */}
    <Form.Control type="password"  onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Conform Password" />
  </Form.Group>
  <Form.Group controlId="formBasicNumber">
    {/* <Form.Label>Mobile Number</Form.Label> */}
    <Form.Control type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Mobile Number" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control onChange={(e) => {
       setUserType(e.target.value) 
    }} as="select">
      <option value="0">Select Customer Type</option>
    <option value="customer">customer</option>
      <option value="vendor">Vendor</option>
    </Form.Control>
  </Form.Group>

<div className="text-center pt-4">
  <button  type="submit" className="btn-form-totcery" onClick={SubmitRegisterHandler}>
    Register
  </button>
  </div>
  <div className="text-center pb-5 pt-3">
  Already Have An Account? <Link to="/" > Click Here</Link>
</div>
</Form>
</div>
</Col> 
<Col xs={3}> </Col>
</Row>
</Container>

    </div>
  );
}