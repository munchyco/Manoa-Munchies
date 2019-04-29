import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Users } from '../../api/user/user.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Users.insert(data);
}



/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Users', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Users.find({ owner: username });
  }
  return this.ready();
});



/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('AllUsers', function publish() {
  if (this.userId) {
    //  const username = Meteor.users.findOne(this.userId).username;
    return Users.find();
  }
  return this.ready();
});
