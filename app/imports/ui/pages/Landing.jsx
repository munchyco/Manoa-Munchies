import React from 'react';
import { Grid, Button, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="center-image">
          <Container><Grid columns={2}>
            <Grid.Column>
              <div className={'white-logo center-text'}>mānoa munchies</div>
              <div className={'white-logo-under under-text'}>got the munchies? we got you.</div>
            </Grid.Column>
            <Grid.Column>
              <div className={'description'}> mānoa munchies provides users with the most up to
                date information for the best eats you can find on campus tailored to your preferences.
                All organized in an easy-to-use, minimalist interface to provide you with quick, and accurate results.
              </div>
              <div className={'buttons'}>
                <Button primary as={NavLink} exact to="/signup">Try it for free</Button>
                <Button secondary as={NavLink} exact to="/signin">Already registered? Log in here.</Button>
              </div>
            </Grid.Column>
          </Grid>
          </Container></div>
    );
  }
}

export default Landing;
