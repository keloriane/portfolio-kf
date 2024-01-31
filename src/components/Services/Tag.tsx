import React from 'react';
import { twMerge } from 'tailwind-merge';


type TagProps = {
    tagName:string;
}

const Tag:React.FC<TagProps> = ({tagName}) => {
    return ( 
        <div className="flex flex-col">
            <div className={twMerge("rounded-full mx-auto bg-gradient-to-r from-[#313131] via-[#FFF] to-[#F2F2F2] text-[15px] md:text-[17px] lg:text-[22px] p-[1px] animate-gradientRotation" , "gradient-animation")}>
                <div className=" flex flex-col justify-between h-full bg-white rounded-full px-[9px] md:px-[15px] lg:px-[20px] py-[5px]">
                    {tagName}
                </div>
            </div>
        </div>
     );
}
 
export default Tag;