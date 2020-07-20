import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService';
import * as astroAPI from '../../services/astros-api';
import AddAstroPage from '../AddAstroPage/AddAstroPage';
import AddObservationPage from '../AddObservationPage/AddObservationPage';
import AstroListPage from '../AstroListPage/AstroListPage';
import EditAstroPage from '../EditAstroPage/EditAstroPage';
// import ObservationListPage from '../ObservationListPage/ObservationListPage';

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
        <Route exact path='/astro/add' render={() =>
        userService.getUser() ?
          <AddAstroPage
            handleAddAstro = {this.handleAddAstro}
          />  
          :
          <Redirect to='/login' />
        }/>
        <Route exact path='/observations/add' render={() =>
          <AddObservationPage
        />  
        }/>
        <Route exact path='/astros' render={() =>
          <AstroListPage
            astros={this.state.astros}
            handleDeleteAstro={this.handleDeleteAstro}
          />  
        }/>
        <Route exact path='/edit' render={({location }) =>
          <EditAstroPage
            handleUpdateAstro={this.handleUpdateAstro}
            location={location}
          />
        }>

        </Route>
      </>
    );
  }
}

export default App;
