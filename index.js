let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function incrementButton()  {
    count += 1
    countEl.textContent = count
}



function save() {
        let entryDisplay = count + " - "
        saveEl.textContent += entryDisplay
        countEl.textContent = 0
        count = 0 
}

function prevEntries()  {
    console.log(save(count))
}


