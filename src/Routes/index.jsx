import { Route, Switch } from "react-router-dom"
import Home from "../Pages/Home"
import "./style"


function Routes(){
    return(
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
        </Switch>
    )
}

export default Routes;