import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';


/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class UserAdmin extends React.Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleClick(id) {
    this.onClick(id);
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
  onClick(id) {
    Meteor.call('deleteUser', { id });
  }


  render() {
    return (
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.user.owner} </Card.Header>
            <Card.Description>{this.props.user.location}</Card.Description>
          </Card.Content>
        <Card.Content textAlign={'center'} >
          <p><b>Food Type 1:  </b></p>
          <p>  </p>
          {this.props.user.foodTypeOne}
        </Card.Content>
          <Card.Content textAlign={'center'} >
            <p><b>Food Type 2:  </b></p>
            <p>  </p>
            {this.props.user.foodTypeTwo}
          </Card.Content>
          <Card.Content textAlign={'center'} >
            <p><b>Food Type 3:  </b></p>
            <p>  </p>
            {this.props.user.foodTypeThree}
          </Card.Content>
          <Card.Content>
            <Button negative={true}
                    attached={'bottom'}
                    content={'Delete'}
                    onClick={() => { this.handleClick(this.props.user._id); } }>

            </Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
UserAdmin.propTypes = {
  user: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(UserAdmin);
