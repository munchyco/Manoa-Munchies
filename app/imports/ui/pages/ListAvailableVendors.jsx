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
        <Container>
          <Header as="h2" textAlign="center" inverted>List Available Vendors</Header>
          <Card.Group>
            {this.props.vendor.map((vendor, index) => <Vendor key={index} contact={vendor}/>)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListAvailableVendors.propTypes = {
  vendor: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendor: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListAvailableVendors);
