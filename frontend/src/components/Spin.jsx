import { useState } from "react";

export default function Spin() {
  const [items] = useState([
    { name: "yoy" },
    { name: "non" },
    { name: "wewe" },
    { name: "asdw" },
  ]);
  const [coor, setCoor] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [spinining, setSpining] = useState(false);
  const [win, setWin] = useState(null);
  const handleCoor = (e) => {
    if (spinining) return;
    setSpining(true);
    setWin(null);
    const x = e.clientX;
    const y = e.clientY;
    setCoor({ x, y });
    const randomSpins = Math.floor(Math.random() * (x + y));
    const extraAngle = Math.random() * 360;
    const totalRotation = randomSpins * 360 + extraAngle;
    setRotation(Math.floor(totalRotation));
    console.log(rotation % 360);
    setTimeout(() => {
      setSpining(false);
      const sliceAngle = 360 / items.length;
      const trimmed = totalRotation % 360;
      const winner = Math.floor((360 - trimmed) / sliceAngle) % items.length;
      setWin(items[winner].name);
      console.log(win);
    }, 40);
  };

  const numItems = items.length;
  const sliceAngle = 360 / numItems;
  const radius = 160;

  return (
    <div className="w-full h-full">
      <div className="relative flex items-center justify-center mb-8">
        {/* Top Pointer */}
        <div className="absolute -top-4 z-30 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[24px] border-t-amber-400 drop-shadow"></div>

        {/* Outer Wheel Border */}
        <div className="relative w-80 h-80 rounded-full border-8 border-amber-600 shadow-2xl overflow-hidden bg-stone-800 flex items-center justify-center">
          <div
            className="w-full h-full rounded-full transition-all duration-[4000ms] ease-out relative"
            style={{
              transform: `rotate(${rotation}deg)`,
              transitionTimingFunction: "cubic-bezier(0.15, 0.85, 0.15, 1.0)",
            }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <g transform="translate(200, 200)">
                {items.map((item, index) => {
                  const startAngle = index * sliceAngle;
                  const endAngle = (index + 1) * sliceAngle;

                  const x1 = radius * Math.cos((Math.PI * startAngle) / 180);
                  const y1 = radius * Math.sin((Math.PI * startAngle) / 180);
                  const x2 = radius * Math.cos((Math.PI * endAngle) / 180);
                  const y2 = radius * Math.sin((Math.PI * endAngle) / 180);

                  const largeArc = sliceAngle > 180 ? 1 : 0;
                  const path = `M 0 0 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`;

                  const textAngle = startAngle + sliceAngle / 2;
                  const tx =
                    radius * 0.6 * Math.cos((Math.PI * textAngle) / 180);
                  const ty =
                    radius * 0.6 * Math.sin((Math.PI * textAngle) / 180);

                  return (
                    <g key={index}>
                      <path
                        d={path}
                        fill={item.color}
                        stroke="#292524"
                        strokeWidth="2"
                      />
                      <text
                        x={tx}
                        y={ty}
                        fill="#fff"
                        fontSize="16"
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${textAngle + 90}, ${tx}, ${ty})`}
                      >
                        {item.name}
                      </text>
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Center Knob */}
          <div
            onClick={handleCoor}
            className="absolute z-20 w-12 h-12 bg-amber-500 rounded-full border-2 border-amber-700 shadow-md cursor-pointer hover:scale-105 flex items-center justify-center font-bold text-xs text-stone-900"
          >
            SPIN
          </div>
        </div>
      </div>
    </div>
  );
}
