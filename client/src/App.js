import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"; 
import Dashboard from "./components/Dashboard"; 
import PrivateRoute from "./components/PrivateRoute";
import { Container } from "react-bootstrap"; 
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import { AuthProvider } from "./contexts/AuthContext"; 
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  </Container>
  );
}

export default App;
