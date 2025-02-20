import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import './index.css'

export default function App() {

  const [amount, setAmount] = useState(0)
  const [From, setFrom] = useState('usd')
  const [To, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)
  // const CurrOptions = ['inr', 'usd', 'eur', 'gbp', 'aud', 'cad']
  
  const CurrencyInfo = useCurrencyInfo(From)
  const CurrOptions = Object.keys(CurrencyInfo)

  function Swap() {
    setFrom(To)
    setTo(From)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  }

  function Convert() {
    setConvertedAmount(amount * CurrencyInfo[To])
  }

  const BackgroundImage = 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <>
      <div className="bg"></div>
        <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">

          <h1 className="text-4xl text-blue-600 font-serif font-bold mb-5 p-4 bg-opacity-50 backdrop-blur-md rounded-xl shadow-lg border-1"> Currency Converter </h1>
          <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  Convert();
                }}>

                <div className="w-full mb-1">
                  <InputBox
                    label="From"
                    amount={amount}
                    currency={From}
                    currencyList={CurrOptions}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>

                <div className="relative w-full h-0.5">
                  <button
                    type="button"
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick={Swap}>
                    Swap
                  </button>
                </div>

                <div className="w-full mt-1 mb-4">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currency={To}
                    currencyList={CurrOptions}
                    onCurrencyChange={(currency) => setTo(currency)}
                    onAmountChange={(amount) => setAmount(amount)}

                  />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                  Convert from {From.toUpperCase()} to {To.toUpperCase()}
                </button>

              </form>

            </div>
          </div>
        </div>
    </>
  )
}