type ProjectBaseProps = {
    title: string;
    description: string;
    data: string;
    duration: string;
    URLToDetailsPage: string;
};

export interface ProjectsDataProps {
    phoenixEntreMares: ProjectBaseProps;
    connectHouse: ProjectBaseProps;
}