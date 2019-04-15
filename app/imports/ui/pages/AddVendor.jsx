import React from 'react';
import { Vendors, VendorsSchema } from '/imports/api/vendor/vendor';
import { Grid, Segment, Header, Form, Radio } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import { Bert } from 'meteor/themeteorchef:bert';
import { Meteor } from 'meteor/meteor';
import Vendor from '../components/Vendor';

/** Renders the Page for adding a document. */
class AddVendor extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
    this.formRef = null;
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  insertCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Add failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Add succeeded' });
      this.formRef.reset();
    }
  }

  /** On submit, insert the data. */
  submit(data) {
    const { name, foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, healthy, vendorPrice, vendorType, location, image, description } = data;
    const owner = Meteor.user().username;
    Vendors.insert({ name, foodTypeOne, foodTypeTwo, foodTypeThree, vegan, glutenFree, healthy, vendorPrice, vendorType, location, image, description, owner }, this.insertCallback);
  }

  render() {
    return (
        <div className="center-padding">
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center" inverted>Add Vendor</Header>
            <AutoForm ref={(ref) => { this.formRef = ref; }} schema={VendorsSchema} onSubmit={this.submit}>
              <Segment>
                <TextField name='name'/>
                <TextField name='foodTypeOne'/>
                <TextField name='foodTypeTwo'/>
                <TextField name='foodTypeThree'/>
                <TextField name='vegan'/>
                <TextField name='glutenFree'/>
                <TextField name='vendorPrice'/>
                <TextField name='vendorType'/>
                <TextField name='location'/>
                <TextField name='image'/>
                <LongTextField name='description'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
                <HiddenField name='owner' value='fakeuser@foo.com'/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

export default AddVendor;