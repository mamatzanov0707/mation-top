import React, {useState} from 'react';
import logo from './../../Components/List/img/YouTube.png'
import {useDispatch, useSelector} from "react-redux";
import {changeStatus, getBasket, getDelete} from "../../store/Reducers/UserSlice";
import {AiOutlineDelete} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'

const LinaTop = () => {
    const todo = useSelector(state => state.todo.todo)
    const [product , setProduct] = useState(todo)
    function Delete(id){
        const filter = product.filter(el => el.payload[0].id !== id)
        setProduct(filter)
    }
    const filter = product
    console.log(todo)
    return (
        <>
            {
                filter.map(items => {
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
                                }} src={logo} alt=""/>
                                <h3>{items.payload[0].data.toString().slice(7,24)}</h3>
                            </th>
                            <td className="px-20 py-4" style={{
                                marginLeft: '-90px',
                                color:'#fff',
                                fontWeight:'bold'
                            }} >
                                {items.payload.name}
                            </td>
                            <td className="px-3 py-4" style={{fontWeight:'bold' , color:'#fff'}}>
                                {items.payload.work}
                            </td>
                            <td className="px-3 py-4" style={{fontWeight:'bold' , color:'#fff'}}>
                                {items.payload.weight}
                            </td>
                            <td className="px-3 py-4" style={{fontWeight:'bold' , color:'#fff'}}>
                                {items.payload.height}
                            </td>
                           <td className='px-3' style={{cursor:'pointer' }}>
                               <AiOutlineDelete onClick={() => Delete(items.payload[0].id)} className='text-2xl' style={{color:'red'}}/>
                           </td>
                        </tr>
                    </>
                })
            }
        </>
    );
};

export default LinaTop;
