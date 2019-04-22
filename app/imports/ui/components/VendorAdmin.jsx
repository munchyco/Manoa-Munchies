import React from 'react';
import { Card, Group, Image, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Vendors } from '/imports/api/vendor/vendor';



/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class VendorAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.deleteCallback = this.deleteCallback.bind(this);
  }

  /** Notify the user of the results of the submit. If successful, clear the form. */
  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete Failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  /** On submit, insert the data. */
  onClick(vendor) {
    Vendors.remove({ vendor }, this.deleteCallback);
  }


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
      <Button>
        attached='bottom'
        content='Delete'
        onClick={this.onClick(this.props.vendor._id)}
      </Button>

    </Card.Content>
    </Card>
  );
  }
}

/** Require a document to be passed to this component. */
VendorAdmin.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorAdmin);

