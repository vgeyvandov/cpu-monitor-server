import os from 'os';

export function getCpuCount() {
  return os.cpus().length;
}

export function getAverageCpuLoad() {
  const cpus = getCpuCount();
  const loadAverage = os.loadavg()[0] / cpus;
  return parseFloat(loadAverage.toFixed(5));
}
