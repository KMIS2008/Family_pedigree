import { GlobalStyle } from './GlobalStyle';
import { Navigate } from 'react-router-dom';


import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

import { lazy, Suspense  } from 'react';

const Home = lazy(()=> import('Pages/HomePage/HomePage'));
// const AboutUsPage=lazy(()=>import('Pages/AboutUsPage/AboutUsPage'));
// const SchedulePage=lazy(()=>import('Pages/SchedulePage/SchedulePage'));
// const VirtualTourPage=lazy(()=>import('Pages/VirtualTourPage/VirtualTourPage'));
// const PrayerPage=lazy(()=>import('Pages/PrayerPage/PrayerPage'));
// const DonationPage=lazy(()=>import('Pages/DonationPage/DonationPage'));
// const OnlineServicesPage=lazy(()=>import('Pages/OnlineServicesPage/OnlineServicesPage'));
// const ChoirPage=lazy(()=>import('Pages/ChoirPage/ChoirPage'));
// const SundaySchoolPage=lazy(()=>import('Pages/SundaySchoolPage/SundaySchoolPage'));
// const FeedbackPage=lazy(()=>import('Pages/FeedbackPage/FeedbackPage'));
// const ChristeningPage=lazy(()=>import('Pages/СhristeningPage/СhristeningPage'));
// const ConfessionPage=lazy(()=>import('Pages/ConfessionPage/ConfessionPage'));
// const CommunionPage=lazy(()=>import ('Pages/CommunionPage/CommunionPage'));
// const WeddingPage=lazy(()=>import('Pages/WeddingPage/WeddingPage'));
// const GatheringPage=lazy(()=>import('Pages/GatheringPage/GatheringPage'));
// const MorningPrayersPages=lazy(()=>import('Pages/MorningPrayersPages/MorningPrayersPages'));
// const EveningPrayerPages=lazy(()=>import('Pages/EveningPrayerPages/EveningPrayerPages'));
// const PrayerForUkranePages=lazy(()=>import('Pages/PrayerForUkranePages/PrayerForUkranePages'));
// const PrayerAllNeedsPage=lazy(()=>import('Pages/PrayerAllNeedsPage/PrayerAllNeedsPage'));
// const PrayerCommunionPage = lazy(() => import('Pages/PrayerCommunionPage/PrayerCommunionPage'));
// const AutobiographyPage = lazy(() => import('Pages/AutobiographyPage/AutobiographyPage'));
// const EveningRules = lazy(() => import('Pages/EveningRules/EveningRules'));
// const Following = lazy(() => import('Pages/Following/Following'));
// const BeforCommunion = lazy(() => import('Pages/BeforCommunion/BeforCommunion'));
// const AfterCommunion= lazy(() => import('Pages/AfterCommunion/AfterCommunion'));


const ErrorPage = lazy(()=> import ('Pages/ErrorPage/ErrorPage'));

    export const App =()=> {

return (
<div>
      <Suspense>
          <Routes>
             <Route path = "/" element = {<SharedLayout/>}>
             <Route index element={<Navigate to="/home" />} />
             <Route path="home" element={<Home/>}/>
             <Route path="*" element={<ErrorPage/>} />
            </Route>
          </Routes>
          </Suspense>

     <GlobalStyle/>
</div>
  )
    };