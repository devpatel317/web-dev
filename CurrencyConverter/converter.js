const baseUrl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector('form button');
const fromcurr = document.querySelector('.from select');
const tocurr = document.querySelector('.to select');
const msg = document.querySelector('.msg');

for(let select of dropdowns)
{
  for(currCode in countryList)
  {
    let newOPtion = document.createElement("option");
    newOPtion.innerText = currCode;
    newOPtion.value = currCode;
    if(select.name === 'from' && currCode === 'USD')
    {
      newOPtion.selected = 'selected';
    }else if(select.name === 'to' && currCode === 'INR'){
      newOPtion.selected = 'selected';
    }
    select.append(newOPtion);
  }
  select.addEventListener('change' , (evt) => {
    updateFlag(evt.target);
    // console.log(evt.target);
  })
}

const updateFlag = (element) =>
{
    let currCode = element.value; 
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

const updateExchange = async () =>
{
  let amount = document.querySelector('.amount input');
  let amtVal = amount.value;
  if(amtVal === "" || amtVal < 1){
    amtVal = 1;
    amount.value = 1;
  }

  const url = `${baseUrl}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data[tocurr.value.toLowerCase()];
  let finalamount = amtVal * rate;
  msg.innerText = `${amtVal}${fromcurr.value} = ${finalamount}${tocurr.value}`;
}

btn.addEventListener('click' , (evt) => {
    evt.preventDefault();
    updateExchange();
});

window.addEventListener('load' , () => {
  updateExchange();
})
