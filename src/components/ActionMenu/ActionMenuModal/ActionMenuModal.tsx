import {
  StyledActionModal,
  StyledButton,
  StyledContent,
} from '@/components/ActionMenu/ActionMenuModal/ActionMenuModal.styles';
import {
  ActionMenuItemList,
  ActionMenuItemListProps,
} from '@/components/ActionMenu/ActionMenuItemList/ActionMenuItemList';
import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

export type ActionMenuModalProps = {
  items: ActionMenuItemListProps['items']
  position?: 'top' | 'bottom' | 'middle',
  children?: ReactNode,
}

export function ActionMenuModal({ items, position = 'bottom', children }: ActionMenuModalProps) {

  const contentRef: RefObject<HTMLDivElement | null> = useRef(null);
  const buttonRef: RefObject<HTMLDivElement | null> = useRef(null);
  const [top, setTop] = useState(0);
  useEffect(() => {
    const button = buttonRef.current?.getBoundingClientRect();
    const content = contentRef.current?.getBoundingClientRect();

    switch (position) {
      case 'top':
        setTop(0);
        break;
      case 'middle':
        setTop(() => {
          const verticalCenterButton = (button?.top ?? 0) + (button?.height ?? 0) / 2;
          const verticalCenterContent = (content?.top ?? 0) + (content?.height ?? 0) / 2;
          return verticalCenterButton - verticalCenterContent;
        });
        break;
      case 'bottom':
        setTop(() => {
          const buttonHeight = button?.height ?? 0;
          const contentHeight = content?.height ?? 0;
          return buttonHeight - contentHeight;
        });
    }
  }, [position]);

  return <StyledActionModal>
    <StyledButton ref={buttonRef}>
      {children}
    </StyledButton>
    <StyledContent ref={contentRef} top={top}>
      <ActionMenuItemList
        items={items}
      />
    </StyledContent>

  </StyledActionModal>;
}