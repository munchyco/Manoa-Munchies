import React from 'react';
import _ from "underscore";
import { Grid, Form, Header, Dropdown } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export default class EditFoodTags extends React.Component {

  constructor(props) {
    super(props);
    this.foodOptions = [
      {
        key: 'Korean',
        text: 'Korean',
        value: 'Korean',
      },
      {
        key: 'Japanese',
        text: 'Japanese',
        value: 'Japanese',
      },
      {
        key: 'American',
        text: 'American',
        value: 'American',
      },
      {
        key: 'Mexican',
        text: 'Mexican',
        value: 'Mexican',
      },
      {
        key: 'Chinese',
        text: 'Chinese',
        value: 'Chinese',
      },
    ]

    this.handleType1Change = this.handleType1Change.bind(this);
    this.handleType2Change = this.handleType2Change.bind(this);
    this.handleType3Change = this.handleType3Change.bind(this);
  }


  handleType1Change = (e, { value }) => {
    e.persist();
    let val = e.target.textContent;
    this.props.HFT1(val);
  }
  handleType2Change = (e, { value }) => {
    e.persist();
    let val = e.target.textContent;
    this.props.HFT2(val);
  }
  handleType3Change = (e, { value }) => {
    e.persist();
    let val = e.target.textContent;
    this.props.HFT3(val);
  }



  render() {
    return this.renderPage();
  }


  renderPage() {
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Edit Favorite Food Types</Header>
                <Form.Group>
                  <Form.Field>
                    <label>Favorite Food Type 1</label>
                    <Dropdown
                        defaultValue={this.props.FT1}
                        selection
                        options={this.foodOptions}
                        onChange={this.handleType1Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Food Type 2</label>
                    <Dropdown
                        defaultValue={this.props.FT2}
                        selection
                        options={this.foodOptions}
                        onChange={this.handleType2Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Food Type 3</label>
                    <Dropdown
                        defaultValue={this.props.FT3}
                        selection
                        options={this.foodOptions}
                        onChange={this.handleType3Change}
                    />
                  </Form.Field>
                </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}

EditFoodTags.propTypes = {
  FT1: PropTypes.string.isRequired,
  FT2: PropTypes.string.isRequired,
  FT3: PropTypes.string.isRequired,
  HFT1: PropTypes.func.isRequired,
  HFT2: PropTypes.func.isRequired,
  HFT3: PropTypes.func.isRequired,
};
