import './App.css'
import Article from './components/Article/Article'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
    <Header />  
    <Nav /> 
    <Article date='11/12/20' articleHeader='On the Street in Brooklyn' loremLength={20} photoSrc='src\images\blog-image-1.jpg' photoAlt='Photo of Brooklyn street' />  
    <Article date='11/11/20' articleHeader='Vintage in Vogue' loremLength={30} photoSrc='src\images\blog-image-2.jpg' photoAlt='Photo of vintage dressed people' />  
    <Footer />
    </>
  )
}

export default App

