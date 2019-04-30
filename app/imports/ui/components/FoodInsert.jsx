import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class FoodInsert extends React.Component {
  render() {
    return (
        <Card>
          <Card.Content>
            <p>{this.props.food.name}</p>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
FoodInsert.propTypes = {
  food: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(FoodInsert);
