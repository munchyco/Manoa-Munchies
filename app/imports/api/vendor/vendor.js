import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Vendors = new Mongo.Collection('Vendors');

const VendorsSchema = new SimpleSchema({
foodTypeOne: {
  type: String,
      optional: false,
},
foodTypeTwo: {
  type: String,
      optional: false,
},
foodTypeThree: {
  type: String,
      optional: false,
},
name: {
  type: String,
      optional: true,
},
image: {
  type: String,
      optional: true,
},
description: {
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
vendorType: {
  type: String,
      optional: false,
},
vendorPrice: {
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
Vendors.attachSchema(VendorsSchema);

export { Vendors, VendorsSchema };
