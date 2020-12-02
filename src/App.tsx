import React, { useState } from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'


interface IShowResult {
  message: string;
  status: string;
}

const App: React.FC = () => {
  // const [ show, setShow ] = useState(true);
  // const [ data, loading ] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  // const dogResult = data as IShowResult;
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Button btnType= { ButtonType.Primary } size={ButtonSize.Large}>Hello</Button>
        <Button btnType= { ButtonType.Link } href="www.baidu.com" disabled>Baidu</Button>
      </header>
    </div>
  );
}

export default App;
