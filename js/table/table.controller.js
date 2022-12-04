const controllerTable = (function(viewTable, model) {
    const DOM = viewTable.getDOMstrings();

    function init(){
        const users = model.getUsers();
        viewTable.renderUsers(users);
        addEventListeners();
        
        const newUsersCount = model.countNewUsers();
        viewTable.renderBadgeNew(newUsersCount);

        const filter = model.getFilter();
        viewTable.updateFilter(filter);
    }
    

    function addEventListeners(){
        DOM.select.addEventListener("change", filterProducts);
        DOM.topStatusBar.addEventListener("click", filterByStatus);
        DOM.leftStatusLinks.forEach((link) => {
            link.addEventListener("click", filterByStatus)
        })
    }

    function filterProducts(){
        const filter = model.changeFilter("products", this.value);
        const filteredUsers = model.filterUsers(filter);
        viewTable.renderUsers(filteredUsers);
    }

    function filterByStatus(e){
        const filter = model.changeFilter("status", e.target.dataset.value);
        const filteredUsers = model.filterUsers(filter);
        viewTable.renderUsers(filteredUsers);
        viewTable.activeStatusBar(e.target.dataset.value)
    }

    return {
        start: function(){
            init();
        }
    }
})(viewTable, model)

controllerTable.start()