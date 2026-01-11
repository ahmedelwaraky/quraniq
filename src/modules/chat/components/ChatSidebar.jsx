// import { MessageCircle, Plus, Search, Settings } from "lucide-react";
// import React, { useState } from "react";
// import ChatItem from "./ChatItem";

// export default function ChatSidebar() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const chats = [
//     {
//       id: 1,
//       name: "أحمد محمد",
//       message: "شكراً أستاذ",
//       time: "10:30",
//       unread: 2,
//       isGroup: false,
//       avatar: "أ",
//     },
//     {
//       id: 2,
//       name: "سارة أحمد",
//       message: "هل يمكنني السؤال؟",
//       time: "09:15",
//       unread: 0,
//       isGroup: false,
//       avatar: "س",
//     },
//     {
//       id: 3,
//       name: "مجموعة الرياضيات",
//       message: "الواجب جاهز",
//       time: "أمس",
//       unread: 5,
//       isGroup: true,
//       avatar: "",
//     },
//     {
//       id: 4,
//       name: "محمد علي",
//       message: "شوفت الدرس",
//       time: "أمس",
//       unread: 0,
//       isGroup: false,
//       avatar: "م",
//     },
//   ];

//   return (
//     <div className="h-screen flex" dir="rtl">
//       {/* Sidebar */}
//       <div className="w-96 bg-slate-800 flex flex-col">
//         {/* Header */}
//         <div className="p-4 bg-slate-900 flex items-center justify-between border-b border-slate-700">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
//               <MessageCircle className="w-5 h-5 text-white" />
//             </div>
//             <h1 className="text-white font-bold text-lg">منصة تعليم</h1>
//           </div>
//           <button className="text-gray-400 hover:text-white transition-colors">
//             <Settings className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Search */}
//         <div className="p-4 bg-slate-800 border-b border-slate-700">
//           <div className="relative">
//             <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="البحث..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full bg-slate-700 text-white pr-10 pl-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//             />
//           </div>
//         </div>

//         {/* New Group Button */}
//         <div className="p-4">
//           <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
//             <Plus className="w-5 h-5" />
//             إنشاء مجموعة جديدة
//           </button>
//         </div>

//         {/* Chat List */}
//         <div className="flex-1 overflow-y-auto">
//           {chats.map((chat) => (
//             <ChatItem key={chat.id} {...chat} />
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="p-4 bg-slate-900 border-t border-slate-700">
//           <div className="flex items-center gap-2 text-gray-400 text-sm">
//             <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold">أ</span>
//             </div>
//             <div className="flex-1">
//               <p className="text-white font-semibold text-sm">أستاذ أحمد</p>
//               <p className="text-xs">متاح الآن</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Chat Area */}
//       <div className="flex-1 bg-slate-900 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
//             <MessageCircle className="w-10 h-10 text-gray-600" />
//           </div>
//           <h2 className="text-white text-xl font-bold mb-2">مرحباً بك!</h2>
//           <p className="text-gray-400">اختر محادثة من القائمة للبدء</p>
//         </div>
//       </div>
//     </div>
//   );
// }
