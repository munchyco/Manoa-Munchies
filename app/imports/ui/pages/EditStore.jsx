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
import TextField from 'uniforms-semantic/TextField';
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
  {
    label: 'Nepali',
    value: 'Nepali',
  },
  {
    label: 'Indian',
    value: 'Indian',
  },
  {
    label: 'Malaysian',
    value: 'Malaysian',
  },
  {
    label: 'Ramen',
    value: 'Ramen',
  },
  {
    label: 'Mexican',
    value: 'Mexican',
  },
  {
    label: 'Spanish',
    value: 'Spanish',
  },
  {
    label: 'Juice',
    value: 'Juice',
  },
  {
    label: 'Pizza',
    value: 'Pizza',
  },
];

const priceOptions = [
  {
    label: '$: $0-10 Entrees',
    value: '$',
  },
  {
    label: '$$: $10-20 Entrees',
    value: '$$',
  },
  {
    label: '$$$: $20+ Entrees',
    value: '$$$',
  },
];
const vendorTypes = [
  {
    label: 'To-Go',
    value: 'ToGo',
  },
  {
    label: 'Made-To-Order',
    value: 'MadeToOrder',
  },
  {
    label: 'Food Truck',
    value: 'FoodTruck',
  },
  {
    label: 'Buffet',
    value: 'Buffet',
  },
];

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class EditStore extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { foodTypeOne, foodTypeTwo, foodTypeThree, name, description,
      vegan, glutenFree, vendorType, vendorPrice, location } = data;
    const ownerName = Meteor.user().username;
    if (!location) {
      Bert.alert({ type: 'danger', message: 'You have no stores' });
    } else {
      Meteor.call('updateMyStore', {
            foodTypeOne,
            foodTypeTwo,
            foodTypeThree,
            name,
            description,
            vegan,
            glutenFree,
            vendorType,
            vendorPrice,
            location,
            ownerName,
          },
          (error) => (error ?
              Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
              Bert.alert({ type: 'success', message: 'Update succeeded' })));
    }
  }

getStores() {
  const vendorLocations = _.pluck(this.props.vendors, 'location');
 const locationList = [{ value: '' }];
 locationList.pop();
 if (this.props.vendors.length < 1) {
   Bert.alert({ type: 'danger', message: 'You have no stores' });
 }
  if (_.contains(vendorLocations, 'Paradise Palms')) {
    locationList.push({
      label: 'Paradise Palms',
      value: 'Paradise Palms',
    });
  }
  if (_.contains(vendorLocations, 'Athletic Complex')) {
    locationList.push({
      label: 'Athletic Complex',
      value: 'Athletic Complex',
    });
  }
  if (_.contains(vendorLocations, 'Sustainability Courtyard')) {
      locationList.push({
        label: 'Sustainability Courtyard',
        value: 'Sustainability Courtyard',
      });
    }
  if (_.contains(vendorLocations, 'Campus Center')) {
        locationList.push({
          label: 'Campus Center',
          value: 'Campus Center',
        });
  }
  if (_.contains(vendorLocations, 'Shidler Hall')) {
    locationList.push({
      label: 'Shidler Hall',
      value: 'Shidler Hall',
    });
  }
  if (_.contains(vendorLocations, 'Holmes Hall')) {
    locationList.push({
      label: 'Holmes Hall',
      value: 'Holmes Hall',
    });
  }
  if (_.contains(vendorLocations, 'Post Building')) {
    locationList.push({
      label: 'Post Building',
      value: 'Post Building',
    });
  }
  if (_.contains(vendorLocations, 'Center for Korean Studies')) {
    locationList.push({
      label: 'Center for Korean Studies',
      value: 'Center for Korean Studies',
    });
  }
  if (_.contains(vendorLocations, 'Krauss Hall')) {
    locationList.push({
      label: 'Krauss Hall',
      value: 'Krauss Hall',
    });
  }
  if (_.contains(vendorLocations, 'Hemenway Hall')) {
    locationList.push({
      label: 'Hemenway Hall',
      value: 'Hemenway Hall',
    });
  }
  return locationList;
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage(this.getStores()) : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage(location) {
    return (
        <Grid container centered style={styles}>
          <Grid.Column>
            <Header as="h2" textAlign="center" style={textStyle}>Edit Profile</Header>
            <AutoForm schema={VendorsSchema} onSubmit={this.submit} color='black' inverted={'true'}>
              <Segment inverted>
                <TextField name='name' />
                <TextField name='description' />
                <SelectField name='location' placeholder options={location}/>
                <SelectField name='foodTypeOne' options={foodOptions} placeholder='Food Type One' />
                <SelectField name='foodTypeTwo' options={foodOptions} placeholder='Food Type Two'/>
                <SelectField name='foodTypeThree' options={foodOptions} placeholder='Food Type Three'/>
                <SelectField name='vendorType' options={vendorTypes} placeholder='Select Vendor Type'/>
                <SelectField name='vendorPrice' options={priceOptions} placeholder='Select Vendor Price'/>
                <Form.Group inline>
                  <BoolField name='vegan'/>
                  <BoolField name='glutenFree' />
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
