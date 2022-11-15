import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';



const AppointmentBanner = ({selected, setSelected}) => {



    return (

        <header className="w-10/12 mx-auto hero py-24" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='chair' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-8/12 px-6'>

                    <DayPicker
                        mode='single'
                        selected={selected}
                        onSelect={setSelected}
                    />


                </div>
            </div>
        </header>

    );
};

export default AppointmentBanner;