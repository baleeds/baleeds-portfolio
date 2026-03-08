import acadia1 from '../assets/photos/landscapes/acadial-summer16-10.jpg';
import glacier1 from '../assets/photos/landscapes/glacier-408.jpg';
import glacier2 from '../assets/photos/landscapes/glacier-409.jpg';
import grandCanyon1 from '../assets/photos/landscapes/grand-canyon-2.jpg';
import grandCanyon2 from '../assets/photos/landscapes/grand-canyon-11.jpg';

import amelia1 from '../assets/photos/people/amelia-grad-7.jpg';
import amelia2 from '../assets/photos/people/amelia-grad-26.jpg';
import amelia3 from '../assets/photos/people/amelia-grad-33.jpg';
import brittany from '../assets/photos/people/brittany-jarrick-24-edited.jpg';
import camp1 from '../assets/photos/people/camp-carmel-2024-360.jpg';
import camp2 from '../assets/photos/people/camp-carmel-2024-417.jpg';
import denver1 from '../assets/photos/people/denver-887.jpg';
import fall1 from '../assets/photos/people/fall-2025-35.jpg';

import car1 from '../assets/photos/events/car-show-713.jpg';
import car2 from '../assets/photos/events/car-show-717.jpg';
import car3 from '../assets/photos/events/car-show-720.jpg';

export type Category = 'landscapes' | 'people' | 'events';

export interface Photo {
  src: ImageMetadata;
  category: Category;
  alt: string;
}

export const photos: Photo[] = [
  // Landscapes
  { src: acadia1, category: 'landscapes', alt: 'Mountain vista at golden hour' },
  { src: glacier1, category: 'landscapes', alt: 'Coastal cliffs and ocean waves' },
  { src: glacier2, category: 'landscapes', alt: 'Rolling green hills at dawn' },
  { src: grandCanyon1, category: 'landscapes', alt: 'Desert landscape under clear skies' },
  { src: grandCanyon2, category: 'landscapes', alt: 'Forest path in autumn colors' },

  // People
  { src: amelia1, category: 'people', alt: 'Portrait in natural light' },
  { src: amelia2, category: 'people', alt: 'Street photography candid moment' },
  { src: amelia3, category: 'people', alt: 'Environmental portrait outdoors' },
  { src: brittany, category: 'people', alt: 'Silhouette against sunset' },
  { src: camp1, category: 'people', alt: 'Close-up portrait with bokeh' },
  { src: camp2, category: 'people', alt: 'Close-up portrait with bokeh' },
  { src: denver1, category: 'people', alt: 'Close-up portrait with bokeh' },
  { src: fall1, category: 'people', alt: 'Close-up portrait with bokeh' },

  // Events
  { src: car1, category: 'events', alt: 'Live music performance' },
  { src: car2, category: 'events', alt: 'Festival crowd at sunset' },
  { src: car3, category: 'events', alt: 'Wedding ceremony moment' },
];

export const categories: Category[] = ['landscapes', 'people', 'events'];

export const categoryLabels: Record<Category, string> = {
  landscapes: 'Landscapes',
  people: 'People',
  events: 'Events',
};
