var addressBooks = [
  { id: 0, name: 'ajin', address: 'jln gardu' },
  { id: 1, name: 'bara', address: 'jln kaki' }
]
var newId = addressBooks[addressBooks.length - 1].id

const addressBookContacts = {
  display: function() {
    addressBooks.forEach(addressBook => {
      addressBookContactsString = `${addressBook.id} ${addressBook.name}`
      console.log(addressBookContactsString)
    })
  },

  // add addressBookContacts
  add: function(name, address) {
    newId += 1
    const input = {
      id: newId,
      name,
      address
    }
    addressBooks.push(input)
  },

  // delete addressBookContacts
  deleted: function(addressBookId) {
    var dataContacts = addressBooks.filter(addressBook => {
      return addressBook.id !== addressBookId
    })
    addressBooks = dataContacts
  },

  // search addressBookContacts
  search: function(name) {
    const searchData = addressBooks.filter(addressBook => {
      return addressBook.name === name
    })
    const resultSearch = `Name: ${searchData[0].name}\naddress: ${
      searchData[0].address
    }`
    console.log(resultSearch)
  }
}
addressBookContacts.add('cakti', 'jln di tinggal kawin')
addressBookContacts.add('ari', 'back to pakistan')
addressBookContacts.add('mario', 'jln menuju fox pondik indah')
addressBookContacts.add('jonathan', 'canada jos gandos')
addressBookContacts.deleted(1)
addressBookContacts.search('cakti')

addressBookContacts.display()
