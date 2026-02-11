// import { useEffect, useState } from 'react';
import {Container} from './RegisterPage.styled';
import { RegisterForm } from 'components/Register/Register';
import { Tittle } from 'components/Title/Title';



export default function RegisterPage(){
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  //   useEffect(() => {
  //       const handleResize = () => {
  //         setIsMobile(window.innerWidth <= 768);
  //       };
    
  //       window.addEventListener('resize', handleResize);
    
  //       return () => {
  //         window.removeEventListener('resize', handleResize);
  //       };
  //     }, []);

    return(
        <Container>
          <Tittle/>
          <RegisterForm/>

        </Container>
    )
}
