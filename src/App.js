import './App.css';

//components are functions that return a little bit of UI and we can compose fucntions together to create a larger app
function Header() {
  return (
  <header>
    <h1>Val's Kitchen</h1>
  </header>
  );
}

function Main() {
  return (
    <section>
      <p> We serve the best food </p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p> It's true! </p>
    </footer>
  );
}

//we create a component by creating a function that returns jsx (this ui element we can add to the DOM)
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App; //this means it has to be imported
