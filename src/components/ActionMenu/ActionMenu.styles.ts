import { styled } from "@mui/material/styles";
import { Button, Fab } from '@mui/material';
import Theme from '@/theme/Theme';

export const StyledWrapper = styled('div')({
  display: 'flex'
})

export const StyledButton = styled(Button)({
  height: Theme.spacing(5)
})

export const StyleCloseButton = styled(Fab)({
  height: Theme.spacing(5),
  width: Theme.spacing(5)
})