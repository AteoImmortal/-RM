const model = (function(){
    
    // Пользователи
    const users = getLocalStorage();
    
    function getUsers(){
        return filterUsers(filter);
    }

    function addItem(formData) {
        let id, date;

        if(users.length > 0) {
            id = users[users.length - 1].id + 1;
        } else {
            id = 0
        }

        date = new Date(); //.toLocaleDateString()
        // console.log(date)

        const newUser = { 
            id, date, ...formData
        }

        // Записываем "запись"/объект в структуру данных
        users.push(newUser);
        // console.log(user)

        saveLocalStorage();

        // Возвращаем новый объект
        return newUser;
    }

    const products = {
        "course-html": "Курс по верстке",
        "course-js": "Курс по JavaScript",
        "course-vue": "Курс по VUE JS",
        "course-php": "Курс по PHP",
        "course-wordpress": "Курс по WordPress",
    }

    const statuses = {
        "new": "Новые",
        "inwork": "В работе",
        "complete": "Завершенные",
    }
    
    function prepareUsers(users) {
        return users.map((item) => {
            return {
                ...item,
                dateToDisplay: new Date(item.date).toLocaleDateString(),
                productName: products[item.product],
                statusName: statuses[item.status]
            }
        })
    }

    function saveLocalStorage(){
        localStorage.setItem("user", JSON.stringify(users));
    }

    function getLocalStorage(){

        const getUsers = localStorage.getItem("user");

        if(getUsers){
            return JSON.parse(getUsers);
        } else {
            return [];
        }
    }

    function getUserById(id) {
        const user = users.find(function(item){
            return item.id == id;
        })
        user.dateDate = new Date(user.date).toLocaleDateString();
        user.dateTime = new Date(user.date).toLocaleTimeString();

        return user;
    }

    function updateUser(formData){
        const user = getUserById(formData.get("id"));
        user.product = formData.get('product');
        user.name = formData.get('name');
        user.email = formData.get('email');
        user.phone = formData.get('phone');
        user.status = formData.get('status');

        saveLocalStorage();
        console.log(user)

    }

    const filter = loadFilter()

    function loadFilter(){
        let filter = {
            products: "all",
            status: "all"
        }

        if(localStorage.getItem("filter")){
            filter = JSON.parse(localStorage.getItem("filter"))
        }

        return filter
    }

    function changeFilter(proper, value){
        filter[proper] = value;
        localStorage.setItem("filter", JSON.stringify(filter))
        return filter;
    }

    function filterUsers(filter){
        let filteredUsers;

        if (filter.products !== "all"){
            filteredUsers = users.filter((users) => {
                return users.product === filter.products;
            })
        } else {
            filteredUsers = [...users]
        }

        if(filter.status !== "all"){
            filteredUsers = filteredUsers.filter((users) => users.status === filter.status)
        }
        
        return prepareUsers(filteredUsers);
    }

    function countNewUsers(){
        const newUsers = users.filter((el) => el.status === "new");
        return newUsers.length;
    }

    function getFilter(){
        return {...filter}
    }

    return {
        getFilter: getFilter,
        countNewUsers:countNewUsers,
        filterUsers: filterUsers,
        changeFilter: changeFilter,
        getUserById: getUserById,
        getUsers: getUsers,
        addItem: addItem,
        updateUser: updateUser,
        test: function() {
            console.log("Fired")
        }
    }
})()