'use client';

import { useRouter } from 'next/navigation';

const HomeButton = () => {
  const router = useRouter();

  // Fonction pour rediriger vers la page d'accueil
  const handleClick = () => {
    router.push('/');
  };

  return (
    <button
      onClick={handleClick}
      className="font-helvetica fixed bottom-4 right-4 bg-black text-white py-4 px-6 font-bold rounded-lg border-2 border-white transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-black"
    >
      Retour à l'accueil
    </button>
  );
};

export default HomeButton;
