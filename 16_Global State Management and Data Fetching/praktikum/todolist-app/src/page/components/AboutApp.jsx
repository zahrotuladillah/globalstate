import './style.css'
import * as React from "react";
import Sidemenu from "./Sidemenu";

//Fungsi untuk Page Aboutapp
export default function AboutApp(){
    return(
        <>
            <div className='about'>
                <div className='left'>
                    <Sidemenu/>
                </div>
                <div className='right'>
                    <h1>About App</h1>
                    <div style={{fontSize: 'x-large', fontWeight:'400'}}>In this app, you can add, delete, submit, and edit items. to edit items, you can click on the button beside the item.</div>
                </div>
            </div>
        </>
    );
} 