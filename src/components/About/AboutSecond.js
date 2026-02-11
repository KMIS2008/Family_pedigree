import { Title, TitleItem, Text, SpanText, List, SVG} from './About.styled';
import sprite from '../../images/sprite.svg';


export function AboutSecond(){
    return(
        <>
        <Title>Парафія святих апостолів Петра і Павла</Title>

                <div>
                    <Text>
                        Релігійна громада нашої парафії належить до Київської єпархії Православної
Церкви України. Ми прагнемо до духовного зростання, молитви та благодійності,
об’єднуючи людей у вірі та любові до Господа.
                    </Text>
                    <Text>
                        На сьогодні громада налічує близько <SpanText>двохсот парафіян</SpanText>, і ця кількість постійно
зростає. Ми відкриті для всіх, хто бажає знайти духовний дім, взяти участь у спільній
молитві, Таїнствах та церковному житті.
                    </Text>

                    <TitleItem>Настоятель парафії</TitleItem>
                    <List>
                        <li>
                            <Text>
                                <SVG width={20} height={20}>
                                    <use xlinkHref={sprite + '#icon-user'}></use>
                                </SVG>
                                   <SpanText> Протоієрей Олег</SpanText>
                          </Text>
                        </li>
                        <li>
                            <Text>
                                <SVG width={20} height={20}>
                                    <use xlinkHref={sprite + '#icon-phone'}></use>
                                </SVG>
                             <SpanText>
                                Телефон:
                              </SpanText>
                               +38 098 273 47 47
                           </Text>
                        </li>
                        <li>
                            <Text>
                                <SVG width={20} height={20}>
                                    <use xlinkHref={sprite + '#icon-envelope'}></use>
                                </SVG>
                              <SpanText>
                                 Email:
                              </SpanText>
                                ocu.petropavlivske@gmail.com
                           </Text>
                        </li>
                    </List>

                    <Text>
                        Запрошуємо вас до храму на богослужіння, спільну молитву та духовне спілкування!
                    </Text>  

                {/* <Text>
                    РЕЛІГІЙНА ОРГАНІЗАЦІЯ «РЕЛІГІЙНА ГРОМАДА ПАРАФІЯ АПОСТОЛІВ ПЕТРА І ПАВЛА КИЇВСЬКОЇ ЄПАРХІЇ УКРАЇНСЬКОЇ ПРАВОСЛАВНОЇ ЦЕРКВИ (ПРАВОСЛАВНОЇ ЦЕРКВИ УКРАЇНИ) С. ПЕТРОПАВЛІВСЬКЕ БОРИСПІЛЬСЬКОГО РАЙОНУ КИЇВСЬКОЇ ОБЛАСТІ» налічує близько двохсот парафіян, та чисельність її постійно збільшується.
                </Text>    

                <Text>
                До настоятеля протоієрея Олега можна звернутися за телефоном  +38 098 273 47 47, або за електронною адресою: <Span> ocu.petropavlivske@gmail.com.</Span>
                </Text> */}
            </div>
    
        </>
    )
}