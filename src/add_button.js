const CreateAddButton = () =>{

    const addWindow = document.getElementById('add-window')
    const addButton = document.getElementById('add-btn')
    addButton.addEventListener('click', ()=>{

        addWindow.classList.add('active')
        console.log("Open add window")

    })

}

export {CreateAddButton}