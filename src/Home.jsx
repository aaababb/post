import { useState } from 'react';
import './App.css';
import Video from './video';  // Убедитесь, что путь правильный
import Modal from './Modal'

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLogin = () => {
    setShowModal(false);
    setShowVideo(true); // Показываем видео после входа
  };

  return (
    <>
      {!showVideo ? (
        <div onClick={handleShow} className='flex justify-center items-center lg:w-100%'>
          <img className='absolute w-16 h-16' src='https://cdn-icons-png.freepik.com/512/120/120625.png'/>
          <img src='https://sova.news/wp-content/uploads/2022/01/122617280_gettyimages-104243112-800x400.jpg'/>
        </div>
      ) : (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      
      <Modal 
        showModal={showModal} 
        handleCloseModal={handleCloseModal}
        handleLogin={handleLogin}
      />
    </>
  );
}

export default Home;
