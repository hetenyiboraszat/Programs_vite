import { programs } from "../data/data";

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
    //categories = [... categories,"összes"]

    const btnStr =categories.map(ctg=> `
        <button>${ctg}</button>
        `).join('')
        document.querySelector('header').innerHTML=btnStr+'<button class="activeBtn">összes</button>'
}

export function renderStat(arr) {
    let sumParticipants =  programs.reduce((sum, obj)=>sum+obj.participants  , 0)
    let avgPrice = programs.reduce((sum,obj) => sum+obj.price/8, 0)
    let currentRevenue = programs.reduce((sum,obj)=>sum+obj.price*obj.participants,0)
    let sumIndoor = programs.reduce((sum,obj) => obj.indoor? sum+1:sum , 0 )
    let sumOutdoor = programs.reduce((sum,obj) => obj.indoor? sum:sum +1 , 0 )
    
    document.querySelector("footer").innerHTML=`
    <p>Összes résztvevő: ${sumParticipants} fő</p>
    <p>Átlagos részvételi díj: ${avgPrice} Ft</p>
    <p>Jelentlegi bevétel: ${currentRevenue} Ft</p>
    <p>Beltéri programok: ${sumIndoor}</p>
    <p>Kültéri programok: ${sumOutdoor}</p>
    `
    
    
    
    
    
}