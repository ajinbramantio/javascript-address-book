let contacts = [
  // array of contacts
]

let newId = contacts.length > 0 ? contacts[contacts.length - 1].id : 1

const addressBook = {
  // Display contacts
  display: function() {
    if (contacts.length > 0) {
      contacts.forEach(contact => {
        contactsString = `${contact.id}: ${contact.name} - ${contact.address}`
        console.log(contactsString)
      })
    } else {
      console.warn('Address book is empty!')
    }
  },

  // Add new contact
  addContact: function(name, address) {
    const input = {
      id: newId,
      name,
      address
    }
    contacts.push(input)
    newId += 1
  },

  // Delete one contact
  deleteContactById: function(addressBookId) {
    var dataContacts = contacts.filter(contacts => {
      return contacts.id !== addressBookId
    })
    contacts = dataContacts
  },

  // Search contact by name
  searchByName: function(name) {
    if (contacts.length > 0) {
      const searchData = contacts.find(contact => contact.name === name)

      if (searchData) {
        const resultSearch = `Name: ${searchData.name}
address: ${searchData.address}`
        return resultSearch
      } else {
        console.warn('Contact is not found!')
      }
    } else {
      console.warn('Address book is empty!')
    }
  }
}

addressBook.display()

addressBook.addContact('Cakti', 'Jl. di tinggal kawin')
addressBook.addContact('Ari', 'Jl. back to pakistan')
addressBook.addContact('Mario', 'Jl. menuju fox pondok indah')
addressBook.addContact('Jonathan', 'Canada jos gandos')
addressBook.addContact('Haidar', 'Planet mars')

addressBook.deleteContactById(2)

const searchResult = addressBook.searchByName('Cakti')
console.log(searchResult)

addressBook.display()
