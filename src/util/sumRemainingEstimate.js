import { minutesPer } from './constants';

export default function(estimationCells) {
  const allEstimates = [];
  let remainingEstimationSum = 0;

  estimationCells.forEach(cell => {
    const remainingEstimation = cell.innerHTML;
    const parts = remainingEstimation.split(',');
    allEstimates.push(...parts);
  });

  allEstimates.filter(isEstimated => isEstimated).forEach(timeString => {
    timeString = timeString.trim();
    if (timeString.endsWith('s')) {
      timeString = timeString.substring(0, timeString.length - 1);
    }

    const timeStringParts = timeString.split(' ');
    const value = parseInt(timeStringParts[0]);
    const multipier = minutesPer[timeStringParts[1]];
    remainingEstimationSum += value * multipier;
  });

  return remainingEstimationSum;
}
