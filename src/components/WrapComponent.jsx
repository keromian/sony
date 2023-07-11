import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import IntroComponent from './wrap/IntroComponent';
import FooterComponent from './wrap/FooterComponent';
import CameraComponent from './wrap/CameraComponent';
import LensComponent from './wrap/camera/LensComponent';
import CompactComponent from './wrap/camera/CompactComponent';
import ServiceComponent from './wrap/ServiceComponent';
import SigninComponent from './wrap/SigninComponent';
import AgreeComponent from './wrap/signin/AgreeComponent';
import InfoComponent from './wrap/signin/info/InfoComponent';

export default function WrapComponent() {


    return (
        <div id='wrap'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HeaderComponent/>}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='MAIN' element={<IntroComponent/>}/>

                        {/* 카메라 */}
                        <Route path='CAMERA' element={<CameraComponent/>}/>
                        <Route path='LENS' element={<LensComponent/>}/>
                        <Route path='COMPACT' element={<CompactComponent/>}/>

                        {/* 공지사항 */}
                        <Route path='SERVICE' element={<ServiceComponent/>}/>

                        {/* 회원가입 */}
                        <Route path='SIGNIN' element={<SigninComponent/>}></Route>
                        <Route path='AGREE' element={<AgreeComponent/>}></Route>
                        <Route path='INFO' element={<InfoComponent/>}></Route>


                        
                    </Route>
                </Routes>
            </BrowserRouter>
            
            <FooterComponent/>
        </div>
    );
};