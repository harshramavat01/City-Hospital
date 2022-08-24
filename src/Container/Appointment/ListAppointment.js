import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { NavLink, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function ListAppointment(props) { 
    const history = useHistory();
    let [data, setData] = useState([]);

    const dData = () => {
        let localData = JSON.parse(localStorage.getItem("BookAppointment"));

        setData(localData);
    }
    useEffect(() => {
        dData();
    }, []);

    const handledelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("BookAppointment"));

        let fData = localData.filter((l) => l.id !== id);

        localStorage.setItem("BookAppointment",JSON.stringify(fData));
        dData();
    }

    const  Data = (id) => {
        history.push("/BookAppointment", {id : id});
        console.log(id);
    } 

    return (
        <main>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>appointment</h2>
                    </div>
                    <div className='row text-center mb-4'>
                        <div className='col-6'>
                            <NavLink exact to={"/BookAppointment"}>Book an Appointment</NavLink>
                        </div>
                        <div className='col-6'>
                            <NavLink exact to={"/ListAppointment"}>List an Appointment</NavLink>
                        </div>
                        {
                            data.map((d, i) => {
                                return (
                                    <Card key={i}
                                    body
                                    color="secondary"
                                    inverse
                                    >
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {d.name}
                                            </CardTitle>

                                            <CardSubtitle
                                                className="mb-2"
                                                tag="h6"
                                            >

                                                {d.email}
                                            </CardSubtitle>
                                            <CardText>
                                              {d.date}


                                            </CardText>
                                            <Button onClick={() => Data(d.id)}>
                                                Edit
                                            </Button>
                                            <Button onClick={() => handledelete(d.id)}>
                                                Delete
                                            </Button>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ListAppointment;