import { ComponentProps, useState } from 'react';
import {
  StyleCloseButton,
  StyledButton,
  StyledWrapper,
} from '@/components/ActionMenu/ActionMenu.styles';
import { Button } from '@mui/material';
import {
  ActionMenuModal,
  ActionMenuModalProps,
} from '@/components/ActionMenu/ActionMenuModal/ActionMenuModal';
import { Add } from '@mui/icons-material';

export type ActionMenuProps = {
  buttonText: string;
  buttonIcon: ComponentProps<typeof Button>['startIcon'];
  items?: ActionMenuModalProps['items'];
};

export function ActionMenu({ buttonText, buttonIcon, items }: ActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <ActionMenuModal items={items} position={'top'} isOpen={isOpen}>
        {!isOpen && (
          <StyledButton
            variant={'contained'}
            startIcon={buttonIcon}
            onClick={() => setIsOpen(true)}
          >
            {buttonText}
          </StyledButton>
        )}
        {isOpen && (
          <StyleCloseButton onClick={() => setIsOpen(false)}>
            <Add></Add>
          </StyleCloseButton>
        )}
      </ActionMenuModal>
    </StyledWrapper>
  );
}
