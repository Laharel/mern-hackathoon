import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setemailError] = useState("");  
  const [pwdError, setpwdError] = useState("");  
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

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
    const createuser = (e) => {
        e.preventDefault();
        const newuser = { email, password };
        console.log("Welcome", newuser);
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	    return "Thank you for creating a user!";
	} else {
	    return "Welcome, please Login";
	}
    };

  return (
    <form onSubmit={ createuser } className={classes.root} Validate autoComplete="off">
        <h3>{ formMessage() }</h3>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Email or Phone number"
          variant="outlined"
          onChange={ handleemail }
        />                
        {
          emailError ?
          <p style={{color:'red'}}>{ emailError }</p> :
          ''
        }
        <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue={ emailError }
        helperText="Incorrect entry."
        variant="outlined"
      />:
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={ handlepwd }
        />
        {
          pwdError ?
          <p style={{color:'red'}}>{ pwdError }</p> :
          ''
        }
      </div>
      
    </form>
  );
}
export default Login;