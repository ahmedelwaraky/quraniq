// import { Users } from "lucide-react";
// import React from "react";

// export default function ChatItem({
//   name,
//   message,
//   time,
//   unread,
//   isGroup,
//   avatar,
// }) {
//   return (
//     <div className="flex items-center gap-3 p-3 hover:bg-slate-700/50 cursor-pointer transition-colors border-b border-slate-700/30">
//       <div className="relative">
//         <div
//           className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
//             isGroup ? "bg-teal-600" : "bg-slate-600"
//           }`}
//         >
//           {isGroup ? <Users className="w-6 h-6" /> : avatar}
//         </div>
//         {unread > 0 && (
//           <div className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
//             {unread}
//           </div>
//         )}
//       </div>

//       <div className="flex-1 min-w-0">
//         <div className="flex items-center justify-between mb-1">
//           <h3 className="text-white font-semibold text-sm truncate">{name}</h3>
//           <span className="text-gray-400 text-xs">{time}</span>
//         </div>
//         <p className="text-gray-400 text-sm truncate">{message}</p>
//       </div>
//     </div>
//   );
// }
