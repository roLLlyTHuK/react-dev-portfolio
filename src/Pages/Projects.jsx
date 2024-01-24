import SectionTitle from '../Components/SectionTitle';
import ProjectCards from '../Components/ProjectCards';

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-[dvw]  overflow-hidden-web flex justify-center"
    >
      <div className="w-full xl:w-[70%] relative mt-40 flex flex-col items-center justify-center pb-36">
        <div className="w-full h-[180%] mt-[-10%] mb-[-10%]">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <div className="w-full h-[100%] z-10 flex items-center justify-center ">
          <div className="w-full xl:w-[70%] ">
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
