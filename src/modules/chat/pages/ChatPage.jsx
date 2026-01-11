import {
  MessageCircle,
  MoreVertical,
  Paperclip,
  Phone,
  Plus,
  Search,
  Send,
  Settings,
  Smile,
  Video,
} from "lucide-react";
import React, { useState } from "react";

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      avatar: "أ",
      lastMessage: "شكراً أستاذ",
      time: "10:30",
      unread: 2,
      status: "متصل الآن",
      messages: [
        { id: 1, text: "السلام عليكم أستاذ", time: "10:00", sent: false },
        { id: 2, text: "وعليكم السلام، كيف حالك؟", time: "10:02", sent: true },
        {
          id: 3,
          text: "بخير الحمد لله، عندي سؤال عن الدرس",
          time: "10:05",
          sent: false,
        },
        { id: 4, text: "شكراً أستاذ", time: "10:30", sent: false },
      ],
    },
    {
      id: 2,
      name: "سارة أحمد",
      avatar: "س",
      lastMessage: "هل يمكنني السؤال؟",
      time: "09:15",
      unread: 0,
      status: "آخر ظهور منذ ساعة",
      messages: [
        { id: 1, text: "تفضل، أنا هنا للمساعدة", time: "10:06", sent: true },
        { id: 2, text: "هل يمكنني السؤال؟", time: "09:15", sent: false },
      ],
    },
    {
      id: 3,
      name: "مجموعة الرياضيات",
      avatar: "م",
      lastMessage: "الواجب جاهز",
      time: "أمس",
      unread: 5,
      isGroup: true,
      status: "12 عضو",
      messages: [
        { id: 1, text: "مرحباً بالجميع", time: "أمس 14:00", sent: true },
        {
          id: 2,
          text: "الواجب جاهز",
          time: "أمس 15:30",
          sent: false,
          sender: "محمد",
        },
      ],
    },
    {
      id: 4,
      name: "محمد علي",
      avatar: "م",
      lastMessage: "شكرات الدرس",
      time: "أمس",
      unread: 0,
      status: "غير متصل",
      messages: [
        { id: 1, text: "شكرات الدرس", time: "أمس 16:00", sent: false },
      ],
    },
  ]);

  const handleSendMessage = () => {
    if (messageInput.trim() && selectedChat) {
      const updatedConversations = conversations.map((conv) => {
        if (conv.id === selectedChat.id) {
          return {
            ...conv,
            messages: [
              ...conv.messages,
              {
                id: conv.messages.length + 1,
                text: messageInput,
                time: new Date().toLocaleTimeString("ar-EG", {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                sent: true,
              },
            ],
            lastMessage: messageInput,
            time: "الآن",
          };
        }
        return conv;
      });

      setConversations(updatedConversations);
      setSelectedChat(
        updatedConversations.find((c) => c.id === selectedChat.id)
      );
      setMessageInput("");
    }
  };

  const handleChatSelect = (chat) => {
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === chat.id) {
        return { ...conv, unread: 0 };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setSelectedChat(updatedConversations.find((c) => c.id === chat.id));
  };

  return (
    <div className="flex h-screen bg-gray-50" dir="rtl">
      {/* Sidebar - Conversations List */}
      <div className="w-96 bg-white border-l border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                <MessageCircle size={20} />
              </div>
              <h1 className="text-xl font-bold text-gray-800">منصة تعليم</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Settings size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* User Info */}
          <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                أ
              </div>
              <div>
                <p className="font-semibold text-gray-800">أحمد محمد</p>
                <p className="text-xs text-gray-500">متصل الآن</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="البحث..."
              className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* New Group Button */}
        <button className="m-4 p-3 bg-teal-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-teal-700 transition">
          <Plus size={20} />
          <span className="font-semibold">إنشاء مجموعة جديدة</span>
        </button>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div
              key={chat.id}
              onClick={() => handleChatSelect(chat)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
                selectedChat?.id === chat.id
                  ? "bg-teal-50 border-r-4 border-teal-600"
                  : ""
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-12 h-12 ${
                    chat.isGroup ? "bg-teal-600" : "bg-blue-600"
                  } rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                >
                  {chat.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-800">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">
                      {chat.lastMessage}
                    </p>
                    {chat.unread > 0 && (
                      <span className="bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mr-2">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 ${
                      selectedChat.isGroup ? "bg-teal-600" : "bg-blue-600"
                    } rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {selectedChat.avatar}
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-800 text-lg">
                      {selectedChat.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {selectedChat.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Phone size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Video size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sent ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-md ${
                      message.sent ? "bg-white" : "bg-teal-600 text-white"
                    } rounded-2xl px-4 py-3 shadow-sm`}
                  >
                    {!message.sent && message.sender && (
                      <p className="text-xs text-teal-100 mb-1 font-semibold">
                        {message.sender}
                      </p>
                    )}
                    <p
                      className={`${
                        message.sent ? "text-gray-800" : "text-white"
                      }`}
                    >
                      {message.text}
                    </p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sent ? "text-gray-500" : "text-teal-100"
                      }`}
                    >
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 p-4">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Paperclip size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Smile size={20} className="text-gray-600" />
                </button>
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="اكتب رسالتك..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-teal-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={48} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                مرحباً في منصة تعليم
              </h2>
              <p className="text-gray-600">اختر محادثة للبدء في المراسلة</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
