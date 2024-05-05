import React, { useState,useEffect} from 'react';
import './Creat.css'
import axios from '../../api/index';


const Creat = () => {
    const [data,setData] =useState(null)


    useEffect(() =>{
       
        axios
        .get('/card')
        .then(ris => setData(ris.data))
     
    },[])


 

    let links =data?.map((inx) =>(
        <div className="hammasi" key={inx}>
            <div className="row">
            <img src={inx.url} alt="" />
            <p> {inx.Ism} {inx.Familiya}</p>
            <h1>{inx.Yoshi}</h1>
          
            </div>
        </div>
    )) 
    return (
        <div>
            <div className="container">
                <div className="wrappir">
                   {links}
                
                </div>
            </div>
        </div>
    );
}

export default Creat;
