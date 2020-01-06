import React from 'react';
import './App.css';
import LikeButton from './component/editor'

function App() {
    return (
        <div className="App">
            <header>
                <p>
                    test editor
                </p>
                <LikeButton/>
            </header>
        </div>
    );
}

export default App;
