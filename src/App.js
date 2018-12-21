import React, { Component } from 'react';
import MyInfo from './components/MyInfo';
import Footer from './components/Footer'
import Nav from './components/Nav'
import Todo from './components/Todo'
import ContactCard from './components/ContactCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <MyInfo />
        <Todo /> */}
        <ContactCard
          contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
        />

        <ContactCard
          contact={{ name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com" }}
        />

        <ContactCard
          contact={{ name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com" }}
        />

        <ContactCard
          contact={{ name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com" }}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
