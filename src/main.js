import { programs } from './data/data'
import './style.css'
import { renderCateg, renderprograms, renderStat } from './ui/render'
import { createIcons, icons } from 'lucide';

createIcons({ icons });

renderprograms(programs)
renderCateg(programs)
renderStat(programs)

window.onCategClick= function onCategClick(e) {
  document.querySelectorAll("button").forEach(button =>button.classList.remove('activeBtn'))
  if(e.target.tagName == 'BUTTON') e.target.classList.add('activeBtn')
  else return
  const selectedCateg = e.target.textContent
  const filteredPrograms = programs.filter(obj => obj.category == selectedCateg)
  selectedCateg=='összes' ? renderprograms(programs) :renderprograms(filteredPrograms)
}

window.availablePrograms = function availablePrograms() {
  document.querySelectorAll("button").forEach(button =>button.classList.remove('activeBtn'))
  document.querySelector('.btn').classList.add('activeBtn')
  const filteredPrograms=programs.filter(obj=>obj.capacity>obj.participants)
  renderprograms(filteredPrograms)
  
}

