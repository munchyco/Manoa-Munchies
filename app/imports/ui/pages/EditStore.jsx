import React from 'react';
import { Grid, Loader, Header, Segment, Form } from 'semantic-ui-react';
import { Vendors, VendorsSchema } from '/imports/api/vendor/vendor';
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
import { _ } from 'underscore';

const textStyle = {
  color: 'White',
  fontSize: '72px',
};

const styles = {
  paddingBottom: '20px',
  marginBottom: '100px',
};

const locations = [
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

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class EditStore extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { foodTypeOne, foodTypeTwo, foodTypeThree, name, description, vegan, glutenFree, vendorType, vendorPrice, location } = data;
    const ownerName = Meteor.call('getUsername', {}, (err) => {
      if (err) {
        Bert.alert(err);
      } else {
        console.log('successfully retrieved owners name');// success!
      }
    });
    Meteor.call('updateMyStore', {
      foodTypeOne, foodTypeTwo, foodTypeThree, name, description, vegan, glutenFree, vendorType, vendorPrice, location, ownerName },
        (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
    // Users.update({_id:id}, { $set: { foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo,
    // FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location } },
  }

getStores() {
  return _.pluck(this.props.vendors, 'location');
}

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Grid container centered style={styles}>
          <Grid.Column>
            <Header as="h2" textAlign="center" style={textStyle}>Edit Profile</Header>
            <AutoForm schema={VendorsSchema} onSubmit={this.submit} color='black' inverted>
              <Segment inverted>
                <HiddenField name='name' />
                <SelectField name='location' options={() => this.getStores()}/>
                <SelectField name='foodTypeOne' options={foodOptions} />
                <SelectField name='foodTypeTwo' options={foodOptions} />
                <SelectField name='foodTypeThree' options={foodOptions} />
                <Form.Group inline>
                  <BoolField name='vegan'/>
                  <BoolField name='glutenFree' />
                </Form.Group>
                <Form.Group inline>
                  <SelectField name='vendorType' options={foodOptions} />
                </Form.Group>
                <Form.Group inline>
                  <SelectField name='vendorPrice' options={foodOptions} />
                </Form.Group>
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

/** Require an array of Vendor documents in the props. */
EditStore.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
    currentUser: Meteor.user() ? Meteor.user().username : '',
  };
})(EditStore);

