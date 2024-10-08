import { useEffect, useState } from "react";
import ProjectCreate from "./ProjectCreate";
import ProjectCreateDetails from "./ProjectCreateDetails";
import ProjectCreateLicenseprice from "./ProjectCreateLicenseprice";

const ProjectCreateMain = () => {
  const [projectId, setProjectId] = useState(null);
  const [show, setShow] = useState({
    ProjectCreate: true,
    ProjectCreateDetails: false,
    ProjectCreateLicenseprice: false,
  });
  useEffect(() => {
    console.log("Show", show);
  }, [show]);
  return (
    <>
      {show.ProjectCreate && (
        <ProjectCreate setShow={setShow} setProjectId={setProjectId} />
      )}
      {show.ProjectCreateDetails && (
        <ProjectCreateDetails setShow={setShow} projectId={projectId} />
      )}
      {show.ProjectCreateLicenseprice && (
        <ProjectCreateLicenseprice setShow={setShow} projectId={projectId} />
      )}
    </>
  );
};
export default ProjectCreateMain;
