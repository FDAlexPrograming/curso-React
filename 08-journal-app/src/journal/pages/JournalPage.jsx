import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"



export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis sapiente. Natus non illo enim eveniet ut! Quisquam dolorum eaque ipsa dolores! Soluta alias exercitationem autem maiores nihil veritatis nulla!</Typography> */}
      <NoteView />
    </JournalLayout>
  )
}
