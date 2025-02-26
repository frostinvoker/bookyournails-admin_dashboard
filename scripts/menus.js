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
    const filterIcon = document.querySelector('.filterIcon svg')
    if (filter.style.display === 'flex'){
      filter.style.display = 'none'
      filterIcon.style.fill = '#BDBDBD'
    } else {
      filter.style.display = 'flex'
      filterIcon.style.fill = '#FF9E9E'
    }
  }
  function toggleSideMenu(){
      const menu = document.querySelector('.menu')
      const page = document.querySelector('.page-container')
      if (menu.style.display === 'flex'){
          menu.style.display = 'none'
          page.style.background = 'rgba (0,0,0,0.50)'
      } else {
          menu.style.display = 'flex'
      }
  }
  
  function toggleNotifs(){
    const notifs = document.querySelector('.notification-container')
    const notifsIcon = document.querySelector('.title span svg')
    if (notifs.style.display === 'flex'){
      notifs.style.display = 'none'
      notifsIcon.style.fill = '#6F6F6F'
    } else {
      notifs.style.display = 'flex'
      notifsIcon.style.fill = '#FF9E9E'
    }
  }
