import React from 'react';
import {HiMagnifyingGlass} from "react-icons/hi2";
import {AiOutlineMinus} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Nav = ({product}) => {
    const todo = useSelector(state => state.todo.todo)
    console.log('todo', todo)
    return (
        <div id="nav">
            <div className="container">
                <div className="nav">
                    <form className="nav--title"><h1>Пользователи({product.length})</h1></form>
                    <div className="nav--group">
                        <div className="nav--group__search">
                            <input placeholder="    Найти пользователя по ФИО" type="search"/>
                            <div className="nav--group__search--ico"><HiMagnifyingGlass className="nav--group__search--ico__icon"/></div>
                        </div>
                        <div className="nav--group__btn">
                            <Link to='/user'>
                                <button>Добавить <div className="nav--group__btn--line"><AiOutlineMinus/></div></button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Nav;