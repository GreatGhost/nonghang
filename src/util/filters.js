// 转小写
let lower = value => value.toLowerCase();
// 转大写
let upper = value => value.toUpperCase();
let currencyStyle = (value, style) => { // 货币格式
  /**
   * style: 
   *   currency：货币
   *   number： 数字格式
   */
  if(style == 'number') { // 数字格式
    return parseFloat(value.replace(/[^\d\.-]/g, ""));
  } else { // 货币格式, 并保留2位小数
    var n = 2;
    value = parseFloat((value + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = value.split(".")[0].split("").reverse(),
      r = value.split(".")[1];
    var t = "";
    for (var i = 0; i < l.length; i++) {
      t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
  }
}
// 手机号中间4位星号处理
let formatMobile=(tel)=>{
    tel = "" + tel;
    var reg=/(\d{3})\d{4}(\d{4})/;
    var tel1 = tel.replace(reg, "$1****$2")
    return tel1;
}
export {
  lower,
  upper,
  currencyStyle,
  formatMobile
}