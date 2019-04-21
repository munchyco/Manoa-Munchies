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
              <Header as="h2" textAlign="center" inverted>Cuisine Type:</Header>
              <Form.Group>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>ToGo:</label>
                  <Form.Radio
                              toggle
                              readOnly
                              defaultChecked={this.props.getTG}
                  />
                </Form.Field>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>Food Truck:</label>
                  <Form.Radio
                              toggle
                              readOnly
                              defaultChecked={(this.props.getFT)}
                  />

                </Form.Field>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>Made To Order:</label>
                  <Form.Radio
                              toggle
                              readOnly
                              defaultChecked={this.props.getMTO}
                  />
                </Form.Field>
                <Form.Field style={{padding: "15px"}}>
                  <label style={{color: '#ffffff'}}>Buffet:</label>
                  <Form.Radio
                              toggle
                              readOnly
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
