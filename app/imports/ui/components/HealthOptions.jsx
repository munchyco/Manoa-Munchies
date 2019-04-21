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
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>Vegan:</label>
                  <Form.Radio toggle
                              readOnly
                              defaultChecked={this.props.getV}
                  />
                </Form.Field>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>Gluten Free:</label>
                <Form.Radio toggle
                            readOnly
                            defaultChecked={this.props.getGF}
                />
                </Form.Field>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>Healthy:</label>
                <Form.Radio toggle
                            readOnly
                            defaultChecked={this.props.getH}
                />
                </Form.Field>
              </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}