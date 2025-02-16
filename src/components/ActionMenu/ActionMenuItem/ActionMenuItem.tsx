import {
  StyledActionMenuItemWrapper,
  StyledHeader,
  StyledTag,
  StyledText,
  StyledTitle,
} from '@/components/ActionMenu/ActionMenuItem/ActionMenuItem.styles';
import { Typography } from '@mui/material';
import { ReactNode } from 'react';

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
  return (
    <StyledActionMenuItemWrapper>
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
