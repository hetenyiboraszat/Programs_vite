import { programs } from './data/data'
import './style.css'
import { renderCateg, renderprograms } from './ui/render'

renderprograms(programs)
renderCateg(programs)

window.onCategClick= function onCategClick(e) {
  const selectedCateg = e.target.textContent
  const filteredPrograms = programs.filter(obj => obj.category == selectedCateg)
  selectedCateg=='összes' ? renderprograms(programs) :renderprograms(filteredPrograms)
}