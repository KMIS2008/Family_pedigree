// import { useEffect, useState } from 'react';
import { Tittle } from "components/Title/Title";
import {Container} from './LoginPage.styled';
import {LoginForm} from '../../components/Login/login.js';



export default function  LoginPage(){
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth <= 768);
    //     };
    
    //     window.addEventListener('resize', handleResize);
    
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);

    return(
        <Container>
            <Tittle/>
            <LoginForm/>

        </Container>
    )
}