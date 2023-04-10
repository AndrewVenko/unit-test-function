import healthAlert from '../src/index';

describe('healthAlert function', () => {
  test('should return "healthy" if health is greater than 50', () => {
    const hero = { name: 'Маг', health: 90 };
    const result = healthAlert(hero);
    expect(result).toBe('healthy');
  });

  test('should return "wounded" if health is between 15 and 50', () => {
    const hero = { name: 'Воин', health: 45 };
    const result = healthAlert(hero);
    expect(result).toBe('wounded');
  });

  test('should return "critical" if health is less than 15', () => {
    const hero = { name: 'Эльф', health: 12 };
    const result = healthAlert(hero);
    expect(result).toBe('critical');
  });
});
