import React from 'react';
import { Grid, Form, Header } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export default class EditHealthOptions extends React.Component {



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
                                label='Vegan'
                                defaultChecked={this.props.getV}
                                onChange={this.props.HVC}
                    />
                  </Form.Field>
                  <Form.Radio toggle
                              label='Gluten Free'
                              defaultChecked={this.props.getGF}
                              onChange={this.props.HGFC}
                  />
                  <Form.Radio toggle
                              label='Healthy'
                              defaultChecked={this.props.getH}
                              onChange={this.props.HHC}
                  />
                </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }

}
EditHealthOptions.propTypes = {
  getV: PropTypes.bool.isRequired,
  getH: PropTypes.bool.isRequired,
  getGF: PropTypes.bool.isRequired,
  HVC: PropTypes.func.isRequired,
  HGFC: PropTypes.func.isRequired,
  HHC: PropTypes.func.isRequired,
}
