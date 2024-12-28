const addChildBtn = document.getElementById('addChildBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const childForm = document.getElementById('childForm');
const childList = document.getElementById('childList');
const trackButton = document.getElementById('trackBtn');
const callButton = document.getElementById('callBtn');
const pingButton = document.getElementById('pingBtn');
const fortest = document.getElementById('fortest');
const coordinates = [{shir: 43.255924, dolg: 76.942513, place: "KBTU"},{shir: 43.238112, dolg: 76.935819, place: "Dorm"},{shir: 43.230575, dolg: 76.934272, place: "Kachalka"}];
let myMap;
let childName = null;
let childPhone = null;

    ymaps.ready(init);
    function init() {
        myMap = new ymaps.Map("map", {
            center: [43.237163, 76.945645],
            zoom: 12,
        });
    }     
  
    fortest.addEventListener('click', () => {
        const childButton1 = document.createElement('button');
        childButton1.className = 'btn btn-dark w-100 mb-2';
        childButton1.innerText = 'Damir';
        childButton1.dataset.childName = 'Damir';
        childButton1.dataset.childPhone = '77759893813';
        childList.appendChild(childButton1);
      
        const childButton2 = document.createElement('button');
        childButton2.className = 'btn btn-dark w-100 mb-2';
        childButton2.innerText = 'Amir';
        childButton2.dataset.childName = 'Amir';
        childButton2.dataset.childPhone = 'justRandom';
        childList.appendChild(childButton2);
      
        const childButton3 = document.createElement('button');
        childButton3.className = 'btn btn-dark w-100 mb-2';
        childButton3.innerText = 'Zhasik';
        childButton3.dataset.childName = 'Zhasik';
        childButton3.dataset.childPhone = '77477410569';
        childList.appendChild(childButton3);
    });

    addChildBtn.addEventListener('click', () => {
      popup.classList.add('active');
    });

    closePopup.addEventListener('click', () => {
      popup.classList.remove('active');
    });

    childForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('childName').value;
      const phone = document.getElementById('childPhone').value;

      const childButton = document.createElement('button');
      childButton.className = 'btn btn-dark w-100 mb-2';
      childButton.innerText = `${name} (${phone})`;
      childButton.dataset.childName = name;
      childButton.dataset.childPhone = phone;

      childList.appendChild(childButton);

      popup.classList.remove('active');
      childForm.reset();

      console.log(childList)
    });


    childList.addEventListener('click', (event) => {
          childName = event.target.dataset.childName;
          childPhone = event.target.dataset.childPhone;     
          console.log(`Child clicked: Name = ${childName}, Phone = ${childPhone}`);
      });

    function trackChild() {
        if (coordinates.length === 0) {
            console.error("Аболтус корды пустые");
            return;
          }
        
        const randomIndex = Math.floor(Math.random() * coordinates.length);
        const randomCoords = coordinates[randomIndex];
        console.log("Корды:", randomCoords);
        
        if (!childName) {
            alert('Please select a child to track!');
            return;
        }

        myMap.geoObjects.removeAll();

        const placemark = new ymaps.Placemark(
          [randomCoords.shir, randomCoords.dolg],
          {
            hintContent: `Child: ${childName}, Place: ${randomCoords.place}`
          },
          {
            preset: 'islands#redIcon',
          }
        );
        myMap.geoObjects.add(placemark);
      
        myMap.setCenter([randomCoords.shir, randomCoords.dolg], 17);
    }
    trackButton.addEventListener('click', trackChild);
      

    function callChild() {
        if (!childName) {
            alert('Please select a child to track!');
            return;
        }
        
        window.location.href = `https://wa.me/${childPhone}`;
    }
    callButton.addEventListener('click', callChild);

    function pingChild(){

        window.open(`https://salebot.site/f2d41caef6ac04470be6cc06609dd515_1?chPhone=${childPhone}&chName=${childName}`, '_blank');

    //     if (!childName) {
    //         alert('Please select a child to track!');
    //         return;  
    //     }
    //     var request = new XMLHttpRequest();
    //     request.open("POST", "https://chatter.salebot.pro/api/2d57741bb87f70e63b26bef79e7fb761/callback");
      
    //     request.setRequestHeader('Content-type', 'application/json');
      
    //     var params = {
    //         message: "My Webhook Name",
    //         client_id: "630835873",
    //         content: "The message to send"
    //     }
      
    //     request.send(JSON.stringify(params));
    }

    pingButton.addEventListener('click', pingChild)