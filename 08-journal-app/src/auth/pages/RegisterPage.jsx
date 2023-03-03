
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form >
          <Grid container >

          <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Nombre Completo" type="text" placeholder="Nombre Completo" fullWidth/>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Correo" type="email" placeholder="correo@google.com" fullWidth/>
            </Grid>

             <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth autoComplete="contraseña actual"/>
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 2 }}>

              <Grid item xs={ 12 }>
                <Button variant="contained" fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>

            

            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ m: 1 }}> ¿Ya tienes cuenta? </Typography>
                <Button component={ RouterLink } to="/auth/login" >
                  Ingresar
                </Button>
            

            </Grid>

          </Grid>
        </form>

    </AuthLayout>
        
  )
}
