export default function healthAlert(personage) {
  let state = 'healthy';
  if (personage.health < 15) {
    state = 'critical';
  } else if (personage.health >= 15 && personage.health <= 50) {
    state = 'wounded';
  }
  return state;
}
