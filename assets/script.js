const $locationBtn = document.querySelector(`#locationBtn`);
const $input = document.querySelector(`input`);
const $currentWx = document.querySelector('#currentWx')
const $msg = document.querySelector(`.msg`)

$locationBtn.addEventListener('click', function (){
    let userInput = $input.value;
    const listItems = $currentWx.querySelectorAll("#userInput");
    const listItemsArray = Array.from(listItems);
//added some conditions for my input to be precise
    if (listItemsArray.length > 0) {
        listItemsArray.filter(el => {
            let content = "";
            if (userInput.includes(",")) {
                if (userInput.split(",")[1].length > 2) {
                    userInput = userInput.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content === userInput.toLowerCase();
        });
    }
    //api call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${"37fcd1e7adf83820e8d9db2feba781a9"}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, weather, wind } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;
//add the elements that i requested on my pli call to my html
            const $div = document.createElement("div");
            // $div.classList.add("city");
            const contBox = `<h2 class="city-name" data-name="${name}">
        <span>${name} ${Math.round(main.temp)}<sup>°C</sup>  </span>
        </h2>
        <figure>
            <img class="city-icon" src="${icon}" alt="${
                weather[0]["description"]
            }"
        <figcaption>${weather[0]["description"]}</figcaption>
         </figure>
         
    `;
            $div.innerHTML = contBox;
            $currentWx.appendChild($div);
        })
        .catch(() => {
            $msg.textContent = "try again";
        });

    $msg.textContent = "";
    $input.focus();
});
