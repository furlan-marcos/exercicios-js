'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
	nome: "Bruno",
	email: "Bruno123@gmail.com",
	celular: "4799001133",
	cidade: "Joinville"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//CRUD - Creat Read Update Delete

//DELETE
const deleteClient = (index) => {
	const dbClient = readClient()
	dbClient.splice(index, 1)
	setLocalStorage(dbClient)
}

//UPDATE
const updateClient = (index, client) => {
	const dbClient = readClient()
	dbClient[index] = client
	setLocalStorage(dbClient)
}

//READ
const readClient = () => getLocalStorage()

//CREATE
const createClient = (client) => {
	const dbClient = getLocalStorage()
	dbClient.push(client)
	setLocalStorage(dbClient)
}

const isValidFields = () => {
	return document.getElementById('form').reportValidity()
}


//INTERAÇÃO COM LAYOUT

const clearFields = () => {
	const fields = document.querySelectorAll('.modal-field')
	fields.forEach(field => field.value = "")
}

const saveClient = () => {
	if (isValidFields()) {
		const client = {
			nome: document.getElementById('nome').value,
			email: document.getElementById('email').value,
			celular: document.getElementById('celular').value,
			cidade: document.getElementById('cidade').value			
		}
		createClient(client)
		clearFields()
		closeModal()
	}

}


// EVENTOS
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
	.addEventListener('click', saveClient)
















