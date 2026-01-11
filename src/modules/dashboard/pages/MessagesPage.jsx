// pages/MessagesPage.tsx
import React, { useState } from "react";
import MonitorSidebar from "../ui/Messages/MonitorSidebar";
import MessageSearchBar from "../ui/Messages/MessageSearchBar";
import MonitorHeader from "../ui/Messages/MonitorHeader";
import MessagesMonitorList from "../ui/Messages/MessagesMonitorList";

export default function MessagesPage() {
  const [activeGroupId, setActiveGroupId] = useState("1");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample Groups Data
  const groups= [
    {
      id: "1",
      name: "مجموعة الرياضيات",
      teacher: "أ. محمد أحمد",
      messagesCount: 1250,
      urgentCount: 2,
    },
    {
      id: "2",
      name: "مجموعة الفيزياء",
      teacher: "أ. سارة خالد",
      messagesCount: 890,
    },
    {
      id: "3",
      name: "مجموعة الكيمياء",
      teacher: "أ. فاطمة الزهراء",
      messagesCount: 670,
      urgentCount: 1,
    },
  ];

  // Sample Messages Data
  const messagesData= {
    "1": [
      {
        id: "1",
        sender: "أحمد محمد",
        senderRole: "student",
        content: "وعليكم السلام أستاذ",
        timestamp: "10:01",
        avatar: "أ",
      },
      {
        id: "2",
        sender: "سارة أحمد",
        senderRole: "student",
        content: "جاهزين للمراجعة",
        timestamp: "10:02",
        avatar: "س",
      },
      {
        id: "3",
        sender: "خالد علي",
        senderRole: "student",
        content: "هذا الدرس صعب جداً!",
        timestamp: "10:05",
        isUrgent: true,
        avatar: "خ",
      },
      {
        id: "4",
        sender: "أ. محمد أحمد",
        senderRole: "teacher",
        content: "سأشرح النقاط الصعبة مرة أخرى",
        timestamp: "10:06",
        avatar: "م",
      },
    ],
    "2": [
      {
        id: "5",
        sender: "علي حسن",
        senderRole: "student",
        content: "شكراً على الشرح الممتاز",
        timestamp: "11:30",
        avatar: "ع",
      },
    ],
    "3": [
      {
        id: "6",
        sender: "فاطمة خالد",
        senderRole: "student",
        content: "متى الامتحان القادم؟",
        timestamp: "09:15",
        avatar: "ف",
      },
    ],
  };

  const activeGroup = groups.find((g) => g.id === activeGroupId);
  const messages = messagesData[activeGroupId] || [];

  // Filter groups based on search
  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.teacher.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Actions Handlers
  const handleWarn = (messageId) => {
    console.log("Warning sent for message:", messageId);
    alert("تم إرسال تحذير للمستخدم");
  };

  const handleMute = (messageId) => {
    console.log("User muted for message:", messageId);
    alert("تم كتم المستخدم");
  };

  const handleDelete = (messageId) => {
    console.log("Message deleted:", messageId);
    alert("تم حذف الرسالة");
  };

  return (
    <div className="h-screen flex flex-col" dir="rtl">
      {/* Search Bar */}
      <MessageSearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <MonitorSidebar
          groups={filteredGroups}
          activeGroupId={activeGroupId}
          onGroupSelect={setActiveGroupId}
        />

        {/* Messages Area */}
        <div className="flex-1 flex flex-col bg-gray-50">
          <MonitorHeader
            groupName={activeGroup?.name || "اختر مجموعة"}
            messagesCount={messages.length}
          />
          <MessagesMonitorList
            messages={messages}
            onWarn={handleWarn}
            onMute={handleMute}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}