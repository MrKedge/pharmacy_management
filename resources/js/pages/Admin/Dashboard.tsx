import SummaryCard from '@/components/Admin/Dashboard/SummaryCard';
import Header from '@/components/Admin/Header';
import AdminLayout from '@/layouts/AdminLayout';
import { BiDollar, BiShieldPlus, BiSolidError } from 'react-icons/bi';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { TbBoxOff } from "react-icons/tb";
import { LuBriefcaseMedical } from "react-icons/lu";
import SummarySection from '@/components/Admin/Dashboard/SummarySection';
const Dashboard = () => {
   
    return (
        <AdminLayout>
            <Header header={'Dashboard'} subHeader="A quick data overview of the inventory" />
            <SummarySection/>
        </AdminLayout>
    );
};

export default Dashboard;
