import bootstrap from 'bootstrap'
import { LuAlbum } from "react-icons/lu";
import { IoIosSettings, IoIosLock } from "react-icons/io";
import './style/TopMenu.css'
export default function TopMenu() {
    return (
        <div className="container-fluid TopMenu">
            <div className='right'>
                <div>
                    <LuAlbum />
                </div>
                <div>
                    Welcome to Franco - an e-Commerce PSD Template!
                </div>

            </div>
            <div className='left'>
                <div className='shop'>
                    <div><IoIosSettings /></div>
                    <div>Shop Setting</div>
                </div>

                <div className='member'>
                    <div><IoIosLock /></div>
                    <div>Member Login</div>
                </div>

            </div>
        </div>
    );
}