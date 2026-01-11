import React from 'react';
import type { GroupsListProps } from '../../interface/GroupInterface/Group.types';
import GroupCard from './GroupCard';

export default function GroupsList({ groups }: GroupsListProps) {
  if (groups.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
        <p className="text-gray-500">لا توجد مجموعات مطابقة للبحث</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}