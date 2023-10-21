import React from 'react';
import {AiOutlineDown} from "react-icons/ai";
import LinaTop from "./LinaTop";
import {useSelector} from "react-redux";

 const List = () => {
    return (

        <div className='container'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-16 py-3">
                            Дата регистрации
                        </th>
                        <th scope="col" className="px-20 py-3">
                            ФИО
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Работа
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Вес тела
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Рост
                        </th>
                        <th scope="col" className="px-3 py-3">
                        удалить
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <LinaTop />)

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;