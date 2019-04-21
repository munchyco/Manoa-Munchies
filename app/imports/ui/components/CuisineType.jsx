import { Header, Grid, Form } from 'semantic-ui-react';
import React from 'react';


export default class CuisineType extends React.Component {
  render() {
    return this.renderPage();
  }

  renderPage() {
    return (
        <div className="center-padding">
          <Grid container centered>
            <Grid.Column>
              <Header as="h2" textAlign="center" inverted>Cuisine Type</Header>
              <Form.Group>
                <Form.Field>
                  <Form.Radio
                              toggle
                              readOnly
                              label='ToGo'
                              defaultChecked={this.props.getTG}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Radio toggle
                              readOnly
                              label='FoodTruck'
                              defaultChecked={(this.props.getFT)}
                  />

                </Form.Field>
                <Form.Field>
                  <Form.Radio toggle
                              readOnly
                              label='MadeToOrder'
                              defaultChecked={this.props.getMTO}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.Radio toggle
                              readOnly
                              label='Buffet'
                              defaultChecked={this.props.getB}
                  />
                </Form.Field>
              </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
