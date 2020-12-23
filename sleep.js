const getSleepHours = day => {
    if(day === 'monday'){
      return 8;
      }
    else if
      (day === 'tuesday'){
        return 4;
      }
    else if
      (day === 'wednesday'){
        return 12;
      }
       else if
      (day === 'thursday'){
        return 3;
      }
       else if
      (day === 'friday'){
        return 10;
      }
  }
  
  const getActualSleepHours = () => 
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday');
    
  const getIdealSleepHours = () => {
    let idealHours = 5;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log('You slept like a bebe!')
    }
    else if(actualSleepHours > idealSleepHours){
      console.log('You slept way too much!')
    }
    else if(actualSleepHours < idealSleepHours){
      console.log('Go back to bed!')
    }
    else {
      'Error!'
    }
  }
  
  console.log(calculateSleepDebt())