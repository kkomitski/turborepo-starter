import processInstrument from "@/lib/apac/processInstrument";

const o = {
  urlParams: null,
  instrumentApiKey: "ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9",
  cdnURL: "https://cdn.cmcmarkets.com/bonsai/",
  jsonFeeds: [],
  region: "gb",
  language: "en",
  cdnImage: function (file) {
    return this.cdnURL + "images/" + file;
  },
  initUrlParams: function () {
    this.urlParams = new URLSearchParams(window.location.search);
  },
  updateUrlParams: function () {
    history.replaceState(
      null,
      null,
      window.location.pathname + "?" + this.urlParams.toString()
    );
  },
  //check if string has no content
  isEmpty: function (str) {
    return !str || str.length === 0;
  },
  //check if string has no content or has whitespace
  isBlank: function (str) {
    return !str || /^\s*$/.test(str);
  },
  //map a number from one range to another (i.e. mapRange(5,0,10,0,50) => 25)
  mapRange: function (num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  },
  stringToSlug: function (str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

    return str;
  },
  Debouncer: class {
    constructor(timeout) {
      this.timer = null;
      this.timeout = timeout;
    }
    start(func) {
      this.func = func;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.func.apply(null, []);
      }, this.timeout);
    }
  },
  timeout: function (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  postJSON: async function (data, endpoint) {
    try {
      const response = await fetch(endpoint, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
      // console.log("Success:", result);
    } catch (error) {
      // console.error("Error:", error);
    }
  },
  registerJSON: function (jsonUrl) {
    var key = jsonUrl;
    if (!(key in this.jsonFeeds)) {
      this.jsonFeeds[key] = new Promise(async (resolve, reject) => {
        try {
          var r = await fetch(jsonUrl);
          if (!r.ok) throw new Error("Something went wrong fetching data");
          r = await r.json();
          resolve(r);
        } catch (err) {}
      });
    }
    return this.jsonFeeds[key];
  },
  getJSON: async function (jsonUrl) {
    this.registerJSON(jsonUrl);
    Promise.resolve(this.jsonFeeds[jsonUrl]).then((r) => {
      this.jsonFeeds[jsonUrl] = r;
    });
    return this.jsonFeeds[jsonUrl];
  },
  getInstrumentData: async function (feed, stockCode) {
    let feedURL;
    switch (feed) {
      case "everything":
        feedURL = `https://oaf.cmcmarkets.com/instruments/getEverything/${stockCode}?key=${this.instrumentApiKey}`;
        break;
      case "general":
        feedURL = `https://oaf.cmcmarkets.com/json/instruments/${stockCode}_${this.region}.json`;
        break;
      case "price_change":
        feedURL = `https://oaf.cmcmarkets.com/instruments/priceChange/${stockCode}?key=${this.instrumentApiKey}`;
        break;
    }
    const r = await this.getJSON(feedURL);
    return r;
  },
  getInstrumentAttr: async function (feed, stockCode, attr) {
    const r = await this.getInstrumentData(feed, stockCode);
    return processInstrument(r, feed, stockCode, attr);
  },
};

export default o;
