import { Meta, StoryFn } from '@storybook/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Add } from '@mui/icons-material';
import { ActionMenu } from '@/components/ActionMenu/ActionMenu';

export default {
  title: 'Components/ActionMenu/ActionMenuButton',
  component: ActionMenu,
  argTypes: {
    items: {
      type: { name: 'array', required: true },
      description: 'List of menu items',
    },
    buttonText: {
      type: { name: 'string', required: true },
      description: 'Text of the button',
    },
    marginTop: {
      type: { name: 'number', required: false },
      description: 'Margin top of the button',
    },
  },
} as Meta<typeof ActionMenu>;

const Template: StoryFn<typeof ActionMenu> = args => <ActionMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [],
  buttonText: 'Add',
  buttonIcon: <Add />,
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: [
    {
      text: 'Item 1',
      price: '$10',
      description: 'Description',
      tag: 'My Tag',
      icon: <AddShoppingCartIcon />,
      id: '1',
    },
    {
      text: 'Item 2',
      price: '$10',
      description: 'Description',
      tag: 'My Tag',
      icon: <AddShoppingCartIcon />,
      id: '2',
    },
  ],
  buttonText: 'Add',
  buttonIcon: <Add />,
  marginTop: 0,
};
