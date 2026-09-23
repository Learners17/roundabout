import MemberCard from "./MemberCard"
import AddMember from "./AddMember"
export default function MemberBoard(){
    return(
        <div className="w-full h-full p-3 rounded-2xl bg-[#8a6a3d]">
            <div className="flex flex-col w-full h-full p-5 rounded-2xl bg-[radial-gradient(circle_at_20%_20%,rgb(255_255_255/_0.10),transparent_45%),repeating-radial-gradient(circle_at_10%_10%,rgb(74_47_19/_0.05)_0_2px,transparent_2px_6px)] bg-[#C99A5B]">
                <span className="font-semibold text-[#3a2a12] uppercase text-lg text-shadow-2xs text-shadow-[#ffffff40]">Members</span>
                <MemberCard/>
                <AddMember/>
            </div>
        </div>
    )
}