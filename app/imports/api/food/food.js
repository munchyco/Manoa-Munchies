import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Foods = new Mongo.Collection('Foods');

const FoodsSchema = new SimpleSchema({
  name: String,
  vendorName: String,
  foodTypeOne: String,     //food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
  foodTypeTwo: String,
  foodTypeThree: String,
  vegan: Boolean,          //boolean values for whether the restaurant offers vegan, GF and healthy options.
  glutenFree: Boolean,
  foodPrice: String, //this will be either $/$$/$$$
  foodType: String,  //vendor types such as "Food Truck", "Pre-made To-go," "Made To Order"
  location: String,        //dining hall, potentially coordinates lat/long that could be used to get distance to user?
  image: String,           //image of food/logo
  description: String,     //tagline for vendor
  owner: String            //vendor POC account
}, { tracker: Tracker });

Foods.attachSchema(FoodsSchema);

export { Foods, FoodsSchema };
