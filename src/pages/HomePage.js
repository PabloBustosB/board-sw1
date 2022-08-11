import React from 'react';
import authProvider from "../firebase/AuthProvider";

function HomePage(props) {


    return (
        <div className={'min-h-screen flex justify-center items-center bg-blue-900'}>
            <div className={'w-2/5 bg-white h-120 shadow-xl p-5 pt-10'}>
                <h1 className={'text-xl font-medium text-center'}>{'Primer Parcial - Pizarra Modelo C4'}</h1>
                <h2 className={'text-sm font-medium'}>{'Iniciar Sesion: '}</h2>
                <div className={'flex justify-center items-center h-full'}>
                <button className={'border rounded block my-7 inline-flex space-x-2 p-2 hover:shadow-lg '} onClick={e=>authProvider.login()}>
                    <img src="https://img.icons8.com/color/24/000000/google-logo.png"/>
                    <span>{'Iniciar sesión'}</span>
                </button>
                </div>
                <div align="center">
                <img src="https://pbs.twimg.com/media/E7RY54_WYAAVg-9.png"/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
