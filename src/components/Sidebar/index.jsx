import './index.css';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'; // Importação do CSS do react-tooltip
import { Link } from 'react-router-dom'; // Certifique-se de que o React Router esteja instalado

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Botão com o tooltip associado */}
      <button
        onClick={toggleSidebar}
        className="buttonOpen"
        data-tooltip-id="tooltip-sidebar"
        data-tooltip-content={isSidebarOpen ? 'Home/Clientes' : 'Home/Clientes'}
      >
        {isSidebarOpen ? 'Fechar mais opções' : 'Mais opções'}
      </button>

      {/* Tooltip associado ao botão */}
      <Tooltip id="tooltip-sidebar" />

      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '250px',
          height: '100vh',
          color: 'white',
          display: isSidebarOpen ? 'block' : 'none',
          zIndex: 999,
        }}
      >
        <h2>Opções</h2>
        {/* Conteúdo do sidebar */}
        <div className="options">
          <Link to="/">Home</Link>
          <div className="linha-horizontal-nav"></div>
          <Link to="/clientes">Clientes</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
