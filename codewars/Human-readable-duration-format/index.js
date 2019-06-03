function formatDuration(seconds) {
  var minute_seconds = 60,
    hours_seconds = 60 * minute_seconds,
    day_seconds = 24 * hours_seconds,
    year_seconds = 365 * day_seconds,
    years = Math.floor(seconds / year_seconds),
    days = Math.floor((seconds - years * year_seconds) / day_seconds),
    hours = Math.floor((seconds - years * year_seconds - days * day_seconds) / hours_seconds),
    minutes = Math.floor((seconds - years * year_seconds - days * day_seconds - hours * hours_seconds) / minute_seconds),
    seconds = seconds - years * year_seconds - days * day_seconds - hours * hours_seconds - minutes * minute_seconds,
    result = [];
  if (years > 0) {
    result.push(years === 1 ? `${years} year` : `${years} years`);
  }
  if (days > 0) {
    result.push(days === 1 ? `${days} day` : `${days} days`);
  }
  if (hours > 0) {
    result.push(hours === 1 ? `${hours} hour` : `${hours} hours`);
  }
  if (minutes > 0) {
    result.push(minutes === 1 ? `${minutes} minute` : `${minutes} minutes`);
  }
  if (seconds > 0) {
    result.push(seconds === 1 ? `${seconds} second` : `${seconds} seconds`);
  }
  if (result.length === 0) {
    result.push("now");
  } else {
    for(let i=result.length-1;i>=0;i--){
      if(i===result.length-2){
        result[i]=result[i]+" and";
      }else if(i<result.length-2){
        result[i]=result[i]+",";
      }
    }
  }
  return result.join(" ");
  // Complete this function
}
console.log(formatDuration(0));