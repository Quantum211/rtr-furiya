"use strict";

let place = `1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64`;
let trend = ``; // No Data
let banner = ``; // No Data
let guild = `+39 STICAZZI
Eternals
ᶜʸᵇᵉ₹ M̶ᵃĐ Z̶ˡᵃʸᵉʳᶻ
Screaming O’possumVN
Cybertron
Asgard
Deicide
Knight Templars
My Pack
Black Bull
Templars
The Way
Horvarthers
Imperial Guards
Eternal Templars
Phoenix Reborn
Zero to Hero
X-treme
JEDI Guardians
Jokerz
Phoenix Apes Legion
不死鳥 -Phoenix-
𝐄𝐭𝐞𝐫𝐧𝐚𝐥 𝐅𝐥𝐚𝐦𝐞
Wolfangs
Raging Ants
Dead End
☆ Family ☆
Light Side
The Continental
Vanguard
Synergy
Happy Heroes
₮₩ł₴₮ɆĐ
☆ RED BULL ☆
Wolves of Eternity
Mini Soldiers
ＢΞＬＬＵＭ
29 Homosexual Ninjas
Howling BVB Owls
ςᴀʀɴᴀɢᴇ ɪɴς
THE HIVE
Power
Zenn-La
Royal Soldiers
Vampire Kingdom
Lords of the Sith
Might of Darkness
Genesis
Inglourious Basterds
Elysium³
Outsiderz Family
「ꑛꍟ꒒꒒'ꌚ × ꏸꑛꋫꉣ꓅ꍟ꒓」
The Wraiths
Uni Proelium
CMG Apocalypse
Crimson Skies
Straw Hat Pirates
LightGhosts
Phoenix Reborn
The Party Bus
Demons
Nomaddz Society
Infinity Blade
Vader's Army`;
let score = `17006
16821
16807
16777
16739
16724
16610
16458
16450
16362
16355
16350
16306
16297
16274
16243
16100
16073
16063
16041
16020
15924
15890
15793
15769
15754
15747
15695
15590
15586
15492
15410
15383
15327
15299
15297
15229
15224
15003
14437
14013
13949
13588
13583
13363
13173
13074
12607
12451
12193
11537
11401
11149
10417
10274
8980
8659
7339
7106
6839
6056
6041
5387
5265`;
let rank = `14
29
31

40
42
58
77
81
92
94
97
113
117
126
131
185

199
201


255
309
329
342







688

715



























`;
let server = `75
205
206
240
110
116
53
281
157
155
547
154
101
178
281
247
536
175
349
89
75
421
458
753
41
104
544
200
32
310
58
204
361
739
94
104
474
195
107
20
290
863
185
104
116
73
877
135
432
136
880
80
464
446
188
331
290
436
99
204
561
513
666
370`;
let day = `19
19
19
19
19
19
19
19
19
19
19
19
19
19
19
19
19
18
19
19
18
18
19
19
19
19
18
17
17
16
16
17
18
19
16
19
16
16
16
15
15
18
13
14
16
13
18
12
12
11
19
10
11
9
9
7
6
5
4
3
2
2
2
1`;

// Converts each passed in object into an array:
const splitterFunc = function (obj) {
  // console.log(obj);
  // obj = obj.split("\n");
  // console.log(obj);
  obj = obj.toString().replaceAll(",", "").split("\n");
  // console.log(obj);
  return obj;
};
place = splitterFunc(place);
guild = splitterFunc(guild);
score = splitterFunc(score);
rank = splitterFunc(rank);
server = splitterFunc(server);
day = splitterFunc(day);

const tbodyTr = document.querySelectorAll("tbody tr");
tbodyTr.forEach(function (element) {
  element.remove();
});

// console.log(place);

//Function to fill the table:
place.forEach(function (element, i) {
  // TR template for the innerHTML method.
  const template = `
  <tr>
    <td class="td_place">${place[i]}</td>
    <td class="td_trend">
      <!-- <img class="arrow up_arrow" src="downArr.webp" alt="Arrow" /> -->
      <span class="index">&mdash;</span>
    </td>
    <td class="td_banner">
      <img
        class="banner"
        src="banners/${server[i]}-${guild[i].replaceAll(" ", "_")}.webp"
        alt="Banner"
      />
    </td>
    <td class="td_guild">
      <span>${guild[i]}</span>
    </td>
    <td class="td_score"><span>${score[i]}</span></td>
    <td class="td_rank"><span>${rank[i] ? rank[i] : "—"}</span></td>
    <td class="td_server"><span>${server[i]}</span></td>
    <td class="td_day"><span>${day[i]}</span></td>
    <td class="td__server-day">
      <span class="td__server">${server[i]}</span
      ><span class="td__day">${day[i]}</span>
    </td>
  </tr>
  `;
  document.querySelector("tbody").insertAdjacentHTML("beforeend", template);
});
