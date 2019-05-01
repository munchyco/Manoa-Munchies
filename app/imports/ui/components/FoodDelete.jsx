import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class FoodDelete extends React.Component {

  handleClick() {
      Meteor.call('removeFood', this.props.food);
  }

  render() {
    return (
        <Card color='black' style={ { border: 'none' } } centered>
          <Image centered src={this.props.food.image} id={'picSize'} />
          <Card.Content style={ { border: 'none' } }>
            <Card.Header>{this.props.food.name} </Card.Header>
            <Card.Meta>Location: {this.props.food.restaurantName} at {this.props.food.location}</Card.Meta>
            <Card.Description>
              {this.props.food.description}
            </Card.Description>
            <Button style={ { marginTop: '25px' } }
                    negative={true}
                    attached={'bottom'}
                    content={'Delete'}
                    onClick={() => { this.handleClick(); } }>

            </Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FoodDelete.propTypes = {
  food: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FoodDelete);
