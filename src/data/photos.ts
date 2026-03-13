import acadia1 from '../assets/photos/landscapes/acadial-summer16-10.jpg';
import glacier1 from '../assets/photos/landscapes/glacier-408.jpg';
import glacier2 from '../assets/photos/landscapes/glacier-409.jpg';
import glacier3 from '../assets/photos/landscapes/DSCF0587-22.jpg';
import glacier4 from '../assets/photos/landscapes/glacier-4.jpg';
import glacier5 from '../assets/photos/landscapes/glacier-24.jpg';
import hills1 from '../assets/photos/landscapes/hills-3.jpg';
import grandCanyon1 from '../assets/photos/landscapes/grand-canyon-2.jpg';
import grandCanyon2 from '../assets/photos/landscapes/grand-canyon-11.jpg';
import grandCanyon3 from '../assets/photos/landscapes/grand-canyon-8.jpg';
import grandCanyon4 from '../assets/photos/landscapes/grand-canyon-4.jpg';
import grandCanyon5 from '../assets/photos/landscapes/grand-canyon-33-edited.jpg';
import grandCanyon6 from '../assets/photos/landscapes/grand-canyon-37.jpg';
import beaconHeights from '../assets/photos/landscapes/beacon-heights-611.jpg';
import denver1 from '../assets/photos/landscapes/denver-890.jpg';
import denver2 from '../assets/photos/landscapes/denver-894.jpg';
import denver3 from '../assets/photos/landscapes/denver-895.jpg';
import fripp1 from '../assets/photos/landscapes/fripp-island-2024-310.jpg'
import fripp2 from '../assets/photos/landscapes/fripp-island-2024-339.jpg'
import kauai1 from '../assets/photos/landscapes/kauai-web-1.jpg'
import kauai2 from '../assets/photos/landscapes/kauai-web-39.jpg'
import kauai3 from '../assets/photos/landscapes/kauai-web-65.jpg'
import kauai4 from '../assets/photos/landscapes/kauai-web-72.jpg'
import london1 from '../assets/photos/landscapes/london-summer15-30.jpg'
import mountains1 from '../assets/photos/landscapes/mountains-2024-441.jpg'
import mountains2 from '../assets/photos/landscapes/parkway-500.jpg'
import mountains3 from '../assets/photos/landscapes/parkway-2024-457.jpg'
import mountains4 from '../assets/photos/landscapes/parkway-2024-451.jpg'
import mountains5 from '../assets/photos/landscapes/parkway-2024-454.jpg'
import nic1 from '../assets/photos/landscapes/nicaragua-spring15-13.jpg'
import northernLights from '../assets/photos/landscapes/northern-lights-2024-184.jpg'
import southDakota2 from '../assets/photos/landscapes/south-dakota-2024-252.jpg'
import southDakota3 from '../assets/photos/landscapes/south-dakota-2024-258.jpg'
import southDakota4 from '../assets/photos/landscapes/south-dakota-2024-283.jpg'
import southDakota5 from '../assets/photos/landscapes/south-dakota-2024-286.jpg'

import amelia1 from '../assets/photos/people/amelia-grad-7.jpg';
import amelia2 from '../assets/photos/people/amelia-grad-26.jpg';
import amelia3 from '../assets/photos/people/amelia-grad-33.jpg';
import brittany from '../assets/photos/people/brittany-jarrick-24-edited.jpg';
import camp1 from '../assets/photos/people/camp-carmel-2024-360.jpg';
import camp2 from '../assets/photos/people/camp-carmel-2024-417.jpg';
import denverPeople1 from '../assets/photos/people/denver-887.jpg';
import winterCampPeople1 from '../assets/photos/people/2023-winter-camp-110.jpg';
import winterCampPeople2 from '../assets/photos/people/2023-winter-camp-134.jpg';
import amosPool from '../assets/photos/people/amos-pool-613.jpg';
import amsterdam from '../assets/photos/people/amsterdam-summer15-18.jpg';
import easter1 from '../assets/photos/people/easter-2025-898.jpg';
import fall1 from '../assets/photos/people/fall-2025-35.jpg';
import fall2 from '../assets/photos/people/fall-hikes-2025-986.jpg';
import fall3 from '../assets/photos/people/fall-hikes-2025-992.jpg';
import fall4 from '../assets/photos/people/falll-hike-648.jpg';
import grad1 from '../assets/photos/people/grad-web-2.jpg';
import maxKimmy1 from '../assets/photos/people/max-and-kimmy-824.jpg';
import maxKimmy2 from '../assets/photos/people/max-and-kimmy-846.jpg';
import maxKimmy3 from '../assets/photos/people/max-and-kimmy-831.jpg';
import mountainsPeople1 from '../assets/photos/people/mountains-2024-443.jpg';
import nicPeople1 from '../assets/photos/people/nicaragua-spring15-78.jpg';
import nicPeople2 from '../assets/photos/people/nicaragua-spring15-109.jpg';
import nicPeople3 from '../assets/photos/people/nicaragua-spring15-126.jpg';
import nola1 from '../assets/photos/people/nola-diversity-55.jpg';
import snowDay1 from '../assets/photos/people/snow-day-879.jpg';
import sofia1 from '../assets/photos/people/sofia-birthday-722.jpg';
import sofia2 from '../assets/photos/people/sofia-birthday-737.jpg';
import sofia3 from '../assets/photos/people/sofia-birthday-750.jpg';
import summer1 from '../assets/photos/people/summer-2025-949.jpg';
import summer2 from '../assets/photos/people/summer-stuff-647.jpg';
import thanksgiving1 from '../assets/photos/people/thanksgiving-2022-664.jpg';
import thanksgiving2 from '../assets/photos/people/thanksgiving-2022-683.jpg';
import workCamp1 from '../assets/photos/people/work-camp-2024-506.jpg';


import car1 from '../assets/photos/events/car-show-713.jpg';
import car2 from '../assets/photos/events/car-show-717.jpg';
import car3 from '../assets/photos/events/car-show-720.jpg';
import parmalee1 from '../assets/photos/events/parmalee-5.jpg';
import parmalee12 from '../assets/photos/events/parmalee-12.jpg';
import parmalee18 from '../assets/photos/events/parmalee-18.jpg';
import parmalee30 from '../assets/photos/events/parmalee-30.jpg';

export type Category = 'landscapes' | 'people' | 'events';

export interface Photo {
  src: ImageMetadata;
  category: Category;
  alt: string;
  date: string;
  shutter?: string;
  aperture?: string;
  iso?: number;
  focalLength?: string;
  camera?: string;
}

export const photos: Photo[] = [
  // Landscapes (sorted most recent first)
  { src: denver3, category: 'landscapes', alt: 'Mountain range panorama', date: '2025-03-24', shutter: '1/350', aperture: 'f/7.1', iso: 200, focalLength: '35mm', camera: 'X-T1' },
  { src: denver2, category: 'landscapes', alt: 'Urban landscape at dusk', date: '2025-03-23', shutter: '1/1100', aperture: 'f/9', iso: 200, focalLength: '35mm', camera: 'X-T1' },
  { src: denver1, category: 'landscapes', alt: 'City skyline with mountains', date: '2025-03-23', shutter: '1/1500', aperture: 'f/9', iso: 200, focalLength: '35mm', camera: 'X-T1' },
  { src: beaconHeights, category: 'landscapes', alt: 'Mountain summit view', date: '2024-08-10', shutter: '1/250', aperture: 'f/5.6', iso: 400, focalLength: '84mm', camera: 'X-T1' },
  { src: mountains2, category: 'landscapes', alt: 'Winding mountain road', date: '2024-07-29', shutter: '8s', aperture: 'f/8', iso: 200, focalLength: '24mm', camera: 'X-T1' },
  { src: mountains3, category: 'landscapes', alt: 'Blue Ridge mountain layers', date: '2024-07-23', shutter: '2.5s', aperture: 'f/9', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: mountains5, category: 'landscapes', alt: 'Parkway vista point', date: '2024-07-22', shutter: '1/8', aperture: 'f/5.6', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: mountains4, category: 'landscapes', alt: 'Foggy mountain overlook', date: '2024-07-22', shutter: '1/180', aperture: 'f/5.6', iso: 400, focalLength: '84mm', camera: 'X-T1' },
  { src: mountains1, category: 'landscapes', alt: 'Mountain peaks in morning light', date: '2024-07-20', shutter: '1/4', aperture: 'f/5.6', iso: 200, focalLength: '18mm', camera: 'X-T1' },
  { src: fripp2, category: 'landscapes', alt: 'Beach landscape with waves', date: '2024-06-06', shutter: '1/125', aperture: 'f/5', iso: 320, focalLength: '53mm', camera: 'X-T1' },
  { src: fripp1, category: 'landscapes', alt: 'Coastal shoreline at sunset', date: '2024-06-04', shutter: '1/1300', aperture: 'f/2.8', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: southDakota5, category: 'landscapes', alt: 'Rugged terrain overlook', date: '2024-05-12', shutter: '1/180', aperture: 'f/8', iso: 800, focalLength: '84mm', camera: 'X-T1' },
  { src: southDakota4, category: 'landscapes', alt: 'Rolling hills and grasslands', date: '2024-05-12', shutter: '1/4000', aperture: 'f/2', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: northernLights, category: 'landscapes', alt: 'Northern lights in night sky', date: '2024-05-11', shutter: '13s', aperture: 'f/2', iso: 1600, focalLength: '18mm', camera: 'X-T1' },
  { src: southDakota3, category: 'landscapes', alt: 'Open plains at sunset', date: '2024-05-10', shutter: '1/420', aperture: 'f/8', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: southDakota2, category: 'landscapes', alt: 'Badlands rock formations', date: '2024-05-10', shutter: '1/1100', aperture: 'f/5.6', iso: 200, focalLength: '18mm', camera: 'X-T1' },
  { src: glacier3, category: 'landscapes', alt: 'Mountain lake reflection', date: '2019-07-24', shutter: '1/800', aperture: 'f/8', iso: 200, focalLength: '84mm', camera: 'X-E1' },
  { src: glacier2, category: 'landscapes', alt: 'Rolling green hills at dawn', date: '2019-07-24', shutter: '1/640', iso: 200, focalLength: '128mm', camera: 'X-E1' },
  { src: glacier5, category: 'landscapes', alt: 'Glacier marsh with mountain reflections', date: '2019-07-22', shutter: '1/500', aperture: 'f/8', iso: 200, focalLength: '53mm', camera: 'X-E1' },
  { src: glacier1, category: 'landscapes', alt: 'Coastal cliffs and ocean waves', date: '2019-07-22', shutter: '1/60', aperture: 'f/4', iso: 250, focalLength: '84mm', camera: 'X-E1' },
  { src: glacier4, category: 'landscapes', alt: 'Lake shoreline with mountain peaks', date: '2019-07-20', shutter: '1/320', aperture: 'f/11', iso: 200, focalLength: '53mm', camera: 'X-E1' },
  { src: hills1, category: 'landscapes', alt: 'Winding road through winter hills at sunset', date: '2018-03-23', shutter: '1/60', aperture: 'f/13', iso: 200, focalLength: '84mm', camera: 'X-E1' },
  { src: kauai4, category: 'landscapes', alt: 'Tropical landscape at golden hour', date: '2017-08-24', shutter: '1/60', aperture: 'f/6.4', iso: 400, focalLength: '53mm', camera: 'X-E1' },
  { src: kauai3, category: 'landscapes', alt: 'Ocean cliffs and surf', date: '2017-08-22', shutter: '1/125', aperture: 'f/8', iso: 200, focalLength: '53mm', camera: 'X-E1' },
  { src: kauai2, category: 'landscapes', alt: 'Lush green valley', date: '2017-08-20', shutter: '5s', iso: 200, focalLength: '128mm', camera: 'X-E1' },
  { src: kauai1, category: 'landscapes', alt: 'Tropical coastline view', date: '2017-08-18', shutter: '1/10', aperture: 'f/8', iso: 200, focalLength: '84mm', camera: 'X-E1' },
  { src: acadia1, category: 'landscapes', alt: 'Mountain vista at golden hour', date: '2016-08-15', shutter: '1/640', aperture: 'f/6.4', iso: 200, focalLength: '83mm', camera: 'X-E1' },
  { src: london1, category: 'landscapes', alt: 'City architecture and skyline', date: '2015-08-06', shutter: '1/60', iso: 640, focalLength: '128mm', camera: 'X-E1' },
  { src: grandCanyon6, category: 'landscapes', alt: 'Desert rock formations', date: '2015-06-05', shutter: '1/800', iso: 400, focalLength: '75mm', camera: 'X-E1' },
  { src: grandCanyon5, category: 'landscapes', alt: 'Canyon layers in golden light', date: '2015-06-05', shutter: '30s', iso: 200, focalLength: '75mm', camera: 'X-E1' },
  { src: grandCanyon2, category: 'landscapes', alt: 'Forest path in autumn colors', date: '2015-06-04', shutter: '1/125', iso: 320, focalLength: '75mm', camera: 'X-E1' },
  { src: grandCanyon3, category: 'landscapes', alt: 'Canyon walls at sunrise', date: '2015-06-03', iso: 320, focalLength: '75mm', camera: 'X-E1' },
  { src: grandCanyon4, category: 'landscapes', alt: 'Vast canyon overlook', date: '2015-06-03', shutter: '1/500', aperture: 'f/2.8', iso: 250, focalLength: '53mm', camera: 'X-E1' },
  { src: grandCanyon1, category: 'landscapes', alt: 'Desert landscape under clear skies', date: '2015-06-03', shutter: '1/500', aperture: 'f/5.6', iso: 200, focalLength: '53mm', camera: 'X-E1' },
  { src: nic1, category: 'landscapes', alt: 'Tropical scenery', date: '2015-03-07', shutter: '1/4000', aperture: 'f/5', iso: 200, focalLength: '53mm', camera: 'X-E1' },

  // People (sorted most recent first)
  { src: fall1, category: 'people', alt: 'Autumn outdoor portrait', date: '2025-11-08', shutter: '1/340', aperture: 'f/4', iso: 400, focalLength: '84mm', camera: 'X-T1' },
  { src: fall3, category: 'people', alt: 'Fall foliage portrait', date: '2025-11-01', shutter: '1/3500', aperture: 'f/2', iso: 400, focalLength: '35mm', camera: 'X-T1' },
  { src: fall2, category: 'people', alt: 'Hiking trail candid', date: '2025-11-01', shutter: '1/420', aperture: 'f/5.6', iso: 400, focalLength: '35mm', camera: 'X-T1' },
  { src: summer1, category: 'people', alt: 'Summer outdoor portrait', date: '2025-07-30', shutter: '1/500', aperture: 'f/5.6', iso: 400, focalLength: '35mm', camera: 'X-T1' },
  { src: easter1, category: 'people', alt: 'Easter gathering portrait', date: '2025-04-19', shutter: '1/640', aperture: 'f/5.6', iso: 200, focalLength: '35mm', camera: 'X-T1' },
  { src: denverPeople1, category: 'people', alt: 'Portrait in urban setting', date: '2025-03-23', shutter: '1/1000', aperture: 'f/7.1', iso: 200, focalLength: '35mm', camera: 'X-T1' },
  { src: snowDay1, category: 'people', alt: 'Snow day candid photo', date: '2024-11-22', shutter: '1/250', aperture: 'f/3.6', iso: 200, focalLength: '24mm', camera: 'X-T1' },
  { src: maxKimmy1, category: 'people', alt: 'Couple portrait outdoors', date: '2024-10-19', shutter: '1/500', aperture: 'f/2.8', iso: 400, focalLength: '84mm', camera: 'X-T1' },
  { src: maxKimmy3, category: 'people', alt: 'Portrait in natural setting', date: '2024-10-19', shutter: '1/500', aperture: 'f/3.2', iso: 400, focalLength: '84mm', camera: 'X-T1' },
  { src: maxKimmy2, category: 'people', alt: 'Candid couple moment', date: '2024-10-19', shutter: '1/500', aperture: 'f/2.8', iso: 400, focalLength: '84mm', camera: 'X-T1' },
  { src: sofia3, category: 'people', alt: 'Birthday gathering photo', date: '2024-09-08', shutter: '1/4000', aperture: 'f/2.5', iso: 400, focalLength: '24mm', camera: 'X-T1' },
  { src: sofia2, category: 'people', alt: 'Party candid moment', date: '2024-09-07', shutter: '1/2700', aperture: 'f/2.2', iso: 400, focalLength: '35mm', camera: 'X-T1' },
  { src: sofia1, category: 'people', alt: 'Birthday celebration portrait', date: '2024-09-07', shutter: '1/150', aperture: 'f/2.8', iso: 400, focalLength: '35mm', camera: 'X-T1' },
  { src: summer2, category: 'people', alt: 'Casual summer candid', date: '2024-08-18', shutter: '1/4000', aperture: 'f/5.6', iso: 200, focalLength: '18mm', camera: 'X-T1' },
  { src: amosPool, category: 'people', alt: 'Poolside candid photo', date: '2024-08-11', shutter: '1/4000', aperture: 'f/2.5', iso: 200, focalLength: '24mm', camera: 'X-T1' },
  { src: workCamp1, category: 'people', alt: 'Work camp group portrait', date: '2024-07-22', shutter: '1/680', aperture: 'f/1.4', iso: 400, focalLength: '53mm', camera: 'X-T1' },
  { src: mountainsPeople1, category: 'people', alt: 'Portrait on mountain trail', date: '2024-07-20', shutter: '1/2000', aperture: 'f/2', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: camp2, category: 'people', alt: 'Group photo outdoors', date: '2024-07-12', shutter: '1/4000', aperture: 'f/2.5', iso: 200, focalLength: '84mm', camera: 'X-T1' },
  { src: camp1, category: 'people', alt: 'Candid moment at camp', date: '2024-07-08', shutter: '1/320', aperture: 'f/2', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: winterCampPeople2, category: 'people', alt: 'Candid winter camp portrait', date: '2023-12-29', shutter: '1/350', aperture: 'f/5.6', iso: 400, focalLength: '18mm', camera: 'X-T1' },
  { src: winterCampPeople1, category: 'people', alt: 'Winter camp group moment', date: '2023-12-28', shutter: '1/750', aperture: 'f/1.2', iso: 200, focalLength: '84mm', camera: 'X-T1' },
  { src: thanksgiving2, category: 'people', alt: 'Holiday gathering moment', date: '2022-11-26', shutter: '1/750', aperture: 'f/2', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: thanksgiving1, category: 'people', alt: 'Thanksgiving family photo', date: '2022-11-26', shutter: '1/420', aperture: 'f/2', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: fall4, category: 'people', alt: 'Outdoor adventure moment', date: '2022-10-11', shutter: '1/38', aperture: 'f/1.4', iso: 200, focalLength: '53mm', camera: 'X-T1' },
  { src: amelia3, category: 'people', alt: 'Environmental portrait outdoors', date: '2018-04-21', shutter: '1/250', aperture: 'f/1.4', iso: 200, focalLength: '84mm', camera: 'X-E2' },
  { src: amelia2, category: 'people', alt: 'Street photography candid moment', date: '2018-04-21', shutter: '1/1000', aperture: 'f/1.4', iso: 200, focalLength: '84mm', camera: 'X-E2' },
  { src: amelia1, category: 'people', alt: 'Portrait in natural light', date: '2018-04-21', shutter: '1/1000', aperture: 'f/1.2', iso: 200, focalLength: '84mm', camera: 'X-E2' },
  { src: amsterdam, category: 'people', alt: 'Street portrait in Amsterdam', date: '2015-08-16', shutter: '1/680', iso: 400, focalLength: '128mm', camera: 'X-E1' },
  { src: brittany, category: 'people', alt: 'Silhouette against sunset', date: '2015-05-15', shutter: '1/500', iso: 500, focalLength: '75mm', camera: 'X-E1' },
  { src: grad1, category: 'people', alt: 'Graduation portrait', date: '2015-05-02', shutter: '1/2000', iso: 200, focalLength: '75mm', camera: 'X-E1' },
  { src: nicPeople3, category: 'people', alt: 'Group photo on trip', date: '2015-03-12', shutter: '1/250', aperture: 'f/1.8', iso: 250, focalLength: '53mm', camera: 'X-E1' },
  { src: nicPeople2, category: 'people', alt: 'Candid moment abroad', date: '2015-03-12', shutter: '1/4000', aperture: 'f/1.4', iso: 200, focalLength: '53mm', camera: 'X-E1' },
  { src: nicPeople1, category: 'people', alt: 'Travel portrait in Nicaragua', date: '2015-03-11', shutter: '1/125', aperture: 'f/2', iso: 400, focalLength: '53mm', camera: 'X-E1' },
  { src: nola1, category: 'people', alt: 'Street portrait in New Orleans', date: '2014-03-09', shutter: '1/125', iso: 200, camera: 'Canon T2i' },

  // Events (sorted most recent first)
  { src: car3, category: 'events', alt: 'Wedding ceremony moment', date: '2023-05-06', shutter: '1/1000', aperture: 'f/4', iso: 200, focalLength: '84mm', camera: 'X-T1' },
  { src: car2, category: 'events', alt: 'Festival crowd at sunset', date: '2023-05-06', shutter: '1/340', aperture: 'f/3.6', iso: 200, focalLength: '84mm', camera: 'X-T1' },
  { src: car1, category: 'events', alt: 'Live music performance', date: '2023-05-06', shutter: '1/1000', aperture: 'f/2.2', iso: 200, focalLength: '84mm', camera: 'X-T1' },
  { src: parmalee30, category: 'events', alt: 'Concert crowd energy', date: '2015-05-16', shutter: '1/500', iso: 1000, focalLength: '75mm', camera: 'X-E1' },
  { src: parmalee18, category: 'events', alt: 'Musician performing live', date: '2015-05-16', shutter: '1/250', iso: 2000, focalLength: '75mm', camera: 'X-E1' },
  { src: parmalee12, category: 'events', alt: 'Live band under stage lights', date: '2015-05-16', shutter: '1/1000', iso: 2000, focalLength: '75mm', camera: 'X-E1' },
  { src: parmalee1, category: 'events', alt: 'Concert performance on stage', date: '2015-05-16', shutter: '1/1000', iso: 2000, focalLength: '75mm', camera: 'X-E1' },
];

export const categories: Category[] = ['landscapes', 'people', 'events'];

export const categoryLabels: Record<Category, string> = {
  landscapes: 'Landscapes',
  people: 'People',
  events: 'Events',
};
