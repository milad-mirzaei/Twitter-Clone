import useUsers from '@/hooks/useUsers';

import Avatar from '../Avatar';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }
  const router=useRouter();


  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-gray-200 rounded-2xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-1 mt-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} onClick={()=>{router.push(`/users/${user.id}`)}} className="flex flex-row py-2 px-2 rounded-2xl hover:bg-gray-50 hover:cursor-pointer gap-4 hover:gap-5 transition-all">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-neutral-700 font-semibold hover:cursor-pointer hover:underline text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm hover:cursor-pointer hover:underline">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
