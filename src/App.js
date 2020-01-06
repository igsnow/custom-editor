import React from 'react';
import './App.css';
import LikeButton from './component/count'
import TEditor from "./component/teditor";

function App() {
    return (
        <div className="App">
            <header>
                <LikeButton/>
                <TEditor/>
            </header>
        </div>
    );
}

export default App;
