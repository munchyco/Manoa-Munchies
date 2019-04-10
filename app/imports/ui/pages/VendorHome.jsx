import React from 'react';

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
