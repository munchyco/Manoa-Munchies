import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Items = new Mongo.Collection('Items');

const ItemsSchema = new SimpleSchema({
  name: String,
  foodTypeOne: String,     //food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
  foodTypeTwo: String,
  foodTypeThree: String,
  vegan: Boolean,          //boolean values for whether the restaurant offers vegan, GF and healthy options.
  glutenFree: Boolean,
  healthy: Boolean,
  restaurantPrice: String, //this will be either $/$$/$$$
  restaurantType: String,  //restaurant types such as "Food Truck", "Pre-made To-go," "Made To Order"
  location: String,        //dining hall, potentially coordinates lat/long that could be used to get distance to user?
  image: String,           //image of food/logo
  description: String,     //tagline for restaurant
  owner: String            //restaurant POC account
}, { tracker: Tracker });

Items.attachSchema(ItemsSchema);

export { Items, ItemsSchema };
