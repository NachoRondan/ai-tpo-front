import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useNavigate, Link} from 'react-router-dom';
import { login, getStudentProfile } from '../controllers/userController';
import { Paper } from '@mui/material';


export default function SignIn({setUser}) {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var user = {
      email : data.get('email'),
      password : data.get('password')
    }
    validateLogin(user)    
  };

  const validateLogin = async function(user) {
    //Devolver el usuario con toda su info y setearlo 
    let getLogin =  await login(user);
    let studentProfile = await getStudentProfile();
    if (getLogin.rdo===0)
    {
      
      let User = {
        name: getLogin.user.name,
        lastname: getLogin.user.lastname,
        email: getLogin.user.email,
        phoneNumber: getLogin.user.phoneNumber,
        studentProfileId: getLogin.user.studentProfileId,
        professorProfileId: getLogin.user.professorProfileId ,
        birthday: studentProfile.profile.birthdate,
        finishedStudies: studentProfile.profile.studies,
        onGoingStudies: studentProfile.profile.studies,
        contrataciones: studentProfile.profile.bookedCourses
      };
      console.log(User)
      setUser(User);
      navigate('/home')
    }
    if (getLogin.rdo===1)
    {
      alert(getLogin.mensaje)
    }
  }

  return (
    <Box flex={12} py={2}>
    <Container component="main" maxWidth="md" >
    <Paper>
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py:8  
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordar Usuario"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={"/recuperarClave"} style={{ textDecoration: 'none', color: 'unset' }}>
                <Typography color="primary.main">
                  Olvide mi contraseña
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to={"/registro"} style={{ textDecoration: 'none', color: 'unset' }}>
                <Typography color="primary.main">
                  Crear cuenta
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      </Container>
    </Paper>
    </Container>
    </Box>
  );
}