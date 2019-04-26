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
class AdminHome extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="center-image">
          <Container>
            <Header as="h2" textAlign="center" inverted>Current Vendors</Header>
            <Card.Group>
              {this.props.vendors.map((vendor, index) => <VendorAdmin key={index}
                                                                      vendor={vendor}/>)}

            </Card.Group>
          </Container>
          );
          }
          }

          /** Require an array of Vendor documents in the props. */
          AdminHome.propTypes = {
          vendors: PropTypes.array.isRequired,
          ready: PropTypes.bool.isRequired,
        };

          /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
          export default withTracker(() => {
          // Get access to Vendor documents.
          const subscription = Meteor.subscribe('VendorsAdmin');
          return {
          vendors: Vendors.find({}).fetch(),
          ready: subscription.ready(),
        };
        })(AdminHome);
