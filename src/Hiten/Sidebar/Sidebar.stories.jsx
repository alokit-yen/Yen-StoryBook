import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Hiten/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
      <div style={{height: '100vh'}}>
        <Story />
      </div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    heading: { control: 'text' },
    width: { control: 'text' },
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
    navItems: {
      control: 'array',
    },
  },
};

const Template = ({ heading, width, position, navItems }) => (
  <Sidebar heading={heading} width={width} position={position} navItems={navItems} />
);

export const Playground = Template.bind({});
Playground.args = {
  heading: 'My App',
  width: '240px',
  position: 'left',
  navItems: ['Home', 'Profile', 'Settings', 'Logout'],
};
