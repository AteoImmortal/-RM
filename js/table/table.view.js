const viewTable = (function(){
    const DOMstrings = {
        table: document.querySelector("#tbody"),
        select: document.querySelector("#productSelect"),
        topStatusBar: document.querySelector("#topStatusBar"),
        leftStatusLinks: document.querySelectorAll("[data-role='left-status']"),
        leftPanelNav: document.querySelector(".left-panel__navigation"),
        badgeNew: document.querySelector("#badge-new")
    }

    function renderUsers(users){
        DOMstrings.table.innerHTML = "";

        const badges = {
            new: 'badge-danger',
            inwork: 'badge-warning',
            complete: 'badge-success'
        }

        for ( let i = 0; i < users.length; i++){
            const templateString = `
                <tr>
                    <th scope="row">${users[i].id}</th>
                    <td>${users[i].dateToDisplay}</td> 
                    <td>${users[i].productName}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].phone}</td>
                    <td>
                        <div class="badge badge-pill ${badges[users[i].status]}">${users[i].statusName}</div>
                    </td>
                    <td>
                        <a href="edit.html?id=${users[i].id}">Редактировать</a>
                    </td>
                </tr>`;

            DOMstrings.table.insertAdjacentHTML("beforeend", templateString);
        }
    }

    function activeStatusBar(value){
        DOMstrings.topStatusBar.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
        DOMstrings.topStatusBar.querySelector(`a[data-value="${value}"]`).classList.add("active");

        DOMstrings.leftStatusLinks.forEach((link) => link.classList.remove("active"));
        DOMstrings.leftPanelNav.querySelector(`a[data-value="${value}"]`).classList.add("active");
    }

    function renderBadgeNew(num){
        DOMstrings.badgeNew.innerText = num;

        if(num == 0){
            DOMstrings.badgeNew.classList.add("none");
        } {
            DOMstrings.badgeNew.classList.remove("none");
        }
    }

    function updateFilter(filter){
        DOMstrings.select.value = filter.products;

        DOMstrings.topStatusBar.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
        DOMstrings.topStatusBar.querySelector(`a[data-value="${filter.status}"]`).classList.add("active");

        DOMstrings.leftStatusLinks.forEach((link) => link.classList.remove("active"));
        DOMstrings.leftPanelNav.querySelector(`a[data-value="${filter.status}"]`).classList.add("active");
    }

    return {
        getDOMstrings: function(){
            return DOMstrings;
        },
        updateFilter: updateFilter,
        renderBadgeNew: renderBadgeNew,
        renderUsers: renderUsers,
        activeStatusBar: activeStatusBar
    }
})()