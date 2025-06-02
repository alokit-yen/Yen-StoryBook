// Carousel.stories.jsx
import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'ALOKIT/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['image', 'card', 'testimonial'],
      description: 'Type of carousel: image, card, or testimonial',
    },
    items: {
      description: 'List of items to display in the carousel',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A reusable Carousel component using `react-slick`. Supports image, card, and testimonial modes.',
      },
    },
  },
};

const Template = (args) => <Carousel {...args} />;

export const ImageCarousel = Template.bind({});
ImageCarousel.args = {
  type: 'image',
  items: [
    { src: 'https://picsum.photos/id/1018/800/400', alt: 'Mountain View' },
    { src: 'https://picsum.photos/id/1015/800/400', alt: 'Forest Path' },
    { src: 'https://picsum.photos/id/1019/800/400', alt: 'Lake View' },
    { src: 'https://picsum.photos/id/1011/800/400', alt: 'City View' },
    { src: 'https://picsum.photos/id/1016/800/400', alt: 'Desert Landscape' },
  ],
};
ImageCarousel.parameters = {
  docs: {
    description: {
      story: 'An editable image carousel with photos from Picsum.photos. Change URLs and alt texts in controls.',
    },
  },
};

export const CardCarousel = Template.bind({});
CardCarousel.args = {
  type: 'card',
  items: [
    { title: 'Analytics', description: 'Track your business metrics in real time.' },
    { title: 'Team Management', description: 'Collaborate and manage projects easily.' },
    { title: 'Reports', description: 'Generate detailed performance reports.' },
    { title: 'Integrations', description: 'Works with your existing tools.' },
  ],
};
CardCarousel.parameters = {
  docs: {
    description: {
      story: 'A card-based carousel useful for showing feature highlights.',
    },
  },
};

export const TestimonialCarousel = Template.bind({});
TestimonialCarousel.args = {
  type: 'testimonial',
  items: [
    {
      quote: 'This platform revolutionized our workflow!',
      author: 'Sara Kim, Operations Lead',
    },
    {
      quote: 'Fantastic UI and support. Highly recommended.',
      author: 'Daniel Rivera, Product Manager',
    },
    {
      quote: 'A must-have for startups—it just works.',
      author: 'Leila Hassan, Founder @ BuildWell',
    },
  ],
};
TestimonialCarousel.parameters = {
  docs: {
    description: {
      story: 'A rotating carousel for client testimonials with quotes and authors.',
    },
  },
};
