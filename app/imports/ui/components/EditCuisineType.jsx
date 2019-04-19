import React from 'react';
import { Grid, Form, Header, Checkbox } from 'semantic-ui-react';

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

export default class EditCuisineType extends React.Component {
  state = {
    const: active === 'false'
  }

<<<<<<< HEAD
  handleToGoChange = (e) => this.props.TGC;

  handleFoodTruckChange = (e) => this.props.FTC;

  handleMadeToOrderChange = (e) => this.props.MTOC;

  handleBuffetChange = (e) => this.props.BC;
=======

  handleChange = (e, { value }) => this.setState({ value })
>>>>>>> parent of 21a0e95... EditPreferencesPage

  render() {
    return this.renderPage();
  }

  renderPage() {
    const { ToGo, FoodTruck, MadeToOrder, Buffet } = this.state
    return (
        <div className="center-paddingEditPref">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Edit Cuisine Type</Header>
              <Form inverted>
                <Form.Group>
                  <label>Cuisine Type</label>
                  <Form.Field>
                    <Checkbox
                        label='To Go'
                        value='TG'
                        checked={ToGo === 'TG'}
                        onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                        label='Food Truck'
                        value='FT'
                        checked={FoodTruck === 'FT'}
                        onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                        label='Made To Order'
                        value='MTD'
                        checked={MadeToOrder === 'MTD'}
                        onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                        label='Buffet'
                        value='B'
                        checked={Buffet === 'B'}
                        onChange={this.handleChange}
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
