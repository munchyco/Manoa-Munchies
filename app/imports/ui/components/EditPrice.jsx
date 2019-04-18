import React from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import EditCuisineType from './EditCuisineType';

export default class EditPrice extends React.Component {

  handlePrice1Change = (e) => this.props.HPC1;
  handlePrice2Change = (e) => this.props.HPC2;
  handlePrice3Change = (e) => this.props.HPC3;

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
                                onChange={this.handlePrice1Change}
                    />
                  </Form.Field>
                  <Form.Radio toggle
                         label='$10 - $20'
                         defaultChecked={this.props.getPP2}
                         onChange={this.handlePrice2Change}
                  />
                  <Form.Radio toggle
                         label='$20+'
                         defaultChecked={this.props.getPP3}
                         onChange={this.handlePrice3Change}
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}
EditPrice.propTypes = {
  getPP1: PropTypes.func.isRequired,
  getPP2: PropTypes.func.isRequired,
  getPP3: PropTypes.func.isRequired,
  HPC1: PropTypes.func.isRequired,
  HPC2: PropTypes.func.isRequired,
  HPC3: PropTypes.func.isRequired,
};