/**
 * @description 封装的工具类
 * @author chaizhiyang
 */
class Util {
  /**
   * 保留小数点后两位
   * @param  {Number} data 需要处理的数值
   * @return {Number} 保留两位小数的数值
   * @author Czy 2018-10-25
   */
  returnFloat(data) {
    return data.toFixed(2)
  }
  //el-table表格数据的处理
  formatTableFont(val) {
    //格式化数据，为空或0或null时，显示无
    let formatTableData;
    if (!val) {
      formatTableData = "-";
    } else {
      formatTableData = val;
    }
    return formatTableData;
  }
  //el-table表格数据的处理
  formatTableData(val) {
    //格式化数据，为空或0或null时，显示无
    let formatTableData;
    if (!val) {
      formatTableData = "0";
    } else {
      formatTableData = val;
    }
    return formatTableData;
  }
  // 返回性别
  sexStatus(status) {
    if (!status) return
    switch (status) {
      case 1:
        return '男';
        break;
      case 2:
        return '女';
        break;
      default:
        return '未知';
        break;
    }
  }
  // 过滤手机号 中间出现星号
  setMobileStar(tel) {
    tel = "" + tel;
    var reg = /(\d{3})\d{4}(\d{4})/;
    var tel1 = tel.replace(reg, "$1****$2")
    return tel1;
  }

  /**
   * 正则验证
   * @param {Number,String} str 需要验证的内容如：手机号，邮箱等
   * @param {String} type 需要正则验证的类型
   * @return {Boolean} true: 正则通过，输入无误。false: 正则验证失败，输入有误
   * @author Czy 2018-10-25
   */
  checkStr(str, type) {
    switch (type) {
      case 'phone': //手机号码
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
      case 'tel': //座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'card': //身份证
        return /^\d{15}|\d{18}$/.test(str);
      case 'account': //账号 ，长度4～16之间，只能包含数字，中文，字母和下划线
        return /^(\w|[\u4E00-\u9FA5])*$/.test(str);
      case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{6,18}$/.test(str);
      case 'postal': //邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str);
      case 'QQ': //QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case 'email': //邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'money': //金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str);
      case 'URL': //网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
      case 'IP': //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
      case 'date': //日期时间
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str);
      case 'number': //数字
        return /^[0-9]$/.test(str);
      case 'english': //英文
        return /^[a-zA-Z]+$/.test(str);
      case 'chinese': //中文
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower': //小写
        return /^[a-z]+$/.test(str);
      case 'upper': //大写
        return /^[A-Z]+$/.test(str);
      case 'HTML': //HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      default:
        return true;
    }
  }
  /**
   * 类型判断
   * @param {*} o 进行判断的内容
   * @return {Boolean} true: 是该类型，false: 不是该类型
   * @author Czy 2018-10-25
   */
  isString(o) { //是否字符串
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
  }
  isNumber(o) { //是否数字
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
  }
  isObj(o) { //是否对象
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
  }
  isArray(o) { //是否数组
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
  }
  isDate(o) { //是否时间
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
  }
  isBoolean(o) { //是否boolean
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
  }
  isFunction(o) { //是否函数
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
  }
  isNull(o) { //是否为null
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
  }
  isUndefined(o) { //是否undefined
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
  }
  isFalse(o) {
    if (o == '' || o == undefined || o == null || o == 'null' || o == 'undefined' || o == 0 || o == false || o == NaN) {
      return true
    }
    return false
  }
  isTrue(o) {
    return !this.isFalse(o)
  }
  // 找到一个表单项目
  findInputItem(list, id) {
    return list.find(tmp => tmp.id === id);
  }


  //节流throttle代码：
  throttle(method, delay, duration) {
    var that = this;
    var timer = this.timer;
    var begin = new Date().getTime();
    return function () {
      var current = new Date().getTime();
      clearTimeout(timer);
      if (current - begin >= duration) {
        method();
        begin = current;
      } else {
        that.timer = setTimeout(function () {
          method();
        }, delay);
      }
    };
  }

  //防抖debounce代码：
  debounce(fn, delay) {
    var timeout = null; // 创建一个标记用来存放定时器的返回值
    return function () {
      // 每当用户输入的时候把前一个 setTimeout clear 掉
      clearTimeout(timeout);
      // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
      timeout = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    };
  }
  /**
   * 存储localStorage
   */
  setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string'||typeof content !=='number') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
  }

  /**
   * 获取localStorage
   */
  getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
  }

  /**
   * 删除localStorage
   */
  removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
  }
  openAppOrAndroid=() =>{
            var u = navigator.userAgent;
            var ua = navigator.userAgent.toLowerCase();
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (ua.match(/MicroMessenger/i) == "micromessenger") { //微信内置浏览器+应用宝链接
              window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
            } else {
              if (isiOS) {
                console.log('是ioss')
                window.location.href = 'https://linkm.ke.com/?schema=lianjiabeike%253A%252F%252Fershoufang%252Fhome%253FcityID%253D330100&redirect_url=https%253A%252F%252Fitunes.apple.com%252Fcn%252Fapp%252F%25E8%25B4%259D%25E5%25A3%25B3%25E6%2589%25BE%25E6%2588%25BF-%25E4%25BA%258C%25E6%2589%258B%25E6%2596%25B0%25E6%2588%25BF%25E7%25A7%259F%25E6%2588%25BF%25E6%2589%25BE%25E6%2588%25BF%25E5%25A4%25A7%25E5%25B9%25B3%25E5%258F%25B0%252Fid1347663353%253Fl%253Dzh%2526ls%253D1%2526mt%253D8&ssid=&uuid=&refer=&ucid=&current_url=&sign=57f19c45987015881d2c151d82c1adb2'
              } else if (isAndroid) {
                window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
              } else { //PC 端
                window.location.href = 'http://tstatics.iyuwan.com/files/apk/201605/Iyuwan.apk'
              }
            }
          }
}
export default new Util();