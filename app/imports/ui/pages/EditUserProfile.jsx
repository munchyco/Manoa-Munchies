import React from 'react';
import { Grid, Loader, Header, Segment, Form } from 'semantic-ui-react';
import { Users, UsersSchema } from '/imports/api/user/user';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SelectField from 'uniforms-semantic/SelectField';
import BoolField from 'uniforms-semantic/BoolField';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

const foodOptions = [
  {
    label: 'Chinese',
    value: 'Chinese',
  },
  {
    label: 'American',
    value: 'American',
  },
  {
    label: 'Vietnamese',
    value: 'Vietnamese',
  },
  {
    label: 'Hawaiian',
    value: 'Hawaiian',
  },
  {
    label: 'BBQ',
    value: 'BBQ',
  },
  {
    label: 'Mongolian',
    value: 'Mongolian',
  },
  {
    label: 'Breakfast',
    value: 'Breakfast',
  },
  {
    label: 'Donuts',
    value: 'Donuts',
  },
  {
    label: 'Coffee',
    value: 'Coffee',
  },
  {
    label: 'French',
    value: 'French',
  },
  {
    label: 'Egyptian',
    value: 'Egyptian',
  },
  {
    label: 'Greek',
    value: 'Greek',
  },
  {
    label: 'Vegetarian',
    value: 'Vegetarian',
  },
  {
    label: 'Health',
    value: 'Health',
  },
  {
    label: 'Sandwiches',
    value: 'Sandwiches',
  },
  {
    label: 'Japanese',
    value: 'Japanese',
  },
  {
    label: 'Korean',
    value: 'Korean',
  },
];

const locationOptions = [
  {
    label: 'Paradise Palms',
    value: 'Paradise Palms',
  },
  {
    label: 'Campus Center',
    value: 'Campus Center',
  },
  {
    label: 'Athletic Complex',
    value: 'Athletic Complex',
  },
  {
    label: 'Sustainability Courtyard',
    value: 'Sustainability Courtyard',
  },
];

const styles = {
  paddingBottom: '20px',
  marginBottom: '100px',
};

const textStyle = {
  color: 'White',
  fontSize: '72px',
};

class EditUserProfile extends React.Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleNoDoc = this.handleNoDoc.bind(this);
    this.submit = this.submit.bind(this);
    this.noDoc = this.noDoc.bind(this);
    this.setDoc = this.setDoc.bind(this);
    this.state = {};
  }

  /** On successful submit, insert the data. */
  submit(data) {
    const {
      foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck,
      MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location,
    } = data;
    const ownerName = Meteor.user().username;
    if (!this.props.docFound) {
      Meteor.call('addMyUser', {
        foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet,
        restaurantPrice1, restaurantPrice2, restaurantPrice3, location, ownerName,
      }, (error) => (error ?
          Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
          Bert.alert({ type: 'success', message: 'Update succeeded' })));
    } else {
      Meteor.call('updateMyUser', {
        foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo, FoodTruck, MadeToOrder, Buffet,
        restaurantPrice1, restaurantPrice2, restaurantPrice3, location, ownerName,
      }, (error) => (error ?
          Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
          Bert.alert({ type: 'success', message: 'Update succeeded' })));
      // Users.update({_id:id}, { $set: { foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo,
      // FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location } },
    }
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    this.setState(this.handleNoDoc());
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  noDoc() {
    const doc = {
      foodTypeOne: 'Chinese',
      foodTypeTwo: 'American',
      foodTypeThree: 'Hawaiian',
      vegan: false,
      glutenFree: false,
      ToGo: true,
      FoodTruck: true,
      MadeToOrder: true,
      Buffet: true,
      restaurantPrice1: true,
      restaurantPrice2: true,
      restaurantPrice3: true,
      location: 'Campus Center',
    };
    return doc;
  }

  setDoc() {
    return this.props.doc;
  }

  handleNoDoc() {
    if (this.props.docFound) {
      return this.setDoc();
    }
    return this.noDoc();
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered style={styles}>
          <Grid.Column>
            <Header as="h2" textAlign="center" style={textStyle}>Edit Profile</Header>
            <AutoForm schema={UsersSchema} onSubmit={this.submit} model={this.state} color='black' inverted>
              <Segment inverted>
                <SelectField name='foodTypeOne' options={foodOptions} />
                <SelectField name='foodTypeTwo' options={foodOptions} />
                <SelectField name='foodTypeThree' options={foodOptions} />
                <Form.Group inline>
                  <BoolField name='vegan'/>
                  <BoolField name='glutenFree' />
                </Form.Group>
                <Form.Group inline>
                <BoolField name='ToGo'/>
                <BoolField name='FoodTruck'/>
                <BoolField name='MadeToOrder' /><BoolField name='Buffet' />
                </Form.Group>
                <Form.Group inline>
                <BoolField name='restaurantPrice1' label='$0-10' />
                <BoolField name='restaurantPrice2' label='$10-20' />
                <BoolField name='restaurantPrice3' label='$20+' />
                </Form.Group>
                <SelectField name='location' options={locationOptions} />
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' />
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
EditUserProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
  docFound: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Users');
  let found = false;
  if (Users.find({ owner: Meteor.user().username }).fetch({}).length === 0) {
    found = false;
  } else {
    found = true;
  }
  return {
    docFound: found,
    doc: Users.findOne({ owner: Meteor.user().username }),
    ready: subscription.ready(),
  };
})(EditUserProfile);
