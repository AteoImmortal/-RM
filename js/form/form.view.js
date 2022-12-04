const viewForm = (function(){
    // Достаём элементы из ДОМ
    const DOMstrings = {
        inputName: document.querySelector("#name"),
        inputPhone: document.querySelector("#phone"),
        inputEmail: document.querySelector("#email"),
        labelProduct: document.querySelector("#product"),
        submitBtn: document.querySelector("#submit-btn"),
        form: document.querySelector("#form")
    }

    // Забираем введённые значение
    function getInput(){
        return {
            name: DOMstrings.inputName.value,
            phone: DOMstrings.inputPhone.value,
            email: DOMstrings.inputEmail.value,
            product: DOMstrings.labelProduct.value,
            status: "new"
        }    
        
    }

    function inputsClear(){
        DOMstrings.form.reset();
    }

    return {
        inputsClear: inputsClear,
        getInput: getInput,
        getDOMstrings: function(){
            return DOMstrings;
        }
    }
})()