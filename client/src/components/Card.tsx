import React, {useRef}from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {motion} from 'framer-motion';

interface dataProps{
  id:string,
    name:string,
    desc:string,
    img:string
}

interface cardPropsType{
  data:dataProps[];
  onEdit:(id:string)=>void
  onDelete:(id:string)=>void
}


const Card:React.FC<cardPropsType> = ({data,onEdit,onDelete}) => {
  const ref=useRef<HTMLDivElement>(null)
  return (
    <div  className="w-full h-screen   flex">
      <div ref={ref}  className='w-full flex justify-center flex-wrap'>
      {data.map((item,index)=>(
        <motion.div drag dragConstraints={ref} className='w-60 h-80 m-5 '>
    <CardContainer  className="inter-var w-full " key={index}>
    <CardBody className="bg-slate-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] w-full h-auto rounded-md px-6 py-4 m-1  ">
      <CardItem
        translateZ="50"
        className="text-xl font-semibold dark:text-white text-neutral-700"
      >
        Name: <span className='font-bold'>{item.name}</span>
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-neutral-500 text-sm max-w-full mt-2 dark:text-neutral-300 font-medium break-words"
      >
        Description: <span className='text-blue-950'>{item.desc}</span>
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <img
          src={item.img}
          height="1000"
          width="1000"
          className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <div className="flex justify-between items-center mt-5">
        <CardItem
          translateZ={20}
          href=""
          target="__blank"
          className="px-4  bg-blue-300 rounded-md py-0.5"
          onClick={()=>{onEdit(item.id)}}
        >
          <MdEdit />
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="px-4 rounded-md bg-red-400 py-0.5"
          onClick={()=>{onDelete(item.id)}}
        >
          <MdDelete />
        </CardItem>
      </div>
    </CardBody>
 
  </CardContainer>
  </motion.div>
  ))}
  </div>
  </div>
  )
}

export default Card
