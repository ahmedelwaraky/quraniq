import React from "react";
import StatsCards from "../ui/statePage/StatsCards";
import RecentActivities from "../ui/statePage/RecentActivities";
import SystemStatus from "../ui/statePage/SystemStatus";

export default function StatsPage() {
  const statsData = [
    {
      label: "عدد المدرسين",
      value: "45",
      change: "+5 هذا الشهر",
      changeType: "positive",
      icon: "GraduationCap",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      label: "عدد الطلاب",
      value: "1,250",
      change: "+120 هذا الشهر",
      changeType: "positive",
      icon: "Users",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      label: "الجروبات النشطة",
      value: "32",
      change: "+3 هذا الشهر",
      changeType: "positive",
      icon: "Messages",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      label: "الرسائل اليوم",
      value: "4,580",
      change: "-250 هذا الشهر",
      changeType: "negative",
      icon: "Activity",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const activitiesData = [
    {
      action: "تسجيل طالب جديد",
      user: "أحمد محمد",
      time: "منذ 3 دقائق",
    },
    {
      action: "إنشاء جروب جديد",
      user: "أ. سارة",
      time: "منذ 15 دقيقة",
    },
    {
      action: "حذف رسالة مخالفة",
      user: "المدير",
      time: "منذ ساعة",
    },
    {
      action: "تعطيل حساب مؤقت",
      user: "المدير",
      time: "منذ ساعتين",
    },
    {
      action: "تغيير كلمة مرور",
      user: "محمد علي",
      time: "منذ 3 ساعات",
    },
  ];

  const systemStatusData = [
    {
      label: "الحالة",
      value: "نشط",
      type: "badge",
      badgeClass: "bg-green-100 text-green-700",
      icon: true,
    },
    {
      label: "وقت التشغيل",
      value: "99.9%",
      type: "text",
      showBar: true,
    },
    {
      label: "آخر نسخة احتياطية",
      value: "منذ ساعتين",
      type: "text",
    },
    {
      label: "التنبيهات",
      value: "2",
      type: "badge",
      badgeClass: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      {/* Component 1: Stats Cards */}
      <StatsCards stats={statsData} />

      {/* Components 2 & 3: Activities and System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Component 2: Recent Activities */}
        <div className="lg:col-span-2">
          <RecentActivities activities={activitiesData} />
        </div>

        {/* Component 3: System Status */}
        <div className="lg:col-span-1">
          <SystemStatus status={systemStatusData} />
        </div>
      </div>
    </div>
  );
}
