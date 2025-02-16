import { Meta, StoryFn } from '@storybook/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  ActionMenuItemList,
  ActionMenuItemListProps,
} from '@/components/ActionMenu/ActionMenuItemList/ActionMenuItemList'; // Adjust path as needed

// Define some example items.  Replace with your actual component types.
const exampleItems: ActionMenuItemListProps['items'] = [
  { id: '1', icon: <AddShoppingCartIcon />, text: 'Item 1', price: '$10' },
  {
    id: '2',
    icon: <AddShoppingCartIcon />,
    text: 'Item 2',
    price: '$25',
    description: 'Description',
  },
  {
    id: '3',
    icon: <AddShoppingCartIcon />,
    text: 'Item 3',
    price: '$50',
    tag: 'My Tag',
  },
];

// Define the meta information for the story
export default {
  title: 'Components/ActionMenu/ActionMenuItemList',
  component: ActionMenuItemList,
  argTypes: {
    items: {
      description:
        'An array of ActionMenuItemProps objects with an id property.',
      type: { name: 'array', required: true },
      control: { type: 'object' }, // Consider using a custom control if needed.
    },
  },
} as Meta<typeof ActionMenuItemList>;

// Create a template for the story
const Template: StoryFn<typeof ActionMenuItemList> = (
  args: ActionMenuItemListProps
) => <ActionMenuItemList {...args} />;

// Export the story with some examples.  Note how we're using the same types
export const Default = Template.bind({});
Default.args = {
  items: exampleItems,
};
