const list = [];

/* Función para agregar mensajes a la lista de BD*/
function addMessages(message) {
    list.push(message);
}

function getMessages() {
    return list;
}

module.exports = {
    add: addMessages,
    list: getMessages,
    //get
    //update
}