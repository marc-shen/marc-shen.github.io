const ap = new APlayer({
  container: document.getElementById("aplayer"),
  mini: false,
  autoplay: false,
  theme: "#FADFA3",
  loop: "all",
  order: "random",
  preload: "auto",
  volume: 0.7,
  mutex: true,
  listFolded: false,
  listMaxHeight: 90,
  lrcType: 3,
  audio: [
    {
      name: "一生有你",
      artist: "水木年华",
      url: "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E%20-%20%E4%B8%80%E7%94%9F%E6%9C%89%E4%BD%A0.mp3",
      cover:
        "http://p2.music.126.net/4Tz-EfqUy0mbz6rJFRtrnA==/120946279073830.jpg?param=130y130",
      lyric:
        "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E4%B8%80%E7%94%9F%E6%9C%89%E4%BD%A0-%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E.lrc",
      theme: "#ebd0c2",
    },
    {
      name: "好好(想把你写成一首歌)",
      artist: "五月天",
      url: "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E4%BA%94%E6%9C%88%E5%A4%A9%20-%20%E5%A5%BD%E5%A5%BD%20(%E6%83%B3%E6%8A%8A%E4%BD%A0%E5%86%99%E6%88%90%E4%B8%80%E9%A6%96%E6%AD%8C).mp3",
      cover:
        "http://p2.music.126.net/lt4R_XbCZsT-yzRfWs9VfQ==/3434874331529456.jpg?param=130y130",
      lyric:
        "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E5%A5%BD%E5%A5%BD+(%E6%83%B3%E6%8A%8A%E4%BD%A0%E5%86%99%E6%88%90%E4%B8%80%E9%A6%96%E6%AD%8C)-%E4%BA%94%E6%9C%88%E5%A4%A9.lrc",
      theme: "#ebd0c2",
    },
    {
      name: "海棠花忆",
      artist: "封茗囧菌",
      url: "http://music.163.com/song/media/outer/url?id=1338096419.mp3",
      cover:
        "http://p2.music.126.net/YbyP5f7ZSTlyDQiSkF5tbA==/109951163780883546.jpg?param=130y130",
      lyric:
        "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E6%B5%B7%E6%A3%A0%E8%8A%B1%E5%BF%86%20-%20%E5%B0%81%E8%8C%97%E5%9B%A7%E8%8F%8C.lrcx",
      theme: "#46718b",
    },
    {
      name: "旅行",
      artist: "许巍",
      url: "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E8%AE%B8%E5%B7%8D%20-%20%E6%97%85%E8%A1%8C.mp3",
      cover:
        "http://p1.music.126.net/GoiTB6oG3vQWntnCjKRw0g==/109951163092691594.jpg?param=130y130",
      lyric:
        "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E6%97%85%E8%A1%8C-%E8%AE%B8%E5%B7%8D.lrc",
      theme: "#46718b",
    },
    {
      name: "时光卷轴",
      artist: "封茗囧菌 双笙",
      url: "http://music.163.com/song/media/outer/url?id=1344088470.mp3",
      cover:
        "http://p2.music.126.net/WEvnP_ZexHMy4bHFLbhdAA==/109951163838777596.jpg?param=130y130",
      lyric:
        "https://github.com/marc-shen/marc-shen.github.io/raw/master/media/files/%E6%97%B6%E5%85%89%E5%8D%B7%E8%BD%B4-%E5%B0%81%E8%8C%97%E5%9B%A7%E8%8F%8C,%E5%8F%8C%E7%AC%99.lrc",
      theme: "#46718b",
    },
  ],
});
