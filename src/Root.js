// import React from 'react';

// const Root = () => {
//   return (
//     <h3>Hello, React</h3>
//   );
// };
// export default Root;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './shared/App';

const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;