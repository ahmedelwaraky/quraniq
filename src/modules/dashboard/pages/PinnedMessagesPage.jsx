import React, { useState } from 'react'
import AnnouncementsGrid from '../ui/PinnedMessages/AnnouncementsGrid';
import PageHeader from '../ui/PinnedMessages/PageHeader';
import AddAnnouncementModal from '../ui/PinnedMessages/AddAnnouncementModal';

export default function PinnedMessagesPage() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([
    {
      title: 'إعلان هام: تحديث جداول الدروس',
      description: 'تم تحديث جداول الدروس لجميع المجموعات. يرجى مراجعة الجدول الجديد قبل بداية الأسبوع القادم.',
      startDate: '01-02-2024',
      endDate: '15-02-2024',
      status: 'نشط',
      audience: 'الجميع'
    },
    {
      title: 'تذكير للمدرسين: تسليم التقارير',
      description: 'يرجى من جميع المدرسين تسليم تقارير الطلاب الشهرية قبل نهاية هذا الأسبوع.',
      startDate: '05-02-2024',
      endDate: '10-02-2024',
      status: 'نشط',
      audience: 'المدرسين'
    },
    {
      title: 'الامتحانات النصفية',
      description: 'ستبدأ الامتحانات النصفية الأسبوع القادم. يرجى الاستعداد جيداً ومراجعة جميع الدروس.',
      startDate: '20-02-2024',
      endDate: '25-02-2024',
      status: 'معدول',
      audience: 'الطلاب'
    },
    {
      title: 'عطلة نهاية العام',
      description: 'تتمنى لكم عطلة سعيدة وآمنة ومفيدة.',
      startDate: '01-01-2024',
      endDate: '10-01-2024',
      status: 'منتهي',
      audience: 'الجميع'
    }
  ]);

  const handleAddAnnouncement = () => {
    setIsModalOpen(true);
  };

  const handleSubmitAnnouncement = (formData) => {
    // تحويل التاريخ من yyyy-mm-dd إلى dd-mm-yyyy
    const formatDate = (dateStr) => {
      const [year, month, day] = dateStr.split('-');
      return `${day}-${month}-${year}`;
    };

    const newAnnouncement = {
      title: formData.title,
      description: formData.description,
      startDate: formatDate(formData.startDate),
      endDate: formatDate(formData.endDate),
      status: formData.status,
      audience: formData.audience
    };

    setAnnouncements(prev => [newAnnouncement, ...prev]);
    alert('تم إضافة الرسالة بنجاح! ✅');
  };

  const activeAnnouncements = announcements.filter(a => a.status === 'نشط').length;

  return (
    <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <PageHeader 
          onAddAnnouncement={handleAddAnnouncement}
          pinnedCount={activeAnnouncements}
        />
        
        <AnnouncementsGrid announcements={announcements} />

        <AddAnnouncementModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmitAnnouncement}
        />
      </div>
    </div>
  );
};