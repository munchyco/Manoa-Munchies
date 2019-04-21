import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Users = new Mongo.Collection('Users');

const UsersSchema = new SimpleSchema({
  foodTypeOne: String,    //favorite food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
  foodTypeTwo: String,
  foodTypeThree: String,
  vegan: Boolean,         //boolean values for whether the user cares about vegan, GF and healthy options.
  glutenFree: Boolean,
  healthy: Boolean,
  ToGo: Boolean,
  FoodTruck: Boolean,
  MadeToOrder: Boolean,
  Buffet: Boolean,
  restaurantPrice1: Boolean, //typical price range student wants.
  restaurantPrice2: Boolean,
  restaurantPrice3: Boolean,
  location: String,       //usual place on campus.
  owner: String           //user account
}, { tracker: Tracker });

Users.attachSchema(UsersSchema);

export { Users, UsersSchema };
