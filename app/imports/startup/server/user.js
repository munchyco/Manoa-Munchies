import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/user.js';

/** Initialize the database with a default data document. */
// eslint-disable-next-line no-unused-vars
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


/** This subscription publishes all user profile documents*/
Meteor.publish('AllUsers', function publish() {
  if (this.userId) {
    //  const username = Meteor.users.findOne(this.userId).username;
    return Users.find();
  }
  return this.ready();
});
