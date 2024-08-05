"use client";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Burada oturumu sonlandırma işlemini yapmanız gerekiyor.
    // Örneğin, bir oturum çerezi veya token'ı kaldırmak.

    // Yönlendirme işlemi
    router.push("/"); // Çıkış yaptıktan sonra ana sayfaya yönlendiriyoruz
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <button
        onClick={handleLogout}
        className="absolute top-4 left-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
      >
        Exit
      </button>
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <p className="text-sm mb-4">Welcome to the home page!</p>
      </div>
    </div>
  );
};

export default HomePage;
