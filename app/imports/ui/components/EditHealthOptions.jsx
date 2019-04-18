import React from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import EditCuisineType from './EditCuisineType';

export default class EditHealthOptions extends React.Component {


  handleHealthyChange = (e) => this.props.HHC;
  handleGlutenFreeChange = (e) => this.props.HGFC;
  handleVeganChange = (e) => this.props.HVC;

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
                                label='Vegan'
                                defaultChecked={this.props.getV}
                                onChange={this.handleVeganChange()}
                    />
                  </Form.Field>
                  <Form.Radio toggle
                              label='Gluten Free'
                              defaultChecked={this.props.getGF}
                              onChange={this.handleGlutenFreeChange()}
                  />
                  <Form.Radio toggle
                              label='Healthy'
                              defaultChecked={this.props.getH}
                              onChange={this.handleHealthyChange()}
                  />
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}

EditHealthOptions.propTypes = {
  getV: PropTypes.func.isRequired,
  getGF: PropTypes.func.isRequired,
  getH: PropTypes.func.isRequired,
  HHC: PropTypes.func.isRequired,
  HGFC: PropTypes.func.isRequired,
  HVC: PropTypes.func.isRequired,
};
