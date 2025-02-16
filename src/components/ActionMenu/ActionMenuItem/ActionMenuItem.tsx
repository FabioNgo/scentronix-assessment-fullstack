import {
  StyledActionMenuItemWrapper,
  StyledHeader,
  StyledTag,
  StyledText,
  StyledTitle,
} from '@/components/ActionMenu/ActionMenuItem/ActionMenuItem.styles';
import { Typography, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import Theme from '@/theme/Theme';

export type ActionMenuItemProps = {
  icon: ReactNode;
  text: string;
  price: string;
  description?: string;
  tag?: string;
};

export function ActionMenuItem({
  text,
  icon,
  price,
  tag,
  description,
}: ActionMenuItemProps) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <StyledActionMenuItemWrapper
      sx={{
        paddingTop: Theme.spacing(isMobile ? 1.5 : 2),
        paddingBottom: Theme.spacing(isMobile ? 1.5 : 2),
      }}
    >
      <StyledHeader>
        <StyledTitle>
          {icon}
          <StyledText variant={'body1'}>{text}</StyledText>
          <Typography>{price}</Typography>
        </StyledTitle>
        {description && (
          <Typography variant={'subtitle1'}>{description}</Typography>
        )}
      </StyledHeader>
      {tag && <StyledTag label={tag}></StyledTag>}
    </StyledActionMenuItemWrapper>
  );
}
