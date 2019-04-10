import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import BottomFooter from '../components/BottomFooter';
import TopMenu from '../components/TopMenu';
import TopPickMid from '../components/TopPickMid';

export default class TopPick extends React.Component {

  render() {
    return (
        <div className={'vendorMid'}>
          <TopMenu/>
          <TopPickMid/>
          <BottomFooter/>
        </div>
    );
  }
}
ReactDOM.render(<TopPick/>, document.getElementById('root'));
