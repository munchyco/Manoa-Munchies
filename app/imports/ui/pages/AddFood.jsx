import React from 'react';
import { Grid, Loader, Header, Segment, Form } from 'semantic-ui-react';
import { Foods, FoodsSchema } from '/imports/api/food/food';
import { Bert } from 'meteor/themeteorchef:bert';
import AutoForm from 'uniforms-semantic/AutoForm';
import SubmitField from 'uniforms-semantic/SubmitField';
import HiddenField from 'uniforms-semantic/HiddenField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import SelectField from 'uniforms-semantic/SelectField';
import BoolField from 'uniforms-semantic/BoolField';
import TextField from 'uniforms-semantic/TextField';
import { Meteor } from 'meteor/meteor';
import LongTextField from 'uniforms-semantic/LongTextField';


const textStyle = {
  color: 'White',
  fontSize: '72px',
};

const styles = {
  paddingBottom: '20px',
  marginBottom: '100px',
};
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
  {
    label: 'Shidler Hall',
    value: 'Shidler Hall',
  },
  {
    label: 'Holmes Hall',
    value: 'Holmes Hall',
  },
  {
    label: 'Post Building',
    value: 'Post Building',
  },
  {
    label: 'Center for Korean Studies',
    value: 'Center for Korean Studies',
  },
  {
    label: 'Krauss Hall',
    value: 'Krauss Hall',
  },
  {
    label: 'Hemenway Hall',
    value: 'Hemenway Hall',
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
    value: 'to go',
  },
  {
    label: 'Food Truck',
    value: 'food truck',
  },
];

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AddFood extends React.Component {

  /** Bind 'this' so that a ref to the Form can be saved in formRef and communicated between render() and submit(). */
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.insertCallback = this.insertCallback.bind(this);
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
    const { name,
      foodTypeOne,
      foodTypeTwo,
      foodTypeThree,
      vegan,
      glutenFree,
      foodPrice,
      foodType,
      location,
      image,
      description,
      restaurantName } = data;
    const owner = Meteor.user().username;
    Foods.insert({ name,
      foodTypeOne,
      foodTypeTwo,
      foodTypeThree,
      vegan,
      glutenFree,
      foodPrice,
      foodType,
      location,
      image,
      description,
      restaurantName,
      owner }, this.insertCallback);
  }

  render() {
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" style={textStyle} inverted>
                <p>Add Food</p>
              </Header>
              <AutoForm ref={(ref) => { this.formRef = ref; }}
                        schema={FoodsSchema} onSubmit={this.submit}>
                <Segment inverted>
                  <TextField name='restaurantName' label='Restaurant Name'/>
                  <TextField name='name'/>
                  <Form.Group inline widths='equal' style={{ paddingLeft: '10%' }}>
                    <SelectField name='foodTypeOne'
                                 placeholder='Food Type One'
                                 label=''
                                 options={foodOptions}
                    />
                    <SelectField name='foodTypeTwo'
                                 placeholder='Food Type Two'
                                 label=''
                                 options={foodOptions}
                    />
                    <SelectField name='foodTypeThree'
                                 placeholder='Food Type Three'
                                 label=''
                                 options={foodOptions}
                                 style={{ color: 'white' }}
                    />
                  </Form.Group>
                  <SelectField name='foodPrice' options={priceOptions} placeholder='Select Average Price'/>
                  <SelectField name='foodType' options={vendorTypes} placeholder='Select Vendor Type'/>
                  <SelectField name='location' options={locationOptions} placeholder='Select Location'/>
                  <TextField name='image' label='Image URL (Please link a square image!)'/>
                  <Form.Group inline>
                    <BoolField name='vegan'/>
                    <BoolField name='glutenFree'/>
                  </Form.Group>
                  <LongTextField name='description'/>
                  <SubmitField value='Submit'/>
                  <ErrorsField/>
                  <HiddenField name='owner' value={Meteor.user().username}/>
                </Segment>
              </AutoForm>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

export default AddFood;
