import { Express } from 'express';

import restaurants from '../database/table-restaurant';
import RestaurantDtoType from '../types/RestaurantDtoType';

function RestaurantController(app: Express) {
  app.get('/restaurants', (req, res) => {
    const { restaurantName, categoryName } = req.query;

    const filteredRestaurants = restaurants.filter(
      (restaurant: RestaurantDtoType) => {
        const isCategoryMatch =
          categoryName === '전체' || restaurant.category === categoryName;
        const isNameMatch =
          !restaurantName ||
          restaurant.name.includes(restaurantName?.toString());
        return isNameMatch && isCategoryMatch;
      }
    );

    res.send(filteredRestaurants);
    // res.send(restaurants);
  });

  app.get('/restaurants/:id', (req, res) => {
    const restaurant: RestaurantDtoType | undefined = restaurants.find(
      (item: RestaurantDtoType) => item.id === req.params.id
    );

    if (!restaurant) {
      res.status(404).send('Restaurant not found');
    } else {
      res.send(restaurant);
    }
  });
}

export default RestaurantController;
