import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { StaticImageData } from "next/image";

const ProjectImage = ({url}:{url:StaticImport}) => {
    return ( 
        <Image src={url} alt="image" />
     );
}
 
export default ProjectImage;