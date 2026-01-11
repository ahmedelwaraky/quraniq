import React, { useState, useEffect } from "react";
import { GraduationCap, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

// الحسابات المتاحة
const USERS = [
  {
    email: "admin@school.com",
    password: "admin123",
    role: "admin",
    name: "مدير النظام",
  },
  {
    email: "superadmin@school.com",
    password: "super123",
    role: "superadmin",
    name: "المدير العام",
  },
  {
    email: "teacher@school.com",
    password: "teacher123",
    role: "teacher",
    name: "المعلم",
  },
];

// Schema للتحقق من البيانات
const loginSchema = {
  email: (value) => {
    if (!value) return "البريد الإلكتروني مطلوب";
    if (!/\S+@\S+\.\S+/.test(value)) return "البريد الإلكتروني غير صحيح";
    return null;
  },
  password: (value) => {
    if (!value) return "كلمة المرور مطلوبة";
    if (value.length < 6) return "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    return null;
  },
};

// Login Form Component
export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: null, password: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  // تحميل الحسابات في localStorage عند التحميل
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (storedUsers.length === 0) {
      localStorage.setItem("users", JSON.stringify(USERS));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    setErrors((prev) => ({ ...prev, [name]: null }));
    setLoginError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const emailError = loginSchema.email(formData.email);
    const passwordError = loginSchema.password(formData.password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    // Submit
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // التحقق من الحساب
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (!user) {
      setLoginError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      setIsSubmitting(false);
      return;
    }

    // حفظ بيانات المستخدم
    localStorage.setItem("currentUser", JSON.stringify(user));

    // التوجيه حسب الدور
    if (user.role === "superadmin") {
      navigate("/dashboard");
    } else if (user.role === "admin" || user.role === "teacher") {
      navigate("/ChatPage");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-800 rounded-2xl mb-4">
          <GraduationCap className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          مرحباً بعودتك!
        </h1>
        <p className="text-gray-600 text-sm">
          قم بتسجيل الدخول للوصول إلى حسابك
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Login Error Message */}
        {loginError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600 text-right">{loginError}</p>
          </div>
        )}

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            البريد الإلكتروني
          </label>
          <div className="relative">
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={`w-full px-4 py-3 pr-11 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-right ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              dir="ltr"
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 text-right">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
            كلمة المرور
          </label>
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className={`w-full px-4 py-3 pr-11 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-right ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600 text-right">
              {errors.password}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-800 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
        </button>
      </form>

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-600 text-center leading-relaxed">
          <strong>ملاحظة:</strong> يتم إرسال التحديثات من قبل الإدارة فقط، إذا
          كان يتعذر إضافة الحساب، تواصل مع الإدارة
        </p>
      </div>

      {/* Demo Accounts */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-xs font-bold text-blue-900 text-center mb-2">
          حسابات تجريبية:
        </p>
        <div className="space-y-2 text-xs text-blue-800">
          <div className="text-right">
            <strong>المدير العام:</strong> superadmin@school.com / super123
          </div>
          <div className="text-right">
            <strong>مدير النظام:</strong> admin@school.com / admin123
          </div>
          <div className="text-right">
            <strong>المعلم:</strong> teacher@school.com / teacher123
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <a
        href="/"
        className="block text-center text-sm text-teal-800 hover:text-teal-700 mt-6 font-medium"
      >
        ← العودة للرئيسية
      </a>
    </div>
  );
}
