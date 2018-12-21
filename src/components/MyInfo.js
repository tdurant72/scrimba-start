import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './MyInfo.css';

class MyInfo extends React.Component {
    render() {
        return (
            <div className="main">
                <h1 className="header">Tyus Durant</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed volutpat ipsum, at congue risus. Donec lacinia maximus sapien, nec lacinia neque mattis sit amet. Praesent vel felis elit. Etiam mauris sem, bibendum non varius vitae, hendrerit at nisi. Aenean pulvinar laoreet leo, sit amet venenatis nibh commodo blandit. Donec sodales pulvinar diam nec consectetur. Nullam nec mauris fringilla, maximus augue sed, egestas justo.</p>
                <h3>My Vacation spots:</h3>
                <ul>
                    <li>Trinidad</li>
                    <li>Morocco</li>
                    <li>Ethiopia</li>
                </ul>
            </div>
        )
    }
}
export default MyInfo;

