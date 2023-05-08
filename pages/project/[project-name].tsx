import { NextPage } from "next";
import { useRouter } from "next/router";

const Project: NextPage = () => {
    const router = useRouter();
    console.log(router);
    const projectName = router.query["project-name"]; // Here, 'project' is the name of the dynamic parameter in the URL
    return (
        <div>
            <h1>Project: {projectName}</h1>
            <p>Welcome to {projectName}!</p>
        </div>
    );
};

export default Project;
