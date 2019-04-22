import React from 'react';
import { Card, Group, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Vendors } from '/imports/api/vendor/vendor';




/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class Vendor extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.vendor.name} </Card.Header>
            <Image floated='right' size='mini' src={this.props.vendor.image} />
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
            <div className="mysection">
            <Button floated ='centered'>Available Items</Button>
            </div>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Vendor);

