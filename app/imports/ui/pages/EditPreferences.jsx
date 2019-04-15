import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import BottomFooter from '../components/BottomFooter';
import EditCuisineType from '../components/EditCuisineType';
import EditPrice from '../components/EditPrice';

export default class EditPreferences extends React.Component {

  render() {
    return (
        <div className={'adminMid'}>
          <EditCuisineType/>
          <EditPrice/>
        </div>
    );
  }
}

ReactDOM.render(<EditPreferences/>, document.getElementById('root'));
