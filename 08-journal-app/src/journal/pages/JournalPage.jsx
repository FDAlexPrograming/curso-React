import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"



export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis sapiente. Natus non illo enim eveniet ut! Quisquam dolorum eaque ipsa dolores! Soluta alias exercitationem autem maiores nihil veritatis nulla!</Typography> */}
      {/* <NoteView /> */}
      <NothingSelectedView />

      <IconButton
       size='large'
        sx={{ 
          color: 'white',
          backgroundColor: 'error.main',
          ':hover':{ backgroundColor: 'error.main', opacity: 0.7, transition:'.7s', },
          position: 'fixed',
          right: 50,
          bottom: 50
         }}
      
      >
        <AddOutlined />

      </IconButton>
    </JournalLayout>
  )
}
