import React, { useEffect, useState, useContext } from 'react';
import { getProducts, getProductById } from '../../config/Myservices';
import { cartCount } from '../../App';


export default function Menu() {

  const { count, onAdd } = useContext(cartCount);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [])

  const [lcount, setlcount] = useState([]);

  const addItem = (id) => {
    if (localStorage.getItem('mylocal') != undefined) {
      let array = JSON.parse(localStorage.getItem('mylocal'));

      if (array.includes(id)) {
        alert("Product already added");
      }
      else {
        array.push(id)
        localStorage.setItem("mylocal", JSON.stringify(array));
        onAdd(array);
        alert("Product is added");
      }
    }
    else {
      let array = [];
      array.push(id)
      localStorage.setItem('mylocal', JSON.stringify(array));
      onAdd(array);
    }

    getProductById(id)
      .then(res => {
        if (res) {
          if (localStorage.getItem('myCart') != undefined) {
            let ar = JSON.parse(localStorage.getItem('myCart'));

            if (ar.some(product =>
              product.id === id
            )) {
              alert("Check in cart");
            }
            else {
              ar.push(res.data);
              localStorage.setItem("myCart", JSON.stringify(ar));
              alert("Product added to cart");
            }

          }
          else {
            let ar = [];
            ar.push(res.data);
            localStorage.setItem('myCart', JSON.stringify(ar));
          }
        }
      })


  }


  return (
    <>
      <div className='container'>


        <div className='d-flex flex-wrap m-auto mb-5'>
          {items.map(info =>
            <div className="card m-3" style={{ width: "20rem" }} key={info.id}>
              <img src={info.url} className="card-img-top" alt={`${info.id}alt`} />
              <div className="card-body text-center">
                <h5 className="card-title">{info.pname}</h5>

                <div className='d-flex justify-content-center align-items-baseline mt-3'>
                  <button className="btn btn-secondary me-4" onClick={() => addItem(info.id)}>
                    Add to Cart
                  </button>
                  <p style={{ fontWeight: "bold" }}>$ {info.price}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    </>

  )
}
