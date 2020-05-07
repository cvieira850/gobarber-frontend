import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
// import SignUp from './pages/Signup';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Caio' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
