import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>
      <NavBar drawerWidth={ drawerWidth }  />
      <SideBar drawerWidth={ drawerWidth } />

        {/* Navbar drawerWidth */}
        {/* Sidebar drawerWidth */}

        <Box 
            component='main'
            sx={{ flex: 1, p:2 }}
        >
            {/* Toolbar */}
            <Toolbar />
            { children }

        </Box>


    </Box>
  )
}
