const days = [
  {
    date: "11.19",
    weekday: "周四",
    title: "上野西方艺术与谷根千",
    summary: "抵达东京后以住宿周边为中心，先看透纳与西方艺术，再沿旧东京街巷慢慢走回东上野。",
    stops: [
      ["08:00", "抵达成田机场 T2", "入境后乘京成 Skyliner 前往京成上野，酒店寄存行李。", "成田空港 第2ターミナル"],
      ["11:30", "そば処 つたや", "推荐菜：鸭南蛮荞麦面、天妇罗荞麦面、季节荞麦面。", "そば処 つたや 上野"],
      ["13:00", "国立西洋美术馆", "观看透纳展、松方收藏与常设展，也别错过勒·柯布西耶设计的馆舍。", "国立西洋美術館"],
      ["16:30", "谷中与根津散步", "国际儿童图书馆、谷中墓园、上野樱木至根津，途中进入一家老式喫茶店。", "谷中霊園"],
      ["19:00", "味の笛 本店", "推荐菜：刺身、烤鱼、煮物、鱼糕和日本酒。", "味の笛 本店 御徒町"]
    ],
    return: "晚餐后沿春日通向东步行约8—10分钟回酒店。走照明良好的主路，避免穿行阿美横町内部窄巷。"
  },
  {
    date: "11.20",
    weekday: "周五",
    title: "近现代艺术、旧书街与银座夜晚",
    summary: "从日本近现代艺术进入神保町的旧书世界，沿皇居外围走到银座，最后用一晚正式鸡尾酒收尾。",
    stops: [
      ["10:00", "东京国立近代美术馆", "重点观看日本近现代艺术常设收藏，特展以临近日期公布信息为准。", "東京国立近代美術館"],
      ["13:20", "ライスカレー まんてん", "推荐菜：咖喱饭、炸猪排咖喱、可乐饼咖喱。", "ライスカレー まんてん 神保町"],
      ["14:00", "神保町古书店街", "寻找艺术书、摄影集、旧杂志、版画和昭和风格喫茶店。", "神保町古書店街"],
      ["16:00", "北之丸公园至丸之内", "沿皇居护城河步行，经北之丸公园与丸之内前往有乐町。", "北の丸公園"],
      ["18:00", "鳥八 有楽町", "推荐菜：ふりそで烧鸟、鸡肉丸、鸡翅、牛杂煮与柑橘沙瓦。", "鳥八 有楽町"],
      ["20:30", "Punch Room Tokyo", "Tokyo EDITION Ginza二层。建议预约单人座位，计划22:15左右离开。", "Punch Room Tokyo"]
    ],
    return: "从银座站乘银座线直达上野广小路站，沿春日通向东步行约8—10分钟。预计23:00前抵达酒店。"
  },
  {
    date: "11.21",
    weekday: "周六",
    title: "青山设计、Patagonia与池袋酒吧",
    summary: "从明治神宫的树林进入神宫前与南青山，以建筑、设计师街铺和Vintage为主，晚上前往池袋。",
    stops: [
      ["09:00", "明治神宫", "从原宿口进入，参拜后返回神宫前方向。", "明治神宮"],
      ["10:30", "神宫前后街", "走神宫前三、四丁目支路，避开竹下通，寻找设计师品牌、古着、眼镜与生活方式店。", "神宮前4丁目"],
      ["12:00", "Patagonia 原宿 Outlet", "先看折扣款与特别库存。", "パタゴニア 東京・原宿 アウトレット"],
      ["13:15", "とんかつ まい泉 青山本店", "推荐菜：腰内猪排、里脊猪排、炸猪排三明治。", "とんかつ まい泉 青山本店"],
      ["14:30", "表参道与南青山", "经Prada青山与根津美术馆外围，继续逛后街与建筑。", "Prada 青山店"],
      ["16:30", "Patagonia 渋谷店", "查看正价完整品类。", "パタゴニア 東京・渋谷"],
      ["18:30", "武蔵野うどん うちたて家", "推荐菜：肉汁蘸乌冬、鸭肉蘸乌冬、咖喱蘸乌冬。", "武蔵野うどん うちたて家"],
      ["20:30", "Bar LIBRE", "预约单人吧台座，计划22:15—22:30离开。", "Bar LIBRE 池袋"]
    ],
    return: "从池袋站乘JR山手线外环方向至御徒町站，再沿春日通向东步行约8分钟。饮酒后疲劳可直接打车。"
  },
  {
    date: "11.22",
    weekday: "周日",
    title: "当代艺术、清澄白河与神乐坂",
    summary: "白天留给当代艺术与东京咖啡文化，傍晚沿神乐坂的坡道、神社与旧花街小巷进入夜晚。",
    stops: [
      ["10:00", "东京都现代美术馆", "安排约三小时观看当代艺术展览与MOT Collection，具体展览以开票信息为准。", "東京都現代美術館"],
      ["13:30", "深川宿 本店", "推荐菜：ぶっかけ深川めし、浜松風深川めし、烤蛤蜊。", "深川宿 本店"],
      ["14:30", "清澄白河", "沿深川江户资料馆通与清澄庭园外围散步，选择一家有座位的独立咖啡馆。", "清澄白河駅"],
      ["16:30", "赤城神社", "从牛込神乐坂开始，观看隈研吾监修重建的现代神社建筑。", "赤城神社 神楽坂"],
      ["17:15", "神乐坂旧花街", "经善国寺、兵库横丁与かくれんぼ横丁，感受傍晚亮灯后的石板小巷。", "兵庫横丁"],
      ["19:00", "神楽坂カド", "推荐菜：季节烤鱼、煮物、玉子烧、炸物与茶泡饭。", "神楽坂カド"]
    ],
    return: "从牛込神乐坂站乘都营大江户线直达新御徒町站，无需换乘。预计21:15前回到酒店。"
  },
  {
    date: "11.23",
    weekday: "周一",
    title: "代官山、中目黑与返程",
    summary: "最后半天留给低层街区、Vintage与生活方式店，午后回东上野取行李，预留充分时间前往成田。",
    stops: [
      ["08:30", "退房并寄存行李", "从仲御徒町乘日比谷线至中目黑，再换东横线一站到代官山。", "Ueno Guest House Siesta"],
      ["10:15", "代官山街区", "经八幡通支路、旧山手通与T-SITE，寻找Vintage、设计师二手店、眼镜与书店。", "代官山 T-SITE"],
      ["12:00", "中目黑", "沿目黑川两侧继续逛街边店。", "中目黒駅"],
      ["12:30", "Onigily Cafe", "推荐菜：烤味噌饭团、明太子饭团、鲑鱼饭团、玉子烧和味噌汤。", "Onigily Cafe 中目黒"],
      ["13:45", "返回酒店取行李", "从中目黑乘日比谷线直达仲御徒町。", "Ueno Guest House Siesta"],
      ["15:40", "Skyliner 前往成田", "由京成上野出发，目标17:00前抵达成田机场T1。", "京成上野駅"]
    ],
    return: "20:10乘CA146离开东京。抵达机场后优先完成值机与安检，再安排晚餐。"
  }
];

const tabs = document.querySelector(".day-tabs");
const panel = document.querySelector(".day-panel");

function mapUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderDay(index) {
  const day = days[index];
  document.querySelectorAll(".day-tab").forEach((tab, tabIndex) => {
    tab.setAttribute("aria-selected", String(tabIndex === index));
  });

  panel.innerHTML = `
    <div class="day-header">
      <h3>${day.title}</h3>
      <p class="day-summary">${day.summary}</p>
    </div>
    <div class="timeline">
      ${day.stops.map(([time, title, detail, map]) => `
        <article class="stop">
          <time class="stop-time">${time}</time>
          <div>
            <h4>${title}</h4>
            <p>${detail}</p>
          </div>
          <a class="stop-map" href="${mapUrl(map)}" target="_blank" rel="noreferrer" aria-label="在 Google Maps 打开 ${title}" title="打开 Google Maps">↗</a>
        </article>
      `).join("")}
    </div>
    <div class="return">
      <strong>返程安排</strong>
      <p>${day.return}</p>
    </div>
  `;
}

days.forEach((day, index) => {
  const button = document.createElement("button");
  button.className = "day-tab";
  button.type = "button";
  button.role = "tab";
  button.innerHTML = `<strong>${day.date}</strong><span>${day.weekday}</span>`;
  button.setAttribute("aria-selected", String(index === 0));
  button.addEventListener("click", () => renderDay(index));
  tabs.appendChild(button);
});

document.querySelectorAll('.checklist input').forEach((checkbox, index) => {
  const key = `tokyo-check-${index}`;
  checkbox.checked = localStorage.getItem(key) === "true";
  checkbox.addEventListener("change", () => localStorage.setItem(key, checkbox.checked));
});

renderDay(0);
