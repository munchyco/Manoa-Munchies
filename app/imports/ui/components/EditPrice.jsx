import React from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export default class EditPrice extends React.Component {


  render() {
    return this.renderPage();
  }

  renderPage() {
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Edit Price Range</Header>
              <Form inverted>
                <Form.Group>
                  <Form.Field>
                    <Form.Radio toggle
                                label='$0 - $10'
                                defaultChecked={this.props.getPP1}
                                onChange={this.handleToGoChange}
                    />
                  </Form.Field>
                  <Form.Radio toggle
                         label='$10 - $20'
                         defaultChecked={this.props.getPP2}
                         onChange={this.handleToGoChange}
                  />
                  <Form.Radio toggle
                         label='$20+'
                         defaultChecked={this.props.getPP3}
                         onChange={this.handleToGoChange}
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}