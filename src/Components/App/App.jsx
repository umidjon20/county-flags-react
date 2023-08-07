import { Component } from "react";

import Header from "../Header/Header";
import Search from "../Searchbar/Search";
import Cardlist from "../Cardlists/Carslists";

class App extends Component{
    render(){
        return (
            <>
            <Header/>
            <Search/>
            <Cardlist/>
            </>
        )
    }
}

export default App