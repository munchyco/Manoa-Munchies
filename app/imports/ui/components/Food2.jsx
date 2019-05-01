import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class Food2 extends React.Component {
  render() {
    return (
        <Card color='black' style={ { border: 'none' } } centered>
          <Card.Content style={ { border: 'none' } }>
            <Card.Header>{this.props.food.name} </Card.Header>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Food2.propTypes = {
  food: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Food2);
