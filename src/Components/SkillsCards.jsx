import { skills } from "../Constants/constants";

const SkillsCards = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        width: "100%",
        
               
      }}
    >
      {skills.map((skill, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "100px",
            height: "100px",
            cursor: "pointer",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            
          }}
        >
          <div className="overlay"></div>
          <img
            className="h-[50px] flex justify-center items-center w-[50px]   rounded-[50%] p-1 object-contain"
            src={skill.icon}
            alt={skill.title}
          />
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "bold",
            }}
          >
            {skill.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillsCards;
