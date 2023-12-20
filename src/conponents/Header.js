import './style/Header.css'
import { FaRegHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
export default function Header() {
    return (
        <div className="container-fluid Header">
            <div className="Logo">
                <button className="button-logo">Franco</button>
            </div>

            <div className='middle'>
                <button className='custom-button'>Home</button>
                <button className='custom-button'>Women</button>
                <button className='custom-button'>Men</button>
                <button className='custom-button'>About us</button>
                <button className='custom-button'>blog</button>
                <button className='custom-button'>collections</button>
                <button className='custom-button'>contact</button>
                <button className='custom-button'><FaSearch /></button>
            </div>

            <div className='icon'>
                    <div className='heart'><FaRegHeart size={20}/></div>
                    <div className='shopping'><MdOutlineShoppingCart size={20}/></div>
            </div>
        </div>
    );
}