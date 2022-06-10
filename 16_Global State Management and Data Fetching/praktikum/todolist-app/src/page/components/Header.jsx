import './style.css';
import { Link } from 'react-router-dom';

// Fungsi untuk navbar
export default function Header({kiri, kanan}){
    return(
        <nav>
            <h1 style={{color: "coral"}}>{kiri}<span style={{color: "blue"}}>{kanan}</span></h1>
            <h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about/about-app">About</Link></li>
                </ul>
            </h3>
        </nav>
    );
}