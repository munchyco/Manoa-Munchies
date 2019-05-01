import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Foods } from '/imports/api/food/food';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import FoodDelete from '../components/FoodDelete';


/** Renders a table containing all of the Vendor documents. */
class VendorViewFoods extends React.Component {

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
              {this.props.foods.map((food, index) => <FoodDelete key={index}
                                                                      food={food}
              />)
              }
            </Card.Group>
          </Container>
        </div>
    );
  }
}

/** Require an array of Vendor documents in the props. */
VendorViewFoods.propTypes = {
  foods: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Vendor documents.
  const subscription = Meteor.subscribe('Foods');
  return {
    foods: Foods.find({}).fetch(),
    ready: subscription.ready(),
  };
})(VendorViewFoods);
