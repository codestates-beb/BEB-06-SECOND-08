import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';

const Cardpost = ({ title, onClick }) => {
    return (
        <div className="cursor-pointer" onClick={onclick}>
            <Row xs={1} md={2} className="g-4">
                <Card style={{ width: '22rem' }} onClick={onClick}>
                    <Card.Body>
                        <Card.Title>Nickname</Card.Title>
                        <Card.Text>
                            {title}
                        </Card.Text>
                        <Button variant="success">Like</Button>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    )
}

export default Cardpost