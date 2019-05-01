import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Foods = new Mongo.Collection('Foods');

const FoodsSchema = new SimpleSchema({
name: {
  type: String,
      optional: false,
},
foodTypeOne: {
  type: String,
      optional: true,
},
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
restaurantName: {
  type: String,
      optional: false,
},
image: {
  type: String,
      optional: true,
},
description: {
  type: String,
      optional: true,
},
foodPrice: {
  type: String,
  optional: false,
},
  foodType: {
   type: String,
   optional: false,
    },
location: {
  type: String,
      optional: true,
},
owner: {
  type: String,
      optional: true,
},
}, { tracker: Tracker });

Foods.attachSchema(FoodsSchema);

export { Foods, FoodsSchema };
