import './style.css'

function App() {
  return (
    <div>
      <h1>Калькулятор</h1>
      <input type="text" placeholder="Число" id="num" />
      <input type="text" placeholder="Цифра" id="num2"/>
      <button onClick={() => {
          let num = (document.getElementById("num"))
          let num2 = (document.getElementById("num2"))
          let result = document.getElementById("result")
        result.innerHTML = (Number(num.value) + Number(num2.value));
      }}>+</button>
      <button onClick={() => {
          let num = (document.getElementById("num"))
          let num2 = (document.getElementById("num2"))
          let result = document.getElementById("result")
          result.innerHTML = (Number(num.value) - Number(num2.value));
      }}>-</button>
      <button onClick={() => {
        let num = (document.getElementById("num"))
        let num2 = (document.getElementById("num2"))
        let result = document.getElementById("result")
        result.innerHTML = (Number(num.value) / Number(num2.value));
      }}>/</button>
      <button onClick={() => {
        let num = (document.getElementById("num"))
        let num2 = (document.getElementById("num2"))
        let result = document.getElementById("result")
        result.innerHTML = (Number(num.value) * Number(num2.value));
      }}>*</button>
      <input type="text" placeholder="Степень" id="power"/>
      <button id="ultrapower" onClick={() => {
        let num = (document.getElementById("num"))
        let num3 = (document.getElementById("power"))
        let result = document.getElementById("result")
        result.innerHTML = (Number(num.value) ** Number(num3.value));
      }}>Возвести в Степень</button>
      <button id="ultraroot" onClick={() => {
        let num = (document.getElementById("num"))
        let result = document.getElementById("result")
        result.innerHTML = (Number(num.value) ** 0.5);
      }}>Корень √</button>
      <h1 id="result">
      </h1>
    </div>
  );
}

export default App;
