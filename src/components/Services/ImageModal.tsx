import React from "react";
import  Image  from 'next/image';


const ImageModal = ({image , setImage}:{image:string , setImage:Function}) => {
    return ( 
        <div className=''>
            <div className='relative w-[80%] h-[80%]'>
                <Image src={image} layout='fill' objectFit='contain' />
            </div>
        </div>
     );
}