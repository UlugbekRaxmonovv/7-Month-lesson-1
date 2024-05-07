import React,{useState,useEffect} from 'react';
import './Mange.css'
import axios from '../../../../src/api/index';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';


const Mange = () => {
    const [data,setData] =useState(null)
    const [reloid,setReloid] =useState(false)

    const {pathname} = useLocation()
    useEffect(()=>{
        window.scrollTo(0,0)
        },
        [pathname]
    )

    useEffect(() =>{
        axios
        .get('/card')
        .then(ris => setData(ris.data))
    },[reloid])

const Apidelete = id =>{
    if(window.confirm('Are you sure?')){
        axios
        .delete(`/card/${id}`)
        .then(ris => {
            setReloid(p => !p)
            toast.success('Card deleted')
            console.log(ris)
        })
        .catch((arr=> console.log(arr)))
    }
}
 

    let links =data?.map((inx) =>(
        <div className="hammasi" key={inx.id}>
            <div className="row">
            <img src={inx.url} alt="" />
            <p>{inx.Familiya} {inx.Ism}</p>
            <h1>{inx.Yoshi}</h1>
            <button className='btn2' onClick={() => Apidelete(inx.id)}>delete</button>
            </div>
        </div>
    )) 
    return (
        <div>
           <div className="container">
                <div className="wrappirr">
                   {links}
                
                </div>
            </div>
            
        </div>
    );
}

export default Mange;
