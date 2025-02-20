import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
     
     const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json';

     const [rates, setRates] = useState({})

     useEffect(() => {
          fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
               .then((resp) => resp.json())
               .then((resp) => setRates(resp[currency]))
     }, [currency])

     console.table(rates); 
     console.log("Total number of currency: ", Object.keys(rates).length);

     return rates    
}

export default useCurrencyInfo
