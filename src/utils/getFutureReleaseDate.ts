import moment from 'moment';
const getFutureReleaseDate = (premierDateString: string) => {
  const today = moment();
  const premierDate = moment(premierDateString);
  if (today < premierDate) {
    return premierDate.format('MMM D');
  }
  return '';
};

export default getFutureReleaseDate;
