import { Header, Grid, Form } from 'semantic-ui-react';
import React from 'react';




export default class HealthOptions extends React.Component {

  render() {
    return this.renderPage();
  }

  renderPage() {
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Price Range</Header>
              <Form.Group>
                <Form.Field>
                  <Form.Radio toggle
                              readOnly
                              label='Vegan'
                              defaultChecked={this.props.getV}
                  />
                </Form.Field>
                <Form.Radio toggle
                            readOnly
                            label='Gluten Free'
                            defaultChecked={this.props.getGF}
                />
                <Form.Radio toggle
                            readOnly
                            label='Healthy'
                            defaultChecked={this.props.getH}
                />
              </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}