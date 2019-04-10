import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import BottomFooter from '../components/BottomFooter';
import ProfileCard from '../components/ProfileCard';
import TopMenu from '../components/TopMenu';

export default class UserProfile extends React.Component {

  render() {
    return (
        <div className='Tight'>
          <TopMenu/>
          <ProfileCard/>
          <BottomFooter/>
        </div>
    );
  }
}
ReactDOM.render(<UserProfile/>, document.getElementById('root'));