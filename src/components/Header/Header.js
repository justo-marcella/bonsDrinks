import React, { Component, Fragment} from 'react'
import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <>
            <header className="Menu">
            <nav className="NavMenu">
                <ul>
                    <li>Drinks</li>
                    <li>Sobre Nós</li>
                    <li>Bons Drinks</li>
                    <li>Nosso Time</li>
                    <li>Contato</li>
                </ul>
            </nav>
            </header>            
            </>
        )
    }
}
