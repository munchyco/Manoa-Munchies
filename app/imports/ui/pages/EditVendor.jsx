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


//trouble here is that we need to be able to select which location to update. can do it with a primary form, or could
//do it with a distinct URL? not sure.


const textStyle = {
  color: 'White',
  fontSize: '72px',
};

const styles = {
  paddingBottom: '20px',
  marginBottom: '100px',
};

class EditVendor extends React.Component {
  /** On successful submit, insert the data. */
  submit(data) {
    const { name, foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, vendorPrice,
    vendorType, location, image, description } = data;
    const ownerName = Meteor.call('getUsername', {}, (err) => {
      if (err) {
        Bert.alert(err);
      } else {
        console.log('successfully retrieved owners name');// success!
      }
    });
    Meteor.call('updateMyUser', {
      name, foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, vendorPrice,
      vendorType, location, image, description, ownerName,
    }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
    // Users.update({_id:id}, { $set: { foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, ToGo,
    // FoodTruck, MadeToOrder, Buffet, restaurantPrice1, restaurantPrice2, restaurantPrice3, location } },
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered style={styles}>
          <Grid.Column>
            <Header as="h2" textAlign="center" style={textStyle}>Edit Profile</Header>
            <AutoForm schema={VendorsSchema} onSubmit={this.submit} model={this.props.doc} color='black' inverted>
              <Segment inverted>
                <HiddenField name='name' />
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
EditVendor.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Users');
  return {
    doc: Vendors.findOne({ owner: Meteor.user().username, location: locationSelect }),
    ready: subscription.ready(),
  };
})(EditVendor);
