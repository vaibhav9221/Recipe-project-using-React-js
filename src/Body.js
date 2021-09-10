import React, { useEffect, useState } from 'react'
import axios from 'axios'
import bootstap from 'bootstrap/dist/css/bootstrap.min.css'
import './Body.css'
function Body() {

    const [items, setitems] = useState([])
    useEffect(() => {
        // uncomment this line while using
        // axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => {
                console.log(res.data)
                setitems(res.data.meals)


            }).catch(err => {
                console.log(err)
                
            })

    }, [])


    const itemlist=items.map((obj)=>{

        return <div className='col-md-4'>
            <p>Name={obj.strMeal}</p>
            <img src={obj.strMealThumb} className='img-fluid'/>
            <p>Id:{obj.idMeal}</p>
        </div>
    });



    return (
        <div>
            <div className='row'>
                {itemlist}

            </div>
        </div>
    )
}

export default Body
