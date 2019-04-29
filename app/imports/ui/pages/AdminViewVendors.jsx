import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Vendors } from '/imports/api/vendor/vendor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import VendorAdmin from '../components/VendorAdmin';


/** Renders a table containing all of the Vendor documents. */
class AdminViewVendors extends React.Component {

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
              <p className="consistent-font">Vendor List</p>
            </Header>
            <Card.Group>
              {this.props.vendors.map((vendor, index) => <VendorAdmin key={index}
                                                                 vendor={vendor}
              />)
              }
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Vendor documents in the props. */
AdminViewVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe('AllVendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(AdminViewVendors);