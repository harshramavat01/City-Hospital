import React, { useRef } from 'react'
import { Form,  Label, Button } from 'reactstrap';


const UseRef = () => {
    const name = useRef()
    const email = useRef()
    const password = useRef()

    return (
        <>
            <div className="container my-5">
                <Form>
                    <Label for="exampleText">
                        Name
                    </Label>
                    <input ref={name}
                        id="exampleText"
                        name="name"
                        placeholder="Enter Your Name Here"
                        type="text"
                    />
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <input
                        ref={email}
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter Your E-mail Here"
                        type="email"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <input
                        ref={password}
                        id="examplePassword"
                        name="password"
                        placeholder="Enter Your Password"
                        type="password"
                    />
                    <Button color="success" onClick={() => {
                        console.log(name.current.value)
                        console.log(email.current.value)
                        console.log(password.current.value)
                        name.current.value = '';
                        email.current.value = '';
                        password.current.value = '';
                        name.current.style.backgroundColor = "#766777";
                        name.current.style.color = "#fff";
                        email.current.focus();
                    }}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default UseRef
