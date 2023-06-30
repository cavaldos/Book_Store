import './com/index.scss';
import React from 'react';
import Book from './com/book';
function Home() {
  
    return (
        <>
            <div className="home">
                <Book number={6}/>
            </div>
            <div className="fillter">
                <h1>Fillter</h1>
            </div>
        </>
    );
}

export default Home;
