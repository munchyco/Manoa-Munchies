import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import ProfileCard from '../components/ProfileCard';


export default class UserProfile extends React.Component {

  render() {
    return (
        <div className='Tight'>
          <ProfileCard/>
        </div>
    );
  }
}
ReactDOM.render(<UserProfile/>, document.getElementById('root'));