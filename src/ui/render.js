export function renderprograms(arr) {
    const cardStr = arr.map(obj=>
        `
      <div class="card">
      <h3>${obj.title}</h3>
      <h4>Kategória: ${obj.category}</h4>
      <h4>Ár: ${obj.price}</h4>
      <h4>Résztvevők: ${obj.participants}</h4>
      <h4>Helyek: ${obj.capacity}</h4>
      <h4>${obj.indoor ? "beltéri":"kültéri"}</h4>
    
      </div>
      `
    ).join('')
    document.querySelector('.programs').innerHTML=cardStr
    
}

export function renderCateg(arr) {
    let categories = arr.map(obj=>obj.category)
    categories = [...new Set(categories)]
    console.log(categories);
    categories = [... categories,"összes"]

    const btnStr =categories.map(ctg=> `
        <button>${ctg}</button>
        `).join('')
        document.querySelector('header').innerHTML=btnStr
    
}