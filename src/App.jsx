import margem_maisLogo from './assets/calculadora.png'
import folhaLogo from './assets/folha.png';
import './App.css'
import { useState } from 'react'

function App() {

  const [margemSuperior, setMargemSuperior] = useState(0);
  const [margemInferior, setMargemInferior] = useState(0);
  const [margemDireita, setMargemDireita] = useState(0);
  const [margemEsquerda, setMargemEsquerda] = useState(0);

  const [resultadoMargemSuperior, setResultadoMargemSuperior] = useState(0);
  const [resultadoMargemInferior, setResultadoMargemInferior] = useState(0);
  const [resultadoMargemDireita, setResultadoMargemDireita] = useState(0);
  const [resultadoMargemEsquerda, setResultadoMargemEsquerda] = useState(0);


  function calcularMargem() {
    const largura = 21.00 - margemDireita - margemEsquerda;
    const altura = 29.70 - margemSuperior - margemInferior;

    const x = 19 - largura;
    const margensLaterais = (x / 2).toFixed(2);

    const y = 25 - altura;
    const margensSuperior = (y * 0.85).toFixed(2);
    const margensInferior = (y * 0.15).toFixed(2);

    setResultadoMargemDireita(margensLaterais);
    setResultadoMargemEsquerda(margensLaterais);

    setResultadoMargemSuperior(margensSuperior);
    setResultadoMargemInferior(margensInferior);

  }

  function limparInputs() {
    setMargemSuperior(0);
    setMargemInferior(0);
    setMargemDireita(0);
    setMargemEsquerda(0);
    setResultadoMargemSuperior(0);
    setResultadoMargemInferior(0);
    setResultadoMargemDireita(0);
    setResultadoMargemEsquerda(0);
  }


  return (
    <>
      <div className='background'>

        {resultadoMargemDireita ? (

          <div className='card-left'>

            <img src={folhaLogo} className="logo" alt="Margem mais logo" />


            <h1>Margem+</h1>

          </div>

        ) : (
          <div className='card-left'>
            <img src={margem_maisLogo} className="logo" alt="Margem mais logo" />

            <h1>Margem+</h1>

          </div>
        )}

        <div className="card">
          <p>
            Conversor de margens de <b>A4</b> para <b>19x25</b> compensando área útil.
          </p>

          <b>Digite as margens originais do tipo de livro do cliente</b>

          <div className='card-margens'>

            <div>
              <p>Esquerda</p>
              <input
                type='number'
                value={margemEsquerda}
                onChange={(e) => setMargemEsquerda(e.target.value)}
              />
            </div>

            <div>
              <p>Direita</p>
              <input
                type='number'
                value={margemDireita}
                onChange={(e) => setMargemDireita(e.target.value)}
              />
            </div>

            <div>
              <p>Superior</p>
              <input
                type='number'
                value={margemSuperior}
                onChange={(e) => setMargemSuperior(e.target.value)}
              />
            </div>

            <div>
              <p>Inferior</p>
              <input
                type='number'
                value={margemInferior}
                onChange={(e) => setMargemInferior(e.target.value)}
              />
            </div>

          </div>

          <div class="linha-horizontal"></div>

          <b>Abaixo configura as margens aproximandamente ajustadas</b>

          <div className='card-margens'>

            <div>
              <p>Esquerda</p>
              <input
                disabled={true}
                value={resultadoMargemEsquerda}
              />
            </div>

            <div>
              <p>Direita</p>
              <input
                disabled={true}
                value={resultadoMargemDireita}
              />
            </div>

            <div>
              <p>Superior</p>
              <input
                disabled={true}
                value={resultadoMargemSuperior}
              />
            </div>

            <div>
              <p>Inferior</p>
              <input
                disabled={true}
                value={resultadoMargemInferior}
              />
            </div>

          </div>

          <div className='buttons'>

            <button onClick={limparInputs}>
              Limpar
            </button>

            <button onClick={calcularMargem}>
              Calcular margens
            </button>
          </div>

        </div>

      </div>

      <div className="read-the-docs">
        <p>Contribuindo com agilidade em seu dia!</p>
        <p>MK Innovations. Copyright © 2024. Todos os direitos reservados.</p>
      </div>
    </>
  )
}

export default App
