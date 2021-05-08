import { useState } from 'react';
import './App.css';
import { SortingButton } from './components/button/button';
import { SortingType } from './components/button/dto';

const App = () => {
  const [currentSort, setCurrentSort] = useState<string>('');

  return (
    <div className='App'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <SortingButton
          onButtonClicked={(c) => setCurrentSort(c)}
          text='Bubble Sort'
          type={SortingType.bubbleSort}
        />
        <SortingButton
          onButtonClicked={(c) => setCurrentSort(c)}
          text='Insertion Sort'
          type={SortingType.insertionSort}
        />
        <SortingButton
          onButtonClicked={(c) => setCurrentSort(c)}
          text='Quick Sort'
          type={SortingType.quickSort}
        />
        <SortingButton
          onButtonClicked={(c) => setCurrentSort(c)}
          text='Selection Sort'
          type={SortingType.selectionSort}
        />
      </div>
      <div>
        <h1>{currentSort}</h1>
      </div>
    </div>
  );
};

export default App;
