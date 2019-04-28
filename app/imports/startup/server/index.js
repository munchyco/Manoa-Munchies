import './accounts.js';
import './vendor.js';
import './food.js';
import './user.js';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/user.js';
import { Vendors } from '../../api/vendor/vendor.js';
import { Bert } from 'meteor/themeteorchef:bert';

function addData(data) {
  Users.insert(data);
}


Meteor.methods({
  'updatingRole'({role}) {
    Roles.addUsersToRoles(Meteor.userId(), role);
    if(role=="customer"){
      Meteor.settings.defaultUserProfile.map(data => addData(data));
      const thisOwner = Meteor.user().username;
      Users.update({owner: "admin@foo.com"},{$set:{owner: thisOwner}});
      console.log('Added '+thisOwner+' with default profile');
    }
  }
});

Meteor.methods({
  'getUsername'() {
    return Meteor.user().username;
  },
});

Meteor.methods({
  'getID'({ownerName}) {
    return Users.findOne({owner: ownerName})._id;
  },
});

Meteor.methods({
  'deleteVendor'({ id }) {
    Vendors.remove({ _id: id });
  },
});

Meteor.methods({
  'deleteUser'({ id }) {
    Users.remove({ _id: id });
  },
});


Meteor.methods({
  'addMyUser'({ foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location, ownerName }) {
    Users.insert(
        {foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location, owner: ownerName});
} },
);

Meteor.methods({
  'updateMyUser'({ foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location, ownerName }) {
    Users.update({owner: ownerName},{$set:{foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location}});
  },
});
