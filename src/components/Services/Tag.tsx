import React from 'react';


type TagProps = {
    tagName:string;
}

const Tag:React.FC<TagProps> = ({tagName}) => {
    return ( 
        <span className='border-[.5] border border-black rounded-full px-[9px] md:px-[15px] lg:px-[20px] py-[5px] text-[15px] md:text-[17px] lg:text-[22px]'>
            {tagName}
        </span>
     );
}
 
export default Tag;