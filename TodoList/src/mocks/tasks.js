import { v4 as uuidv4 } from 'uuid';

console.log ('Test: ', uuidv4()); 

export default [
    {
        id: uuidv4(),
        taskName: 'You can also replace the .badge class with a few more.',
        level: 0
      },
      {
        id: uuidv4(),
        taskName: 'Set a background-color with contrasting.',
        level: 1
      },
      {
        id: uuidv4(),
        taskName: 'Use the .rounded-pill utility class to make badges.',
        level: 2
      }
]