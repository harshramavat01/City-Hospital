import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap'

const ListAppointment = () => {

    const history = useHistory()

    const [data, setData] = useState([])

    const displayData = () => {
        let localData = JSON.parse(localStorage.getItem("apt"));

        setData(localData);

    }

    useEffect(() => {
        displayData();
    }, [])

    const handleDelete = (id) => {

        let localData = JSON.parse(localStorage.getItem("apt"));

        let fData = localData.filter((fd) => fd.id !== id);

        localStorage.setItem("apt", JSON.stringify(fData));

        displayData();
    }

    const handleEdit = (id) => {
        history.push("/book_apt", { id:id })
    }

    return (
        <>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Book an Appointment</h2>
                        <div className="row">
                            <div className="col-6">
                                <NavLink to="/book_apt">Book Appointment</NavLink>
                            </div>
                            <div className="col-6">
                                <NavLink to="/list_apt">List Appointment</NavLink>
                            </div>
                        </div>
                    </div>
                    <Row>
                        {
                            data.map((d) => {
                                return (
                                    <Col sm="4" key={d.id}>
                                        <Card body>
                                            <CardTitle tag="h5">
                                                {d.name}
                                            </CardTitle>
                                            <CardText>
                                                {d.email}
                                            </CardText>
                                            <CardText>
                                                {d.phone}
                                            </CardText>
                                            <CardText>
                                                {d.date}
                                            </CardText>
                                            <CardText>
                                                {d.message}
                                            </CardText>
                                            <Row>
                                                <Button color="primary"
                                                    outline className='m-2 w-25'
                                                    onClick={() => handleEdit(d.id)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button color="primary"
                                                    outline className='m-2 w-25'
                                                    onClick={() => handleDelete(d.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </Row>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ListAppointment
