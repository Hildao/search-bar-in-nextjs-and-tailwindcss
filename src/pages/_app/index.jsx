import { useContext, useState } from 'react';
import UserContext from '@/features/user/provider';
import './globals.css';

export default function App({ Component, pageProps }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
