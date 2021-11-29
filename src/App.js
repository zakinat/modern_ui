import {Features,Footer,Possibility,WhatGpt,Header,Blog} from './sections'
import {Brand,Cta,Navbar} from './components'
function App() {
  return (
    <div className="landingPage">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
