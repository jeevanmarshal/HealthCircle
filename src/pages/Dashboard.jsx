import HeaderGreeting from '../components/dasboard/HeadGreating'; 
import StatsCards from '../components/dasboard/StatsCards'; 
import ReminderList from '../components/dasboard/ReminderList'; 
import ShortcutButtons from '../components/dasboard/ShortcutButtons';

export default function Dashboard() {
    return (
        <>
            <div className="w-[100%] h-full p-3 flex lg:flex md:flex flex-col justify-center gap-2 text-sm lg:text-[16px] md:text-md">
                <HeaderGreeting />
                <StatsCards />
                <ReminderList />
                <ShortcutButtons />
            </div>
        </>
    )
}