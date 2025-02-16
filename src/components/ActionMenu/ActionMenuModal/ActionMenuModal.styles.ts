import { styled } from '@mui/material/styles';
import Theme from '@/theme/Theme';

export const StyledActionModal = styled('div')({
  display: 'flex',
  flexDirection: 'row-reverse',
  gap: Theme.spacing(2),
  width: '100%',
});

export const StyledButton = styled('div')({
  width: 'min-content',
  height: 'min-content',
});

export const StyledContent = styled('div')<{
  top: number;
}>(({ top }) => ({
  position: 'relative',
  top: top,
}));
