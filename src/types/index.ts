export type WeatherState = 'CLEAR' | 'TURBULENCE' | 'STAGNANT';

export type KnotMetrics = {
  tensionStress: number;
  knotCrossing: number;
  topologyPhase: string;
};
