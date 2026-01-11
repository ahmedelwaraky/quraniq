export interface StatsCardsProps {
    stats: StatCard[];
}

export interface RecentActivitiesProps {
    activities: Activity[];
}

export interface SystemStatusProps {
    status: SystemStatusItem[];
}

export interface StatCard {
    label: string;
    value: string;
    change: string;
    changeType: "positive" | "negative";
    icon: keyof typeof Icons;
    bgColor: string;
    iconColor: string;
}

export interface Activity {
    action: string;
    user: string;
    time: string;
}

export interface SystemStatusItem {
    label: string;
    value: string;
    type: "badge" | "text";
    badgeClass?: string;
    icon?: boolean;
    showBar?: boolean;
}