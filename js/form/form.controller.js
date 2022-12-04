const controller = (function(viewForm, model) {
    function setupEventListeners(){
        // Достаём ДОМ элементы из view 
        const DOM = viewForm.getDOMstrings();
        // Когда происходит ввод данных в форму запускается controllItem
        DOM.form.addEventListener("submit", controllAddItem);
    }


    function controllAddItem(event){

        // Остановили отправку формы
        event.preventDefault();

        // Получаем данные из формы
        const formData = viewForm.getInput();

        // Проверяем есть ли пустые поля
        if (formData.name !== "" && formData.phone !== "" && !isNaN(formData.phone) && formData.email !== ""  ) {
            // Добавим введённые данные в модель
            let newItem = model.addItem(formData);
            
        }
        // viewForm.inputsClear();
        // testUser.start();
    }
    // testUser.start();
    

    return{
        start: function(){
            setupEventListeners();
        }
    }
    
})(viewForm, model)

controller.start()