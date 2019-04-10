import React from 'react';
import { Menu } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu inverted size='large' className="topmenu">
            <Menu.Item active>Profile</Menu.Item>
            <Menu.Item>Breakfast</Menu.Item>
            <Menu.Item>Lunch</Menu.Item>
            <Menu.Item>Dinner</Menu.Item>
        </Menu>
    )
  }
}