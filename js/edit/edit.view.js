const viewEdit = (function(){

    const DOMstrings = {
        form: document.querySelector("#form"),
        number: document.querySelector("#number"),
        id: document.querySelector("#id"),
        date: document.querySelector("#date"),
        name: document.querySelector("#name"),
        phone: document.querySelector("#phone"),
        email: document.querySelector("#email"),
        product: document.querySelector("#product"),
        status: document.querySelector("#status"),
    }

    function renderUser(user){
        DOMstrings.number.innerText = user.id
        DOMstrings.id.value = user.id
        DOMstrings.date.innerText = `${user.dateDate} ${user.dateTime}`
        DOMstrings.name.value = user.name
        DOMstrings.phone.value = user.phone
        DOMstrings.email.value = user.email
        DOMstrings.product.value = user.product
        DOMstrings.status.value = user.status
        
    }

    function getFormInput(){
        return new FormData(DOMstrings.form)
    }


    return {
        getDOMstrings: function(){
             return DOMstrings
        },
        renderUser: renderUser,
        getFormInput: getFormInput
    }
})()