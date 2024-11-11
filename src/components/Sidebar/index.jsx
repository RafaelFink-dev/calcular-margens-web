import React, { useState } from 'react';
import './index.css';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className='buttonOpen'>
        {isSidebarOpen ? 'Fechar Sidebar' : 'Abrir Sidebar'}
      </button>

      <div
        className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '250px',
          height: '100vh',
          backgroundColor: '#333',
          color: 'white',
          display: isSidebarOpen ? 'block' : 'none',
        }}
      >
        <h2>Opções</h2>
        {/* Aqui você pode adicionar conteúdo para a sidebar */}
        <a>Clientes</a>
      </div>
    </div>
  );
};

export default Sidebar;
