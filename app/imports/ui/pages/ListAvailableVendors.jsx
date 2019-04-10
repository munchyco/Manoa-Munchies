import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Vendors } from '/imports/api/vendor/vendor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Vendor from '../components/Vendor';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListAvailableVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="center-image">
        <Container>
          <Header as="h2" textAlign="center" inverted>List Available Vendors</Header>
          <Card.Group>
            {this.props.vendors.map((vendor, index) => <Vendor key={index} contact={vendor}/>)}
          </Card.Group>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListAvailableVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListAvailableVendors);
