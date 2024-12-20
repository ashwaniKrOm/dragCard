import React, { useEffect, useState } from 'react'
import{ useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditCard:React.FC = () => {
    const navigate=useNavigate()
    const {id}=useParams<{id:string}>();
    const [cardData,setCardData]=useState({
        id:'',
        name:'',
        desc:'',
        img:''
    })

    useEffect(() => {
        if (id) {
          axios.get(`http://localhost:3000/card-data/${id}`)
            .then((res) => {
              setCardData(res.data);
            })
            .catch((err) => console.log(err));
        }
      }, [id]);

    const editDataToJSONServer=(e:React.FormEvent)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/card-data/${id}`,cardData)
        .then(()=>{
            navigate('/')
        })
        .catch((err)=>console.log(err))

    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setCardData({...cardData,[e.target.name]:e.target.value})
    }

    JSON.stringify(cardData)
  return (
    <div className='z-10 fixed top-0 h-screen w-full bg-gray-50'>
    <div className='lg:px-48 md:px-10 sm:px-10 px-10 py-8'>
        <form action="" method='post' onSubmit={editDataToJSONServer}>
            <div className="mb-6">
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                <input type="text" id="id" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="id" required name='id' value={cardData.id} onChange={handleChange} disabled />
            </div>
            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required name='name' value={cardData.name} onChange={handleChange} />
            </div>
            <div className="mb-6">
                <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required name='desc' value={cardData.desc} onChange={handleChange} />
            </div>
            <div className="mb-8">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Image URL</label>
                <input type="text" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter image url here" required name='img' value={cardData.img} onChange={handleChange} />
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</button>

        </form>
    </div>
</div>
  )
}

export default EditCard
