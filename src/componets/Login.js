import React, {useEffect, useState} from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

const Login = () => {
  const history = useHistory ();
  const dispatch = useDispatch ();
  const [email, setEmial] = useState ('');
  const [password, setPassword] = useState ('');
  const [message, setMessage] = useState ('');

  const onSubmit = e => {
    e.preventDefault ();
    if (email === 'admin@gmail.com' && password === 'admin') {
      dispatch ({
        type: 'User_login',
        payload: true,
      });
      history.push ('/');
    } else if (email === '') {
      setMessage ('Please Enter The Email');
    } else if (password === '') {
      setMessage ('Please Enter The password');
    } else {
      setMessage ('Invalid Credentials ');
    }
  };

  return (
    <div className="login">
      <Row>
        <Col md={12}>
          {message && <p className="text-danger">{message}</p>}
          <Form>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="me-sm-2">Email</Label>
              <Input
                type="email"
                name="email"
                onChange={e => setEmial (e.target.value)}
                placeholder="something@idk.cool"
              />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label for="examplePassword" className="me-sm-2">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                onChange={e => setPassword (e.target.value)}
                placeholder="Enter Password!"
              />
            </FormGroup>
            <Button className="mt-4" type="submit" onClick={onSubmit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
