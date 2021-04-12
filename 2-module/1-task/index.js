function sumSalary(salaries) {
  let salariesSum = 0
  for (let key in salaries) {
    let keys = salaries[key]
    if(isFinite(keys)){
      salariesSum = salariesSum + keys
    } else {
    continue
    }
  }
  return salariesSum
}
