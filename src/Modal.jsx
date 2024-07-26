import { Link } from "react-router-dom";

const Modal = ({ showModal, handleCloseModal, handleLogin }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 md:p-8 rounded-lg w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 max-w-md text-center border border-red-400">
        <span className="text-lg mb-4"><p>Чтобы смотреть видео, сначала нужно войти через </p><p className="text-red-500 font-great-vibes">Instagram</p></span>
        <div className="mt-4">
          <Link to={'./post'} className="bg-blue-500 text-white py-2 px-4 rounded mx-2 hover:bg-blue-700 transition duration-300">
            Войти
          </Link>
          <button onClick={handleCloseModal} className="bg-blue-500 text-white py-2 px-4 rounded mx-2 hover:bg-blue-700 transition duration-300">
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
