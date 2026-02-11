import { Container, Adress, LinkAdress, Title, ContainerSocialMediaIcons } from './Contacts.styled';
import sprite from '../../images/sprite.svg';
import {SocialMediaIcons} from '../SocialMediaIcons/SocialMediaIcons';


export const Contacts = () => {
    return(
        <Container>
     
            <Title>Адреса:</Title>
            <Adress>с. Петропавлівське вул. Молодіжна 2-а Київська область Бориспільський район</Adress>                

            <LinkAdress 
                   href="https://www.google.com/maps?q=50.32507106782345,30.822187499999995" 
                   target="_blank" 
                   rel="noopener noreferrer">
                   Як доїхати
                   <svg width={40} height={40}>
                  <use xlinkHref={sprite + '#icon-home'} />
                </svg> 
            </LinkAdress> 

            <iframe
                    title="Google Map of church location"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2547.2240515698495!2d30.81961257654981!3d50.325071071568466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDE5JzMwLjMiTiAzMMKwNDknMTkuOSJF!5e0!3m2!1sru!2sua!4v1739875611007!5m2!1sru!2sua" 
                    width="600"
                    height="450"
                    style={{
                        border: "3px solid #69221d",
                        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)"
                     }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
            </iframe>     
            
            <Title>Пишіть:</Title>
            <Adress>ocu.petropavlivske@gmail.com</Adress>

            <Title>Дзвоніть:</Title>
            <Adress>+380-98-273-47-47</Adress>

            <Title>Cоцмережі:</Title>
            <ContainerSocialMediaIcons>
               <SocialMediaIcons />             
            </ContainerSocialMediaIcons>

     

        </Container>
    )
}