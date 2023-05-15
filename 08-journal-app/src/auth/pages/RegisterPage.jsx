
import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"

const formData = {
  email: 'fariasdossantosalex@gmail.com',
  password: '123456',
  displayName: 'Alex Farias',
}
export const RegisterPage = () => {


  const { displayName, email, password, onInputChange, formState } = useForm(formData);


  const onSubmit = ( event ) => {
    event.preventDefault();
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
