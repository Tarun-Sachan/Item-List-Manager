const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filterItems = document.getElementById('filter')

form.addEventListener('submit', addItems)
itemList.addEventListener('click', deleteItem)
filterItems.addEventListener('keyup', finditem)

function addItems (e) {
  e.preventDefault()

  const newVal = document.getElementById('item').value// get text entered by user
  const li = document.createElement('li')
  li.className = 'list-group-item'
  li.appendChild(document.createTextNode(newVal))
  const delbtn = document.createElement('button')
  delbtn.className = 'btn btn-danger btn-sm float-right delete'
  delbtn.appendChild(document.createTextNode('X'))
  li.appendChild(delbtn)
  itemList.appendChild(li)// add item to unordered list
}

function deleteItem (e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement
      itemList.removeChild(li)
    }
  }
}

function finditem (e) {
  const text = e.target.value.toLowerCase()
  const items = itemList.getElementsByTagName('li')

  Array.from(items).forEach(function (items) {
    const itemName = items.firstChild.textContent
    if (itemName.toLocaleLowerCase().indexOf(text) !== -1) {
      items.style.display = 'block'
    } else {
      items.style.display = 'none'
    }
  })
}
