
import React from 'react';
import { Card, Group, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import '/client/style.css';


/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class Item extends React.Component {
  render() {
    return (
        <Card centered>
          <Image floated='centered' size='medium' src={this.props.item.image} id={"imageSize"} />
          <Card.Content>
            <Card.Header>{this.props.item.name} </Card.Header>
            <Card.Meta>{this.props.item.location}</Card.Meta>
            <Card.Description>
              {this.props.item.description}
            </Card.Description>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Item.propTypes = {
  item: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Item);
