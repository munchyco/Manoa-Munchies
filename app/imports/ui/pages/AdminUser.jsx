import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Users } from '/imports/api/user/user';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import UserAdmin from '../components/UserAdmin';


/** Renders a table containing all of the Vendor documents. */
class AdminUser extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }


  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="center-image-listvendors">
          <Container>
            <Header as="h2" textAlign="center" inverted>
              <p className="consistent-font">User List</p>
            </Header>
            <Card.Group>
              {this.props.users.map((user, index) => <UserAdmin key={index}
                                                                user={user}
              />)
              }
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Vendor documents in the props. */
AdminUser.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe('AllUsers');
  return {
    users: Users.find({}).fetch(),
    ready: subscription.ready(),
  };
})(AdminUser);
