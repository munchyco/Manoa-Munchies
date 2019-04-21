import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorsAdmin extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>
              {this.props.vendor.name}
            </Card.Header>
            <Card.Meta>
              {this.props.vendor.location}
            </Card.Meta>
            <Card.Description>
              {this.props.vendor.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.vendor.foodTypeOne}{this.props.vendor.foodTypeTwo}{this.props.vendor.foodTypeThree}
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
