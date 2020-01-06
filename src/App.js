import React from 'react';
import './App.css';
import LikeButton from './component/count'
import Ceditor from "./component/ceditor";
import Teditor from "./component/teditor";

function App() {
    return (
        <div className="App">
            <header>
                <LikeButton/>
                <Ceditor/>
                <Teditor/>
            </header>
        </div>
    );
}

export default App;
