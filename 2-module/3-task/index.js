let calculator = {
  x : 0,
  y : 0,
  read(x,y) {
      this.x = x;
      this.y = y;
  },
  
  sum() {
      return this.x + this.y;
  },
  
  mul() {
      return this.x * this.y
  }
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
