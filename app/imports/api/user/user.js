import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';


const Users = new Mongo.Collection('Users');

const UsersSchema = new SimpleSchema({
  foodTypeOne: {
    type: String,
    optional: true,
  }, // favorite food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
  foodTypeTwo: {
    type: String,
    optional: true,
  },
  foodTypeThree: {
    type: String,
    optional: true,
  },
  vegan: {
    type: Boolean,
    optional: true,
  },
  glutenFree: {
    type: Boolean,
    optional: true,
  },
  ToGo: {
    type: Boolean,
    optional: true,
  },
  FoodTruck: {
    type: Boolean,
    optional: true,
  },
  MadeToOrder: {
    type: Boolean,
    optional: true,
  },
  Buffet: {
    type: Boolean,
    optional: true,
  },
  restaurantPrice1: {
    type: Boolean,
    optional: true,
  }, // typical price range student wants.
  restaurantPrice2: {
    type: Boolean,
    optional: true,
  },
  restaurantPrice3: {
    type: Boolean,
    optional: true,
  },
  location: {
    type: String,
    optional: true,
  }, // usual place on campus.
  owner: {
    type: String,
    optional: true,
  }, // user account
}, { tracker: Tracker });

Users.attachSchema(UsersSchema);

export { Users, UsersSchema };
