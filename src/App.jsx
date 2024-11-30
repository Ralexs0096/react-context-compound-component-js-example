import Card from './components/Card';

const cards = [
  {
    title: 'MY Card',
    data: 'some data',
    buttonOneLabel: '+1',
    buttonTwoLabel: '-1'
  },
  {
    title: 'MY Card 2',
    data: 'some data',
    buttonOneLabel: '+1',
    buttonTwoLabel: '-1'
  },
  {
    title: 'MY Card 3',
    data: 'some data',
    buttonOneLabel: '+1',
    buttonTwoLabel: '-1'
  }
];

function App() {
  return (
    <>
      <h1>Hello</h1>
      <hr />
      <Card
        title={cards[0].title}
        body={cards[0].data}
        buttonLabelOne={cards[0].buttonOneLabel}
        buttonLabelTwo={cards[0].buttonTwoLabel}
      >
        <Card.Title />
        {/* <Card.Body /> */}
        <Card.ButtonOne />
      </Card>
    </>
  );
}

export default App;
