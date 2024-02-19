function seatSet(ElementId){
    const CallToSet = document.getElementById(ElementId);
    CallToSet.classList.add('bg-orange-400');
}

function cuntSeit(){
    const cuntSet = document.getElementById('cunt');
    const cuntAddValue = cuntSet.innerText;
    const cuntIntValue = parseFloat(cuntAddValue);
    // console.log(cuntIntValue);

    const updatedLife = cuntIntValue + 1;
    cuntSet.innerText = updatedLife;
}
function bookOfSeit(){
    const cuntSe = document.getElementById('outseit');
    const cuntAddValu = cuntSe.innerText;
    const cuntIntValu = parseFloat(cuntAddValu);
    // console.log(cuntIntValu);

    const updatedLif = cuntIntValu - 1;
    cuntSe.innerText = updatedLif;
}

const cards = document.querySelectorAll('.card');
let TotlePrice = 0;
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(element);
    card.addEventListener('click', function () {
        // console.log('ok')

    const title = card.querySelector('h3').innerText;
        const price = parseFloat(card.querySelector('h2').innerText);
        // console.log(typeof(price));

        
        const titleContainer = document.getElementById('seitpush');
        const p = document.createElement('p');
        p.innerText =title;
        titleContainer.appendChild(p);

        const tit = card.querySelector('h1').innerText;
        const titleContain = document.getElementById('EconomoyBus');
        const h1 = document.createElement('h1');
        h1.innerText = tit;
        titleContain.appendChild(h1);

        TotlePrice += price;
        document.getElementById('Totalprice').innerText =TotlePrice.toFixed(2);
        console.log(TotlePrice);
    
        const titl = card.querySelector('h2').innerText;

      const titleContaine = document.getElementById('pricePush');
        const h2 = document.createElement('h2');
        h2.innerText = titl;
        titleContaine.appendChild(h2);
        
    });
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
    const inputfield = document.getElementById('input-field').value;
    if (inputfield === 'Couple 20') {
        const pricePacent = TotlePrice * 0.20;
        const allTotlePrice = document.getElementById('GrandTotal');
        const priceAll = TotlePrice - pricePacent;
        allTotlePrice.innerText = priceAll.toFixed(2);
        // console.log(priceAll);
        document.getElementById('input-field').value = "";
        const showOption = document.getElementById('input&button');
        showOption.classList.add('hidden');
    }
    else if (inputfield === 'NEW15') {
        const pricePacentOf = TotlePrice * 0.15;
        const allTotlePric = document.getElementById('GrandTotal');
        const priceAl = TotlePrice - pricePacentOf;
        allTotlePric.innerText = priceAl.toFixed(2);
        document.getElementById('input-field').value = "";
        const showOption = document.getElementById('input&button');
        showOption.classList.add('hidden');
    }
    else {
        document.getElementById('input-field').value = "";
    }
});

function showPopapPoint(){
    const showOption = document.getElementById('showPopap');
    showOption.classList.remove('hidden');
    document.getElementById('GrandTotal').value = "";
}
function showPopapPointhidden(){
    const showOption = document.getElementById('showPopap');
    showOption.classList.add('hidden');
}

let buttons = document.getElementsByClassName("ClickContron");
let clickedCount = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        clickedCount++;

        if (clickedCount > 4) {
            alert("Your all radey 4 ticket buying");
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].removeEventListener("click", handleClick);
            }
        }
    });
}