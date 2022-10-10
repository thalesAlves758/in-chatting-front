import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [userStorage, setUserStorage] = useLocalStorage('user', null);

  const [user, setUser] = useState(userStorage);

  useEffect(() => {
    setUserStorage(user);
  }, [user, setUserStorage]);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
