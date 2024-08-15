import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import { useState } from "react";

const socialItems = [
  { icon: Linkedin, color: "#2867B2" },
  { icon: Instagram, color: "#E1306C" },
  { icon: Github, color: "#333" },
  { icon: Mail, color: "#1877F2" },
];

const SocialSection = () => {
  const [clickedStates, setClickedStates] = useState<boolean[]>(
    Array(socialItems.length).fill(false)
  );

  const handleClick = (index: number) => {
    setClickedStates((prevState) =>
      prevState.map((clicked, i) => (i === index ? !clicked : clicked))
    );
  };

  return (
    <div className="flex my-10 items-center justify-center">
      {socialItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = clickedStates[index];

        return (
          <li
            key={index}
            className={`relative flex items-center justify-center h-16 w-16 mx-2.5 rounded-full bg-[#dde1e7] cursor-pointer transition-all duration-300 ${
              isActive
                ? "shadow-[inset_-3px_-3px_7px_#ffffff73,inset_3px_3px_5px_rgba(94,104,121,0.288)]"
                : "shadow-[-3px_-3px_7px_#ffffff73,3px_3px_5px_rgba(94,104,121,0.288)]"
            }`}
            onClick={() => handleClick(index)}
          >
            <a
              href="#"
              className="leading-[70px] text-[27px] transition-colors duration-300"
              style={{
                color: isActive ? item.color : "#b6bbc5",
              }}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </div>
  );
};

export default SocialSection;
