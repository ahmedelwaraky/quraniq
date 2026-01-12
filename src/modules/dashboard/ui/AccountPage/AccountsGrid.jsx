import React from 'react'
import AccountCard from './AccountCard';

export default function AccountsGrid({ accounts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {accounts.map((account, index) => (
        <AccountCard key={index} {...account} />
      ))}
    </div>
  );
};