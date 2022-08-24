import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Container/Home/Home';
import Departments from './Container/Departments/Departments';
import { Route, Switch } from 'react-router-dom';
import Medicine from './Container/Medicine/Medicine';
import Appointment from './Container/Appointment/BookAppointment';
import Doctors from './Container/Doctors/Doctors';
import About from './Container/About/About';
import Contact from './Container/Contact/Contact';
import BookAppointment from './Container/Appointment/BookAppointment';
import ListAppointment from './Container/Appointment/ListAppointment';
import ToggleThemecontext from './Context/ThemeContext';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import Login from './Container/Login_signup/Login';


function App() {
  return (
    <>
    <Provider store={store}>
      <ToggleThemecontext>
        <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/departments"} exact component={Departments} />
          <Route path={"/doctors"} exact component={Doctors} />
          <Route path={"/about"} exact component={About} />
          <Route path={"/contact"} exact component={Contact} />
          <Route path={"/login_signup"} exact component={Login} />
          <Route path={"/medicines"} exact component={Medicine} />
          <Route path={"/appointment"} exact component={Appointment} />
          <Route path={"/bookAppointment"} exact component={BookAppointment} />
          <Route path={"/listAppointment"} exact component={ListAppointment} />
        </Switch>
        <Footer />
      </ToggleThemecontext>
    </Provider>
    </>
  );
}

export default App;
