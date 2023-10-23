import React, {useEffect, useState} from 'react';
import logo from './../../Components/List/img/YouTube.png'
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, getBasket, getDelete} from "../../store/Reducers/UserSlice";
import {AiOutlineDelete} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'

const LinaTop = ({product , setProduct}) => {
    // const todo = useSelector(state => state.todo.todo)

    // function refreshPage() {
    //     window.location.reload(); // Перезагрузить текущую страницу
    // }

    function readData(){
        let newData = JSON.parse(localStorage.getItem('contact')) || []
        setProduct(newData)
    }

    useEffect(()=>{
        readData()
    },[])

    function handleClick(id){
        let data = JSON.parse(localStorage.getItem('contact')) || []
        const filter = data.filter(items => items.id !== id)
        localStorage.setItem('contact' , JSON.stringify(filter))
        setProduct(filter)
    }
    return (
        <>
            {
                product.map(items => {
                    console.log("IMg",items.img)
                    console.log("items",items)
                    return <>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <th scope="row" className="px-16 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                style={{
                                    display: 'flex',
                                     alignItems: 'center',
                                    marginLeft: '-20px'
                                }}>
                                <img style={{
                                    margin: '0 20px 0 -30px',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px'
                                }} src={items.img} alt=""/>
                                <h3>{items.data.toString().slice(8,22)}</h3>
                            </th>
                            <td className="px-20 py-4" style={{
                                 marginLeft: '-90px',
                                color:'#fff',
                                fontWeight:'bold'
                            }} >
                                {items.name}
                            </td>
                            <td className="px-3 py-4" style={{fontWeight:'bold' , color:'#fff'}}>
                                {items.work}
                            </td>
                            <td className="px-3 py-4" style={{fontWeight:'bold' , color:'#fff'}}>
                                {items.weight}
                            </td>
                            <td className="px-3 py-4" style={{fontWeight:'bold' , color:'#fff'}}>
                                {items.height}
                            </td>
                           <tr className='px-3' style={{cursor:'pointer' }}>
                               <AiOutlineDelete onClick={() => handleClick(items.id)} className='text-2xl' style={{color:'red'}}/>
                           </tr>
                        </tr>
                    </>
                })
            }
        </>
    );
};

export default LinaTop;
