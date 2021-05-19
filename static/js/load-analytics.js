!function () {
  var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
    analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"]; analytics.factory = function (e) { return function () { var t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics } }; for (var e = 0; e < analytics.methods.length; e++) { var key = analytics.methods[e]; analytics[key] = analytics.factory(key) } analytics.load = function (key, e) { var t = document.createElement("script"); t.type = "text/javascript"; t.async = !0; t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(t, n); analytics._loadOptions = e }; analytics._writeKey = "rYGVGUlp4Tx6Brh9OikQDcGwmxRXtHnO"; analytics.SNIPPET_VERSION = "4.13.2";
    analytics.load("rYGVGUlp4Tx6Brh9OikQDcGwmxRXtHnO");
    analytics.page();
  }
}();

/*
!function (h, o, t, j, a, r) {
  h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
  h._hjSettings = { hjid: 1822641, hjsv: 6 };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script'); r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
}(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
*/

!function (ss) {
  window.ldfdr = function () { (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments).concat(ss)); };
  (function (d, s) {
    fs = d.getElementsByTagName(s)[0];
    function ce(src) {
      var cs = d.createElement(s);
      cs.src = src;
      setTimeout(function () { fs.parentNode.insertBefore(cs, fs) }, 1);
    }; ce('https://sc.lfeeder.com/lftracker_v1_' + ss + '.js');
  })(document, 'script');
}('Xbp1oaEBk1L8EdVj');