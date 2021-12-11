import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { User } from "../interfaces/interfaces";
import CircularSpinner from "../componet-UI/spinner/spinner";

const USERS = gql`
    query Users {
        users {
            id
            role
            lastname
            firstname
        }
    }
`;

const GetUsers = () => {
    const [users, setUsers] = useState<[User]>();
    const { data, error, loading } = useQuery(USERS);
    error && console.log(error);

    useEffect(() => {data && setUsers(data.users);}, [users,data]);

    return (
        <Grid justifyContent={"center"} alignContent={"center"} container spacing={2}>
            {loading ?  <CircularSpinner/> :
                users && users.map((el, i) => {
                    return (
                        <Grid key={el.id} item>
                            <Card sx={{ minWidth: 150 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>{`role: ${el.role}`}</Typography>
                                    <Typography sx={{fontSize:18}} variant="h5" component="div">{el.firstname} {el.lastname}</Typography>

                                </CardContent>
                                <CardActions>
                                    <Button size="small"> Editer </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    );
                })
            }
        </Grid>
    );
};

export default GetUsers;