import logo from "./logo.svg";
import "./App.css";

function App() {
  let products = [
    // Computer Hardware & Software
    {
      image:
        "https://s.alicdn.com/@sc04/kf/Hb80dc69de75540fca48952536abe3a4bT.jpg_300x300.jpg",
      name: "Lightweight folding 360 degree rotation flexible angle adjustment lazy tablet PC",
      price: "US$3.46-US$3.86/ piece",
      minQuantity: "50 pieces(MOQ)",
      category: "Computer Hardware & Software",
    },
    // Cables & Commonly Used Accessories
    {
      image:
        "https://s.alicdn.com/@sc04/kf/S08ffa80c32b645e8a76cfba0dd4b2604K.jpg_300x300.jpg",
      name: "3 In 1 Usb C Cable Phone Commonly Used Accessories Parts Usb Cable For Iphone 14 13 12 11 Pro Max 6 7 8 Plus Cable",
      price: "US$1.37-US$1.38/ piece",
      minQuantity: "1000.0 pieces(MOQ)",
      category: "Cables & Commonly Used Accessories",
    },
    // Projectors & Presentation Equipments
    {
      image:
        "https://s.alicdn.com/@sc04/kf/He135515d46764dc2847c873ae0f32b93R.jpg_300x300.jpg",
      name: "BYINTEK K9 LED Video Home Theater 1080P Projector For 3D Cinema ( For Multiscreen) LCD presentation equipment Support wifi",
      price: "US$87.08-US$93.56",
      minQuantity: "2 sets(MOQ)",
      category: "Projectors & Presentation Equipments",
    },
    // Chargers, Batteries & Power Supplies
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H7047c04d838d441081acc77d806f11813.jpg_300x300.jpg",
      name: "LDNIO 2 USB 5V-2.4A Quick Charge Universial USB Charger Model A2201",
      price: "US$0.85-US$2.85/ set",
      minQuantity: "5 sets(MOQ)",
      category: "Chargers, Batteries & Power Supplies",
    },
    // Computer Hardware & Software
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H15165691c7844b289f2e61060d9f4ebaT.jpg_300x300.jpg",
      name: "Adjustable Floor Laptop Holder Phone Stand Aluminum Alloy Tablet PC Stands Black/white",
      price: "US$11.30",
      minQuantity: "1 piece(MOQ)",
      category: "Computer Hardware & Software",
    },
    // Cables & Commonly Used Accessories
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H14e7459067224335b755192d18aeefeeT.jpg_300x300.jpg",
      name: "1/6Wik 3in1 luminous charger led magnet usb Commonly Used Accessories & Parts 3 in 1 magnetic charging cable",
      price: "US$1.38",
      minQuantity: "1 piece(Min. order)",
      category: "Cables & Commonly Used Accessories",
    },
    // Projectors & Presentation Equipments
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H44fe9c295aa9412fad6313b5f4024eadY.jpg_300x300.jpg",
      name: "Cheap Smart Home Theater Laser Pocket Lcd Lazer Mini 4K Support 1080p Projectors & Presentation Equipments",
      price: "US$15.00-US$21.80",
      minQuantity: "1 piece(MOQ)",
      category: "Projectors & Presentation Equipments",
    },
    // Chargers, Batteries & Power Supplies
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H1bb57e1aec2f41d78ed8e087576d54bbY.jpg_300x300.jpg",
      name: "2020 compact design OEM mobile power supply,portable battery charger,10000mah",
      price: "US$3.95",
      minQuantity: "100 pieces(MOQ)",
      category: "Chargers, Batteries & Power Supplies",
    },
    // Computer Hardware & Software
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H23d32379d2414b429c86380ade40c185T.jpg_300x300.jpg",
      name: "Hot Sale Desktop Support 7 to 8 inch Tablet",
      price: "US$3.88",
      minQuantity: "2 pieces(MOQ)",
      category: "Computer Hardware & Software",
    },
    // Chargers, Batteries & Power Supplies
    {
      image:
        "https://s.alicdn.com/@sc04/kf/H94c16d54af9b430283c59258a0b59330D.jpg_300x300.jpg",
      name: "USAMS Chargers, Batteries & Power Supplies 65W 30000mAh Fast Charging Big",
      price: "US$27.75",
      minQuantity: "1 piece(MOQ)",
      category: "Chargers, Batteries & Power Supplies",
    },
  ];
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
