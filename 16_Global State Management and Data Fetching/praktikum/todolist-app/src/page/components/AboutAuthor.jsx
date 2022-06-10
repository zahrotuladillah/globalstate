import './style.css';
import * as React from "react";
import Sidemenu from './Sidemenu';

//Fungsi untuk Page AboutAuthor
export default function AboutAuthor(){
    return(
        <>
            <div className='about'>
                <div className='left'>
                    <Sidemenu/>
                </div>
                <div className='right'>
                    <>
                        <h1>About Author</h1>
                        <div style={{fontSize: 'x-large', fontWeight:'400'}}>This app was developed by a self-taught web developer</div>
                    </>
                </div>
            </div>
        </>
    );
} 