import { Route } from "react-router-dom/cjs/react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import About from "./container/About";
import Doctors from "./container/Doctors";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Department from "./container/Department";
import Home from "./container/Home";
import Contact from "./container/Contact";
// import Appointment from "./container/Appointment";
import LoginSignup from "./container/LoginSignup";
import Medicine from "./container/Medicine";
import UseRef from "./container/UseRef";
import BookAppointment from "./container/Appointment/BookAppointment";
import ListAppointment from "./container/Appointment/ListAppointment";
import PublicRoute from "./container/routers/PublicRoute";
import PrivetRoute from "./container/routers/PrivetRoute";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <PublicRoute exact path={'/'} component={Home} />
        <PublicRoute exact path={'/department'} component={Department} />
        <PublicRoute exact path={'/doctors'} component={Doctors} />
        <PublicRoute exact path={'/about'} component={About} />
        <PublicRoute exact path={'/contact'} component={Contact} />
        <PublicRoute exact path={'/login'} restrict={true} component={LoginSignup} />
        <PublicRoute exact path={'/medicine'} component={Medicine} />
        <Route exact path={'/refs'} component={UseRef} />
        <PrivetRoute exact path={'/book_apt'} component={BookAppointment} />
        <PrivetRoute exact path={'/list_apt'} component={ListAppointment} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
