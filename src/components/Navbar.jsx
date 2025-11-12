import Icon from '../assets/img/Icon.png';
import User from '../assets/img/user.png';

export default function Navbar() {
    return (
        <>
            <div className="w-[100%] fixed flex justify-between px-5 bg-accent box-shadow">
                <div className="flex gap-2 items-center">
                    <img src={Icon} alt="Health-Circle-Logo" className="size-[60px] lg:size-[70px] md:size-[60px]"/>
                    <h1 className="gradient-txt hidden text-4xl lg:text-3xl md:text-3xl font-bold lg:flex md:flex">Health Circle</h1>
                </div>

                <div className="flex gap-2 items-center">
                    <img src={User} alt="Health-Circle-User-image" className="size-[40px]" />
                    <span><a href="#">Profile</a></span>
                </div>
            </div>
        </>
    );
}