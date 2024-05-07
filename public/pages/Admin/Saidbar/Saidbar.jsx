import React,{useState,useEffect} from 'react';
import './Saidbar.css'
import axios  from '../../../../src/api/index';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const initialState ={
    Ism:"",
    Familiya:"",
    Yoshi:""
}
const Saidbar = () => {
    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
        },
        [pathname]
    )
    const [data,setData] =useState(initialState)


    const hadelSubmit = (e) =>{
        e.preventDefault()
        axios
        .post("/card",data)
        .then(ris => console.log(ris))
        toast.success('Malumot yaratildi')
        .catch(arr => console.log(arr));
        
        
    }
    return (
        <div>
            <div className="container">
                <div className="input-all2">
                    <div className="input-row">
                            <img width={100}  src="https://previews.123rf.com/images/alluranet/alluranet1712/alluranet171200819/91081620-input-output-digital-data-icon-vector-illustration.jpg" alt="" />
                        <form action="" onSubmit={hadelSubmit}>
                        <label htmlFor="">First name*</label>
                            <input value={data.Ism}  onChange={(e) => setData( p => ({...p, Ism: e.target.value}))}  type="text"  placeholder='First name......'/>
                            <label htmlFor="">Last name*</label>
                            <input value={data.Familiya}  onChange={(e) => setData(p => ({...p, Familiya: e.target.value}))} type="text"  placeholder='Last name'/>
                            <label htmlFor="">Age*</label>
                            <input value={data.Yoshi}  onChange={(e) => setData( p => ({...p, Yoshi: e.target.value}))} type="text"  placeholder='Age....'/>
                            <button type='submit'> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saidbar;
