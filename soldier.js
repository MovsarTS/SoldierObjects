// Характеристики персонажа:
const soldier = {
  name: "Арнольд",
  health: 10,
  weapon: {
    model: ["Автомат М4"],
    cartridges: 30,
  },
  supplies: 3,

  // Действия персонажа:
  shoot: function () {},
  recharge: function () {},
  wound: function () {},
};

/* Возможности персонажа */
// Стрелять:
soldier.shoot();
// Перезарядить:
soldier.recharge();
// Ранить:
soldier.wound();
