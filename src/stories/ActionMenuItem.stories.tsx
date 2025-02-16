import { Meta, StoryObj } from '@storybook/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ActionMenuItem } from '@/components/ActionMenu/ActionMenuItem/ActionMenuItem'; // Example icons

const meta = {
  title: 'Components/ActionMenu/ActionMenuItem',
  component: ActionMenuItem,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: 'object',
      description: 'MUI SVG Icon component',
    },
    text: {
      control: 'text',
      description: 'Main text',
    },
    price: {
      control: 'text',
      description: 'Price',
    },
    description: {
      control: 'text',
      description: 'optional description',
    },
    tag: {
      control: 'text',
      description: 'Optional Tag',
    },
  },
} satisfies Meta<typeof ActionMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

//Default Story
export const Default: Story = {
  args: {
    icon: <AddShoppingCartIcon />,
    text: 'Add Item',
    price: '$10',
  },
};

// Story with a different icon and price
export const Variant: Story = {
  args: {
    icon: <AddShoppingCartIcon />,
    text: 'Remove Item',
    price: '$25',
  },
};

// Story with a longer text
export const WithDescription: Story = {
  args: {
    icon: <AddShoppingCartIcon />,
    text: 'Add a really long item name that will test the text wrapping in the component',
    price: '$100',
    description: 'optional description',
  },
};
// Story with a longer text
export const WithTag: Story = {
  args: {
    icon: <AddShoppingCartIcon />,
    text: 'Add a really long item name that will test the text wrapping in the component',
    price: '$100',
    description: 'optional description',
    tag: 'tag',
  },
};
