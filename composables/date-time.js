useDateTime(rawtime) {
    let date = new Date(rawtime);
    return Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'long' }).format(date).replace(':00','');
  
  }