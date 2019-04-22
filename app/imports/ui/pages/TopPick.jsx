import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import Food from '../components/Food';




/** Renders a table containing all of the Food documents. */
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
            {this.props.foods.map((food, index) => <Food key={index}
                                                                food={food}/>)}
          </Card.Group>
        </Container>
        </div>
  );
  }
}

/** Require an array of Food documents in the props. */
TopPick.propTypes = {
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Food documents.
  const subscription = Meteor.subscribe('AllFoods');
  return {
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(TopPick);
