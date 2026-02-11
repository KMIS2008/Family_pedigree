import {Title} from './Title.styled';


export const Tittle=({title,handleClick=()=>{}})=>{
    return(

            <Title onClick={handleClick}> 
              {title}
            </Title>
                

    )
}