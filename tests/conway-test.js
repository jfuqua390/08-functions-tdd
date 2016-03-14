QUnit.module(`Conway's Game of Life`);

test(`A cell knows the rules if it's alive`, function(assert) {
  const a = aliveEh([false, false, false, false, false, false, false, false]);
  const b = aliveEh([false, true, false, false, true, false, false, false]);
  const c = aliveEh([false, true, false, true, true, false, false, false]);
  const d = aliveEh([true, true, true, false, true, false, false, false]);

  assert.equal(a, false, `A cell dies of underpopulation with`);
  assert.equal(b, true, `A stays alive in harmony`);
  assert.equal(c, true, `A stays alive in harmony`);
  assert.equal(d, false, `A cell dies of overpopulation with`);
});

test(`A cell knows the rules if it's dead`, function(assert) {
  const a = reviveEh([false, false, false, false, false, false, false, false]);
  const b = reviveEh([false, true, false, false, true, false, false, false]);
  const c = reviveEh([false, true, false, true, true, false, false, false]);
  const d = reviveEh([true, true, true, false, true, false, false, false]);

  assert.equal(a, false, `A cell does not revive`);
  assert.equal(b, false, `A cell does not revive`);
  assert.equal(c, true, `A cell revives with a little help from its friends`);
  assert.equal(d, false, `A cell does not revive`);
});
