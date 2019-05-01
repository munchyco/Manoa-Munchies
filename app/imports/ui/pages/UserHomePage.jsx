import React from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
class UserHomePage extends React.Component {
  render() {
    return (
        <div className="center-image" style={{ height: 1800 }}>
          <Container><Grid columns={1}>
            <Grid.Column>
              <div className={'user-home'}>Welcome back!</div>
              <div className={'user-home-under'}>Lets get started.</div>
              <Segment>
                <Grid columns={3}>
                  <Grid.Column className={'home-columns'}>
                    <Icon size='massive' name='user'> </Icon>
                    <div className={'column-text'}>(*USERS ONLY*) Discover and edit your preferences by clicking on the
                      &lsquo;User Profile&rsquo; section in the
                      navigation bar.</div>
                  </Grid.Column>
                  <Grid.Column className={'home-columns'}>
                    <Icon size='massive' name='utensils'> </Icon>
                    <div className={'column-text'}>View the entire list of Food Vendors Manoa has to offer by
                      clicking on the
                      &lsquo;Vendor List&rsquo; or &lsquo;Top Picks&rsquo; section in the navigation bar.</div>
                  </Grid.Column>
                  <Grid.Column className={'home-columns'}>
                    <Icon size='massive' name='briefcase'></Icon>
                    <div className={'column-text'}> (*VENDORS ONLY*) Add and edit your Food Vendors by clicking
                      the &lsquo;Add Vendor&rsquo; or &lsquo;Vendor Edit Your Stores&rsquo; section in the
                      navigation bar.</div>
                  </Grid.Column>
                </Grid>
              </Segment>
              <div className={'user-home-twitter'}>Keep up to date with our Twitter for announcements on weekly
                Top Picks!</div>
              <TwitterTimelineEmbed
                  className={'twitter-timeline'}
                  sourceType="profile"
                  screenName="munchyco"
                  options={{ height: 800 }}
              />
            </Grid.Column>
          </Grid>
          </Container></div>
    );
  }
}

export default UserHomePage;
