import icon from '../../images/icon.jpg';
import {Contater, ContainerLogo, Text, Title, Adress, LinkAdress, Line, ContainerCopyright, CotnainerLinks} from './Footer.styled';
import {FooterBottom} from '../FooterBottom/FooterBottom';
import {SocialMediaIcons} from '../SocialMediaIcons/SocialMediaIcons';
import sprite from '../../images/sprite.svg';
// import { useEffect, useState } from 'react';

export const Footer=()=>{
    // const stylefooter=true;
    // const [isTablet, setisTablet] = useState(window.innerWidth > 768);

    // useEffect(() => {
    //   const handleResize = () => {
    //     setisTablet(window.innerWidth > 768);
    //   };
  
    //   window.addEventListener('resize', handleResize);
    //   return () => {
    //     window.removeEventListener('resize', handleResize);
    //   };
    // }, []);

    return(
        <Contater>
            <CotnainerLinks>
               <ContainerLogo>
                  <img src={icon} alt='cross' width={32} height='auto'/>
                  <Text>
                    Церковь апостолів Петра і Павла
                  </Text>                
               </ContainerLogo>
               <div>
                <Title>Приходьте:</Title>
                <Adress>с. Петропавлівське вул. Молодіжна 2-а Київська область Бориспільський район</Adress>
        
               <LinkAdress 
                   href="https://www.google.com/maps?q=50.32507106782345,30.822187499999995" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Як доїхати
                   <svg width={20} height={20}>
                      <use xlinkHref={sprite + '#icon-home'} />
                   </svg> 
               </LinkAdress>   
                             
               </div>
               <div>
                <Title>Пишіть:</Title>
                <Adress>ocu.petropavlivske@gmail.com</Adress>
               </div>
               <div>
                <Title>Дзвоніть:</Title>
                <Adress>+380-98-273-47-47</Adress>
               </div>
                <div>
               <Title>Соцмережі:</Title>
                  <SocialMediaIcons />                    
               </div>
 
                
            </CotnainerLinks>

            <Line></Line>
            <ContainerCopyright>
               <FooterBottom/>
            </ContainerCopyright>

        </Contater>
    )
}