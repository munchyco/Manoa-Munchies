import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

const Vendors = new Mongo.Collection('Vendors');

const VendorsSchema = new SimpleSchema({
foodTypeOne: {
  type: String,
      optional: false,
},    // favorite food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
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
      optional: false,
},
image: {
  type: String,
      optional: false,
},
description: {
  type: String,
      optional: false,
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
}, //typical price range student wants.
location: {
  type: String,
      optional: false,
},       //usual place on campus.
owner: {
  type: String,
      optional: false,
}           //user account
}, { tracker: Tracker });
Vendors.attachSchema(VendorsSchema);

export { Vendors, VendorsSchema };
