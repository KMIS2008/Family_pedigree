import logoMobile from '../../images/logoMobile.png';
import {ContaterLogo, ImgLogo} from './Logo.styled';


export const Logo=()=>{

    return(
        <ContaterLogo>
                     <ImgLogo src={logoMobile} alt='logo'/>
        </ContaterLogo>
    )
}