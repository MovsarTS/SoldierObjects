// Характеристики персонажа:
const soldier = {
  name: "Арнольд",
  health: 0,
  weapon: {
    model: ["Автомат М4"],
    cartridges: 30,
  },
  supplies: 3,

  // Действия персонажа:
  shoot: function () {
    if (this.weapon.cartridges === 0) {
      console.log("Обойма пуста. Перезарядись!")
    } else {
      this.weapon.cartridges = this.weapon.cartridges - 1;
      console.log("*Бах-Бах* |Звуки выстрела|")
    }
  },
  recharge: function () {
    if (this.supplies === 0) {
      console.log("Не осталось припасов")
    } else {
      soldier.weapon.cartridges = 30;
      console.log("Перезарядка... |Теперь в магазине 30 патронов|")
    }
  },
  wound: function () {
    if (this.health <= 1) {
      this.health = this.health - 1;
      console.log("Ты проиграл |Игра окончена|")
    } else {
      this.health = this.health - 1;
      console.log(`Тебя ранили (-1) |Текущее здоровье: ${this.health}|`)
  }
  }
}

/* Возможности персонажа */
// Стрелять:
soldier.shoot();
// Перезарядить:
soldier.recharge();
// Ранить:
soldier.wound();
