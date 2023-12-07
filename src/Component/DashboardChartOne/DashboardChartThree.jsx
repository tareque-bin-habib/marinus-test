import BarChartOne from "../BarChart/BarChartOne";


const DashboardChartThree = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <div className="w-[443px] h-[236px] bg-[#E3F5FF] rounded-xl">
                <div className='px-4 py-3'>
                    <h1 className="text-[18px] font-[500] leading-5	">Total Income of Current Month</h1>
                </div>
                <div className='px-4'>
                    <h2 className='text-[20px] font-[500] leading-5	'>85</h2>
                </div>
                <div>
                    <BarChartOne></BarChartOne>
                </div>
            </div>
        </div>
    );
};

export default DashboardChartThree;