import { useEffect, useState } from "react";
import ProjectCreate from "./ProjectCreate";
import ProjectCreateDetails from "./ProjectCreateDetails";
import ProjectCreateLicenseprice from "./ProjectCreateLicenseprice";

const ProjectCreateMain = () => {
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
      {show.ProjectCreate && <ProjectCreate setShow={setShow} />}
      {show.ProjectCreateDetails && <ProjectCreateDetails setShow={setShow} />}
      {show.ProjectCreateLicenseprice && (
        <ProjectCreateLicenseprice setShow={setShow} />
      )}
    </>
  );
};
export default ProjectCreateMain;
