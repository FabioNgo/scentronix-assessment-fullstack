import { StyledActionMenuItemList } from '@/components/ActionMenu/ActionMenuItemList/ActionMenuItemList.styles';
import {
  ActionMenuItem,
  ActionMenuItemProps,
} from '@/components/ActionMenu/ActionMenuItem/ActionMenuItem';

export type ActionMenuItemListProps = {
  items: (ActionMenuItemProps & { id: string })[];
};

export function ActionMenuItemList({ items }: ActionMenuItemListProps) {
  return (
    <StyledActionMenuItemList>
      {items.map(item => {
        return (
          <ActionMenuItem key={`item-${item.id}`} {...item}></ActionMenuItem>
        );
      })}
    </StyledActionMenuItemList>
  );
}
