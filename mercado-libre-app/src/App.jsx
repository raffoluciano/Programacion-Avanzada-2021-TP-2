import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  return (
    <div >
      <Container>

         <Button  sx={{ m: 2 }} variant="contained">Contained</Button>
         <DeleteIcon color="primary" />
       
      </Container>   
    </div>
  );
}

export default App;
