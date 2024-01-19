import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import MarqueeCards from '../Components/MarqueeCards';
import SectionTitle from '../Components/SectionTitle';
import SkillsCards from '../Components/SkillsCards';

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full flex flex-col xl:w-[70%]">
        <SectionTitle title="SKILLS" subtitle="WHAT I DO" />

        <MarqueeCards direction="right">
          <SkillsCards />
        </MarqueeCards>
      </div>
    </div>
  );
};

export default Skills;
