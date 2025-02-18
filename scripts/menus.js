function toggleDropdown(){
    const dropdown = document.querySelector('.booking-dropdown')
    const dropdownIcon = document.querySelector('.dropdown-icon')

    if (dropdown.style.display === 'block'){
      dropdown.style.display = 'none'
      dropdownIcon.style.transform = 'rotate(0deg)'
    } else {
      dropdown.style.display = 'block'
      dropdownIcon.style.transform = 'rotate(90deg)'
    }
  }

  function toggleFilter(){
    const filter = document.querySelector('.filter-container')
    if (filter.style.display === 'flex'){
      filter.style.display = 'none'
    } else {
      filter.style.display = 'flex'
    }
  }
  function toggleSideMenu(){
      const menu = document.querySelector('.menu')
      if (menu.style.display === 'flex'){
          menu.style.display = 'none'
      } else {
          menu.style.display = 'flex'
      }
  }