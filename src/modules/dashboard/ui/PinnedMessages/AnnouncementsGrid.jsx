import React from "react";
import AnnouncementCard from "./AnnouncementCard";

export default function ({ announcements }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {announcements.map((announcement, index) => (
        <AnnouncementCard key={index} announcement={announcement} />
      ))}
    </div>
  );
}
