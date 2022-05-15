const adviceNumber = document.querySelector('[data-advice-number]')
const adviceMessage = document.querySelector('[data-advice-message]')
const btnGenerator = document.querySelector('[data-btn-generator]')

async function getMessage() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    const json = await response.json()
  
    const {slip: {advice, id}} = json
    
    adviceNumber.innerText = `Advice #${id}`
    adviceMessage.innerText = `"${advice}"` 
  } catch (error) {
    console.log(error)
  }
}

btnGenerator.addEventListener('click', getMessage)