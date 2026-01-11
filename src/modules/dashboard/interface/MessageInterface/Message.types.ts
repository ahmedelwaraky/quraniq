// interface/MonitorInterface/Monitor.types.ts
export interface Message {
  id: string;
  sender: string;
  senderRole: "student" | "teacher";
  content: string;
  timestamp: string;
  isUrgent?: boolean;
  avatar?: string;
}

export interface MonitorGroup {
  id: string;
  name: string;
  teacher: string;
  messagesCount: number;
  urgentCount?: number;
}

export interface MessageSearchBarProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export interface MonitorSidebarProps {
  groups: MonitorGroup[];
  activeGroupId: string;
  onGroupSelect: (groupId: string) => void;
}

export interface MonitorHeaderProps {
  groupName: string;
  messagesCount: number;
}

export interface MessageCardProps {
  message: Message;
  onWarn: (messageId: string) => void;
  onMute: (messageId: string) => void;
  onDelete: (messageId: string) => void;
}

export interface MessagesMonitorListProps {
  messages: Message[];
  onWarn: (messageId: string) => void;
  onMute: (messageId: string) => void;
  onDelete: (messageId: string) => void;
}