import React, { Component } from 'react'
import Spinner from './SpinnerGIF.gif'

export default class Spinners extends Component {
    render() {
        return (
            <div>
                <img src={Spinner} alt="Spinner" srcset="Spinner" />
            </div>
        )
    }
}
