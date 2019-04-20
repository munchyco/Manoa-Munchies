import React from 'react';
import ReactDOM from 'react-dom';
import '/client/style.css';
import 'semantic-ui-css/semantic.min.css';
import { Meteor } from 'meteor/meteor';
import BottomFooter from '../components/BottomFooter';
import EditCuisineType from '../components/EditCuisineType';
import EditPrice from '../components/EditPrice';
import EditFoodTags from '../components/EditFoodTags';
import Users from '/imports/api/user/user.js';
import { Form, Button } from 'semantic-ui-react';
import EditHealthOptions from '../components/EditHealthOptions';


export default class EditPreferences extends React.Component {

  constructor(props) {
    super(props);
    this.Tracker = {
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
    owner: String           //user account
    }
    this.trackVegan = 0;
    this.trackGlutenFree = 0;
    this.trackHealthy = 0;
    this.trackToGo = 0;
    this.trackFoodTruck = 0;
    this.trackMadeToOrder = 0;
    this.trackBuffet = 0;
    this.trackPrice1 = 0;
    this.trackPrice2 = 0;
    this.trackPrice3 = 0;


    this.handleHealthyChange = this.handleHealthyChange.bind(this);
    this.handleGlutenFreeChange = this.handleGlutenFreeChange.bind(this);
    this.handleVeganChange = this.handleVeganChange.bind(this);
    this.handleBuffetChange = this.handleBuffetChange.bind(this);
    this.handleToGoChange = this.handleToGoChange.bind(this);
    this.handleMadeToOrderChange = this.handleMadeToOrderChange.bind(this);
    this.handleFoodTruckChange = this.handleFoodTruckChange.bind(this);
    this.handlePrice1Change = this.handlePrice1Change.bind(this);
    this.handlePrice2Change = this.handlePrice2Change.bind(this);
    this.handlePrice3Change = this.handlePrice3Change.bind(this);
    this.handleFT1 = this.handleFT1.bind(this);
    this.handleFT2 = this.handleFT2.bind(this);
    this.handleFT3 = this.handleFT3.bind(this);
    this.trackHealthyChange = this.trackHealthyChange.bind(this);
    this.trackGlutenFreeChange = this.trackGlutenFreeChange.bind(this);
    this.trackVeganChange = this.trackVeganChange.bind(this);
    this.trackBuffetChange = this.trackBuffetChange.bind(this);
    this.trackToGoChange = this.trackToGoChange.bind(this);
    this.trackMadeToOrderChange = this.trackMadeToOrderChange.bind(this);
    this.trackFoodTruckChange = this.trackFoodTruckChange.bind(this);
    this.trackPrice1Change = this.trackPrice1Change.bind(this);
    this.trackPrice2Change = this.trackPrice2Change.bind(this);
    this.trackPrice3Change = this.trackPrice3Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  oddEven(number){
    if((number % 2) == 0){
      return false;
    } else if((number % 2) == 1){
      return true;
    }
  }

  handleHealthyChange(){
    if(this.oddEven(this.trackHealthy)){
      this.Tracker.healthy = !this.Tracker.healthy;
    }
    this.trackHealthy = 0;
  }

  handleGlutenFreeChange(){
    if(this.oddEven(this.trackGlutenFree)){
      this.Tracker.glutenFree = !this.Tracker.glutenFree;
    }
    this.trackGlutenFree = 0;
  }

  handleVeganChange(){
    if(this.oddEven(this.trackHealthy)){
      this.Tracker.vegan = !this.Tracker.vegan;
    }
    this.trackHealthy = 0;
  }

  handleBuffetChange(){
    if(this.oddEven(this.trackBuffet)){
      this.Tracker.Buffet = !this.Tracker.Buffet;
    }
    this.trackBuffet = 0;
  }

  handleToGoChange(){
    if(this.oddEven(this.trackToGo)){
      this.Tracker.ToGo = !this.Tracker.ToGo;
    }
    this.trackToGo = 0;
  }

  handleMadeToOrderChange(){
    if(this.oddEven(this.trackMadeToOrder)){
      this.Tracker.MadeToOrder = !this.Tracker.MadeToOrder;
    }
    this.trackMadeToOrder = 0;
  }

  handleFoodTruckChange(){
    if(this.oddEven(this.trackFoodTruck)){
      this.Tracker.FoodTruck = !this.Tracker.FoodTruck;
    }
    this.trackFoodTruck = 0;
  }

  handlePrice1Change(){
    if(this.oddEven(this.trackPrice1)){
      this.Tracker.restaurantPrice1 = !this.Tracker.restaurantPrice1;
    }
    this.trackPrice1 = 0;
  }

  handlePrice2Change(){
    if(this.oddEven(this.trackPrice2)){
      this.Tracker.restaurantPrice2 = !this.Tracker.restaurantPrice2;
    }
    this.trackPrice2 = 0;
  }

  handlePrice3Change(){
    if(this.oddEven(this.trackPrice3)){
      this.Tracker.restaurantPrice3 = !this.Tracker.restaurantPrice3;
    }
    this.trackPrice3 = 0;
  }

  trackPrice1Change() {
    this.trackPrice1++;
  }
  trackPrice2Change() {
    this.trackPrice2++;
  }
  trackPrice3Change() {
    this.trackPrice3++;
  }

  trackBuffetChange() {
    this.trackBuffet++;
  }

  trackToGoChange() {
    this.trackToGo++;
  }

  trackMadeToOrderChange() {
    this.trackMadeToOrder++;
  }

  trackFoodTruckChange() {
    this.trackFoodTruck++;
  }

  trackHealthyChange() {
    this.trackHealthy++;
  }
  trackGlutenFreeChange() {
    this.trackGlutenFree++;
  }
  trackVeganChange() {
    this.trackVegan++;
  }

  handleFT1 = value => {
    this.Tracker.foodTypeOne = value;
  };

  handleFT2 = value => {
    this.Tracker.foodTypeTwo = value;
  };

  handleFT3 = value => {
    this.Tracker.foodTypeThree = value;
  };

  setUp(){
    this.Tracker.ToGo = true;
    this.Tracker.FoodTruck = false;
    this.Tracker.MadeToOrder = true;
    this.Tracker.Buffet = true;
    this.Tracker.foodTypeOne = "Chinese";
    this.Tracker.foodTypeTwo = "Korean";
    this.Tracker.foodTypeThree = "American";
    this.Tracker.vegan = false;
    this.Tracker.healthy = false;
    this.Tracker.glutenFree = true;
    this.Tracker.restaurantPrice1 = true;
    this.Tracker.restaurantPrice2 = true;
    this.Tracker.restaurantPrice3 = true;
  }
Submit(){
  this.handleHealthyChange();
  this.handleGlutenFreeChange();
  this.handleVeganChange();
  this.handleBuffetChange();
  this.handleToGoChange();
  this.handleMadeToOrderChange();
  this.handleFoodTruckChange();
  this.handlePrice1Change();
  this.handlePrice2Change();
  this.handlePrice3Change();
    console.log(this.Tracker);
}

  render() {
    this.setUp();
    return (
        <div className={'EditPrefs'}>
          <Form
              onSubmit={this.Submit}
          >
          <EditCuisineType
              getTG={this.Tracker.ToGo}
              getB={this.Tracker.Buffet}
              getFT={this.Tracker.FoodTruck}
              getMTO={this.Tracker.MadeToOrder}
              HTGC={this.trackToGoChange}
              HBC={this.trackBuffetChange}
              HFTC={this.trackFoodTruckChange}
              HMTOC={this.trackMadeToOrderChange}
          />
          <EditPrice
            getPP1={this.Tracker.restaurantPrice1}
            getPP2={this.Tracker.restaurantPrice2}
            getPP3={this.Tracker.restaurantPrice3}
            HP1={this.trackPrice1Change}
            HP2={this.trackPrice2Change}
            HP3={this.trackPrice3Change}
          />
          <EditFoodTags
            FT1={this.Tracker.foodTypeOne}
            FT2={this.Tracker.foodTypeTwo}
            FT3={this.Tracker.foodTypeThree}
            HFT1={this.handleFT1}
            HFT2={this.handleFT2}
            HFT3={this.handleFT3}
          />
          <EditHealthOptions
            getV={this.Tracker.vegan}
            getGF={this.Tracker.glutenFree}
            getH={this.Tracker.healthy}
            HHC={this.trackHealthyChange}
            HGFC={this.trackGlutenFreeChange}
            HVC={this.trackVeganChange}
          />
            <Button type='submit'>Submit</Button>
          </Form >
        </div>
    );
  }
}

ReactDOM.render(<EditPreferences/>, document.getElementById('root'));