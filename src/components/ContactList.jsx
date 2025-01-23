//import Contact from './Contact'
import { Card, Button } from 'react-bootstrap'
export default function ContactList({persons, onDelete}) {
    console.log('ContactList', persons)
    


    return (

        <>
            <div>
            {persons.map((person, index) => (
                <li className='list-unstyled' key={index}>  
                    <Card >
                        <Card.Body className='d-flex justify-content-between w-100'>
                        <Card.Text>
                            {person.name}
                            <br />
                            {person.number}
                        </Card.Text>
                        <Button className='w-25 bg-danger' onClick={()=> {
                            onDelete(person.id)
                        }}>Delete</Button>
                    </Card.Body>
                </Card>
                </li>
            ))}
            </div>
        </>
    
  )
}
