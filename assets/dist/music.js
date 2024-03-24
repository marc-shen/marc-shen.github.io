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
      url: "http://music.163.com/song/media/outer/url?id=376417.mp3",
      cover:
        "http://p2.music.126.net/4Tz-EfqUy0mbz6rJFRtrnA==/120946279073830.jpg?param=130y130",
      theme: "#ebd0c2",
    },
    {
      name: "好好(想把你写成一首歌)",
      artist: "五月天",
      url: "http://music.163.com/song/media/outer/url?id=422094253.mp3",
      cover:
        "http://p2.music.126.net/lt4R_XbCZsT-yzRfWs9VfQ==/3434874331529456.jpg?param=130y130",
      theme: "#ebd0c2",
    },
    {
      name: "海棠花忆",
      artist: "封茗囧菌",
      url: "http://music.163.com/song/media/outer/url?id=1338096419.mp3",
      cover:
        "http://p2.music.126.net/YbyP5f7ZSTlyDQiSkF5tbA==/109951163780883546.jpg?param=130y130",
      theme: "#46718b",
    },
    {
      name: "旅行",
      artist: "许巍",
      url: "http://music.163.com/song/media/outer/url?id=167971.mp3",
      cover:
        "http://p1.music.126.net/GoiTB6oG3vQWntnCjKRw0g==/109951163092691594.jpg?param=130y130",
      theme: "#46718b",
    },
  ],
});
