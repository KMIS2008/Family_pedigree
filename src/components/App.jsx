import { GlobalStyle } from './GlobalStyle';
import { Audio } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

import { useDispatch } from "react-redux";
import { fetchvisits, addCount } from "../redux/operations";
import {useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

// import { useAuth } from 'hook/useAuth';
// import { refreshUser } from 'redux/auth/operations';
// import { RestrictedRoute } from './RestrictedRoute'; 
// import { PrivateRoute } from './PrivateRoute';

import { lazy, Suspense  } from 'react';

const Home = lazy(()=> import('Pages/HomePage/HomePage'));
const AboutUsPage=lazy(()=>import('Pages/AboutUsPage/AboutUsPage'));
const SchedulePage=lazy(()=>import('Pages/SchedulePage/SchedulePage'));
const VirtualTourPage=lazy(()=>import('Pages/VirtualTourPage/VirtualTourPage'));
const PrayerPage=lazy(()=>import('Pages/PrayerPage/PrayerPage'));
const DonationPage=lazy(()=>import('Pages/DonationPage/DonationPage'));
const OnlineServicesPage=lazy(()=>import('Pages/OnlineServicesPage/OnlineServicesPage'));
const ChoirPage=lazy(()=>import('Pages/ChoirPage/ChoirPage'));
const SundaySchoolPage=lazy(()=>import('Pages/SundaySchoolPage/SundaySchoolPage'));
const FeedbackPage=lazy(()=>import('Pages/FeedbackPage/FeedbackPage'));
const ChristeningPage=lazy(()=>import('Pages/СhristeningPage/СhristeningPage'));
const ConfessionPage=lazy(()=>import('Pages/ConfessionPage/ConfessionPage'));
const CommunionPage=lazy(()=>import ('Pages/CommunionPage/CommunionPage'));
const WeddingPage=lazy(()=>import('Pages/WeddingPage/WeddingPage'));
const GatheringPage=lazy(()=>import('Pages/GatheringPage/GatheringPage'));
const MorningPrayersPages=lazy(()=>import('Pages/MorningPrayersPages/MorningPrayersPages'));
const EveningPrayerPages=lazy(()=>import('Pages/EveningPrayerPages/EveningPrayerPages'));
const PrayerForUkranePages=lazy(()=>import('Pages/PrayerForUkranePages/PrayerForUkranePages'));
const PrayerAllNeedsPage=lazy(()=>import('Pages/PrayerAllNeedsPage/PrayerAllNeedsPage'));
const PrayerCommunionPage = lazy(() => import('Pages/PrayerCommunionPage/PrayerCommunionPage'));
const AutobiographyPage = lazy(() => import('Pages/AutobiographyPage/AutobiographyPage'));
const EveningRules = lazy(() => import('Pages/EveningRules/EveningRules'));
const Following = lazy(() => import('Pages/Following/Following'));
const BeforCommunion = lazy(() => import('Pages/BeforCommunion/BeforCommunion'));
const AfterCommunion= lazy(() => import('Pages/AfterCommunion/AfterCommunion'));

// const RegisterPage= lazy(()=> import('Pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(()=> import ('Pages/LoginPage/LoginPage'));

const ErrorPage = lazy(()=> import ('Pages/ErrorPage/ErrorPage'));

    export const App =()=> {
      const dispatch= useDispatch();
 
      useEffect(()=>{
        dispatch(addCount())
        dispatch(fetchvisits());
    
      },[dispatch])
  
      // const { isRefreshing } = useAuth();
    
      // useEffect(() => {
      //   dispatch(refreshUser());
    
      // }, [dispatch]);
    
  //     return isRefreshing ? (
  //       <Audio
  //       height="80"
  //       width="80"
  //       radius="9"
  //       color="green"
  //       ariaLabel="loading"
  //       wrapperStyle
  //       wrapperClass
  //     />
  // ) : (
return (
<div>
<Suspense fallback={       
        <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />}>
          <Routes>
             <Route path = "/" element = {<SharedLayout/>}>
             <Route index element={<Navigate to="/home" />} />
             <Route path="home" element={<Home/>}/>
             <Route path="about-us" element={<AboutUsPage/>} />
             <Route path="schedule" element={<SchedulePage/>}/>
             <Route path="virtual-tour" element={<VirtualTourPage/>}/>
             <Route path="prayer" element={<PrayerPage/>}/>
             <Route path="donation" element={<DonationPage/>}/>
             <Route path="online-services" element={<OnlineServicesPage/>}/>
             <Route path='choir' element={<ChoirPage/>}/>
             <Route path='sunday-school' element={<SundaySchoolPage/>}/>
             <Route path='feedback' element={<FeedbackPage/>}/>
             <Route path='christening' element={<ChristeningPage/>}/>
             <Route path='confession' element={<ConfessionPage/>}/>
             <Route path='communion' element={<CommunionPage/>}/>
             <Route path='wedding' element={<WeddingPage/>}/>
             <Route path='gathering' element={<GatheringPage/>}/>
             <Route path='morning-prayer' element={<MorningPrayersPages/>}/>
             <Route path='evening-prayer' element={<EveningPrayerPages/>}/>
             <Route path='for-ukraine-prayer' element={<PrayerForUkranePages/>}/>
             <Route path='all-needs' element={<PrayerAllNeedsPage/>}/>
             <Route path='communion-prayer' element={<PrayerCommunionPage />}>
                 <Route path='evening-rules' element={<EveningRules />} />
                 <Route path='following' element={<Following />} />
                 <Route path='befor' element={<BeforCommunion />} />
                 <Route path='after' element={<AfterCommunion />}/>
             </Route>
  
             <Route path='autobiography' element={<AutobiographyPage/>}/>

             {/* <Route path='register' element={<RegisterPage/>}/> */}
             {/* <Route path = "login" element ={<RestrictedRoute redirectTo="/" component={<LoginPage/>} />}/> */}

             <Route path="*" element={<ErrorPage/>} />
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )
    };