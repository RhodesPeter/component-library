const formatDate = () => {
  const date = new Date();
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday', 'Sunday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${days[date.getDay() - 1]}, ${date.getDate()} ${months[date.getMonth()]}`;
};

export default formatDate;
