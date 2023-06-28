import './com/index.scss';
import React from 'react';
import Book from './com/book';
import { Rate } from 'antd';
function Home() {
    console.log('Homef');

    return (
        <>
            <div className="home">
                <Book />

                
            </div>
            <div className="fillter">
                <h1>Fillter</h1>
            </div>
        </>
    );
}

export default Home;
