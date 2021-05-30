import React from 'react';
import SideBar from './SideBar/SideBar';
import RepBlock from './RepContent/RepBlock';

const Main = () => {
    return (
        <section className="repositories">
            <div className="container">
                <SideBar />
                <RepBlock />
            </div>
        </section>
    );
}

export default Main;