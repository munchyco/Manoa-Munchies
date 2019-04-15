import React from 'react';
import { Grid, Form, Header, Segment } from 'semantic-ui-react';

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

export default class EditPrice extends React.Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return this.renderPage();
  }

  renderPage() {
    const { value } = this.state
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Edit Price Range</Header>
              <Form inverted>
                <Form.Group>
                  <label>Price Range</label>
                  <Form.Radio
                      label='$0 - $10'
                      value='Small'
                      checked={value === 'Small'}
                      onChange={this.handleChange}
                  />
                  <Form.Radio
                      label='$10 - $20'
                      value='Mid'
                      checked={value === 'Mid'}
                      onChange={this.handleChange}
                  />
                  <Form.Radio
                      label='$20+'
                      value='Large'
                      checked={value === 'Large'}
                      onChange={this.handleChange}
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}