import Layout from "../componet-UI/layout/layout";
import GetUsers from "../utils/getUsers";

const Dashboard = () => {
    return (
        <Layout title="Dashboard" header={true}>
            <GetUsers />
        </Layout>
    );
};
export default Dashboard;