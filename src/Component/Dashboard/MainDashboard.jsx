
import svg1 from '../../assets/svg/IconSet.svg'
import svg2 from '../../assets/svg/UsersThree.svg'
import svg3 from '../../assets/svg/UserCircle.svg'
import svg4 from '../../assets/svg/Buildings.svg'
import svg5 from '../../assets/svg/Money.svg'
import DashboardChartOne from '../DashboardChartOne/DashboardChartOne'
import DashboardChartTwo from '../DashboardChartOne/DashboardChartTwo'
import DashboardChartThree from '../DashboardChartOne/DashboardChartThree'
import PaymentTableOne from '../PaymentTable/PaymentTableOne'
import PaymentDashboardTwo from '../PaymentTable/PaymentDashboardTwo'



const MainDashboard = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='px-[20px] flex gap-9'>
                <div className='w-[253px] h-[135px] bg-[#E3F5FF] my-[20px] rounded-lg  pt-[20px] pl-3'>
                    <h1 className='text-[16px] font-[500]'>Total Clients</h1>
                    <div className='flex items-center'>
                        <h2 className='text-[32px] font-[500] leading-8 pt-2'>75</h2>
                        <p className='text-[12px] font-[500] leading-5  pl-4 pt-3'>+11.01%</p>
                        <img className='pt-3 pl-1' src={svg1} alt="" />
                    </div>
                    <div className='flex flex-end justify-end pr-5'>
                        <img className='h-[32px]' src={svg2} alt="" />
                    </div>
                </div>
                <div className='w-[253px] h-[135px] bg-[#E5ECF6] my-[20px] rounded-lg  pt-[20px] pl-3'>
                    <h1 className='text-[16px] font-[500]'>Total Users</h1>
                    <div className='flex items-center'>
                        <h2 className='text-[32px] font-[500] leading-8 pt-2'>15</h2>

                    </div>
                    <div className='flex flex-end justify-end pr-5'>
                        <img className='h-[32px]' src={svg3} alt="" />
                    </div>
                </div>
                <div className='w-[253px] h-[135px] bg-[#E3F5FF] my-[20px] rounded-lg  pt-[20px] pl-3'>
                    <h1 className='text-[16px] font-[500]'>Total Banks Created</h1>
                    <div className='flex items-center'>
                        <h2 className='text-[32px] font-[500] leading-8 pt-2'>15</h2>

                    </div>
                    <div className='flex flex-end justify-end pr-5'>
                        <img className='h-[32px]' src={svg4} alt="" />
                    </div>
                </div>
                <div className='w-[253px] h-[135px] bg-[#E5ECF6] my-[20px] rounded-lg  pt-[20px] pl-3'>
                    <h1 className='text-[16px] font-[500]'>Total Projects</h1>
                    <div className='flex items-center'>
                        <h2 className='text-[32px] font-[500] leading-8 pt-2'>18</h2>
                        <p className='text-[12px] font-[500] leading-5  pl-4 pt-3'>+11.01%</p>
                        <img className='pt-3 pl-1' src={svg1} alt="" />
                    </div>
                    <div className='flex flex-end justify-end pr-5'>
                        <img className='h-[32px]' src={svg4} alt="" />
                    </div>
                </div>
                <div className='w-[253px] h-[135px] bg-[#E3F5FF] my-[20px] rounded-lg  pt-[20px] pl-3'>
                    <h1 className='text-[16px] font-[500]'>Total Petty Cash</h1>
                    <div className='flex items-center'>
                        <h2 className='text-[32px] font-[500] leading-8 pt-2'>1,80,000</h2>
                    </div>
                    <div className='flex flex-end justify-end pr-5'>
                        <img className='h-[32px]' src={svg5} alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <DashboardChartOne></DashboardChartOne>
                <DashboardChartTwo></DashboardChartTwo>
                <DashboardChartThree></DashboardChartThree>
            </div>
            <div className='flex justify-center gap-28'>
                <PaymentTableOne></PaymentTableOne>
                <PaymentDashboardTwo></PaymentDashboardTwo>
            </div>
        </div>
    );
};

export default MainDashboard;