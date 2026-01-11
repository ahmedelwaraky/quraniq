// import { Send, Users } from "lucide-react";
// import React, { useState } from "react";
// import EmptyChatState from "./EmptyChatState";

// export default function ChatWindow({ chat }) {
//   const [message, setMessage] = useState("");

//   if (!chat) {
//     return (
//       <div className="flex-1 bg-slate-900 flex items-center justify-center">
//         <EmptyChatState />
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 bg-slate-900 flex flex-col">
//       {/* Chat Header */}
//       <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center gap-3">
//         <div
//           className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${
//             chat.isGroup ? "bg-teal-600" : "bg-slate-600"
//           }`}
//         >
//           {chat.isGroup ? (
//             <Users className="w-5 h-5" />
//           ) : (
//             <span>{chat.avatar}</span>
//           )}
//         </div>
//         <div>
//           <h2 className="text-white font-bold">{chat.name}</h2>
//           <p className="text-gray-400 text-sm">متصل الآن</p>
//         </div>
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-4">
//         <div className="flex justify-end mb-4">
//           <div className="bg-teal-600 text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-md">
//             {chat.message}
//           </div>
//         </div>
//       </div>

//       {/* Message Input */}
//       <div className="p-4 bg-slate-800 border-t border-slate-700">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             placeholder="اكتب رسالة..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
//           />
//           <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors">
//             <Send className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
