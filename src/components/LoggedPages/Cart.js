import React, { useContext, useEffect, useState } from 'react';
import { cartCount } from '../../App';
import { orderValue } from './Navigationbar';
import { getProductById } from '../../config/Myservices';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const { count, onAdd } = useContext(cartCount);
    const { order, onValueChange } = useContext(orderValue);
    const items = JSON.parse(localStorage.getItem('mylocal'));
    const [data, setData] = useState([]);
    let [cprice,setcprice] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('myCart') != undefined) {
            let dataItems = JSON.parse(localStorage.getItem('myCart'));
            setData(dataItems);
        }
    }, [])

    useEffect(()=>{
        if(localStorage.getItem('myCart') != undefined){
            let dataItems = JSON.parse(localStorage.getItem('myCart'));
        let x = 0; 
            dataItems.forEach(element => {
                x = x+element.price
            });
            setcprice(x);
        onValueChange(x);
        }
        
    })

    const delProduct = (id) => {
        let array = JSON.parse(localStorage.getItem('myCart'))
        if (array.some(element =>
            element.id === id
        )) {
            let i = 0;
            let num;
            array.forEach(element => {
                if (element.id === id) {
                    num = i
                }
                i = i + 1;
            });
            let localArray = JSON.parse(localStorage.getItem("myCart"));
            let newArr = localArray.splice(num, 1);
            let strarr = JSON.stringify(localArray);
            localStorage.setItem("myCart", strarr);

           

            let localArray1 = JSON.parse(localStorage.getItem("mylocal"));
            let newArr1 = localArray1.splice(num,1);
            let strarr1 = JSON.stringify(localArray1);
            localStorage.setItem("mylocal",strarr1);
            onAdd(localArray1);

            let dataItems = JSON.parse(localStorage.getItem('myCart'));
            setData(dataItems);
        }
    }

    const checkout = ()=> {
        if(cprice === 0){
            alert("please add items to cart");
        }else{
            navigate("/login/home/credit")
        }
        
    }

    return (
        <>
            <div className='container'>
                <h3>
                    Shopping cart
                </h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Pizza</th>
                            
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) =>
                            <tr key={i}>
                                <td>
                                <img src={e.url} alt={e.pname} width="50"/>
                                </td>
                                <td>{e.pname}
                                
                                </td>
                                
                                <td>${e.price}</td>
                                <td className='d-flex justify-content-end'>
                                    <button className='btn btn-dark' onClick={() => delProduct(e.id)}>Remove</button>
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td >
                            
                            </td>
                            <td rowSpan="3">
                            
                            </td>
                            <td>
                            ${cprice}
                            </td>
                            <td className='d-flex justify-content-end'>
                                <button className='btn btn-dark' onClick={checkout}>Check out </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
