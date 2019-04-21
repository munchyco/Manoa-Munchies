import React from 'react';
import { Grid, Form, Header, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';

export default class EditCuisineType extends React.Component {


  render() {
    return this.renderPage();
  }

  renderPage() {
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Edit Cuisine Type</Header>
                <Form.Group>
                  <label>Cuisine Type:</label>
                  <Form.Field style={{padding: "15px"}}>
                    <label style={{color: '#ffffff'}}>ToGo:</label>
                    <Form.Radio toggle
                                defaultChecked={this.props.getTG}
                                onChange={this.props.HTGC}
                    />
                  </Form.Field>
                  <Form.Field style={{padding: "15px"}}>
                    <label style={{color: '#ffffff'}}>FoodTruck:</label>
                    <Form.Radio toggle
                                defaultChecked={(this.props.getFT)}
                                onChange={this.props.HFTC}
                    />

                  </Form.Field>
                  <Form.Field style={{padding: "15px"}}>
                    <label style={{color: '#ffffff'}}>MadeToOrder:</label>
                    <Form.Radio toggle
                                defaultChecked={this.props.getMTO}
                                onChange={this.props.HMTOC}
                    />
                  </Form.Field>
                  <Form.Field style={{padding: "15px"}}>
                    <label style={{color: '#ffffff'}}>Buffet:</label>
                    <Form.Radio toggle
                                defaultChecked={this.props.getB}
                                onChange={this.props.HBC}
                    />
                  </Form.Field>
                </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}
EditCuisineType.propTypes = {
  getTG: PropTypes.bool.isRequired,
  getMTO: PropTypes.bool.isRequired,
  getB: PropTypes.bool.isRequired,
  getFT: PropTypes.bool.isRequired,
  HTGC: PropTypes.func.isRequired,
  HFTC: PropTypes.func.isRequired,
  HMTOC: PropTypes.func.isRequired,
  HBC: PropTypes.func.isRequired,
};
