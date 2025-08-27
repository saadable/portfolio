import { axiosClient } from '../../../../Utils/axiosClient';
import ProjectCard from '../../_components/ProjectsCard/ProjectsCard';
// import { axiosClient } from "../../../../../Utils/axiosClient";
// import ProjectCard from "./_components/ProjectCard";

export const revalidate = 60; // ISR: rebuild every 60s

export default async function Projects() {
  let projects = [];

  try {
    const response = await axiosClient.post("/projects/allprojects");
    projects = response?.data?.result?.projects || [];
  } catch (error) {
    console.error("ERROR FETCHING PROJECTS:", error.message);
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 mt-10">
      <h1 className="text-4xl font-bold text-center mb-12">
        My <span className="text-red-800">Projects</span>
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
