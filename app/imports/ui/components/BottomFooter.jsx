import React from 'react'
import {Container, Grid, List, Icon} from 'semantic-ui-react';


export default class BottomFooter extends React.Component {
  render() {
    return (
        <div className="green-background">
          <Container><Grid columns={2}>
            <Grid.Column>
              <div className="white">Contact Us</div>
              <hr/>
              <List>
                <List.Item>
                  <div className="white">Phone Number: 808-955-8123</div>
                </List.Item>
                <List.Item>
                  <div className="white">Email: munchyco@hawaii.edu</div>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <div className="white">Find us on Social Media!</div>
              <hr/>
              <List>
                <List.Item>
                  <a className="white">Twitter <Icon size='large' name='twitter square'> </Icon></a>
                </List.Item>
                <List.Item>
                  <a className="white">Facebook <Icon size='large' name='facebook square'> </Icon></a>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
          </Container>
        </div>
    )
  }
}