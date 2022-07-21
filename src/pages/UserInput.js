import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../store/slice/user.slice";
import { useDispatch } from "react-redux";
import { Card, Button, FormControl, Form, InputGroup } from "react-bootstrap";
import "bootswatch/dist/united/bootstrap.min.css";

const UserInput = () => {
    const [userName, setUserName] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getName = () => {
        dispatch(changeUser(userName));
        navigate("/pokedes");
    };
    return (
        <>           

            <Card className="m-0 p-5">
                
                <Card.Body>
                    <Card.Img src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"></Card.Img>

                    <Form className="p-5 text-center">
                        <Card.Title className="text-orange">
                            Welcome Pokemon Trainer
                        </Card.Title>
                        <br />
                        <Form.Label>
                            In order to start, give me your name
                        </Form.Label>
                        <br />

                        <InputGroup>
                            <FormControl
                                type="text"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                placeholder="Name"
                            />
                            <Button
                                className=""
                                onClick={getName}
                                type="submit"
                            >
                                Start
                            </Button>
                        </InputGroup>
                    </Form>
                </Card.Body>
            </Card>
            <svg
                viewBox="0 0 1440 154"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="1440" height="123.181" fill="#DD1A1A" />
                <rect y="92" width="1440" height="69" fill="#0C0C0C" />
                <circle
                    cx="720.5"
                    cy="102.5"
                    r="52.5"
                    fill="white"
                    stroke="black"
                    strokeWidth="12"
                />
                <circle
                    cx="720.5"
                    cy="102.5"
                    r="25.5"
                    fill="#212121"
                    stroke="black"
                    strokeWidth="12"
                />
            </svg>
        </>
    );
};

export default UserInput;
