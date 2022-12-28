import { useState } from 'react';
import './App.css';

const accordianData = [
  {
    id: 1,
    question: 'Do I have to allow the use of cookes?',
    data: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
  },
  {
    id: 2,
    question: 'How do I change my My Page password?',
    data: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
  },
  {
    id: 3,
    question: 'What is BankID?',
    data: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
  },
  {
    id: 4,
    question: 'Whose birth number can I use?',
    data: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
  },
  {
    id: 5,
    question: 'When do I recieve a password ordered by letter?',
    data: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
  },
];
function App() {
  return (
    <div className="app">
      <div className="accordian">
        <h3>questions and answers about login</h3>
        <section class="info">
          {accordianData.map((accordianEntry) => {
            return (
              <Accordian
                key={accordianEntry.id}
                accordianEntry={accordianEntry}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

function Accordian(props) {
  const { question, data } = props.accordianEntry;
  const [showElement, setShowElement] = useState(false); // Initialize state with a default value of false

  const toggleElement = () => {
    setShowElement(!showElement); // Toggle the value of showElement when the button is clicked
  };

  return (
    <article className="question">
      <header>
        <h4>{question}</h4>
        <button className="btn" onClick={toggleElement}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            t="1551322312294"
            viewBox="0 0 1024 1024"
            version="1.1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            {!showElement && (
              <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
            )}
            <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
          </svg>
        </button>
      </header>
      {showElement && <p>{data}</p>}
    </article>
  );
}
export default App;
