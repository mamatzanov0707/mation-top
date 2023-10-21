import React,{useState} from 'react';
import './User.scss'
import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addSlick, addUser} from "../../store/Reducers/UserSlice";
const UserNew = () => {
    const [state, cetState] = useState([{
        id:Date.now(),
        name: "",
        work: "",
        weight: "",
        height: "",
        img:undefined,
        data: new Date()
    }])
    const [error , setError] = useState(false)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        cetState({...state, [e.target.name]: e.target.value})
    }
    const addPerson = () =>{
        dispatch(addSlick(state))
    }
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    return (
        <div id='user'>
            <div className='container'>
                <div className='user'>
                    <Link to={'/'}>
                        <div className='user--icon'>
                            <AiOutlineArrowLeft className='text-3xl' style={{
                                color:'#2E3A59'
                            }}/>
                            <h3>Добавить нового пользователя</h3>
                        </div>
                    </Link>
                    <div className='user--new'>
                        <div className='user--car'>
                            <div className='user--car__lina'></div>
                            <div className='user--car__lina--text'>
                                <h4>ФИО *</h4>
                                <input
                                    name="name"
                                    value={state.name} onChange={handleSubmit} type="text" placeholder='Баланчев Баланча Баланчаевич'
                                />
                            </div>
                            <div className='user--car__lina--help'>
                                <h4>РАбота *</h4>
                                <input
                                    name="work"
                                    value={state.work}
                                    onChange={handleSubmit} type="text" placeholder='Без работный'
                                />
                            </div>
                            <div className='user--car__lina--hel'>
                                <h4>вес тела *</h4>
                                <input
                                    name="weight"
                                    value={state.weight}
                                    onChange={handleSubmit} type="text" placeholder='Введите особые отметки машины'
                                />
                            </div>
                            <div className='user--car__lina--text'>
                                <h4>рост *</h4>
                                <input
                                    name="height"
                                    value={state.height}
                                    onChange={handleSubmit} type="text" placeholder='1.80'
                                />
                            </div>
                            <div className='user--car__master'></div>
                               <div className='user--car__top'>
                                   <button value={state} onClick={()=> addPerson() }>Добавить  ✔</button>
                               </div>
                        </div>
                        <div className='user--main'>
                            <input
                                placeholder="choose file"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <img value={state.img} onChange={handleSubmit} src={selectedImage} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserNew;