import img1 from '../../assets/svg/chart-button.svg'
import img2 from '../../assets/svg/mdi_bangladeshi-taka.svg'
import BarChartOne from '../BarChart/BarChartOne';

const DashboardChartTwo = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="w-[443px] h-[236px] bg-[#E5ECF6] rounded-xl">
                <div className='flex justify-between px-4 py-3'>
                    <h1 className="text-[18px] font-[500] leading-5	">Total Income of Current Month</h1>
                    <img src={img1} alt="" />
                </div>
                <div className='flex px-3'>
                    <img src={img2} alt="" />
                    <h2 className='text-[20px] font-[500] leading-5	'>12,900.93</h2>
                </div>
                <div>
                    <BarChartOne></BarChartOne>
                </div>
            </div>
        </div>
    );
};

export default DashboardChartTwo;