import SectionTitle from '../Components/SectionTitle';
import SkillsCards from '../Components/SkillsCards';

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full flex flex-col xl:w-[70%]">
        <SectionTitle title="SKILLS" subtitle="WHAT I DO" />

        <div className="absolute top-[45px] w-full h-[1px] bg-primary-400"></div>

        <SkillsCards />
      </div>
    </div>
  );
};

export default Skills;
