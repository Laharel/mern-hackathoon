import React,{useState} from 'react';
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


const Copyright = () =>{
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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = (props) =>{
  const classes = useStyles();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [fnameError, setfnameError] = useState("");  
  const [lnameError, setlnameError] = useState("");  
  const [emailError, setemailError] = useState("");  
  const [pwdError, setpwdError] = useState("");  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(undefined) 
  
  const createuser = (e) => {
      const newuser = { firstname, lastname,email, password };
      console.log("Welcome", newuser);
  };
  

  const handlefname = (e) => {
      setfirstname(e.target.value);
      if(e.target.value.length < 1) {
          setfnameError("First Name is required!");
      } else if(e.target.value.length < 3) {
          setfnameError("First Name must be 3 characters or longer!");
      }else{
          setfnameError("");
      }
  }
  

  const handlelname = (e) => {
      setlastname(e.target.value);
      if(e.target.value.length < 1) {
          setlnameError("Last Name is required!");
      } else if(e.target.value.length < 3) {
          setlnameError("Last Name must be 3 characters or longer!");
      }else{
          setlnameError("");
      }
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

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

  const handleRegister = (e) => {
    e.preventDefault();
    
    setMessage("");
    setLoading(true);
    
    // form.current.validateAll();
    
    // if (checkBtn.current.context._errors.length === 0) {
    if (!fnameError && !lnameError && !pwdError && !emailError) {
        AuthService.register(firstname, lastname, email, username, password).then(
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
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={handleRegister} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={ handlefname } />
                {
                    fnameError ?
                    <p style={{color:'red'}}>{ fnameError }</p> :
                    ''
                }
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                onChange={ handlelname } />
                {
                    lnameError ?
                    <p style={{color:'red'}}>{ lnameError }</p> :
                    ''
                }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleUsername}
              />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={ handleemail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={ handlepwd } />
                {
                    pwdError ?
                    <p style={{color:'red'}}>{ pwdError }</p> :
                    ''
                }
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default SignUp;