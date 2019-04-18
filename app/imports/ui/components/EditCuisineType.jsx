import React from 'react';
import { Grid, Form, Header, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

export default class EditCuisineType extends React.Component {

  handleToGoChange = (e) => this.props.TGC;

  handleFoodTruckChange = (e) => this.props.FTC;

  handleMadeToOrderChange = (e) => this.props.MTOC;

  handleBuffetChange = (e) => this.props.BC;

  render() {
    return this.renderPage();
  }

  renderPage() {
    return (
        <div className="center-paddingEditPref">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Edit Cuisine Type</Header>
              <Form inverted>
                <Form.Group>
                  <label>Cuisine Type</label>
                  <Form.Field>
                    <Form.Radio toggle
                                label='ToGo'
                                defaultChecked={this.props.getTG}
                                onChange={this.handleToGoChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Radio toggle
                                label='FoodTruck'
                                defaultChecked={(this.props.getFT)}
                                onChange={this.handleFoodTruckChange}
                    />

                  </Form.Field>
                  <Form.Field>
                    <Form.Radio toggle
                                label='MadeToOrder'
                                defaultChecked={this.props.getMTO}
                                onChange={this.handleMadeToOrderChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Form.Radio toggle
                                label='Buffet'
                                defaultChecked={this.props.getB}
                                onChange={this.handleBuffetChange}
                    />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}
EditCuisineType.propTypes = {
  getB: PropTypes.func.isRequired,
  getMTO: PropTypes.func.isRequired,
  getFT: PropTypes.func.isRequired,
  getTG: PropTypes.func.isRequired,
  TGC: PropTypes.func.isRequired,
  MTOC: PropTypes.func.isRequired,
  FTC: PropTypes.func.isRequired,
  BC: PropTypes.func.isRequired,
};



