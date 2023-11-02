import './App.css'
import cafe from './assets/cafe.png'
import avatar from './assets/avatar.png'
import overlay from './assets/white-overlay.svg'

function App() {

  return (

    <div className='container'>
      <div className='card'>

        <section className='background'>
          <img
            className='cafe'
            src={cafe}
            alt="woman and man in a cafe, making a toast with two cups of coffee, smiling"
          />
          <img className='design' src={overlay} alt="white overlay design" />
        </section>

        <section className='info'>
          <main className='description'>
            <h1 className='title'>Perfect solution for small business</h1>
            <p className='text'>Small businesses need to generate leads to grow. You can use tools like Ringy.</p>
          </main>

          <div className='bottom-line'></div>

          <footer className='agent'>
            <img className='avatar' src={avatar} alt="agent avatar" />
            <div className='details'>
              <h2 className='name'>Amy Burgess</h2>
              <p className='position'>Customer Manger, Solution Oy</p>
            </div>
          </footer>
        </section>

      </div>
    </div>

  )
}

export default App
