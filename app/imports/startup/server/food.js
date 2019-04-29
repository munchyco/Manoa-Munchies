import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Foods } from '../../api/food/food.js';
import { Users } from '../../api/user/user';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Foods.insert(data);
}

/** Initialize the collection if empty. */
if (Foods.find().count() === 0) {
  if (Meteor.settings.defaultFoods) {
    console.log('Creating default Foods.');
    Meteor.settings.defaultFoods.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Foods', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Foods.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('AllFoods', function publish() {
  if (this.userId) {
    //  const username = Meteor.users.findOne(this.userId).username;
    return Foods.find();
  }
  return this.ready();
});

Meteor.publish('UserPreferredFoods', function publish() {
  if (this.userId) {
    return Foods.find(
        { $or: [{ foodTypeOne: Users.findOne({ owner: Meteor.user().username }).foodTypeOne },
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
            { glutenFree: Users.findOne({ owner: Meteor.user().username }).glutenFree },
        { location: Users.findOne({ owner: Meteor.user().username }).location },
    );
  }
  return this.ready();
});


/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('FoodsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Foods.find();
  }
  return this.ready();
});
