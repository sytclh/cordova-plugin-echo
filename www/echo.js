var Echo = /** @class */ (function () {
  function Echo() {
  }
  Echo.prototype.echo = function (successCallback, params) {
      cordova.exec(successCallback, successCallback, Echo.pluginName, "echo", [params]);
  };
  Echo.pluginName = "Echo";
  return Echo;
}());
export default Echo;
