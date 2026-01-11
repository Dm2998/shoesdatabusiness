/* ===============================
    VANTA CLOUDS BACKGROUND
================================ */

window.addEventListener("DOMContentLoaded", function () {
  if (window.VANTA && window.VANTA.CLOUDS) {
    window.VANTA.CLOUDS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      backgroundColor: 0xffffff,
      skyColor: 0x68b8d7,
      cloudColor: 0xadc1de,
      cloudShadowColor: 0x183550,
      sunColor: 0xff9919,
      sunGlareColor: 0xff6633,
      sunlightColor: 0xff9933,
      speed: 1.4
    });
  }
});
