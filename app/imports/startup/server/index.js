import './accounts.js';
import './vendor.js';
import './food.js';
import './user.js';
import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/user.js';

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



