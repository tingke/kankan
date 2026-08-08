(function (win) {
  var tid;
  function refreshRem() {
    let clientWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = (clientWidth * 100) / 1920 + 'px';
  }

  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    },
    false
  );
  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );

  refreshRem();

  win.hua.common();
})(window);
