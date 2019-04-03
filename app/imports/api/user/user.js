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
  restaurantPrice: String, //typical price range student wants.
  restaurantType: String, //restaurant types such as "Food Truck", "Pre-made To-go," "Made To Order"
  location: String,       //usual place on campus.
  owner: String           //user account
}, { tracker: Tracker });

Users.attachSchema(UsersSchema);

export { Users, UsersSchema };
