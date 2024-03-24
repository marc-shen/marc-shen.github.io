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
      url: "https://rl-sycdn.kuwo.cn/8a2555a8c66ab51f2b389b8c01a69869/660029a8/resource/n3/92/78/870355913.mp3?from=vip",
      cover:
        "http://p2.music.126.net/4Tz-EfqUy0mbz6rJFRtrnA==/120946279073830.jpg?param=130y130",
      lyric: "https://marc.stic.work/media/file/一生有你-水木年华.lrc",
      theme: "#ebd0c2",
    },
    {
      name: "好好(想把你写成一首歌)",
      artist: "五月天",
      url: "https://lv-sycdn.kuwo.cn/20cea583ac8e86aaa6f8de318f5973ed/66002d6e/resource/30106/trackmedia/M500003hxirX20RmQa.mp3?from=vip",
      cover:
        "http://p2.music.126.net/lt4R_XbCZsT-yzRfWs9VfQ==/3434874331529456.jpg?param=130y130",
      lyric:
        "https://marc.stic.work/media/file/好好+(想把你写成一首歌)-五月天.lrc",
      theme: "#ebd0c2",
    },
    {
      name: "海棠花忆",
      artist: "封茗囧菌",
      url: "http://music.163.com/song/media/outer/url?id=1338096419.mp3",
      cover:
        "http://p2.music.126.net/YbyP5f7ZSTlyDQiSkF5tbA==/109951163780883546.jpg?param=130y130",
      lyric: "https://marc.stic.work/media/file/海棠花忆 - 封茗囧菌.lrcx",
      theme: "#46718b",
    },
    {
      name: "旅行",
      artist: "许巍",
      url: "https://ra-sycdn.kuwo.cn/721fa5ccfc004f09f13588466d3862cf/66002df5/resource/n1/128/55/13/231276665.mp3?from=vip",
      cover:
        "http://p1.music.126.net/GoiTB6oG3vQWntnCjKRw0g==/109951163092691594.jpg?param=130y130",
      lyric: "https://marc.stic.work/media/file/旅行-许巍.lrc",
      theme: "#46718b",
    },
    {
      name: "时光卷轴",
      artist: "封茗囧菌 双笙",
      url: "http://music.163.com/song/media/outer/url?id=1344088470.mp3",
      cover:
        "http://p2.music.126.net/WEvnP_ZexHMy4bHFLbhdAA==/109951163838777596.jpg?param=130y130",
      lyric: "https://marc.stic.work/media/file/时光卷轴-封茗囧菌,双笙.lrc",
      theme: "#46718b",
    },
  ],
});
