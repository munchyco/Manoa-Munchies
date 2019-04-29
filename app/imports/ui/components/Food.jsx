import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class Food extends React.Component {
  render() {
    return (
        <Card color='black' style={ { border: 'none' } } centered>
          <Image centered src={this.props.food.image} id={'picSize'} />
          <Card.Content style={ { border: 'none' } }>
            <Card.Header>{this.props.food.name} </Card.Header>
            <Card.Meta>{this.props.food.location}</Card.Meta>
            <Card.Description>
              {this.props.food.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Food.propTypes = {
  food: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Food);
