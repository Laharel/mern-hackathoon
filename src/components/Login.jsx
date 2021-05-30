import React, { useState, useRef } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AuthService from "../services/auth.service";
import {useEffect } from "react";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};
const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setemailError] = useState("");  
    const [pwdError, setpwdError] = useState("");  
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        
        const user = AuthService.getCurrentUser();

        if(user){
            setCurrentUser(user)
        }
    }, [])

    // const onChangeEmail = (e) => {
    //     const email = e.target.value;
    //     setEmail(email);
    // };
    const handleemail = (e) => {
      setEmail(e.target.value);
      if(e.target.value.length < 1) {
          setemailError("Email is required!");
      } else if(e.target.value.length < 5) {
          setemailError("Email must be 5 characters or longer!");
      }else{
          setemailError("");
      }
    }
    
    // const onChangePassword = (e) => {
    //     const password = e.target.value;
    //     setPassword(password);
    // };
    const handlepwd = (e) => {
      setPassword(e.target.value);
      if(e.target.value.length < 1) {
          setpwdError("Password is required!");
      } else if(e.target.value.length < 8) {
          setpwdError("Password must be 8 characters or longer!");
      }else{
          setpwdError("");
      }
    }
    
    const handleLogin = (e) => {
        e.preventDefault();
        
        setMessage("");
        setLoading(true);
        
        // form.current.validateAll();
        
        // if (checkBtn.current.context._errors.length === 0) {
        if (!emailError) {
            AuthService.login(email, password).then(
                () => {
                    props.history.push("/");
                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString();
                            
                    setLoading(false);
                    setMessage(resMessage);
                }
            );
        } else {
        setLoading(false);
        }
    };
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!currentUser && 
          <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleLogin} className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              // value={email}
              autoComplete="email"
              autoFocus
              onChange = {handleemail}
            />
            {
              emailError ?
              <p style={{color:'red'}}>{ emailError }</p> :
              ''
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              // value={password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {handlepwd}
            />
            {
              pwdError ?
              <p style={{color:'red'}}>{ pwdError }</p> :
              ''
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        }
        
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
};
    
export default Login;