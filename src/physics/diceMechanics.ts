import type { WeatherState } from '../types';

export type { WeatherState } from '../types';

const DICE_OUTCOMES = 6;

export const getProbabilities = (weather: WeatherState): number[] => {
  switch (weather) {
    case 'TURBULENCE':
      return [0.3, 0.1, 0.1, 0.1, 0.1, 0.3];
    case 'STAGNANT':
      return [0.25, 0.25, 0.25, 1 / 12, 1 / 12, 1 / 12];
    case 'CLEAR':
      return Array(DICE_OUTCOMES).fill(1 / DICE_OUTCOMES);
  }
};

export const calculateWeightedDiceRoll = (
  weather: WeatherState,
  beefRatio: number,
  chickenRatio: number,
  random: () => number = Math.random,
): number => {
  const roll = random();
  const probabilities = getProbabilities(weather);
  let cumulativeProbability = 0;
  let diceRoll = DICE_OUTCOMES;

  for (let index = 0; index < probabilities.length; index += 1) {
    cumulativeProbability += probabilities[index];
    if (roll < cumulativeProbability) {
      diceRoll = index + 1;
      break;
    }
  }

  if (weather === 'TURBULENCE' && beefRatio > 70) {
    return Math.min(diceRoll + 1, DICE_OUTCOMES);
  }

  if (weather === 'STAGNANT' && chickenRatio > 70) {
    return Math.max(diceRoll, 2);
  }

  return diceRoll;
};