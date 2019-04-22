import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { Users } from '/imports/api/user/user';

/* eslint-disable no-console */

function createUser(email, password, role) {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  if (role === 'admin') {
    Roles.addUsersToRoles(userID, 'admin');
  }
  if (role === 'vendor') {
    Roles.addUsersToRoles(userID, 'vendor');
  }
  if (role === 'customer') {
    Roles.addUsersToRoles(userID, 'customer');
      Users.insert(
          {
            foodTypeOne: "default",    //favorite food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
            foodTypeTwo: "default",
            foodTypeThree: "default",
            vegan: true,         //boolean values for whether the user cares about vegan, GF and healthy options.
            glutenFree: true,
            ToGo: true,
            FoodTruck: true,
            MadeToOrder: true,
            Buffet: true,
            restaurantPrice1: true, //typical price range student wants.
            restaurantPrice2: true,
            restaurantPrice3: true,
            owner: email
          }
      );

    }
}


/** When running app for first time, pass a settings file to set up a default user account. */
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.map(({ email, password, role }) => createUser(email, password, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
