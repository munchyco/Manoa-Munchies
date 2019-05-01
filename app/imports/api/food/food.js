import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Foods = new Mongo.Collection('Foods');

const FoodsSchema = new SimpleSchema({
  name: String,
  foodTypeOne: String,
  foodTypeTwo: String,
  foodTypeThree: String,
  vegan: Boolean,
  glutenFree: Boolean,
  foodPrice: String,
  foodType: String,
  location: String,
  image: String,
  description: String,
  restaurantName: String,
  owner: String,
}, { tracker: Tracker });

Foods.attachSchema(FoodsSchema);

export { Foods, FoodsSchema };
