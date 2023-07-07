function setTheme(theme) {
    if (theme === 'day') {
      document.body.style.backgroundColor = 'lightgray';
      document.body.style.color = 'black';
    } else if (theme === 'night') {
      document.body.style.backgroundColor = '#161414';
      document.body.style.color = 'white';
    }
  }