import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import BottomFooter from '../components/BottomFooter';
import AdminTopMenu from '../components/AdminTopMenu';
import AdminMid from '../components/AdminMid';

export default class AdminHome extends React.Component {

  render() {
    return (
        <div className={'adminMid'}>
          <AdminTopMenu/>
          <AdminMid/>
          <BottomFooter/>
        </div>
    );
  }
}
ReactDOM.render(<AdminHome/>, document.getElementById('root'));