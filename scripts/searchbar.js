function searchReview() {
    let input = document.querySelector('input[name="searchBar"]').value.toLowerCase().replace(/\s+/g, '');
    let rows = document.querySelectorAll("table .table-rows");

    rows.forEach(row => {
        let nameCell = row.querySelector(".cName");
        let serviceCell = row.querySelector(".service");
        let reviewCell = row.querySelector(".review");

            let name = nameCell ? nameCell.textContent.toLowerCase().replace(/\s+/g, '') : "";
            let service = serviceCell ? serviceCell.textContent.toLowerCase().replace(/\s+/g, '') : "";
            let review = reviewCell ? reviewCell.textContent.toLowerCase().replace(/\s+/g, '') : ""
        
            row.style.display = (name.includes(input) || service.includes(input) || review.includes(input)) ? "" : "none";
    });
}

function searchCustomer() {
    let input = document.querySelector('input[name="searchBar"]').value.toLowerCase().replace(/\s+/g, '');
    let rows = document.querySelectorAll("table .table-rows");

    rows.forEach(row => {
        let nameCell = row.querySelector(".cName");
        let emailCell = row.querySelector(".email");

            let name = nameCell ? nameCell.textContent.toLowerCase().replace(/\s+/g, '') : "";
            let email = emailCell ? emailCell.textContent.toLowerCase().replace(/\s+/g, '') : "";
        
            row.style.display = (name.includes(input) || email.includes(input)) ? "" : "none";
    });
}

function searchHistory() {
    let input = document.querySelector('input[name="searchBar"]').value.toLowerCase().replace(/\s+/g, '');
    let rows = document.querySelectorAll("table .table-rows");

    rows.forEach(row => {
        let nameCell = row.querySelector(".cName");
        let serviceCell = row.querySelector(".service");
        let totalCell = row.querySelector(".total");

            let name = nameCell ? nameCell.textContent.toLowerCase().replace(/\s+/g, '') : "";
            let service = serviceCell ? serviceCell.textContent.toLowerCase().replace(/\s+/g, '') : "";
            let total = totalCell ? totalCell.textContent.toLowerCase().replace(/\s+/g, '') : ""
        
            row.style.display = (name.includes(input) || service.includes(input) || total.includes(input)) ? "" : "none";
    });
}