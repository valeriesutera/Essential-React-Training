import './App.css';
import restaurant from './restaurant.jpeg';

//components are functions that return a little bit of UI and we can compose fucntions together to create a larger app
function Header(props) {
  return (
  <header>
    <h1>{props.name}'s Kitchen</h1>
  </header>
  );
}

//need to use Javascript camelcase
//omstead of importing photo you could get an image from github
function Main(props) {
  return (
    <section>
      <p> We serve the {props.adjective} food </p>
      <img src={restaurant} height={200} alt="burger"/>
      <ul style = {{textAlign: "left"}}> 
        {props.dishes.map((dish)=> 
        <li key={dish.id}>{dish.title}</li>)}
      </ul>

    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p> Copyright {props.year} </p>
    </footer>
  );
}

const dishes = ["Mac and Cheese","Bacon Cheese Burger", "Bacon Cheese Fries"];

//transofrmation function to have alist of objects to avoid key error
//building object before passing it to component as a property
const dishObjects = dishes.map((dish,i) => ({id:i , title:dish}));
//console.log(dishObjects)

//we create a component by creating a function that returns jsx (this ui element we can add to the DOM)
function App() {
  return (
    <div className="App">
      <Header name="Val"/>
      <Main adjective="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App; //this means it has to be imported
