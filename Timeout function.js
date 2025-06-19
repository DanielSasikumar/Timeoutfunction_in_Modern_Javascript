// Timeout function in modern javascript
const resultEl = document.querySelector("#result")

setTimeout(() => {
     resultEl.innerHTML = 3

     setTimeout(() => {
          resultEl.innerHTML = 2

          setTimeout(() => {
               resultEl.innerHTML = 1

               setTimeout(() => {
                    resultEl.innerHTML = 'Happy New Year!!!!!'
               }, 1000)
          }, 1000)
     }, 1000)
}, 1000)

console.log(resultEl);
