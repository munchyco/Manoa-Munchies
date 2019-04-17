import React from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export default class EditFoodTags extends React.Component {


  render() {
    return this.renderPage();
  }

  renderPage() {
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Edit Favorite Food Types</Header>
              <Form inverted>
                <Form.Group>
                  <Form.Field>
                    <label>Favorite Food Type 1</label>
                    <input defaultValue={this.props.getFT1} />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Food Type 2</label>
                    <input defaultValue={this.props.getFT2} />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Food Type 3</label>
                    <input defaultValue={this.props.getFT3} />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}