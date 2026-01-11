import React, { useState } from 'react';
import type { Group } from '../interface/GroupInterface/Group.types';
import SearchBar from '../ui/Groups/SearchBar';
import GroupsList from '../ui/Groups/GroupsList';

export default function GroupsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample Data
  const groupsData: Group[] = [
    {
      id: "1",
      name: "مجموعة الرياضيات - المستوى الأول",
      teacher: "أ. محمد أحمد",
      studentsCount: 5,
      status: "active",
      members: ["أ", "س", "ف", "ك", "ن"],
      messagesCount: 1250,
      createdAt: "15-01-2024",
      borderColor: "bg-green-500",
    },
    {
      id: "2",
      name: "مجموعة الفيزياء - الثانوية",
      teacher: "أ. سارة خالد",
      studentsCount: 3,
      status: "active",
      members: ["ع", "ن", "ى"],
      messagesCount: 890,
      createdAt: "01-02-2024",
      borderColor: "bg-green-500",
    },
    {
      id: "3",
      name: "مجموعة اللغة العربية",
      teacher: "أ. أحمد علي",
      studentsCount: 2,
      status: "suspended",
      members: ["م", "ع"],
      messagesCount: 450,
      createdAt: "20-01-2024",
      borderColor: "bg-yellow-500",
    },
    {
      id: "4",
      name: "مجموعة الكيمياء المتقدمة",
      teacher: "أ. فاطمة الزهراء",
      studentsCount: 4,
      status: "active",
      members: ["ع", "ل", "ك", "س"],
      messagesCount: 670,
      createdAt: "10-02-2024",
      borderColor: "bg-green-500",
    },
  ];

  // Filter groups based on search
  const filteredGroups = groupsData.filter(
    (group) =>
      group.name.includes(searchQuery) ||
      group.teacher.includes(searchQuery)
  );

  return (
    <div className="space-y-6" dir="rtl">
      {/* Search Bar */}
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Groups List */}
      <GroupsList groups={filteredGroups} />
    </div>
  );
}