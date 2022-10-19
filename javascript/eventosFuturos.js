

let upcoming = events.filter(everyEvent => everyEvent.date > actualDate)

let past = events.filter(everyEvent => everyEvent.date <= actualDate)
console.log(upcoming)
console.log(past)



function printEvents(array,id) {
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(event =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <div class=" card p-1" style="width: 15rem; ">
                    <img src="${event.image}" class="card-img-top" alt="imagen1">
                    <div class="card-body">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text"></p>    
                        <div class="d-flex justify-content-between">
                            <h6>Price: ${event.price}</h6>
                            <a href="#" class="btn btn-primary">Details</a>
    
                        </div>
                    </div>
                </div>
    
            `
    })
}
printEvents(upcoming,'events')
let categorias = new Set(events.map(element => element.category))
categorias = [...categorias]
let printCategories = (array,id) => {
    document.querySelector(`#${id}`).innerHTML = ""
    array.forEach(cat =>{
        document.querySelector(`#${id}`).innerHTML +=
            `
            <label class="d-flex align-items-center p-1" for="${cat.toLowerCase()}">${cat.toUpperCase()}
                <input class="d-flex align-items-center m-1 checkbox" type="checkbox" id="${cat.toLowerCase()}" name="letter" value="${cat.toLowerCase()}">
            </label>
            `
    })
    let checks = document.querySelectorAll('.checkbox')
    checks.forEach(cadaCheck => {
        cadaCheck.addEventListener('click',() => search(past))
    })
    
}
printCategories(categorias,'checks')
let arrayEventos = categorias.map(cadaCategoria => {
    
    let arrayFiltrado = events.filter(cadaEvento => cadaEvento.category === cadaCategoria)
    return arrayFiltrado
})

function search(array) {
    
    let checks = document.querySelectorAll('.checkbox:checked')
    
    let filterArray = []
    checks.forEach(cadaCategoria => {
        let newArray = array.filter(cadaEvento => cadaEvento.category.toLowerCase() === cadaCategoria.value)
        
        filterArray = filterArray.concat(newArray)
    })
    if (filterArray.length===0) { 
        filterArray = array
    }
    printEvents(filterArray,'events')
}
