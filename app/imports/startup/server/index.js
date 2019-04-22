import './accounts.js';
import './vendor.js';
import './food.js';
import { Meteor } from 'meteor/meteor';


Meteor.methods({
  'updatingRole'({role}) {
    Roles.addUsersToRoles(Meteor.userId(), role);
  }
});



