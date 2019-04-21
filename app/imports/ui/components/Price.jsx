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
                <Form.Field>
                  <Form.Radio toggle
                              readOnly
                              label='$0 - $10'
                              defaultChecked={this.props.getPP1}
                              onChange={this.props.HP1}
                  />
                </Form.Field>
                <Form.Radio toggle
                            readOnly
                            label='$10 - $20'
                            defaultChecked={this.props.getPP2}
                            onChange={this.props.HP2}
                />
                <Form.Radio toggle
                            readOnly
                            label='$20+'
                            defaultChecked={this.props.getPP3}
                            onChange={this.props.HP3}
                />
              </Form.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}