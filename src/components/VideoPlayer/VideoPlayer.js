import React, { useState } from 'react';

import church from '../../images/4.jpg';
import {Container, ContainerPlayer, Icon, IconSpan} from './VideoPlayer.styled';
const ReactPlayer = React.lazy(() => import('react-player'));

export const VideoPlayer = () => {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlayerVisible(true); // Включаем плеер при нажатии
  };

  

  return (
    <Container>
      {!isPlayerVisible ? (
        <ContainerPlayer
          onClick={handlePlayButtonClick}
          style={{
            backgroundImage: `url(${church})`,
          }}
        >
          <Icon>
            <IconSpan>▶</IconSpan> {/* Иконка Play */}
          </Icon>
        </ContainerPlayer>
      ) : (
        <ReactPlayer
          url="video.mp4"
          controls
          width="100%"
          height="500px"
        />
      )}
    </Container>
  );
};



// import React from 'react';
// import ReactPlayer from 'react-player';
// import church from '../../images/4.jpg';

// export const VideoPlayer=()=>{
//     return(
//         <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px'}}>
//         <ReactPlayer url="video.mp4" 
//                      controls 
//                      width="100%"
//                      height="100%"
//                      light={
//                         <img src={church} 
//                              alt='church'
//                              style={
//                                 {
//                                     width:'100%',
//                                     height:'100%'

//                                 }
//                              }
//                      />}
//                      />
//       </div>
//     )
// }