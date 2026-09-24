import Spin from "./Spin";
export default function Spinboard() {
  return (
    <div className="flex flex-col items-center bg-[radial-gradient(circle_at_30%_20%,#6b4a34,#4a3222_75%)] border-2 border-[#4a3222] rounded-2xl pt-8 pb-7 px-6">
      <Spin />
      <div className="flex rounded-lg w-fit h-fit text-center flex-col b-1 py-2 px-3 bg-[linear-gradient(180deg,#2b2117,#1a140d)]">
        <p className="text-[#C9A227]">Now UP</p>
        <p className="text-[#E9C873] text-shadow-[0_1px_0_rgba(0,0,0,.6),0_0_8px_rgba(233,200,115,.35)]">
          WIIII
        </p>
      </div>
    </div>
  );
}
