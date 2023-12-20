import Slider1 from '../conponents/assets/Twohigh-end.png'
import Slider2 from "../conponents/assets/Smallthing.png"
import Slider3 from '../conponents/assets/BackPacks.png'
import './style/Slider.css'
export default function Slider() {
    return (
        <div className="container-fluid slider">
            <div className="row items-slider">
                <div className="col-12 col-sm-8">
                    <div className='slider1'>
                        <div className='img-1'>
                            <img src={Slider1} alt="Slider 1" />
                        </div>
                        <div className='in-slider1'>
                            <div className='text-1'>Two High-end Material</div>
                            <div>
                                <button className='button1'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className='slider2'>
                        <div className='img-2'><img src={Slider2} alt="Slider 2" /></div>
                        
                        <div className='in-slider2'>
                            <div className='text-2'>small thing</div>
                            <div className='text-2-2'>
                                Make Difference
                            </div>
                        </div>
                    </div>
                    <div className='slider3'>
                        <div className='img-3'><img src={Slider3} alt="Slider 3" /></div>
                        
                        <div className='in-slider3'>
                            <div className='text-3'>folio</div>
                            <div className='text-3-2'>Backpack</div>
                            <div>
                                <button className='button3'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
