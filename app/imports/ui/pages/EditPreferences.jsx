import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import { Meteor } from 'meteor/meteor';
import EditCuisineType from '../components/EditCuisineType';
import EditPrice from '../components/EditPrice';
import EditFoodTags from '../components/EditFoodTags';
import Users from '/imports/api/user/user.js';
import EditHealthOptions from '../components/EditHealthOptions';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

export default class EditPreferences extends React.Component {

  state = {
    foodTypeOne: String,    //favorite food types such as: Middle Eastern, Japanese, Cajun, Classic American, etc.
    foodTypeTwo: String,
    foodTypeThree: String,
    vegan: Boolean,         //boolean values for whether the user cares about vegan, GF and healthy options.
    glutenFree: Boolean,
    healthy: Boolean,
    ToGo: Boolean,
    FoodTruck: Boolean,
    MadeToOrder: Boolean,
    Buffet: Boolean,
    restaurantPrice1: Boolean, //typical price range student wants.
    restaurantPrice2: Boolean,
    restaurantPrice3: Boolean,
    location: String,       //usual place on campus.
    owner: String,           //user account
  }



  setUp() {
    this.setState({FoodTruck: false });
    this.setState({MadeToOrder: true });
    this.setState({Buffet: true });
    this.setState({ToGo: true });
    this.setState({restaurantPrice1: true});
    this.setState({restaurantPrice2: true});
    this.setState({restaurantPrice3: true});
    this.setState({foodTypeOne: 'Chinese'});
    this.setState({foodTypeTwo: 'Korean'});
    this.setState({foodTypeThree: 'BBQ'});
    this.setState({vegan: false});
    this.setState({healthy: true});
    this.setState({glutenFree: true});
  }

  handleFoodType1Change(value) {
    this.setState({ foodTypeOne: value });
  }

  handleFoodType2Change(value) {
    this.setState({ foodTypeTwo: value });
  }

  handleFoodType3Change(value) {
    this.setState({ foodTypeThree: value });
  }

  handleSubmit(){
    
  }

  handlePriceChange(price) {
      this.state.restaurantPrice[price] = !this.state.restaurantPrice[price];
  }

  getToGoPreset() {
    return this.state.ToGo;
  }

  getBuffetPreset() {
    return this.state.Buffet;
  }

  getFoodTruckPreset() {
    return this.state.FoodTruck;
  }

  getMadeToOrderPreset() {
    return this.state.MadeToOrder;
  }


  handleToGoChange() {
    this.setState({ToGo: !this.state.ToGo});
  }

  handleBuffetChange() {
    this.setState({Buffet: !this.state.Buffet});
  }
  handleFoodTruckChange() {
    this.setState({FoodTruck: !this.state.FoodTruck});
  }
  handleMadeToOrderChange() {
    this.setState({MadeToOrder: !this.state.MadeToOrder});
  }

  getPricePreset1() {
    return this.state.restaurantPrice1;
  }

  getPricePreset2() {
    return this.state.restaurantPrice2;
  }

  getPricePreset3() {
    return this.state.restaurantPrice3;
  }

  handlePriceChange1() {
    this.setState({restaurantPrice1: !this.state.restaurantPrice1});
  }

  handlePriceChange2() {
    this.setState({restaurantPrice2: !this.state.restaurantPrice2});
  }

  handlePriceChange3() {
    this.setState({restaurantPrice3: !this.state.restaurantPrice3});
  }

  getFoodTag1() {
    return this.state.foodTypeOne;
  }

  getFoodTag2() {
    return this.state.foodTypeTwo;
  }

  getFoodTag3() {
    return this.state.foodTypeThree;
  }

  getVegan() {
    return this.state.vegan;
  }

  getGlutenFree() {
    return this.state.glutenFree;
  }

  getHealthy() {
    return this.state.healthy;
  }

  handleVeganChange() {
    this.setState({vegan: !this.state.vegan});
  }

  handleHealthyChange() {
    this.setState({healthy: !this.state.healthy});
  }

  handleGlutenFreeChange() {
    this.setState({glutenFree: !this.state.glutenFree});
  }


  render() {
    this.setUp();
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }
   renderPage() {
    return (
        <div className={'EditPreferences'}>
          <EditCuisineType
            getTG={this.getToGoPreset()}
            getB={this.getBuffetPreset()}
            getFT={this.getFoodTruckPreset()}
            getMTO={this.getMadeToOrderPreset()}
            TGC={this.handleToGoChange()}
            BC={this.handleBuffetChange()}
            FTC={this.handleFoodTruckChange()}
            MTOC={this.handleMadeToOrderChange()}
          />
          <EditPrice
              getPP1={this.getPricePreset1()}
              getPP2={this.getPricePreset2()}
              getPP3={this.getPricePreset3()}
              HPC1={this.handlePriceChange1()}
              HPC2={this.handlePriceChange2()}
              HPC3={this.handlePriceChange3()}
          />
          <EditFoodTags
              getFT1={this.getFoodTag1()}
              getFT2={this.getFoodTag2()}
              getFT3={this.getFoodTag3()}
              HFT1C={this.handleFoodType1Change()}
              HFT2C={this.handleFoodType2Change()}
              HFT3C={this.handleFoodType3Change()}
          />
          <EditHealthOptions
              getV={this.getVegan()}
              getGF={this.getGlutenFree()}
              getH={this.getHealthy()}
              HVC={this.handleVeganChange()}
              HHC={this.handleHealthyChange()}
              HGFC={this.handleGlutenFreeChange()}
          />
          <Button size='small' color='green'>
            Submit
            onClick={this.handleSubmit()}
          </Button>
        </div>
    );
  }
}

ReactDOM.render(<EditPreferences/>, document.getElementById('root'));


EditPreferences.propTypes = {
  Users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Users documents.
  const subscription = Meteor.subscribe('Users');
  return {
    User: Users.find({}).fetch(),
    ready: (subscription.ready()),
  };
})(EditPreferences);
