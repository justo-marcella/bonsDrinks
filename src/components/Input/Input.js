import React, { Component, Fragment } from 'react'
import style from "./Input.module.css";

export default class Input extends 
Component {
    constructor(props){
        super(props)
        this.meuChange = this.meuChange.bind(this)
    }
    meuChange(event){
        console.log(event.target.value)
    }
    render() {
        return (
            <>
            <label htmlFor="nomeInput"></label>
            <input style={this.props.style} className={style.inputHome} type="text" name="nomeInput"
            onChange={this.meuChange}>{this.props.children}</input>
            </>
        )
    }
}
