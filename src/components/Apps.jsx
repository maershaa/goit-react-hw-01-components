import  Profile  from 'components/Profile/Profile';
import  Statistics  from 'components/Statistics/Statistics';
import FriendList from 'components/Friends/FriendList';
import  TransactionHistory  from 'components/TransactionHistory/TransactionHistory';

import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/Friends/friends.json';
import transactions from 'components/TransactionHistory/transactions.json';


export  const Apps = (props) => {
    return (
      <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
        />
        
    <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />
      
    <TransactionHistory items={transactions} />
      </div>

  )
}