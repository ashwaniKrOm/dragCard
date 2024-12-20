import React, { useEffect,  useState } from 'react'
import Card from './Card'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


interface dataSendProps{
  id:string,
    name:string,
    desc:string,
    img:string
}

const Foreground:React.FC = () => {
    const navigate=useNavigate();
    const [data,setData]=useState<dataSendProps[]>([]);
    

    useEffect(()=>{axios.get("http://localhost:3000/card-data")
      .then((res)=>{
        setData(res.data);
      })
      .catch((err)=>console.log(err))},[])

      const editCard=(id:string)=>{
        navigate(`/edit-card/${id}`)
      }

      const deleteCard=(id:string)=>{
        axios.delete(`http://localhost:3000/card-data/${id}`)
        .then(()=>{
          setData(data.filter((card)=>card.id!==id))
        })
        .catch((err)=>console.log(err))
      }

  return (
    <div  className='fixed top-0  w-full z-10'>
      <div  className='flex justify-center py-1 '>
        <button className='bg-blue-500 px-4 text-white font-medium rounded-md py-1 hover:bg-blue-700 '> <Link  to='/add-card'>Add New Card</Link></button>
      </div>
        <Card  data={data} onEdit={editCard} onDelete={deleteCard}/>
    </div>
  )
}

export default Foreground
