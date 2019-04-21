import React from 'react';
import { Container, Grid, Search } from 'semantic-ui-react';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class UserHomePage extends React.Component {
  render() {
    return (
        <div className="center-image">
          <Container><Grid columns={1}>
            <Grid.Column>
              <div className={'user-home'}>Welcome back!</div>
              <div className={'user-home-under'}>Lets get started.</div>
              <Search className={'search-bar'}></Search>
            </Grid.Column>
          </Grid>
          </Container></div>
    );
  }
}

export default UserHomePage;
