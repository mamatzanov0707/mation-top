import React,{useState} from 'react';
import './User.scss'
import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addSlick, addUser} from "../../store/Reducers/UserSlice";
const UserNew = () => {
    const [img, setImage] = useState("")
    const [work, setWork] = useState("")
    const [weight, setWeight] = useState("")
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")

    const HandWork = (e) =>{
        setWork(e.target.value)
    }
    const HandWeight = (e) =>{
        setWeight(e.target.value)
    }
    const HandName = (e) =>{
        setName(e.target.value)
    }
    const HandHeight = (e) =>{
        setHeight(e.target.value)
    }

    const ReadFile = new FileReader()
    ReadFile.onloadend = () => {
        setImage(ReadFile.result)
    }

    const handleImageChange = (event) => {
        ReadFile.readAsDataURL(event.target.files[0])
    };

    function addData (){
        const obj = {
            id:Date.now(),
            name: name,
            work: work,
            weight: weight,
            height: height,
            img: img,
            data: new Date()
        }
        let data = JSON.parse(localStorage.getItem('contact')) || []
        data.push(obj)
        localStorage.setItem('contact', JSON.stringify(data))
    }


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
                                    // value={state.name}
                                    onChange={(e) => HandName(e)}  type="text" placeholder='Баланчев Баланча Баланчаевич'
                                />
                            </div>
                            <div className='user--car__lina--help'>
                                <h4>РАбота *</h4>
                                <input
                                    name="work"
                                    // value={state.work}
                                    onChange={(e) => HandWork(e)}
                                     type="text" placeholder='Без работный'
                                />
                            </div>
                            <div className='user--car__lina--hel'>
                                <h4>вес тела *</h4>
                                <input
                                    name="weight"
                                    // value={state.weight}
                                    onChange={(e) => HandWeight(e)}
                                     type="text" placeholder='Введите особые отметки машины'
                                />
                            </div>
                            <div className='user--car__lina--text'>
                                <h4>рост *</h4>
                                <input
                                    name="height"
                                    // value={state.height}
                                    onChange={(e) => HandHeight(e)}
                                     type="text" placeholder='1.80'
                                />
                            </div>
                            <div className='user--car__master'></div>
                               <div className='user--car__top'>
                                   <button
                                       // value={state}
                                       onClick={()=> addData() }>Добавить  ✔</button>
                               </div>
                        </div>
                        <div className='user--main'>
                            <input
                                placeholder="choose file"
                                type="file"
                                onChange={handleImageChange}
                            />
                            <img onChange={(e) => handleImageChange(e)} src={img} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserNew;