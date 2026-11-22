
import { useState } from 'react';
import ListGroup from './components/ListGroup';
import Button from './components/Button';
import Alert from './components/Alert';

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  const handleSelectItem = (item) => {
    console.log('Selected city:', item);
  };

  return (
    <div className="container mt-4">
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <div className="mt-4">
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            Hello! This is a React alert!
          </Alert>
        )}

        <Button
          color="primary"
          onClick={() => setAlertVisible(true)}
        >
          Show Alert
        </Button>
      </div>
    </div>
  );
}

export default App;
