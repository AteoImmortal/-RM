const testUser = (function(){
    const UserX = function(name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    const newUsers = [
        new UserX("Денис", "areks292@gmail.com", "+375445950353"),
        new UserX("Максим", "aresdfcd92@gmail.com", "+375445911233"),
        new UserX("Вова", "arwq12rks292@gmail.com", "+37544110353"),
        new UserX("Лёша", "arek1dg2@gmail.com", "+375445550353"),
        new UserX("Паша", "are12312@gmail.com", "+375445660353"),
        new UserX("Митя", "ag12eeks292@gmail.com", "+375445910353"),
        new UserX("Витя", "dwwwds2d2@gmail.com", "+375445333353"),
        new UserX("Саша", "ar12ad2@gmail.com", "+375444440353"),
        new UserX("Маша", "vaweds292@gmail.com", "+375445940333"),
    ]

    function getRandom(a){
        return Math.floor(Math.random()*a)
    }


    function getProduct() {
        let newProduct = document.querySelector("#product").children.length
        let randomProd = getRandom(newProduct);
        const randomData = document.querySelector("#product").children[randomProd];
        return randomData;
    }




    function insertIntUI() {
        let random = getRandom(newUsers.length);
        let itemRandom = newUsers[random];

        document.querySelector("#product").value = getProduct().value;
        document.querySelector("#name").value = itemRandom.name;
        document.querySelector("#email").value = itemRandom.email;
        document.querySelector("#phone").value = itemRandom.phone;
        



        console.log("Fired!")
    }

    return {
        start: insertIntUI
    }
})();