import os from 'os';

export function getCpuCount() {
  return os.cpus().length;
}

export function getAverageCpuLoad() {
  const cpus = os.cpus().length;
  const loadAverage = os.loadavg()[0] / cpus;
  return loadAverage;
}
