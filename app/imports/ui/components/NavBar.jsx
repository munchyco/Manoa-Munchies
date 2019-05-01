import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Dropdown, Header } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

const menuStyle = {
  color: '#024731',
  marginBottom: '10px',
  backgroundColor: '#024731',
  fontFamily: 'Quicksand',
};

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
      <Menu style={menuStyle} attached="top" borderless inverted>
        <Menu.Item as={NavLink} activeClassName="" exact to="/userhome">
          <Header inverted as='h1'>
            <p className="consistent-font">Manoa Munchies</p>
          </Header>
        </Menu.Item>
        {this.props.currentUser ? '' : ''}
        {Roles.userIsInRole(Meteor.userId(), 'vendor') ? (
            [<Menu.Item as={NavLink} activeClassName="active" exact to="/addvendor" key='addvendor'>Add Vendor</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/vendor" key='vendor'>Vendor Home</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/storeEdit" key='storeEdit'>Edit Your Stores</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/vendorAddFood" key='vendorAddFood'>Add Food</Menu.Item>,
              <Menu.Item as={NavLink} activeClassName="active" exact to="/vendorFoodList" key='vendorFoodList'>Your Foods</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'customer') ? (
            [<Menu.Item as={NavLink} activeClassName="active" exact to="/toppick" key='toppick'>Top Picks</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/user" key='user'>User Profile</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/listvendors" key='listvendors'>Vendor List</Menu.Item>]
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            [<Menu.Item as={NavLink} activeClassName="active" exact to="/admin" key='admin'>Admin</Menu.Item>,
                <Menu.Item as={NavLink} activeClassName="active" exact to="/adminUser" key='adminUser'>View Users</Menu.Item>]
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
      </Menu>
    );
  }
}

/** Declare the types of all properties. */
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

/** Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter */
export default withRouter(NavBarContainer);
