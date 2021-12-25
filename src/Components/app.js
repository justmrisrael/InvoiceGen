import React from 'react';
import HomePage from './HomePage';
import LoadCreateInvoice from './LoadCreateInvoice';
import LoadAllInvoices from './LoadAllInvoices';
import LoadUpdateInvoice from './LoadUpdateInvoice';
import LoadDisplayInvoice from './LoadDisplayInvoice';
import LoadPageNotFound from './LoadPageNotFound';
import { 
    BrowserRouter,
    Switch,
    Route
}from 'react-router-dom';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route path='/createinvoice'>
                    <LoadCreateInvoice/>
                </Route>
                <Route path='/updateinvoice'>
                    <LoadUpdateInvoice/>
                </Route>
                <Route path='/displayinvoice'>
                    <LoadDisplayInvoice/>
                </Route>
                <Route path='/loadinvoices'>
                    <LoadAllInvoices/>
                </Route>
                <Route >
                    <LoadPageNotFound/>
                </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
