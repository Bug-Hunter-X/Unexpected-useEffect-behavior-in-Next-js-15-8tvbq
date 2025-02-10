```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    console.log('UseEffect');
    interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>About Page</h1>
      <p>The counter is: {count}</p>
    </div>
  );
}
```