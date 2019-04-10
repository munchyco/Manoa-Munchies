import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Items } from '/imports/api/item/item';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import Item from '../components/Item';




/** Renders a table containing all of the Vendor documents. */
class TopPick extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="center-image">
          <Container>
            <Header as="h2" textAlign="center" inverted>Today's Top Pick</Header>
            <Card.Group>
              {this.props.items.map((item, index) => <Item key={index}
                                                           item={item}/>)}
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Vendor documents in the props. */
TopPick.propTypes = {
  items: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe('Items');
  return {
    items: Items.find({}).fetch(),
    ready: subscription.ready(),
  };
})(TopPick);
