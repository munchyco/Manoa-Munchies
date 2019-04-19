import React from 'react';
import { Grid, Form, Header, Dropdown } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export default class EditFoodTags extends React.Component {


  handleFT1Change(e, { name, value }) {
    this.setState({ [name]: value });
  }

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
                    <Dropdown
                        defaultValue={this.props.getFT1}
                        selection
                        options={this.props.FoodOptions}
                        onChange={this.handleFT1Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Food Type 2</label>
                    <Dropdown
                        defaultValue={this.props.getFT2}
                        selection
                        options={this.props.FoodOptions}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Favorite Food Type 3</label>
                    <Dropdown
                        defaultValue={this.props.getFT3}
                        selection
                        options={this.props.FoodOptions}
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

EditFoodTags.propTypes = {
  getFT1: PropTypes.func.isRequired,
  getFT2: PropTypes.func.isRequired,
  getFT3: PropTypes.func.isRequired,
  TGC: PropTypes.func.isRequired,
  MTOC: PropTypes.func.isRequired,
  FTC: PropTypes.func.isRequired,
  BC: PropTypes.func.isRequired,
  FoodOptions: PropTypes.any(),
};
