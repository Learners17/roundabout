export default function(){
    return(
        <div className="w-full h-full flex flex-col gap-6">
            {Array.from({length:4}).map((_,i)=>(
                <div key={i} className={`w-full relative h-20 flex flex-col bg-white rounded-sm ${i%2==0 ? 'rotate-1':'-rotate-1'}`}>
                    <span className="bg-[#A6392C] rounded-full h-5 w-5 self-center absolute -top-2.5 shadow-[0_3px_4px_rgba(0,0,0,0.5),inset_0_0_2px_rgba(0,0,0,0.4)]"></span>
                    <span className="h-px w-full absolute top-6.5 bg-[repeating-linear-gradient(90deg,#C8BB9C_0_6px,transparent_6px_10px)]"></span>
                    <div className="flex mx-5 ">
                        {i%2==0 && 
                            (<div className={`absolute mx-5 left-20 top-6.5 px-2 py-0 w-fit h-fit border-2 border-green-800 rounded-lg text-lg uppercase font-medium text-gray-900 ${i%2==0 ? '-rotate-8':'rotate-8'}`}>
                                current
                            </div>)
                        }
                        <span className="absolute top-3.5 uppercase text-[#3a2a12]">NAME</span>
                    </div>
                </div>))
            }
        </div>
    )
}