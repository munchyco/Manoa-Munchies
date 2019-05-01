import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Vendors } from '/imports/api/vendor/vendor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import Vendor2 from '../components/Vendor2';

const textStyle = {
  fontSize: '40px',
  fontFamily: 'Quicksand',
};

/** Renders a table containing all of the Vendor documents. */
class ListAvailableVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="listvendors-format">
          <Container>
            <Header as="h2" textAlign="center" style={textStyle} inverted>
              Find New Restaurants To Visit!
            </Header>
            <Card.Group>
              {this.props.vendors.map((vendor, index) => <Vendor2 key={index}
                                                                 vendor={vendor}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Vendor documents in the props. */
ListAvailableVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

function shuffleArray(inputArray) {
  for (let i = inputArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
  }
  return inputArray;
}

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe('AllVendors');
  return {
    vendors: shuffleArray(Vendors.find({}).fetch()).slice(0, 6),
    ready: subscription.ready(),
  };
})(ListAvailableVendors);
