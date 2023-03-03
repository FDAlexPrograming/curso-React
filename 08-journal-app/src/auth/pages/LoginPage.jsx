import { Link as RouterLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useForm } from "../../hooks"
import { AuthLayout } from "../layout/AuthLayout"
import { chekingAuthentication } from "../../store/auth"



export const LoginPage = () => {

  const dispatch =  useDispatch();

  const { email, password, onInputChange } =   useForm({
    email: 'fariasdossantos@hmail.com',
    password: '123456'
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch( chekingAuthentication());
  }

  const onGloogleSignIn = () => {
    console.log('onGloogleSignIn');
    dispatch( startGoogleSignIn());
  }



  return (
      <AuthLayout title="Login">
        <form onSubmit={ onSubmit }>
          <Grid container >

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Correo" 
                type="email" 
                placeholder="correo@example.com" 
                fullWidth 
                name="email"
                value={ email }
                onChange={ onInputChange }
              />
                
            </Grid>

              <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder="Contraseña" 
                fullWidth
                name="password" 
                value={ password }
                onChange={ onInputChange }
                autoComplete="contraseña actual"
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                  variant="contained"
                  fullWidth
                  onClick={ onGloogleSignIn }
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Button component={ RouterLink } to="/auth/register" >
                Crear una cuenta
              </Button>
             

            </Grid>

          </Grid>
        </form>

      </AuthLayout>   
  )
}
