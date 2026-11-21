import Button from '@mui/material/Button';

function NavigateForwardButton({ onClick, disabled }) {
  return (
     <Button variant="contained" onClick={onClick} disabled={!disabled}>
      {`Forward >`}
    </Button>
  )
}

export default NavigateForwardButton;