import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/input";
import Button from "./Components/button";

function App() {
  // let products = [
  //   // Computer Hardware & Software
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/Hb80dc69de75540fca48952536abe3a4bT.jpg_300x300.jpg",
  //     name: "Lightweight folding 360 degree rotation flexible angle adjustment lazy tablet PC",
  //     price: "US$3.46-US$3.86/ piece",
  //     minQuantity: "50 pieces(MOQ)",
  //     category: "Computer Hardware & Software",
  //   },
  //   // Cables & Commonly Used Accessories
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/S08ffa80c32b645e8a76cfba0dd4b2604K.jpg_300x300.jpg",
  //     name: "3 In 1 Usb C Cable Phone Commonly Used Accessories Parts Usb Cable For Iphone 14 13 12 11 Pro Max 6 7 8 Plus Cable",
  //     price: "US$1.37-US$1.38/ piece",
  //     minQuantity: "1000.0 pieces(MOQ)",
  //     category: "Cables & Commonly Used Accessories",
  //   },
  //   // Projectors & Presentation Equipments
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/He135515d46764dc2847c873ae0f32b93R.jpg_300x300.jpg",
  //     name: "BYINTEK K9 LED Video Home Theater 1080P Projector For 3D Cinema ( For Multiscreen) LCD presentation equipment Support wifi",
  //     price: "US$87.08-US$93.56",
  //     minQuantity: "2 sets(MOQ)",
  //     category: "Projectors & Presentation Equipments",
  //   },
  //   // Chargers, Batteries & Power Supplies
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/H7047c04d838d441081acc77d806f11813.jpg_300x300.jpg",
  //     name: "LDNIO 2 USB 5V-2.4A Quick Charge Universial USB Charger Model A2201",
  //     price: "US$0.85-US$2.85/ set",
  //     minQuantity: "5 sets(MOQ)",
  //     category: "Chargers, Batteries & Power Supplies",
  //   },
  //   // Computer Hardware & Software
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/H15165691c7844b289f2e61060d9f4ebaT.jpg_300x300.jpg",
  //     name: "Adjustable Floor Laptop Holder Phone Stand Aluminum Alloy Tablet PC Stands Black/white",
  //     price: "US$11.30",
  //     minQuantity: "1 piece(MOQ)",
  //     category: "Computer Hardware & Software",
  //   },
  //   // Cables & Commonly Used Accessories
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/H14e7459067224335b755192d18aeefeeT.jpg_300x300.jpg",
  //     name: "1/6Wik 3in1 luminous charger led magnet usb Commonly Used Accessories & Parts 3 in 1 magnetic charging cable",
  //     price: "US$1.38",
  //     minQuantity: "1 piece(Min. order)",
  //     category: "Cables & Commonly Used Accessories",
  //   },
  //   // Projectors & Presentation Equipments
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/H44fe9c295aa9412fad6313b5f4024eadY.jpg_300x300.jpg",
  //     name: "Cheap Smart Home Theater Laser Pocket Lcd Lazer Mini 4K Support 1080p Projectors & Presentation Equipments",
  //     price: "US$15.00-US$21.80",
  //     minQuantity: "1 piece(MOQ)",
  //     category: "Projectors & Presentation Equipments",
  //   },
  //   // Chargers, Batteries & Power Supplies
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/H1bb57e1aec2f41d78ed8e087576d54bbY.jpg_300x300.jpg",
  //     name: "2020 compact design OEM mobile power supply,portable battery charger,10000mah",
  //     price: "US$3.95",
  //     minQuantity: "100 pieces(MOQ)",
  //     category: "Chargers, Batteries & Power Supplies",
  //   },
  //   // Computer Hardware & Software
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/H23d32379d2414b429c86380ade40c185T.jpg_300x300.jpg",
  //     name: "Hot Sale Desktop Support 7 to 8 inch Tablet",
  //     price: "US$3.88",
  //     minQuantity: "2 pieces(MOQ)",
  //     category: "Computer Hardware & Software",
  //   },
  //   // Chargers, Batteries & Power Supplies
  //   {
  //     image:
  //       "https://s.alicdn.com/@sc04/kf/H94c16d54af9b430283c59258a0b59330D.jpg_300x300.jpg",
  //     name: "USAMS Chargers, Batteries & Power Supplies 65W 30000mAh Fast Charging Big",
  //     price: "US$27.75",
  //     minQuantity: "1 piece(MOQ)",
  //     category: "Chargers, Batteries & Power Supplies",
  //   },
  // ];
  const [task, setTask] = useState("");

  let TodoInputHandle = (event) => {
    setTask(event.target.value);
    // console.log(task);
  };

  let [todos, setTodos] = useState([]);

  // ===============================Add Task=============================

  const todoListAdd = () => {
    todos.push(task);
    console.log(todos);
    setTodos([...todos]);
    setTask("");
  };

  // ===============================Delete Task=============================

  const deleteItem = (i) => {
    // console.log("Deleted");
    todos.splice(i, 1);
    setTodos([...todos]);
  };
  // ===============================Delete All Task=============================

  const deleteAllTask = () => {
    while (todos.length > 0) {
      todos.pop(task);
      setTodos([...todos]);
    }
  };

  // ===============================Edit Task=============================

  const edit = (i) => {
    let a = prompt("Enter Task !!!!!!!!!!!");
    todos[i] = a;
    setTodos([...todos]);
  };

  // ================================================================================
  // ================================================================================
  // =========================  Quiz App  ===========================================
  // ================================================================================
  // ================================================================================

  const [isOn, setIsON] = useState(false);
  const [questions, setQuestions] = useState([
    {
      numb: 1,
      question: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      options: [
        "Hyper Text Preprocessor",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
        "Hyper Tool Multi Language",
      ],
    },
    {
      numb: 2,
      question: "What does CSS stand for?",
      answer: "Cascading Style Sheet",
      options: [
        "Common Style Sheet",
        "Colorful Style Sheet",
        "Computer Style Sheet",
        "Cascading Style Sheet",
      ],
    },
    {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
      ],
    },
    {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
      ],
    },
    {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
      ],
    },
  ]);

  const [indexNumber, setIndexNumber] = useState(0);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);

  const checkQuestion = (userSelected, correctAnswer) => {
    console.log("userSelected==================>" + userSelected);
    console.log("CorrectAnswer==================>" + correctAnswer);
    if (userSelected == correctAnswer) {
      setMarks(marks + 1);
    }

    if (indexNumber + 1 == questions.length) {
      setResult(true);
    }
    setIndexNumber(indexNumber + 1);
  };

  return (
    <>
      {/* <Navbar text="BootStrap NavBar" />
      <div className="App d-flex flex-column align-items-center justify-content-center p-5">
         <body>
        <h1>E-Commerce Store</h1>
        <p id="subScrpt">Made By Ashir-Azeem</p>
        <div className="main">
          {products.map((x) => {
            return (
              <div className="cards">
                <div>
                  <img src={x.image} alt="" />
                  <p id="Name">{x.name}</p>
                  <p id="price">{x.price}</p>
                  <h5>{x.minQuantity}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </body>
        <h1>Todo App</h1>
        <br />
        <div className="text-center">
          <Input
            placeholder="Enter Task Here"
            myFunction={TodoInputHandle}
            className="p-2 w-100 "
            value={task}
          />
          <Button
            myFunction={todoListAdd}
            className="p-2 w-50  mx-auto  m-3"
            label="Add"
          />
          <Button
            myFunction={deleteAllTask}
            className="p-2 w-50  mx-auto m-3"
            label="Delete All"
          />
        </div>

        <div className="Tasks ">
          <ol>
            {todos.map((x, i) => {
              return (
                <li
                  className="d-flex align-iyems-center justify-content-center"
                  id={i}
                  key={i}
                >
                  {x}
                  <Button
                    className="btn btn-info shadow "
                    myFunction={() => edit(i)}
                    label="Edit"
                  />
                  <Button
                    className="btn btn-info shadow "
                    myFunction={() => deleteItem(i)}
                    label="Delete"
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div> */}
      {/* ===========================    QUIZ APP =========================== */}

      {/* Condition Based Rendering */}
      {/* <div>
        <button
          className="p-3 rounded-pill w-25 m-5"
          onClick={() => setIsON(!isOn)}
        >
          {isOn ? "OFF" : "ON"}
        </button>
        {isOn ? <h1>ON</h1> : ""}
      </div> */}

      <div className="mainContainer">
        <div>
          <h1>Quiz App</h1>
          <p id="subScrpt" className="p-3">
            Made By Ashir-Azeem
          </p>
        </div>
        {result ? (
          <div>
            <h1>You Scored {marks} marks</h1>
          </div>
        ) : (
          <div className="innerContainer">
            <h1 id="Question">{questions[indexNumber].question}</h1>
            <hr />
            <div className="options">
              {questions[indexNumber].options.map((x, i) => {
                return (
                  <div key={i}>
                    <button
                      onClick={() =>
                        checkQuestion(x, questions[indexNumber].answer)
                      }
                    >
                      {x}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
