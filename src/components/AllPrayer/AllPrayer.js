import {Container, LinkPrayer} from './AllPrayer.styled';

export const AllPrayer=()=>{

    return(
        <Container>
         
           <LinkPrayer to={'/morning-prayer'}>Молитви ранкові</LinkPrayer>

           <LinkPrayer to={'/evening-prayer'}> Молитви вечірні</LinkPrayer>

           <LinkPrayer to={'/for-ukraine-prayer'}>Молитви за Україну </LinkPrayer>

           <LinkPrayer to={'/all-needs'}> Молитви на всяку потребу </LinkPrayer>

           <LinkPrayer to={'/communion-prayer'}> Молитовне правило до св. Причастя </LinkPrayer>
           
        </Container>
    )
}