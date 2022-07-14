import React from 'react'
import {
    Card, CardText, CardBody,
    CardTitle,  Button,
} from 'reactstrap';

const List = ({ data }) => {
    return (
        <>
            {
                data.map((d, i) => {
                    return (
                        <>
                            {
                                d.doctorName ? <div className="col-lg-6 mt-4 mt-lg-0">
                                    <div className="member d-flex align-items-start">
                                        <div className="pic"><img src={d.image} className="img-doctor" alt="" /></div>
                                        <div className="member-info">
                                            <h4>{d.doctorName}</h4>
                                            <span>{d.post}</span>
                                            <p>{d.description}</p>
                                            <div className="social">
                                                <a href><i className="ri-twitter-fill" /></a>
                                                <a href><i className="ri-facebook-fill" /></a>
                                                <a href><i className="ri-instagram-fill" /></a>
                                                <a href> <i className="ri-linkedin-box-fill" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null
                            }
                            {
                                d.medicineName ? <Card className='my-3'>
                                    <CardBody>
                                        <CardTitle><b>{d.medicineName}</b></CardTitle>
                                        <CardText>Quantity : {d.quantity}</CardText>
                                        <CardText>Price : {d.price}</CardText>
                                        <CardText>Expiry : {d.expiry}</CardText>
                                        <Button>Click</Button>
                                    </CardBody>
                                </Card> : null
                            }
                        </>
                    )
                })
            }

        </>
    )
}

export default List
