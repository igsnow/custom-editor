import React from 'react';
import './App.css';
import LikeButton from './component/count'
import SEditor from "./component/seditor";

function App() {
    return (
        <div className="App">
            <header>
                <LikeButton/>
                <SEditor/>
            </header>
        </div>
    );
}

export default App;
