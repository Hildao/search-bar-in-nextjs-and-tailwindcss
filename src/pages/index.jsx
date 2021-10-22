import { useContext } from 'react';
import Search from '@/features/search';
import UserData from '@/data.json';
import UserContext from '@/features/user/provider';

export default function HomePage() {
  const ctx = useContext(UserContext);

  return (
    <div className='container mx-auto'>
      <input
        type='text'
        value={ctx.userInfo.email}
        onChange={(e) =>
          ctx.setUserInfo((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
      {ctx.userInfo.email}
      <div className='space-y-6'>
        <div className='py-4 flex justify-center'>
          <h1 className='font-bold text-2xl'>
            Welcome to my home page
          </h1>
        </div>
        <Search data={UserData} />
      </div>
    </div>
  );
}
