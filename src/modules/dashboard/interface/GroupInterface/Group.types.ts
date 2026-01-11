export interface Group {
    id: string;
    name: string;
    teacher: string;
    studentsCount: number;
    status: "active" | "suspended";
    members: string[];
    messagesCount: number;
    createdAt: string;
    borderColor: string;
}

export interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
}

export interface GroupCardProps {
    group: Group;
}

export interface GroupsListProps {
    groups: Group[];
}