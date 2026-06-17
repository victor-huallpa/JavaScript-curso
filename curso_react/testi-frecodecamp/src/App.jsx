import logo from './logo.svg';
// import {Testimonio} from './componentes/Testimonio'; //importaicon nombrada
import Testimonio from './componentes/Testimonio'; //importaicon por defecto
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros exalumnos sobre freeCodeCamp:</h1>
      <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='1'
        cargo='Ingeniero de software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Solo gané la confianza en mis habilidades de programación gracias a las cientos de horas de lecciones gratuitas de freeCodeCamp. En un año conseguí un trabajo con un salario de seis cifras como ingeniero de software. freeCodeCamp me cambió la vida. ' />
        <Testimonio 
        nombre='Sarah Chima'
        pais='Nigeria'
        imagen='2'
        cargo='Ingeniero de software'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. Su programa bien estructurado me permitió pasar de un nivel de principiante absoluto a un nivel muy sólido. Fue justo lo que necesitaba para conseguir mi primer trabajo como desarrollador en una empresa increíble.' />
        <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='3'
        cargo='Ingeniero de software'
        empresa='Spotify'
        testimonio='Siempre me ha costado aprender JavaScript. He hecho muchos cursos, pero el de freeCodeCamp fue el que realmente me convenció. Estudiar JavaScript, junto con estructuras de datos y algoritmos, en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.' />
    </div>
  );
}

export default App;
