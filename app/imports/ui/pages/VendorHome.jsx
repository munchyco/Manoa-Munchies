import React from 'react';
import ReactDOM from 'react-dom';
import TopMenu from '../components/TopMenu';
import VendorMid from '../components/VendorMid';

export default class VendorHome extends React.Component {

  render() {
    return (
        <div className={'vendorMid'}>
          <TopMenu/>
          <VendorMid/>
        </div>
    );
  }
}
ReactDOM.render(<VendorHome/>, document.getElementById('root'));
