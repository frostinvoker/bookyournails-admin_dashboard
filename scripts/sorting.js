let currentSort = {
    column: null,
    direction: 'asc'
};

function getCellValue(row, columnIndex, dataType) {
    const cell = row.cells[columnIndex];
    let value = cell.textContent.trim();

    switch(dataType) {
        case 'number':
            return parseInt(10);
        case 'date':
            return new Date(value);
        case 'currency':
            return parseFloat(value.replace('₱','').trim());
        default:
            return value.toLowerCase();
    }
}

function sortTable(columnIndex, dataType){
    const table = document.querySelector('table');
    const rows = Array.from(table.querySelectorAll('.table-rows'));
    const prevColumn = currentSort.column === columnIndex;

    //Update sort direction
    currentSort.direction = prevColumn
        ? (currentSort.direction === 'asc' ? 'desc' : 'asc')
        : 'asc';
    currentSort.column = columnIndex;

    // Sort rows
    rows.sort((a, b) =>{
        const valA = getCellValue(a, columnIndex, dataType);
        const valB = getCellValue(b, columnIndex, dataType);

        if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
        if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
        return 0;
    });

    //Clear and reinsert sorted rows
    rows.forEach(row => row.remove());
    rows.forEach(row => table.appendChild(row));

    //Update sorting icons
    document.querySelectorAll('.table-headers th svg').forEach(svg => {
        svg.computedStyleMap.transform = '';
    });
    const currentHeader = document.querySelector(`.table-headers th:nth-child(${columnIndex + 1})`);
    const currentSvg = currentHeader.querySelector('svg');
    currentSvg.style.transform = currentSort.direction === 'desc' ? 'rotate(180deg)' : '';
}

document.getElementsById('customer-name-sorting').addEventListener('click', () => sortTable(1, 'string'));