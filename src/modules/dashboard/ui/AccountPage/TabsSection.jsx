import React from "react";
import TabButton from "./TabButton";
import {
  GraduationCapIcon,
  UsersIcon,
} from "../../../../components/ui/SvgIcons/SvgIcons";

export default function TabsSection({
  activeTab,
  onTabChange,
  studentsCount,
  teachersCount,
}) {
  return (
    <div className="flex gap-4 mb-6 bg-gray-100 p-2 rounded-lg border border-gray-300 shadow-sm">
      <TabButton
        active={activeTab === "students"}
        icon={GraduationCapIcon}
        label="الطلاب"
        count={studentsCount}
        onClick={() => onTabChange("students")}
      />
      <TabButton
        active={activeTab === "teachers"}
        icon={UsersIcon}
        label="المدرسين"
        count={teachersCount}
        onClick={() => onTabChange("teachers")}
      />
    </div>
  );
}