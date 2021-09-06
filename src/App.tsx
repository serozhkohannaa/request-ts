import React from 'react';
import DATA from './data.json';

import { IApiResponse, IPlace } from './interfaces';

function App() {
  const apiResponse: IApiResponse<IPlace> = DATA;

  apiResponse.results.map(item => {
    console.log(item, 'item');
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
