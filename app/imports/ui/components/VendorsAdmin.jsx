import React from 'react';
import { Card, Group, Image, Feed, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Vendors } from '/imports/api/vendor/vendor';



/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class VendorsAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  render() {
    return (
        <Card centered>
          <Image floated ='centered' src={this.props.vendor.image} id={"picSize"}/>
          <Card.Content>
            <Card.Header>{this.props.vendor.name} </Card.Header>
            <Card.Meta>{this.props.vendor.location}</Card.Meta>
            <Card.Description>
              {this.props.vendor.description}
            </Card.Description>
            <Button attached={'bottom'}>
              onClick={this.onClick}
            </Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
VendorsAdmin.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorsAdmin);
