import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import * as astroAPI from '../../services/astros-api';
import AddAstroPage from '../AddAstroPage/AddAstroPage';
import AstroListPage from '../AstroListPage/AstroListPage';
import EditAstroPage from '../EditAstroPage/EditAstroPage';
import * as observationAPI from '../../services/observations-api';
import AddObservationPage from '../AddObservationPage/AddObservationPage';
import ObservationListPage from '../ObservationListPage/ObservationListPage';
import SearchWeatherPage from '../SearchWeatherPage/SearchWeatherPage';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  state = {
    astros: [],
    observations: [],
    user: userService.getUser()
  }

  handleAddAstro = async newAstroData => {
    const newAstro = await astroAPI.create(newAstroData);
    this.setState(state => ({
      astros: [...state.astros, newAstro]
    }), () => this.props.history.push('/astros'));
  }

  handleAddObservation = async newObservationData => {
    const newObservation = await observationAPI.create(newObservationData);
    this.setState(state => ({
      observations: [...state.observations, newObservation]
    }), () => this.props.history.push('/observations'));
  }

  handleDeleteAstro = async id => {
    await astroAPI.deleteOne(id);
    this.setState(state => ({
      astros: state.astros.filter(a => a._id !== id)
    }), () => this.props.history.push('/astros'));
  }

  handleUpdateAstro = async updatedAstroData => {
    const updatedAstro = await astroAPI.update(updatedAstroData);
    const newAstrosArray = this.state.astros.map(a => 
      a._id === updatedAstro._id ? updatedAstro : a);
      this.setState(
        {astros: newAstrosArray},
        () => this.props.history.push('/astros')
      )
  }

  async componentDidMount() {
    const astros = await astroAPI.getAll();
    this.setState({astros})
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render () {
    return (
      <>
        <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Route exact path='/' render={({ history }) => 
          <HomePage
            history={history}
          />
        }/>
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/astro/add' render={({ history }) =>
        userService.getUser() ?
          <AddAstroPage
            handleAddAstro = {this.handleAddAstro}
          />  
          :
          <Redirect to='/login' />
        }/>
        <Route exact path='/observations/add' render={({ history }) =>
        userService.getUser() ?
          <AddObservationPage
            handleAddObservation = {this.handleAddObservation}
        /> 
          :
          <Redirect to='/login' />  
        }/>
        <Route exact path='/astros' render={({ history }) =>
          <AstroListPage
            astros={this.state.astros}
            handleDeleteAstro={this.handleDeleteAstro}
          />  
        }/>
        <Route exact path='/observations' render={({ history }) =>
          <ObservationListPage
            observations={this.state.observations}
          />  
        }/>
        <Route exact path='/edit' render={({ location }) =>
          <EditAstroPage
            handleUpdateAstro={this.handleUpdateAstro}
            location={location}
          />
        }/>
        <Route exact path='/weather' render={({ history }) =>
          <SearchWeatherPage
            history={history}
            user={this.state.user}
          />
        }/>
      </>

    );
  }
}

export default App;
