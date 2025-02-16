import { styled } from '@mui/material/styles';
import Theme from '@/theme/Theme';
import { Chip, Paper, Typography } from '@mui/material';

export const StyledActionMenuItemWrapper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: Theme.spacing(3),
  paddingRight: Theme.spacing(3),
  paddingTop: Theme.spacing(1.5),
  paddingBottom: Theme.spacing(1.5),
  justifyContent: 'center',
  gap: Theme.spacing(2),
});

export const StyledHeader = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: Theme.spacing(1),
});

export const StyledTitle = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: Theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const StyledText = styled(Typography)({
  flexGrow: 1,
});

export const StyledTag = styled(Chip)({
  borderRadius: 0,
  width: 'min-content',
});
