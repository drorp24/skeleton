import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  console.log('message: ', message);

  useEffect(() => {
    fetch('/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('ERROR:', err));
  }, []);

  return (
    <div>
      <h1>React Exercises Skeleton</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
