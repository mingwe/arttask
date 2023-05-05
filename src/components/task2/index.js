import React from 'react'
import data from './task2.json'
import { ItemsList } from './ItemsList';

// export const Task2 = () => {
//   return (
//     <div>
//       {data['currencies-pairs']['USDT-BTC']}
//       task 2 comp
//     </div>
//   )
// }

function getPriceInCurrency(price, currencyIn, currencyOut, currencies) {
  const rate = currencies[`${currencyIn}-${currencyOut}`]
  if (!price || !rate) return null;
  return price * rate
  // return price / rate
}

console.log('ttt', getPriceInCurrency(10, 'BTC', 'ETH', data['currencies-pairs']))
console.log('ttt', getPriceInCurrency(10, 'ETH', 'BTC', data['currencies-pairs']))
function getPrice(id, currencyPair) {
  const item = data.data.find((item) => item.id === id);
  const rate = data["currencies-pairs"][currencyPair];
  if (!item || !rate) return null;
  const price = item.price / rate;
  return price;
}

function getTotalPrice(ids, currencyPair) {
  const items = data.data.filter((item) => ids.includes(item.id));
  const rate = data["currencies-pairs"][currencyPair];
  if (!items.length || !rate) return null;
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0) / rate;
  return totalPrice;
}

export const Task2 = () => {
  const btcPrice = getPrice(1, "USDT-BTC");
  const usdtPrice = getPrice(3, "USDT-ETH");
  const totalUsdtPrice = getTotalPrice([1, 2, 3], "USDT");
  const totalBtcPrice = getTotalPrice(
    data.data.map((item) => item.id),
    "BTC-USDT"
  );

  return (
    <div>

      <ItemsList items={data.data}/>

      <p>Price of item 1 in BTC: {btcPrice}</p>
      <p>Price of item 3 in USDT: {usdtPrice}</p>
      <p>Total price of items 1, 2, 3 in USDT: {totalUsdtPrice}</p>
      <p>Total price of all items in BTC: {totalBtcPrice}</p>
    </div>
  );
}