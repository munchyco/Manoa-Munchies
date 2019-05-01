import './accounts.js';
import './vendor.js';
import './food.js';
import './user.js';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/user.js';
import { Vendors } from '../../api/vendor/vendor.js';
import { Bert } from 'meteor/themeteorchef:bert';
import { Foods } from '../../api/food/food.js';

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
    const username = Users.findOne({_id: id}).owner;
    console.log(username);
    Users.remove({ _id: id });
    Meteor.users.remove({ username: username });
  },
});


Meteor.methods({
  'addMyUser'({ foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck,
                MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location, ownerName }) {
    Users.insert(
        { foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder,
          Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location, owner: ownerName },
          );
} },
);

Meteor.methods({
  'addNewFood'({ name,
                 foodTypeOne,
                 foodTypeTwo,
                 foodTypeThree,
                 vegan,
                 glutenFree,
                 foodPrice,
                 foodType,
                 location,
                 image,
                 description,
                 restaurantName,
                 owner }) {
    Foods.insert(
        { name,
          foodTypeOne,
          foodTypeTwo,
          foodTypeThree,
          vegan,
          glutenFree,
          foodPrice,
          foodType,
          location,
          image,
          description,
          restaurantName,
          owner },
    );
  } });

Meteor.methods({
  'removeFood'({ name,
                 foodTypeOne,
                 foodTypeTwo,
                 foodTypeThree,
                 vegan,
                 glutenFree,
                 foodPrice,
                 foodType,
                 location,
                 image,
                 description,
                 restaurantName,
                 owner }) {
    Foods.remove(
        { name: name,
          foodTypeOne: foodTypeOne,
          foodTypeTwo: foodTypeTwo,
          foodTypeThree: foodTypeThree,
          vegan: vegan,
          glutenFree: glutenFree,
          foodPrice: foodPrice,
          foodType: foodType,
          location: location,
          image: image,
          description: description,
          restaurantName: restaurantName,
          ownerName: owner },
    );
  } },
);

Meteor.methods({
  'updateMyStore'({ foodTypeOne, foodTypeTwo, foodTypeThree, name, description, vegan, glutenFree, vendorType, vendorPrice, location, ownerName }) {
    console.log(foodTypeOne, foodTypeTwo, foodTypeThree, name, description, vegan, glutenFree, vendorType, vendorPrice, location, ownerName );
    Vendors.update({ owner: ownerName, location: location }, { $set:{ foodTypeOne, foodTypeTwo, foodTypeThree, name, description, vegan, glutenFree, vendorType, vendorPrice } });
  },
});

Meteor.methods({
  'updateMyUser'({ foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location, ownerName }) {
    Users.update({owner: ownerName},{$set:{foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location}});
  },
});

Meteor.methods({
  'returnFilteredFoods'() {
    console.log(Foods.findOne().foodTypeOne);
    console.log(Users.findOne({ owner: Meteor.user().username }).foodTypeOne);
    return Foods.find(
      { $and: [{ $or: [{ foodTypeOne: Users.findOne({ owner: Meteor.user().username }).foodTypeOne },
              { foodTypeOne: Users.findOne({ owner: Meteor.user().username }).foodTypeTwo },
              { foodTypeOne: Users.findOne({ owner: Meteor.user().username }).foodTypeThree },
              { foodTypeTwo: Users.findOne({ owner: Meteor.user().username }).foodTypeOne },
              { foodTypeTwo: Users.findOne({ owner: Meteor.user().username }).foodTypeTwo },
              { foodTypeTwo: Users.findOne({ owner: Meteor.user().username }).foodTypeThree },
              { foodTypeThree: Users.findOne({ owner: Meteor.user().username }).foodTypeOne },
              { foodTypeThree: Users.findOne({ owner: Meteor.user().username }).foodTypeTwo },
              { foodTypeThree: Users.findOne({ owner: Meteor.user().username }).foodTypeThree },
            ] },
            { vegan: Users.findOne({ owner: Meteor.user().username }).vegan },
            { glutenFree: Users.findOne({ owner: Meteor.user().username }).glutenFree }] }
            );
  },
});
