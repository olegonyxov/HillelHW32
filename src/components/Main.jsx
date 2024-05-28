import React, { useState } from 'react';
import MainContent1 from './MainContent1';
import MainContent2 from './MainContent2';
import MainContent3 from './MainContent3';

function Main(){
    const [contentView, setView] = useState("content1");

    const handleButtonClick = (content) => {
        setView(content);
    };

    return (
        <div className="Main-contaner">
            <ul className='Nav-list'>
                <li>
                    <input type="button" class="navBtn" value='Content1' onClick={() => handleButtonClick("content1")} />
                </li>
                <li>
                    <input type="button" class="navBtn" value='Content2' onClick={() => handleButtonClick("content2")} />
                </li>
                <li>
                    <input type="button" class="navBtn" value='Content3' onClick={() => handleButtonClick("content3")} />
                </li>
            </ul>
            {contentView === "content1" ? <MainContent1 /> : contentView === "content2" ? <MainContent2 /> : <MainContent3 />}
        </div>
    );
}

export default Main;