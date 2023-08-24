import { Card, Carousel } from 'react-bootstrap';

export default function TodaysDeal() {
  const cards = [
    {
      title: 'Card 1',
      content: 'This is the content of card 1.',
    },
    {
      title: 'Card 2',
      content: 'This is the content of card 2.',
    },
    {
      title: 'Card 3',
      content: 'This is the content of card 3.',
    },
  ];

  return (
   
    
  <Carousel>
      {cards.map((card) => (
        <Card key={card.title}>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.content}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Carousel>
    
   
  )
}
