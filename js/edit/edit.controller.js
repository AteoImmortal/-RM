const controllerEdit = (function(viewEdit, model){
    
    function init(){
        const id =  getUserId();
        const user = model.getUserById(id)

        viewEdit.renderUser(user);
        setupEventListeners()
    }

    function setupEventListeners(){
        const DOM = viewEdit.getDOMstrings();
        DOM.form.addEventListener("submit", formSubmitHandler);
    }

    function formSubmitHandler(e){
        e.preventDefault();
        const formData = viewEdit.getFormInput();
        model.updateUser(formData);
        window.location = "/table.html"
    }
    
    function getUserId(){
        const params = new URLSearchParams(window.location.search);
        return params.get("id")
    }

    return {
        start: function(){
            init();
        }
    }
})(viewEdit, model)


controllerEdit.start()