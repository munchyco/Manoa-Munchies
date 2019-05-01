import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Foods } from '/imports/api/food/food';
import Food from '../components/Food';

/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }


  render() {

    let content;
    const a = this.props.vendor.name;

    if (this.state.isToggleOn === false) {

      content = <Card centered>
        <Card.Content>
          <Card.Group>
            {this.props.foods.map(function(food, index) {
              if ((food.restaurantName) === a) {
                return <Food key={index}
                             food={food}/>;
              }
            })}
          </Card.Group>
        </Card.Content>
      </Card>;

    } else {
      content = '';
    }

    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.vendor.name} </Card.Header>
            <Image floated='right' size='tiny' src={this.props.vendor.image} />
            <Card.Meta>{this.props.vendor.location}</Card.Meta>
            <Card.Description>
              {this.props.vendor.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <p>Cuisine:</p>
            <div className="ui three buttons">
              <Button basic>
                {this.props.vendor.foodTypeOne}
              </Button>
              <Button basic>
                {this.props.vendor.foodTypeTwo}
              </Button>
              <Button basic>
                {this.props.vendor.foodTypeThree}
              </Button>
            </div>
          </Card.Content>
          <Card.Content extra>
            <p>Items:</p>
            <div className="ui two buttons">
              <Button as={NavLink} activeClassName="active" exact to="/vendorAddFood" key='vendorAddFood' color = 'blue'>
                Add
              </Button>
              <Button as={NavLink} activeClassName="active" exact to="/vendorFoodList" key='vendorFoodList' color = 'red'>
                Delete
              </Button>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className="mysection">
              <Button centered='true' onClick={this.handleClick}>
                {this.state.isToggleOn ? 'Available Menu Items' : 'Close'}
              </Button>
            </div>
          </Card.Content>
          <Card.Content extra>
            {content}
          </Card.Content>

        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
  foods: PropTypes.array.isRequired,

};

const subscription = Meteor.subscribe('AllFoods');

const VendorContainer = withTracker(() => ({
  ready: subscription.ready(),
  currentUser: Meteor.user() ? Meteor.user().username : '',
  foods: Foods.find({}).fetch(),
}))(Vendor);

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorContainer);

