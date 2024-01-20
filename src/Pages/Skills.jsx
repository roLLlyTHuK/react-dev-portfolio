import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import MarqueeCards from "../Components/MarqueeCards";
import SectionTitle from "../Components/SectionTitle";
import SkillsCards from "../Components/SkillsCards";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-[100%] overflow-hidden-web flex justify-center h-[60vh]"
    >
      <div className="w-[100%] flex flex-col xl:w-[70%] " >
        <SectionTitle title="SKILLS" subtitle="WHAT I DO" />
        <div className="w-[60%] flex justify-center items-center mx-auto md:w-[80%] sm:w-[100%]" style={{marginTop: "100px"}}>
          <MarqueeCards direction="right">
            <SkillsCards />
          </MarqueeCards>
        </div>
      </div>
    </div>
  );
};

export default Skills;
