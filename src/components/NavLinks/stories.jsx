import { NavLinks } from '.';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    children: 'NavLinks',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
