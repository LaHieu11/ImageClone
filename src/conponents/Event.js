import BackGround from '../conponents/assets/BackGroundEvent.png'
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Event1 from '../conponents/assets/Event-1.png'
import Event2 from '../conponents/assets/Event-2.png'
import Event3 from '../conponents/assets/Event-3.png'
import { useState, useEffect } from 'react'
import './style/Event.css'

export default function Event() {
    const EventData = [
        { img: Event1, title: 'In commodo dolor vitae', body: 'Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris.' },
        { img: Event2, title: 'Vivamus non dignissim elit', body: 'Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris.' },
        { img: Event3, title: 'Ut lacinia erat ut diam volupat', body: 'Aliquam tempor sagittis neque, vel aliquam risus consectetur vel. Aenean hendrerit, elit a lacinia suscipit, orci mauris.' }
    ];

    const [selectedDot, setSelectedDot] = useState(null);
    const handleDotClick = (dotIndex) => {
        setSelectedDot(dotIndex);
    };

    const renderEventColumns = () => {
        return EventData.map((event, index) => (
            <div key={index} className="col-12 col-sm-6 col-xl-4 event-col-event">
                <div className='container top-content'>
                    <div className='img1'><img src={event.img} alt={event.title} /></div>
                    <div className="event-date">
                        <div className='event-date2'>
                            <p className='month'>Jan</p>
                            <p className='day'>23</p>
                        </div>
                    </div>
                </div>
                <div className="event-details">
                    <div className='title' ><button className="title1">{event.title}</button></div>
                    <div className="body">{event.body}</div>
                    <div className='line-of-col'></div>
                    <div className='cmt-heart'>
                        <div className='comment'>
                            <p><FaRegComment /></p>
                            <p>12</p>
                        </div>

                        <div className='ciHeart'>
                            <p><CiHeart /></p>
                            <p>6</p>
                        </div>

                    </div>
                </div>

            </div>
        ));
    };

    return (
        <div className="container-fluid">

            <img className='background' src={BackGround} alt='background' />

            <div className='intro'>
                <div className='latest'>latest</div>
                <div className='news'>news & events</div>
                <div className='line-event'></div>
            </div>

            <div className='event-body'>
                <div className='row event-row'>
                    {renderEventColumns()}
                </div>
            </div>

            <div className='dotclick'>
                {[0, 1, 2].map((dotIndex) => (
                    <div
                        key={dotIndex}
                        className={`dot ${selectedDot === dotIndex ? 'active' : ''}`}
                        onClick={() => handleDotClick(dotIndex)}
                    ></div>
                ))}
            </div>

        </div>
    );
}