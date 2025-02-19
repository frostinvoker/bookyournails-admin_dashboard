//Sort Customers
document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("#customersTable");
    const headers = {
        customer: document.getElementById("customer-name-sorting"),
        totalVisit: document.getElementById("total-visit-sorting"),
        points: document.getElementById("points-sorting"),
        redeemed: document.getElementById("redeemed-sorting"),
    };

    let sortOrder = {};

    function sortTable(columnIndex, dataType, headerElement) {
        const rows = Array.from(table.querySelectorAll(".table-rows"));
        const isAscending = !sortOrder[columnIndex];

        rows.sort((rowA, rowB) => {
            let cellA = rowA.children[columnIndex].textContent.trim();
            let cellB = rowB.children[columnIndex].textContent.trim();

            if (dataType === "number") {
                cellA = parseInt(cellA, 10);
                cellB = parseInt(cellB, 10);
            }

            if (cellA < cellB) return isAscending ? -1 : 1;
            if (cellA > cellB) return isAscending ? 1 : -1;
            return 0;
        });


        sortOrder[columnIndex] = isAscending;

        rows.forEach(row => table.appendChild(row));


        rotateSVG(headerElement.querySelector("svg"), isAscending);
    }

    function rotateSVG(svgElement, isAscending) {
        if (svgElement) {
            svgElement.style.transform = isAscending ? "rotate(180deg)" : "rotate(0deg)";
        }
    }

    headers.customer?.addEventListener("click", function () {
        sortTable(1, "string", this);
    });

    headers.totalVisit?.addEventListener("click", function () {
        sortTable(3, "number", this);
    });

    headers.points?.addEventListener("click", function () {
        sortTable(4, "number", this);
    });

    headers.redeemed?.addEventListener("click", function () {
        sortTable(5, "number", this);
    });
});


//Sort Reviews
document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("#reviewsTable");
    const headers = {
        customer: document.getElementById("customer-name-sorting"),
        rating: document.getElementById("rating-sorting"),
        date: document.getElementById("date-sorting"),
    };

    let sortOrder = {};

    function sortTable(columnIndex, dataType, headerElement) {
        const rows = Array.from(table.querySelectorAll(".table-rows"));
        const isAscending = !sortOrder[columnIndex];

        rows.sort((rowA, rowB) => {
            let cellA = rowA.children[columnIndex].textContent.trim();
            let cellB = rowB.children[columnIndex].textContent.trim();

            if (dataType === "rating"){
                cellA = parseFloat(cellA.split("/")[0]);
                cellB = parseFloat(cellB.split("/")[0]);
            } else if (dataType === "date") {
                cellA = new Date(cellA);
                cellB = new Date(cellB);
            }

            if (cellA < cellB) return isAscending ? -1 : 1;
            if (cellA > cellB) return isAscending ? 1 : -1;
            return 0;
        });


        sortOrder[columnIndex] = isAscending;

        rows.forEach(row => table.appendChild(row));


        rotateSVG(headerElement.querySelector("svg"), isAscending);
    }

    function rotateSVG(svgElement, isAscending) {
        if (svgElement) {
            svgElement.style.transform = isAscending ? "rotate(180deg)" : "rotate(0deg)";
        }
    }

    headers.customer?.addEventListener("click", function () {
        sortTable(1, "string", this);
    });

    headers.rating?.addEventListener("click", function () {
        sortTable(3, "rating", this);
    });

    headers.date?.addEventListener("click", function () {
        sortTable(5, "date", this);
    });
});

//Sort History
document.addEventListener("DOMContentLoaded", function () {
    const table = document.querySelector("#historyTable");
    const headers = {
        customer: document.getElementById("customer-name-sorting"),
        date: document.getElementById("date-sorting"),
        total: document.getElementById("total-sorting"),
    };

    let sortOrder = {};

    function sortTable(columnIndex, dataType, headerElement) {
        const rows = Array.from(table.querySelectorAll(".table-rows"));
        const isAscending = !sortOrder[columnIndex];

        rows.sort((rowA, rowB) => {
            let cellA = rowA.children[columnIndex].textContent.trim();
            let cellB = rowB.children[columnIndex].textContent.trim();

            if(dataType === "number"){
                cellA = parseInt(cellA.replace(/[^\d]/g, ""), 10);
                cellB = parseInt(cellB.replace(/[^\d]/g, ""), 10);
            } else if (dataType === "date") {
                cellA = new Date(cellA);
                cellB = new Date(cellB);
            }
            if (cellA < cellB) return isAscending ? -1 : 1;
            if (cellA > cellB) return isAscending ? 1 : -1;
            return 0;
        });


        sortOrder[columnIndex] = isAscending;

        rows.forEach(row => table.appendChild(row));


        rotateSVG(headerElement.querySelector("svg"), isAscending);
    }

    function rotateSVG(svgElement, isAscending) {
        if (svgElement) {
            svgElement.style.transform = isAscending ? "rotate(180deg)" : "rotate(0deg)";
        }
    }

    headers.customer?.addEventListener("click", function () {
        sortTable(1, "string", this);
    });

    headers.date?.addEventListener("click", function () {
        sortTable(4, "date", this);
    });

    headers.total?.addEventListener("click", function () {
        sortTable(5, "number", this);
    });
});
