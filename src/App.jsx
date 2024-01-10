// DO NOT DELETE

import './App.css'
import { dog } from 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_6539.jpg'
/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>
        <p>Dogアプリ</p>
      </header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dog} alt="inu" />
    </div>
  )
}
