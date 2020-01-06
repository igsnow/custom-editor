import React from 'react';
import './App.css';
import LikeButton from './component/count'
import Ceditor from "./component/ceditor";

function App() {
    return (
        <div className="App">
            <header>
                <LikeButton/>
                <Ceditor/>
            </header>
        </div>
    );
}

export default App;
