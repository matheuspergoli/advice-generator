const adviceNumber = document.querySelector('[data-advice-number]')
const adviceMessage = document.querySelector('[data-advice-message]')
const btnGenerator = document.querySelector('[data-btn-generator]')

async function getMessage() {
  const response = await fetch('https://api.adviceslip.com/advice')
  const json = await response.json()

  adviceNumber.innerText = `Advice #${json.slip.id}`
  adviceMessage.innerText = `"${json.slip.advice}"`
}

btnGenerator.addEventListener('click', getMessage)