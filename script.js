const addItemInHTML = (value) => {

    if (value == null) {
        return;
    }

    const daftarList = document.getElementsByClassName("daftar-list")
    const li = document.createElement("li")
    const content = document.createTextNode(value)

daftarList[0].appendChild(li)

li.appendChild(content)
}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
let itemInputValue = itemInput[0].value

addItemInHTML(itemInputValue)
let itemArray = localStorage.getItem("item");
if ( (typeof itemArray) != "string" || (itemArray == null)) {
    //jika itemArray adalah string atau null maka kita bikin array baru dengan key 0 dengan value
    //itemInputValue
    itemArray = [itemInputValue]
    
} else {
   //jike itemArray adalah bukan string atau null maka kemungkinan dia adalah array
   // jadi kita tambahkan dengan menggunakan metod "pus"
    itemArray.push(itemInputValue)
}
// merubah array ke string supaya bisa disimpan di local Storage

const itemArrayStringify = JSON.stringify(itemArray);
localStorage.setItem("item",itemInputValue);
} 

const runNow = () => {
    const item = localStorage.getItem("item")

   addItemInHTML(item)
}
runNow();