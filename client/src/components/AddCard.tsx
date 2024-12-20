import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCard:React.FC = () => {
    const navigate=useNavigate();

    const [uniqueId, setUniqueId] = useState<string>('');
    const [cardPostData, setCardPostData] = useState({
        id: '',
        name: '',
        desc: '',
        img: ''
    });

    useEffect(() => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 15; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        setUniqueId(result);
        setCardPostData((prev)=>({
            ...prev,
            id:result
        }))
    }, []);

    const postDataToJSONServer = (e: React.FormEvent) => {
        e.preventDefault();  // Prevent default form submission behavior

        axios.post("http://localhost:3000/card-data", cardPostData)
            .then((res) => {
                console.log("card-data added successfully", res);
                navigate('/');
            })
            .catch((err) => console.log(err));
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCardPostData({ ...cardPostData, [name]: value });
    }

    return (
        <div className='z-10 fixed top-0 h-screen w-full bg-gray-50'>
            <div className='lg:px-48 md:px-10 sm:px-10 px-10 py-8'>
                <form action="" method='post' onSubmit={postDataToJSONServer}>
                    <div className="mb-6">
                        <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
                        <input type="text" id="id" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="id" required name='id' value={uniqueId} onChange={handleChange} disabled />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required name='name' value={cardPostData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" id="desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required name='desc' value={cardPostData.desc} onChange={handleChange} />
                    </div>
                    <div className="mb-8">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Image URL</label>
                        <input type="text" id="img" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="enter image url here" required name='img' value={cardPostData.img} onChange={handleChange} />
                    </div>

                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default AddCard
