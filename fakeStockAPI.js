export default function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: genRandomFloat(0, 3) /* return a random number between 0 and 3 to two decimal places */,
        time: getCurrentTime() /* return a timestamp in this format: hh/mm/ss */
    }
}

function genRandomFloat(min, max){
    let random = Math.random() * (max - min) + min;
    return parseFloat(random.toFixed(2));
}

function getCurrentTime(){
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`
}
  