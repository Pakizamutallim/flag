const container = document.querySelector(".container")
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(datas => {
    const randomFlag = datas[Math.floor(Math.random() *datas.length)]
    const randomFalse1 = datas[Math.floor(Math.random() *datas.length)]
    const randomFalse2 = datas[Math.floor(Math.random() *datas.length)]
    // const randomOptions = ul[Math.floor(Math.random() *ul.length)]
    container.innerHTML = `
        <div>
            <div class="about">
                <h2 class="my-4">Question<span>1</span></h2>
                <h3 class="my-4">Which country's flag is it?</h3>
                <div class="my-4">
                    <img src="${randomFlag.flags.png}" width="400 px" alt="">
                </div>
            </div>
            <div class="options">
                <ul>
                    <li class="my-4 li-style">${randomFalse1.name.common}</li>
                    <li class="my-4 li-style true">${randomFlag.name.common}</li>
                    <li class="my-4 li-style">${randomFalse2.name.common}</li>
                </ul>
            </div>
        </div>`

        const trueSelect = document.querySelector(".true")
        console.log(trueSelect)
        trueSelect.addEventListener("click",function() {
            console.log(trueSelect)
            trueSelect.style.backgroundColor = "green"
})
})



