import './style.css';
import { Link } from 'react-router-dom';

// Fungsi ini digunakan sebagai sidemenu untuk halaman about
export default function Sidemenu(){
    return(
        <div className='sidemenu'>
            <h3>
                <ul>
                    <li><Link to="/about/about-app">About App</Link></li>
                    <li><Link to="/about/about-author">About Author</Link></li>
                </ul>
            </h3>
        </div>
    );
}