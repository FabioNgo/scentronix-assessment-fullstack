import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../src/theme/Theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={Theme}>
        <Story />
      </ThemeProvider>
    ),
  ],

};

export default preview;
