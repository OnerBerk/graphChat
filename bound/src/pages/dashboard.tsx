import Layout from "../componet-UI/layout/layout";
import { gql } from "@apollo/client";

const GROUPS = gql`
    query Users {
        users {
            id
            role
            lastname
            firstname
        }
    }
`



const Dashboard = () => {
    return (
        <Layout header={true}>
            Dashboard
        </Layout>
    );
};
export default Dashboard;