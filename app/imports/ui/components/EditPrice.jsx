import React from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import EditCuisineType from './EditCuisineType';

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
                <Form.Group>
                  <Form.Field>
                    <Form.Radio toggle
                                label='$0 - $10'
                                defaultChecked={this.props.getPP1}
                                onChange={this.props.HP1}
                    />
                  </Form.Field>
                  <Form.Radio toggle
                              label='$10 - $20'
                              defaultChecked={this.props.getPP2}
                              onChange={this.props.HP2}
                  />
                  <Form.Radio toggle
                              label='$20+'
                              defaultChecked={this.props.getPP3}
                              onChange={this.props.HP3}
                  />
                </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}
EditPrice.propTypes = {
  getPP1: PropTypes.bool.isRequired,
  getPP2: PropTypes.bool.isRequired,
  getPP3: PropTypes.bool.isRequired,
  HP1: PropTypes.func.isRequired,
  HP2: PropTypes.func.isRequired,
  HP3: PropTypes.func.isRequired,
};
