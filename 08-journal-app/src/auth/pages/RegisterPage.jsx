
import { useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"


export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const formData = {
    email: 'fariasdossantosalex@gmail.com',
    password: '123456',
    displayName: 'Alex Farias',
  }

  const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe de tener un @'],
    password: [ (value) => value.length >= 6, 'La password debe de tener más de 6 caracteres' ],
    displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio' ],
  }


  const { displayName, email, password, onInputChange, formState, isFormValaid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);


  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);
    if ( !isFormValaid ) return;
    console.log(formState)
  }


  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit= { onSubmit } >
        <Grid container >

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="Nombre Completo" 
            type="text" 
            placeholder="Nombre Completo" 
            fullWidth
            name="displayName"
            value={ displayName }
            onChange={ onInputChange }
            error={ !!displayNameValid && formSubmitted }
            helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="Correo" 
            type="email" 
            placeholder="correo@google.com" 
            fullWidth
            name="email"
            value={ email }
            onChange={ onInputChange }
            error={ !!emailValid && formSubmitted }
            helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField 
            label="Contraseña" 
            type="password" 
            placeholder="Contraseña" 
            fullWidth 
            autoComplete="contraseña actual"
            name="password"
            value={ password }
            onChange={ onInputChange }
            error={ !!passwordValid && formSubmitted }
            helperText={ passwordValid }
            
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                fullWidth
                type="submit" 
                >
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ m: 1 }}> ¿Ya tienes cuenta? </Typography>
            <Button component={RouterLink} to="/auth/login" sx={{
              fontSize: '15px',
              ':hover': { backgroundColor: '#6c6b73', color: 'white', transition: '.5s', },
            }}
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
