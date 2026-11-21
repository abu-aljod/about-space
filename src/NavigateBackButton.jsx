import Button from '@mui/material/Button';

function NavigateBackButton({ onClick, disabled }) {
  return (
    <Button variant="contained" onClick={onClick} disabled={!disabled}>
      {`< Back`}
    </Button>
  );
}

export default NavigateBackButton;
