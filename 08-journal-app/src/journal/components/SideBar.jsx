import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"


export const SideBar = ({ drawerWidth }) => {
  return (
   <Box
        component='Nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: {sm: 0 }}}
   
   >
        <Drawer
            variant="permanent" // temporary
            open
            sx={{ 
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
             }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>Alex</Typography>
            </Toolbar>
            <Divider />
            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map(text => (
                        <ListItem key={ text } disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot text= {text} />
                            </ListItemIcon>
                            <Grid container>
                                <ListItemText primary={ text } />
                                <ListItemText secondary={ 'Elit veniam labore incididunt nisi consectetur.' } />
                            </Grid>
                        </ListItemButton>

                    </ListItem>
                    ))
                }
            </List>

        </Drawer>
        
   </Box>
  )
}
