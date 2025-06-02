import React from 'react';
import Avatar from './Avatar';

export default {
  title: 'Hiten/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export const ImageAvatar = () => (
  <Avatar type="image" src="https://i.pravatar.cc/150?img=3" size={64} />
);

export const InitialsAvatar = () => (
  <Avatar type="initials" initials="JS" size={64} />
);

export const IconAvatar = () => (
  <Avatar type="icon" icon="👨‍💻" size={64} />
);
