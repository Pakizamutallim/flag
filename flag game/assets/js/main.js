// let promise = new Promise
const container = document.querySelector(".container")
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
// .then(data => console.log(data))

.then(datas => 
    {
        // console.log(datas[1].flags.png)
        
        for (let i = 0; i < datas.length; i++) {
            container.innerHTML += `<div>
            <div class="about">
                <h2 class="my-4">Question<span>1</span></h2>
                <h3 class="my-4">Which country's flag is it?</h3>
                <div class="my-4">
                    <img src="${datas[1].flags.png}" width="400 px" alt="">
                </div>
            </div>
            <div class="options">
                <ul>
                    <li class="my-4 li-style">rusiya</li>
                    <li class="my-4 li-style">turkiye</li>
                    <li class="my-4 li-style">iran</li>
                </ul>
            </div>
        </div>`
            
        }
    }
)








