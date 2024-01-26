import React from 'react';
import ProjectTitle from './ProjectTitle';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';


const ProjectItem = ({project, itemIndex}:{project:{title:string, url:StaticImport} , itemIndex:number}) => {
    return ( 
            <li >
                <ProjectTitle title={project.title}   />
                <Image src={project.url} alt={project.title} />

                <div>
                    <p>
                        <span>{itemIndex}</span>
                        {project.title}
                    </p>
                </div>
            </li>
     );
}
 
export default ProjectItem;