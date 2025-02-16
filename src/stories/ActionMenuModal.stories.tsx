import { Meta, StoryFn } from '@storybook/react';
import { ActionMenuModal, ActionMenuModalProps } from '@/components/ActionMenu/ActionMenuModal/ActionMenuModal';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Fab, IconButton } from '@mui/material'; // Adjust path if needed
import { Add } from '@mui/icons-material';


export default {
  title: 'Components/ActionMenu/ActionMenuModal', component: ActionMenuModal, argTypes: {
    items: {
      type: { name: 'array', required: true }, description: 'List of menu items',
    },
    position: {
      type: {
        name: 'enum',
        required: false,
        value: ['top', 'bottom', 'middle'],
      },
      description: 'Position of the menu',
    },
  },
} as Meta<typeof ActionMenuModal>;

const Template: StoryFn<typeof ActionMenuModal> = (args) => <ActionMenuModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [],
};

export const WithItems = Template.bind({});
WithItems.args = {
  items: [{
    text: 'Item 1', price: '$10', description: 'Description', tag: 'My Tag', icon: <AddShoppingCartIcon />, id: '1',
  }, {
    text: 'Item 2', price: '$10', description: 'Description', tag: 'My Tag', icon: <AddShoppingCartIcon />, id: '2',
  }] as ActionMenuModalProps['items'],
  children:
    <Fab>
      <Add />
    </Fab>,
  position: 'bottom',
};

export const WithLongList = Template.bind({});
WithLongList.args = {
  items: Array.from({ length: 10 }, (_, i) => ({
    text: `Item ${i}`,
    price: `$${i * 10}`,
    description: Math.random() < 0.5 ? `Description Item${i}` : undefined,
    tag: Math.random() < 0.5 ? 'My Tag' : undefined,
    icon: <AddShoppingCartIcon />,
    id: i.toString(),
  })) as ActionMenuModalProps['items'],
  children: <IconButton>
    <Fab>
      <Add />
    </Fab>
  </IconButton>,

};
