import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu inverted size='large' className="topmenu">
          <Menu.Item active>Home</Menu.Item>
          <Menu.Item>View Venders</Menu.Item>
          <Menu.Item>View Users</Menu.Item>
          <Menu.Item position={'right'}> jeb3@hawaii.edu </Menu.Item>
        </Menu>
    );
  }
}
