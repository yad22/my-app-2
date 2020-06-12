import React, {Component} from "react";

import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";

class Main extends Component {
    constructor(){
        super();
    }

    static contentType = ThemeContext;

    render (){
        const currentTheme = AppTheme[this.context]

        return(
            <main></main>
        )
    }
}

