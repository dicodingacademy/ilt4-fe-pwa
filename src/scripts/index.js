import { getAllRestaurants } from './data-source.js';
import { renderRestaurantsList } from './dom-manipulation.js';

(async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');

    // Using workbox
    // navigator.serviceWorker.register('/sw-workbox.js');
  }

  const restaurants = await getAllRestaurants();
  renderRestaurantsList(restaurants);
})();
