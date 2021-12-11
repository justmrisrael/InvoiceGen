import React from 'react';
import { 
    BrowserRouter,
    Switch,
    Route
}from 'react-router-dom';

function HomePage(props){
    return (
        <h1>Welcome to the Homepage!!</h1>
    );
}
function LoadCreateInvoice(props){
    return (
        <h1>Welcome to the create invoice form!!</h1>
    );
}
function LoadUpdateInvoice(props){
    return (
        <h1>Welcome to the update invoice form!!</h1>
    );
}
function LoadDisplayInvoice(props){
    return (
        <h1>Welcome to the display invoice form!!</h1>
    );
}
function LoadAllInvoices(props){
    return (
        <h1>Welcome to the invoices listing!!</h1>
    );
}
function LoadPageNotFound(props){
    return (
        <h1>ERROR: Page Not Found</h1>
    );
}

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
