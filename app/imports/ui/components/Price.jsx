import { Header, Grid, Form } from 'semantic-ui-react';
import React from 'react';

export default class Price extends React.Component {

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
                  <label style={{color: '#ffffff'}}>$0 - $10:</label>
                  <Form.Radio toggle
                              readOnly
                              defaultChecked={this.props.getPP1}
                              onChange={this.props.HP1}
                  />
                </Form.Field>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>$10 - $20:</label>
                  <Form.Radio toggle
                              readOnly
                              defaultChecked={this.props.getPP2}
                              onChange={this.props.HP2}
                  />
                </Form.Field>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>$20+:</label>
                  <Form.Radio toggle
                              readOnly
                              defaultChecked={this.props.getPP3}
                              onChange={this.props.HP3}
                   />
                </Form.Field>
              </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}