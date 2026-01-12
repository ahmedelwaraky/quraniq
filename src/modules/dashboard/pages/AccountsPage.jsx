import React, { useState } from "react";
import PageHeader from "../ui/AccountPage/PageHeader";
import TabsSection from "../ui/AccountPage/TabsSection";
import AccountsGrid from "../ui/AccountPage/AccountsGrid";
import CreateAccountModal from "../ui/AccountPage/CreateAccountModal";
import AccountCreatedPopup from "../ui/AccountPage/AccountCreatedPopup";

export default function AccountsPage() {
  const [activeTab, setActiveTab] = useState("students");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [createdAccountData, setCreatedAccountData] = useState(null);
  const [accounts, setAccounts] = useState({
    students: [
      {
        name: "أ. فاطمة الزهراء",
        email: "fatima@example.com",
        phone: "0505555555",
        status: "معطل",
        attendanceCount: 2,
        type: "student",
      },
    ],
    teachers: [
      {
        name: "أ. محمد أحمد",
        email: "mohamed@example.com",
        phone: "0501234567",
        status: "نشط",
        attendanceCount: 5,
        type: "teacher",
      },
      {
        name: "أ. سارة خالد",
        email: "sara@example.com",
        phone: "0509876543",
        status: "نشط",
        attendanceCount: 3,
        type: "teacher",
      },
    ],
    admins: [],
  });

  const handleCreateAccount = () => {
    setIsModalOpen(true);
  };

  const handleSubmitAccount = (formData) => {
    const newAccount = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      status: "نشط",
      attendanceCount: 0,
      type: formData.accountType,
      specialization: formData.specialization,
      ageGroup: formData.ageGroup,
    };

    if (formData.accountType === "student") {
      setAccounts((prev) => ({
        ...prev,
        students: [...prev.students, newAccount],
      }));
    } else if (formData.accountType === "teacher") {
      setAccounts((prev) => ({
        ...prev,
        teachers: [...prev.teachers, newAccount],
      }));
    } else if (formData.accountType === "admin") {
      setAccounts((prev) => ({
        ...prev,
        admins: [...prev.admins, newAccount],
      }));
    }

    // حفظ بيانات الحساب المنشأ لعرضها في البوب أب
    setCreatedAccountData({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      accountType: formData.accountType,
    });

    // إظهار البوب أب
    setShowSuccessPopup(true);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    setCreatedAccountData(null);
  };

  const currentAccounts =
    activeTab === "students"
      ? accounts.students
      : activeTab === "teachers"
      ? accounts.teachers
      : accounts.admins;

  return (
    <div className="min-h-screen bg-gray-50 p-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <PageHeader onCreateAccount={handleCreateAccount} />

        <TabsSection
          activeTab={activeTab}
          onTabChange={setActiveTab}
          studentsCount={accounts.students.length}
          teachersCount={accounts.teachers.length}
        />

        <AccountsGrid accounts={currentAccounts} />

        <CreateAccountModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmitAccount}
        />

        <AccountCreatedPopup
          isOpen={showSuccessPopup}
          accountData={createdAccountData}
          onClose={handleCloseSuccessPopup}
        />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
