import React from 'react';
import {BiSolidDownArrow} from "react-icons/bi";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--title"><h2>Motion</h2></div>
                    <div className="header--user">
                        <h4>Пользователи</h4>
                        <div className="header--user__line"></div>
                    </div>
                    <div className="header--acc">
                        <div className="header--acc__group">
                            <div className="header--acc__group--user"><h2>Эрлан Жусупов</h2></div>
                            <div className="header--acc__group--status"><p>менеджер</p></div>
                        </div>
                        <div className="header--acc__row"><BiSolidDownArrow/></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;