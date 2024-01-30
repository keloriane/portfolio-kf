import React from 'react';
import styles from './grid.module.css'


type GridProps = {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'| 'section';
    children: React.ReactNode;
}



const Grid:React.FC<GridProps> = ({as , children}) => {

    const TagName = as;
    return ( 
        <TagName className={styles.gridCOntainer}>
            {children}
        </TagName>
     );
}
 
export default Grid;