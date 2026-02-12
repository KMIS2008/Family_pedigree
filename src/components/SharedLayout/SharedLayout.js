import { Suspense } from "react";
import { Outlet, } from "react-router-dom";
import {Contater} from './SharedLayout.styled';


 const SharedLayout=()=>{

    return (
        <Contater>
     
                <main>
                   <Suspense fallback={<div>Loading...</div>}>
                      <Outlet />
                   </Suspense>
                </main>  

        </Contater>
    )
}

export default SharedLayout;