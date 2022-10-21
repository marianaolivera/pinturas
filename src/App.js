import './App.scss';
import Tag from "./components/Tag"
import Price from "./components/Price"
import Navbar from './components/NavBar';



function App() {
  return (
    <div className="App">
    
      <header className="App-header">
     <Navbar/>
     </header>
      <main className='products'>
        <div className='card'>
           <img src="https://assets.bigcartel.com/product_images/322761267/size_real_tower.jpg?auto=format&fit=max&w=650" alt="Londres" />
           <span className='card__name'>Londres</span>
           <p className='card__description'>Cuadros pintados a mano en acuarelas, medida 20 x 28cm. Enmarcado en kiri listo para colgar.

Una vez realizada la compra te contactás por medio de nuestro mail (mariana83@gmail.com) y definimos bien el estilo del cuadro. También podés contactarte por este medio para ver otras medidas. </p>
           <span className='card__stock'>5 Unidades</span>
           <Price monto = "$2500"/>
           <Tag caracteristica="Envio a acordar"/>
        </div>
 <div className='card'>
          <img src="https://assets.bigcartel.com/product_images/322761624/size_real_lisboa.jpg?auto=format&fit=max&w=650" alt="" />
           <span className='card__name'>Lisboa</span>
           <p className='card__description'>Cuadros pintados a mano en acuarelas, medida 20 x 28cm. Enmarcado en kiri listo para colgar.


Una vez realizada la compra te contactás por medio de nuestro mail (mariana83@gmail.com) y definimos bien el estilo del cuadro. También podés contactarte por este medio para ver otras medidas. </p>
           <span className='card__stock'>5 Unidades</span>
           <Price monto = "$4000"/>
           <Tag caracteristica="Envio Gratis"/>
        </div>
        <div className='card'>
          <img src="https://assets.bigcartel.com/product_images/335288715/size_real_flatiron.jpg?auto=format&fit=max&w=650" alt="" />
           <span className='card__name'>New York</span>
           <p className='card__description'>Cuadros pintados a mano en acuarelas, medida 20 x 28cm. Enmarcado en kiri listo para colgar.



Una vez realizada la compra te contactás por medio de nuestro mail (mariana83@gmail.com) y definimos bien el estilo del cuadro. También podés contactarte por este medio para ver otras medidas. </p>
          
           <span className='card__stock'>5 Unidades</span>
           <Price monto = "$3000"/>
           <Tag caracteristica="Envio a acordar"/>
        </div>
        <div className='card'>
          <img src="https://assets.bigcartel.com/product_images/316892313/ibiza_real.jpg?auto=format&fit=max&w=650" alt="" />
           <span className='card__name'>Ibiza</span>
           <p className='card__description'>Cuadros pintados a mano en acuarelas, medida 20 x 28cm. Enmarcado en kiri listo para colgar.



Una vez realizada la compra te contactás por medio de nuestro mail (mariana83@gmail.com) y definimos bien el estilo del cuadro. También podés contactarte por este medio para ver otras medidas. </p>
           <span className='card__stock'>5 Unidades</span>
           <Price monto = "$2800"/>
           <Tag caracteristica="Envio a acordar"/>
        </div>
      
      </main>
      <footer className='footer'>
        <h3 className='footer__item'>Politica de Privacidad</h3>

      </footer>
    </div>
  );
}

export default App;