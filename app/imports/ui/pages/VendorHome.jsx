import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import BottomFooter from '../components/BottomFooter';
import TopMenu from '../components/TopMenu';
import VendorMid from '../components/VendorMid';

export default class VendorHome extends React.Component {

  render() {
    return (
        <div className={'vendorMid'}>
          <TopMenu/>
          <VendorMid/>
          <BottomFooter/>
        </div>
    );
  }
}
ReactDOM.render(<VendorHome/>, document.getElementById('root'));
