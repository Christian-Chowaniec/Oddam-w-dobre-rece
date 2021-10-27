import React from 'react';

const HomeHeader = () => {
    return (
        <div>
            <h2 className="HomeHeader__title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src="../assets/Decoration.svg" alt="decoration"/>
            <div>
                <button href="#">ODDAJ RZECZY</button>
                <button href="#">ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
        </div>
    );
};

export default HomeHeader;
