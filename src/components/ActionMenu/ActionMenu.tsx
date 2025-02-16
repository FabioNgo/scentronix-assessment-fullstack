import { ComponentProps, useEffect, useRef, useState } from 'react';
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

  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] =
    useState<ActionMenuModalProps['position']>('top');
  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    if (rect) {
      if (rect.top < 0) {
        setPosition('middle');
        return;
      }
      if (rect.bottom > screenHeight) {
        setPosition('bottom');
        return;
      }
      setPosition('top');
    } else {
      setPosition('top');
    }
  }, [isOpen]);

  return (
    <StyledWrapper ref={ref} style={{ marginTop: '80vh' }}>
      <ActionMenuModal items={items} position={position} isOpen={isOpen}>
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
