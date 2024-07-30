// import Button from '@mui/material/Button';
import { Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from 'styled-components';

const ButtonContainer = styled(Box)`
background-color: pink;
display: flex;
justify-content: space-between;
padding: 10px;
`;
function App() {

  return (

    <>
      <ButtonContainer>
        <Button variant='contained'
          color='success'
          startIcon={<DeleteIcon />}

        >First MUI Component</Button>

        <Button
          variant='contained'
          onClick={() => { console.log('Click Event') }}
          // disabled
          endIcon={<SendIcon />}
          sx={{ p: 2 }}
        >First MUI Component</Button>
      </ButtonContainer>
    </>


  )
}

export default App
