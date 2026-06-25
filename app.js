const DREAMS = [
  // HAYVANLAR
  {id:1,name:"YÄ±lan",slug:"yilan",category:"hayvanlar",
   keywords:["yÄ±lan gÃ¶rmek","yÄ±lan Ä±sÄ±rmasÄ±","yÄ±lan kovalamak"],
   meaning:"DÃ¶nÃ¼ÅŸÃ¼mÃ¼n, gizli tehlikenin veya ÅŸifanÄ±n habercisidir. YÄ±lan enerji ve deÄŸiÅŸim sembolÃ¼dÃ¼r.",
   detail:"RÃ¼yada yÄ±lan gÃ¶rmek hayatÄ±nÄ±zda kÃ¶klÃ¼ bir dÃ¶nÃ¼ÅŸÃ¼m sÃ¼recine girdiÄŸinize iÅŸaret eder. YÄ±lanÄ±n sizi Ä±sÄ±rmasÄ±, yakÄ±n Ã§evrenizde sizi sarsacak bir ihaneti ya da sÃ¼rpriz bir geliÅŸmeyi mÃ¼jdeler. Sizi kovalayan yÄ±lan ise kaÃ§Ä±ndÄ±ÄŸÄ±nÄ±z bir gerÃ§ekle yÃ¼zleÅŸme zamanÄ±nÄ±n geldiÄŸini sÃ¶yler. Beyaz yÄ±lan bereket ve ÅŸansÄ±, siyah yÄ±lan farkÄ±nda olmadÄ±ÄŸÄ±nÄ±z gizli bir kaygÄ±yÄ± simgeler."},
  {id:2,name:"KÃ¶pek",slug:"kopek",category:"hayvanlar",
   keywords:["kÃ¶pek gÃ¶rmek","kÃ¶pek Ä±sÄ±rmasÄ±","saldÄ±ran kÃ¶pek"],
   meaning:"Sadakat, dostluk ve gÃ¼venin simgesidir. KÃ¶peÄŸin tavrÄ± iliÅŸkileriniz hakkÄ±nda mesaj taÅŸÄ±r.",
   detail:"Sizi seven, dostane bir kÃ¶pek; hayatÄ±nÄ±zdaki sadÄ±k insanlarÄ± ve gÃ¼venli iliÅŸkileri temsil eder. SaldÄ±rgan ya da Ä±sÄ±ran bir kÃ¶pek ise Ã§evrenizde gÃ¼venmemeniz gereken, sizi kÄ±skanan veya zarar verebilecek birinin varlÄ±ÄŸÄ±na iÅŸaret eder. YaralÄ± kÃ¶pek; ihmal ettiÄŸiniz bir arkadaÅŸlÄ±ÄŸÄ±n ya da iliÅŸkinin onarÄ±ma ihtiyacÄ± olduÄŸunu sÃ¶yler."},
  {id:3,name:"Kedi",slug:"kedi",category:"hayvanlar",
   keywords:["kedi gÃ¶rmek","kedi Ä±sÄ±rmasÄ±","siyah kedi"],
   meaning:"Sezgi, baÄŸÄ±msÄ±zlÄ±k ve gizem sembolÃ¼dÃ¼r. KadÄ±nlÄ±k enerjisi ve iÃ§ sesin mesajÄ±dÄ±r.",
   detail:"RÃ¼yada kedi gÃ¶rmek sezgilerinize gÃ¼venmeniz gerektiÄŸine iÅŸaret eder. Beyaz kedi; huzur ve bereket, siyah kedi; belirsizlik veya gÃ¶rmezden geldiÄŸiniz bir his, turuncu kedi ise yaratÄ±cÄ±lÄ±k ve canlÄ±lÄ±k simgeler. Kedi ile oyun oynamak, hayatÄ±nÄ±zdaki baÄŸÄ±msÄ±z ve oyuncu yÃ¶nÃ¼nÃ¼zÃ¼n gÃ¼n yÃ¼zÃ¼ne Ã§Ä±ktÄ±ÄŸÄ±nÄ± gÃ¶sterir."},
  {id:4,name:"At",slug:"at",category:"hayvanlar",
   keywords:["at gÃ¶rmek","ata binmek","yaban atÄ±"],
   meaning:"GÃ¼Ã§, Ã¶zgÃ¼rlÃ¼k ve tutkuyu temsil eder. HayatÄ±nÄ±zÄ±n kontrolÃ¼ ve enerjinizle ilgili mesaj verir.",
   detail:"Ata binmek; hayatÄ±nÄ±zÄ±n kontrolÃ¼nÃ¼n sizde olduÄŸunu, doÄŸru yolda ilerlediÄŸinizi gÃ¶sterir. Kontrol edemediÄŸiniz yabani bir at; disipline edilmesi gereken daÄŸÄ±nÄ±k enerjinizi ya da frenlenemeyen duygularÄ±nÄ±zÄ± temsil eder. Beyaz at baÅŸarÄ± ve nezaketi, siyah at gizemli bir dÃ¶nÃ¼ÅŸÃ¼mÃ¼ simgeler."},
  {id:5,name:"Aslan",slug:"aslan",category:"hayvanlar",
   keywords:["aslan gÃ¶rmek","aslan saldÄ±rÄ±sÄ±","aslan ile konuÅŸmak"],
   meaning:"Cesaret, otorite ve liderliÄŸin simgesidir. GÃ¼Ã§lÃ¼ bir sÄ±nav ya da karÅŸÄ±laÅŸmanÄ±n habercisidir.",
   detail:"RÃ¼yada aslan gÃ¶rmek; hayatÄ±nÄ±zda kendinizden daha gÃ¼Ã§lÃ¼ gÃ¶rdÃ¼ÄŸÃ¼nÃ¼z biriyle ya da zor bir durumla yÃ¼zleÅŸeceÄŸinizi gÃ¶sterir. Aslan sizi takip ediyorsa bu gÃ¼cÃ¼ kendi iÃ§inizde taÅŸÄ±dÄ±ÄŸÄ±nÄ±z anlamÄ±na gelir. Sakin bir aslan; iÃ§inizdeki lideri uyandÄ±rmanÄ±n zamanÄ± geldiÄŸini sÃ¶yler."},
  {id:6,name:"BalÄ±k",slug:"balik",category:"hayvanlar",
   keywords:["balÄ±k gÃ¶rmek","balÄ±k tutmak","Ã¶lÃ¼ balÄ±k"],
   meaning:"Bereket, duygular ve bilinÃ§altÄ±nÄ±n sembolÃ¼dÃ¼r. Duygusal akÄ±ÅŸ ve bolluk mesajÄ± taÅŸÄ±r.",
   detail:"Suda Ã¶zgÃ¼rce yÃ¼zen balÄ±klar; duygusal akÄ±ÅŸÄ±nÄ±zÄ±n iyi olduÄŸunu ve bolluk dÃ¶neminin kapÄ±da olduÄŸunu mÃ¼jdeler. BalÄ±k tutmak; arzuladÄ±ÄŸÄ±nÄ±z bir fÄ±rsatÄ± yakalamak Ã¼zere olduÄŸunuza iÅŸaret eder. Ã–lÃ¼ balÄ±k; iÃ§inizde Ã¶len bir his ya da kaÃ§Ä±rÄ±lan fÄ±rsatlarÄ± temsil eder. BÃ¼yÃ¼k balÄ±k; bÃ¼yÃ¼k kazanÄ±mlarÄ±n yakÄ±n olduÄŸunu simgeler."},
  {id:7,name:"KuÅŸ",slug:"kus",category:"hayvanlar",
   keywords:["kuÅŸ gÃ¶rmek","uÃ§an kuÅŸ","kafesteki kuÅŸ"],
   meaning:"Ã–zgÃ¼rlÃ¼k, haberler ve yÃ¼ksek hedeflerin simgesidir. Ruhun Ã¶zgÃ¼rlÃ¼k arayÄ±ÅŸÄ±nÄ± yansÄ±tÄ±r.",
   detail:"Ã–zgÃ¼rce uÃ§an kuÅŸlar; Ã¶zgÃ¼rlÃ¼k arzunuzu ve hedeflerinize yaklaÅŸtÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir. Kafesteki kuÅŸ; kendinizi sÄ±kÄ±ÅŸmÄ±ÅŸ ya da Ã¶zgÃ¼r hissedemediÄŸinizin iÅŸaretidir. Ã–ten kuÅŸ; yakÄ±nda gÃ¼zel haberler geleceÄŸine, Ã¶lÃ¼ kuÅŸ ise bir dÃ¶nemin kapanacaÄŸÄ±na iÅŸaret eder. Beyaz gÃ¼vercin; barÄ±ÅŸ ve huzuru simgeler."},
  {id:8,name:"Ã–rÃ¼mcek",slug:"orumcek",category:"hayvanlar",
   keywords:["Ã¶rÃ¼mcek gÃ¶rmek","Ã¶rÃ¼mcek aÄŸÄ±","Ã¶rÃ¼mcek Ä±sÄ±rmasÄ±"],
   meaning:"YaratÄ±cÄ±lÄ±k, sabÄ±r ve karmaÅŸÄ±k iliÅŸkilerin simgesidir. AÄŸ kurmak ve baÄŸlantÄ±lar yaratmak.",
   detail:"RÃ¼yada Ã¶rÃ¼mcek gÃ¶rmek; hayatÄ±nÄ±zda dikkatli planlar yapmanÄ±z gerektiÄŸine iÅŸaret eder. Ã–rÃ¼mcek aÄŸÄ±; karmaÅŸÄ±k ancak bir amaca hizmet eden iliÅŸki veya iÅŸ aÄŸlarÄ±nÄ±zÄ± temsil eder. BÃ¼yÃ¼k Ã¶rÃ¼mcek; sizi yÃ¶nlendiren gÃ¼Ã§lÃ¼ bir kadÄ±n enerjiyi ya da baskÄ± hissettiÄŸiniz bir durumu simgeler. Ã–rÃ¼mcek Ä±sÄ±rmasÄ±; farkÄ±nda olmadan birinin tuzaÄŸÄ±na dÃ¼ÅŸtÃ¼ÄŸÃ¼nÃ¼ze iÅŸaret eder."},
  {id:9,name:"ArÄ±",slug:"ari",category:"hayvanlar",
   keywords:["arÄ± gÃ¶rmek","arÄ± Ä±sÄ±rmasÄ±","arÄ± kovanÄ±"],
   meaning:"Ã‡alÄ±ÅŸkanlÄ±k, topluluk ve Ã¶dÃ¼lÃ¼n simgesidir. Emek verilen ÅŸeyin karÅŸÄ±lÄ±ÄŸÄ±nÄ± alma mesajÄ±dÄ±r.",
   detail:"ArÄ± gÃ¶rmek; Ã§alÄ±ÅŸkanlÄ±ÄŸÄ±nÄ±zÄ±n yakÄ±nda meyvesini vereceÄŸine iÅŸaret eder. ArÄ± Ä±sÄ±rmasÄ±; kÃ¼Ã§Ã¼k bir acÄ± ya da Ã§aba karÅŸÄ±lÄ±ÄŸÄ±nda bÃ¼yÃ¼k bir Ã¶dÃ¼l geleceÄŸini sÃ¶yler. ArÄ± kovanÄ±; sosyal Ã§evrenizin hareketli olduÄŸunu ve ekip Ã§alÄ±ÅŸmasÄ±nÄ±n Ã¶nemine dikkat Ã§eker. Bal toplayan arÄ±lar; Ã¼retkenlik ve bolluk dÃ¶neminin yakÄ±n olduÄŸunu mÃ¼jdeler."},
  {id:10,name:"Fare",slug:"fare",category:"hayvanlar",
   keywords:["fare gÃ¶rmek","fare kovalamak","fare yuvasÄ±"],
   meaning:"KÃ¼Ã§Ã¼k kaygÄ±lar, fark edilmemiÅŸ detaylar ve hayatta kalma iÃ§gÃ¼dÃ¼sÃ¼nÃ¼n simgesidir.",
   detail:"RÃ¼yada fare gÃ¶rmek; dikkat etmediÄŸiniz kÃ¼Ã§Ã¼k ama Ã¶nemli bir ayrÄ±ntÄ±nÄ±n varlÄ±ÄŸÄ±na iÅŸaret eder. Fareyi kovalamak; endiÅŸelerinizle yÃ¼zleÅŸme Ã§abanÄ±zÄ± gÃ¶sterir. Ã‡ok sayÄ±da fare; kÃ¼Ã§Ã¼k sorunlarÄ±n birikmesi ve onlarÄ±n getirdiÄŸi bunaltÄ±cÄ± hissi yansÄ±tÄ±r. Fare yuvasÄ±na bakmak ise aile ya da yuva konusundaki gizli endiÅŸeleri simgeler."},
  {id:11,name:"AyÄ±",slug:"ayi",category:"hayvanlar",
   keywords:["ayÄ± gÃ¶rmek","ayÄ± saldÄ±rÄ±sÄ±","anne ayÄ±"],
   meaning:"GÃ¼Ã§, koruma ve iÃ§e Ã§ekilmenin simgesidir. Kendinizi savunma ya da yeniden ÅŸarj olma ihtiyacÄ±.",
   detail:"RÃ¼yada ayÄ± gÃ¶rmek; bÃ¼yÃ¼k bir gÃ¼ce ya da yetki sahibi birine yakÄ±n olduÄŸunuza iÅŸaret eder. Anne ayÄ±; koruyucu iÃ§gÃ¼dÃ¼lerinizi ya da kendinizi koruyan bir figÃ¼rÃ¼ temsil eder. AyÄ±nÄ±n sizi takip etmesi; kaÃ§mak yerine durmanÄ±z ve gerÃ§ekle yÃ¼zleÅŸmeniz gerektiÄŸini sÃ¶yler. Uyuyan ayÄ±; iÃ§e kapanma ve yeniden toparlanma dÃ¶nemine girdiÄŸinizi gÃ¶sterir."},
  {id:12,name:"Kurt",slug:"kurt",category:"hayvanlar",
   keywords:["kurt gÃ¶rmek","kurt ulumasÄ±","kurt sÃ¼rÃ¼sÃ¼"],
   meaning:"Ã–zgÃ¼rlÃ¼k, sezgi ve aidiyet duygusunun simgesidir. SÃ¼rÃ¼yle ya da yalnÄ±z olmanÄ±n dersi.",
   detail:"RÃ¼yada kurt gÃ¶rmek; kendinize ait gÃ¼Ã§lÃ¼ bir sezgiye ve iÃ§gÃ¼dÃ¼ye sahip olduÄŸunuzu gÃ¶sterir. Kurt sÃ¼rÃ¼sÃ¼; ait olduÄŸunuz grubu ya da gerÃ§ek ailenizi simgeler. YalnÄ±z kurt; baÄŸÄ±msÄ±zlÄ±k ve kendi yolunuzu bulma arayÄ±ÅŸÄ±nÄ± temsil eder. Kurt ulumasÄ±; Ã¶nemli bir mesajÄ±n veya haykÄ±rÄ±lmasÄ± gereken bir gerÃ§eÄŸin simgesidir."},
  {id:13,name:"KaplumbaÄŸa",slug:"kaplumbaga",category:"hayvanlar",
   keywords:["kaplumbaÄŸa gÃ¶rmek","kaplumbaÄŸa kabuÄŸu","yavaÅŸ kaplumbaÄŸa"],
   meaning:"SabÄ±r, kararlÄ±lÄ±k ve Ã¶z korumanÄ±n simgesidir. YavaÅŸ ama saÄŸlam ilerlemenin mesajÄ±dÄ±r.",
   detail:"RÃ¼yada kaplumbaÄŸa gÃ¶rmek; acele etmemeniz ve adÄ±m adÄ±m ilerlemeniz gerektiÄŸine iÅŸaret eder. KaplumbaÄŸanÄ±n kabuÄŸuna Ã§ekilmesi; kendinizi korumaya ya da iÃ§e kapanmaya ihtiyaÃ§ duyduÄŸunuzu gÃ¶sterir. YavaÅŸ ilerleyen kaplumbaÄŸa; istikrarlÄ± Ã§alÄ±ÅŸmanÄ±n ileride bÃ¼yÃ¼k baÅŸarÄ± getireceÄŸini sÃ¶yler. Deniz kaplumbaÄŸasÄ± ise uzun bir yolculuÄŸu simgeler."},
  {id:14,name:"Karga",slug:"karga",category:"hayvanlar",
   keywords:["karga gÃ¶rmek","karga sesi","karga uÃ§uÅŸu"],
   meaning:"Haber, dÃ¶nÃ¼ÅŸÃ¼m ve gizem sembolÃ¼dÃ¼r. Ã–nemli bir mesajÄ±n yakÄ±nda geleceÄŸinin iÅŸaretidir.",
   detail:"RÃ¼yada karga gÃ¶rmek; Ã¶nemli bir haberin ya da kÄ±lavuzluk mesajÄ±nÄ±n yolda olduÄŸuna iÅŸaret eder. Karga sesinin duyulmasÄ±; dikkat etmeniz gereken bir uyarÄ± veya fÄ±rsatÄ±n yakÄ±n olduÄŸunu sÃ¶yler. UÃ§an karga; hayatÄ±nÄ±zda gerÃ§ekleÅŸmek Ã¼zere olan bir dÃ¶nÃ¼ÅŸÃ¼mÃ¼ simgeler. Elinize konan karga ise iÃ§sel bir bilgeliÄŸe ulaÅŸtÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir."},
  {id:15,name:"Kartal",slug:"kartal",category:"hayvanlar",
   keywords:["kartal gÃ¶rmek","kartal uÃ§uÅŸu","kartal penÃ§esi"],
   meaning:"Vizyon, yÃ¼ksek hedefler ve ruhsal perspektifin simgesidir. YukarÄ±dan bakabilme yeteneÄŸi.",
   detail:"RÃ¼yada kartal gÃ¶rmek; yÃ¼ksek bir vizyon ve geniÅŸ bir bakÄ±ÅŸ aÃ§Ä±sÄ±na sahip olduÄŸunuzu gÃ¶sterir. YÃ¼kseklerde sÃ¼zÃ¼len kartal; sorunlarÄ±nÄ±zÄ±n Ã¼stÃ¼ne Ã§Ä±kma ve bÃ¼yÃ¼k resmi gÃ¶rme zamanÄ±nÄ±n geldiÄŸine iÅŸaret eder. Kartal penÃ§esine geÃ§mek; gÃ¼Ã§lÃ¼ biriyle ittifak ya da kendi gÃ¼cÃ¼nÃ¼zÃ¼ keÅŸfetmek anlamÄ±na gelir. Kartal yuvasÄ±; zirveye ulaÅŸma arzusunu simgeler."},
  {id:16,name:"Timsah",slug:"timsah",category:"hayvanlar",
   keywords:["timsah gÃ¶rmek","timsah saldÄ±rÄ±sÄ±","timsahtan kaÃ§mak"],
   meaning:"Gizli tehlikeler, ilkel korkular ve fÄ±rsatÄ± kollamanÄ±n simgesidir. SabÄ±r ve tehlike bir arada.",
   detail:"RÃ¼yada timsah gÃ¶rmek; gÃ¶rÃ¼nÃ¼rde sakin ama iÃ§ten tehlikeli bir durumu ya da kiÅŸiyi temsil eder. TimsahÄ±n sizi izlemesi; sizi bekleyen gizli bir tuzak ya da fÄ±rsatÄ± kollayan biri olduÄŸuna iÅŸaret eder. Timsahtan kaÃ§mak; bu tehlikeden kurtulma Ã§abanÄ±zÄ± simgeler. Timsahla yÃ¼zleÅŸmek ise korkularÄ±nÄ±za cesurca yaklaÅŸmanÄ±z gerektiÄŸini sÃ¶yler."},
  {id:17,name:"Fil",slug:"fil",category:"hayvanlar",
   keywords:["fil gÃ¶rmek","file binmek","beyaz fil"],
   meaning:"Bilgelik, hafÄ±za ve istikrarÄ±n simgesidir. Uzun vadeli dÃ¼ÅŸÃ¼nce ve gÃ¼Ã§lÃ¼ temellerin mesajÄ±.",
   detail:"RÃ¼yada fil gÃ¶rmek; hayatÄ±nÄ±zdaki bÃ¼yÃ¼k ama sakin gÃ¼cÃ¼, bilgeliÄŸi ve dayanÄ±klÄ±lÄ±ÄŸÄ± temsil eder. File binmek; yetki sahibi ya da gÃ¼Ã§lÃ¼ birileriyle birlikte hareket ettiÄŸinizi gÃ¶sterir. Beyaz fil; nadir bulunan bir ÅŸans ya da manevi bir armaÄŸanÄ± simgeler. Fil sÃ¼rÃ¼sÃ¼; aile baÄŸlarÄ±nÄ±n ve grup dayanÄ±ÅŸmasÄ±nÄ±n Ã¶nemine dikkat Ã§eker."},
  {id:18,name:"Geyik",slug:"geyik",category:"hayvanlar",
   keywords:["geyik gÃ¶rmek","geyik boynuzu","koÅŸan geyik"],
   meaning:"Zarafet, sezgi ve nazik bÃ¼yÃ¼menin simgesidir. DoÄŸayla uyum iÃ§inde geliÅŸme mesajÄ±.",
   detail:"RÃ¼yada geyik gÃ¶rmek; nazik ve sezgisel bir bÃ¼yÃ¼me dÃ¶nemine girdiÄŸinize iÅŸaret eder. KoÅŸan geyik; hÄ±zla gelen fÄ±rsatlarÄ± ve onlarÄ± yakalamanÄ±z iÃ§in Ã§evikliÄŸinizi sembolize eder. Boynuzlu geyik; gÃ¼Ã§ ve onurunuzun arttÄ±ÄŸÄ±nÄ±, liderlik Ã¶zelliklerinizin Ã¶ne Ã§Ä±ktÄ±ÄŸÄ±nÄ± gÃ¶sterir. DiÅŸi geyik ise annelik, ÅŸefkat ve sezgiye vurgu yapar."},
  {id:19,name:"TavÅŸan",slug:"tavsan",category:"hayvanlar",
   keywords:["tavÅŸan gÃ¶rmek","beyaz tavÅŸan","tavÅŸan kovalamak"],
   meaning:"Bereket, ÅŸans ve hÄ±zlÄ± fÄ±rsatlarÄ±n simgesidir. Verimlilik ve yeni baÅŸlangÄ±Ã§larÄ±n habercisi.",
   detail:"RÃ¼yada tavÅŸan gÃ¶rmek; ÅŸansÄ±n kapÄ±nÄ±zÄ± Ã§aldÄ±ÄŸÄ±na ve fÄ±rsatlarÄ±n hÄ±zla geldiÄŸine iÅŸaret eder. Beyaz tavÅŸan; saflÄ±k ve ÅŸansÄ±, gri tavÅŸan ise dikkat gerektiren bir durumu simgeler. TavÅŸanÄ± kovalamak; fÄ±rsatÄ±n peÅŸinde koÅŸtuÄŸunuzu ama henÃ¼z yakalayamadÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir. TavÅŸan yavrularÄ±; yeni projeler veya aile bÃ¼yÃ¼mesinin habercisidir."},
  {id:20,name:"Kelebek",slug:"kelebek",category:"hayvanlar",
   keywords:["kelebek gÃ¶rmek","kelebek uÃ§uÅŸu","kelebekle oynamak"],
   meaning:"DÃ¶nÃ¼ÅŸÃ¼m, kÄ±rÄ±lganlÄ±k ve kÄ±sa Ã¶mÃ¼rlÃ¼ gÃ¼zelliÄŸin simgesidir. TÄ±rtÄ±ldan kelebeÄŸe geÃ§iÅŸ.",
   detail:"RÃ¼yada kelebek gÃ¶rmek; hayatÄ±nÄ±zda tamamlanan ya da tamamlanmak Ã¼zere olan bir dÃ¶nÃ¼ÅŸÃ¼mÃ¼ simgeler. UÃ§an kelebek; Ã¶zgÃ¼rleÅŸme, hafiflik ve yeni bir kimliÄŸe adÄ±m atmayÄ± temsil eder. Renkli kelebekler; neÅŸe ve ilham dolu bir dÃ¶nemi mÃ¼jdeler. KelebeÄŸi yakalamak; gÃ¼zel ama kÄ±sa sÃ¼ren bir anÄ±n tadÄ±nÄ± Ã§Ä±karma arzusunu yansÄ±tÄ±r."},

  // DOÄžA
  {id:21,name:"Su",slug:"su",category:"doga",
   keywords:["su gÃ¶rmek","temiz su","kirli su"],
   meaning:"Duygular, bilinÃ§altÄ± ve arÄ±nmanÄ±n simgesidir. Duygusal durumunuzun en net aynasÄ±dÄ±r.",
   detail:"RÃ¼yada temiz, berrak su gÃ¶rmek; duygusal aÃ§Ä±dan net olduÄŸunuzu, iÃ§sel huzura yaklaÅŸtÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir. Kirli ya da bulanÄ±k su; Ã§Ã¶zÃ¼me kavuÅŸturulmamÄ±ÅŸ duygular ve belirsizlikleri temsil eder. Akarsu; sÃ¼rekli deÄŸiÅŸen ve akan yaÅŸam enerjisini simgeler. Durgun gÃ¶l; iÃ§sel derinliÄŸi ve kiÅŸisel yansÄ±mayÄ± ifade eder. Suda boÄŸulmak; duygulara hakim olamamanÄ±n iÅŸaretidir."},
  {id:22,name:"AteÅŸ",slug:"ates",category:"doga",
   keywords:["ateÅŸ gÃ¶rmek","yangÄ±n","ateÅŸe dokunmak"],
   meaning:"Tutku, dÃ¶nÃ¼ÅŸÃ¼m ve arÄ±nmanÄ±n sembolÃ¼dÃ¼r. Kontroldeki ateÅŸ gÃ¼Ã§, kontrolsÃ¼z ateÅŸ tehlike.",
   detail:"Kontrol altÄ±ndaki ÅŸenlik ateÅŸi; iÃ§inizdeki tutku ve enerjinin verimli bir ÅŸekilde kullanÄ±ldÄ±ÄŸÄ±nÄ± gÃ¶sterir. YangÄ±n; kontrol edemediÄŸiniz duygularÄ± veya Ã§evrenizdeki yÄ±kÄ±cÄ± bir gÃ¼Ã§ olduÄŸunu simgeler. AteÅŸe dokunup yanmamak; tehlikeyle baÅŸa Ã§Ä±kma yeteneÄŸinizi temsil eder. SÃ¶nen ateÅŸ; motivasyon kaybÄ± ya da bir dÃ¶nemin kapandÄ±ÄŸÄ±na iÅŸaret eder."},
  {id:23,name:"YaÄŸmur",slug:"yagmur",category:"doga",
   keywords:["yaÄŸmur gÃ¶rmek","yaÄŸmurda Ä±slanmak","ÅŸiddetli yaÄŸmur"],
   meaning:"ArÄ±nma, yenilenme ve duygusal salÄ±vermenin simgesidir. Uzun kuraklÄ±ktan sonra gelen rahatlama.",
   detail:"RÃ¼yada yaÄŸmur gÃ¶rmek; birikmiÅŸ duygusal yÃ¼klerin ve stresin yavaÅŸ yavaÅŸ Ã§Ã¶zÃ¼leceÄŸine iÅŸaret eder. YaÄŸmurda mutlulukla Ä±slanmak; yenilenme ve arÄ±nma sÃ¼recini kucaklamanÄ±zÄ± simgeler. Åžiddetli fÄ±rtÄ±nalÄ± yaÄŸmur; yoÄŸun duygularÄ± ve sarsÄ±lacak bir dÃ¶nemi temsil eder. GÃ¼neÅŸli yaÄŸmur; zorluÄŸun iÃ§inde gÃ¼zelliÄŸi ve ÅŸansÄ± bulmayÄ± simgeler."},
  {id:24,name:"Kar",slug:"kar",category:"doga",
   keywords:["kar gÃ¶rmek","kar yaÄŸÄ±ÅŸÄ±","karda yÃ¼rÃ¼mek"],
   meaning:"SaflÄ±k, sessizlik ve yeni baÅŸlangÄ±Ã§larÄ±n simgesidir. Ã–rtÃ¼lÃ¼p bekleme ya da temiz sayfa aÃ§ma.",
   detail:"YavaÅŸÃ§a yaÄŸan, beyaz kar; iÃ§sel huzuru, saf bir baÅŸlangÄ±cÄ± ve temizlenmeyi simgeler. Blizzard ya da tipi; bunaltÄ±cÄ± duygular ve zorlanma dÃ¶nemini temsil eder. Karda yÃ¼rÃ¼mek; engellere raÄŸmen ilerlemek ve yol aÃ§mak anlamÄ±na gelir. Eriyen kar; uzun sÃ¼redir beklenen bir Ã§Ã¶zÃ¼mÃ¼n yaklaÅŸtÄ±ÄŸÄ±nÄ± mÃ¼jdeler."},
  {id:25,name:"FÄ±rtÄ±na",slug:"firtina",category:"doga",
   keywords:["fÄ±rtÄ±na gÃ¶rmek","fÄ±rtÄ±nada kalmak","fÄ±rtÄ±na geÃ§mek"],
   meaning:"GÃ¼Ã§lÃ¼ duygular, bÃ¼yÃ¼k deÄŸiÅŸimler ve zorlu geÃ§iÅŸ sÃ¼reÃ§lerinin simgesidir.",
   detail:"RÃ¼yada fÄ±rtÄ±na gÃ¶rmek; hayatÄ±nÄ±zda sarsÄ±cÄ± bir dÃ¶nemin kapÄ±da olduÄŸunu ya da halihazÄ±rda yaÅŸandÄ±ÄŸÄ±nÄ± gÃ¶sterir. FÄ±rtÄ±nadan sÄ±ÄŸÄ±nacak yer bulmak; zorlu sÃ¼reÃ§lerde destek ve gÃ¼venlik arayÄ±ÅŸÄ±nÄ±zÄ± simgeler. FÄ±rtÄ±nanÄ±n dinmesini beklemek; sabÄ±r ve dayanÄ±klÄ±lÄ±ÄŸÄ±nÄ±zÄ± temsil eder. FÄ±rtÄ±nanÄ±n ardÄ±ndan gÃ¼neÅŸ; zor bir dÃ¶nemin sona erip gÃ¼zel gÃ¼nlerin geleceÄŸini mÃ¼jdeler."},
  {id:26,name:"GÃ¼neÅŸ",slug:"gunes",category:"doga",
   keywords:["gÃ¼neÅŸ gÃ¶rmek","gÃ¼n doÄŸumu","gÃ¼neÅŸ Ä±ÅŸÄ±ÄŸÄ±"],
   meaning:"BaÅŸarÄ±, canlÄ±lÄ±k ve netliÄŸin simgesidir. Olumlu enerji ve aydÄ±nlanmanÄ±n habercisi.",
   detail:"RÃ¼yada parlak gÃ¼neÅŸ gÃ¶rmek; baÅŸarÄ±, saÄŸlÄ±k ve bereketin yaklaÅŸtÄ±ÄŸÄ±na iÅŸaret eder. GÃ¼ndoÄŸumu; yeni baÅŸlangÄ±Ã§larÄ± ve taze umutlarÄ± simgeler. GÃ¼nbatÄ±mÄ±; bir dÃ¶nemin ya da iliÅŸkinin sona erdiÄŸini gÃ¶sterir. GÃ¼neÅŸ Ä±ÅŸÄ±ÄŸÄ±nda yÃ¼rÃ¼mek; doÄŸru yolda ilerlediÄŸinizi ve korunduÄŸunuzu hissettiren bir iÅŸarettir."},
  {id:27,name:"Ay",slug:"ay",category:"doga",
   keywords:["ay gÃ¶rmek","dolunay","hilal"],
   meaning:"Sezgi, duygular ve kadÄ±nsÄ± enerjinin simgesidir. BilinÃ§altÄ±nÄ±n Ä±ÅŸÄ±ÄŸÄ±nÄ± temsil eder.",
   detail:"RÃ¼yada dolunay gÃ¶rmek; duygularÄ±nÄ±zÄ±n zirveye ulaÅŸtÄ±ÄŸÄ±nÄ± ve sezgilerinizin Ã§ok gÃ¼Ã§lÃ¼ olduÄŸunu gÃ¶sterir. Hilal; yeni dÃ¶nemlerin baÅŸlangÄ±cÄ±nÄ± ve bÃ¼yÃ¼me potansiyelini simgeler. KÄ±rmÄ±zÄ± ay; yoÄŸun duygusal bir dÃ¶nem ya da Ã¶nemli bir dÃ¶nÃ¼m noktasÄ±nÄ± temsil eder. BulutlarÄ±n arkasÄ±na gizlenen ay; gizli bir gerÃ§eÄŸin ya da duygunun henÃ¼z gÃ¼n yÃ¼zÃ¼ne Ã§Ä±kmadÄ±ÄŸÄ±na iÅŸaret eder."},
  {id:28,name:"YÄ±ldÄ±z",slug:"yildiz",category:"doga",
   keywords:["yÄ±ldÄ±z gÃ¶rmek","kayan yÄ±ldÄ±z","yÄ±ldÄ±z dolu gÃ¶kyÃ¼zÃ¼"],
   meaning:"Umut, rehberlik ve kaderin simgesidir. Yol gÃ¶sterici Ä±ÅŸÄ±k ve ilham kaynaÄŸÄ±.",
   detail:"RÃ¼yada parlak yÄ±ldÄ±z gÃ¶rmek; umudun, ilhamÄ±n ve doÄŸru yÃ¶nde gittiÄŸinizin iÅŸaretidir. Kayan yÄ±ldÄ±z gÃ¶rmek; bir dileÄŸinizin ya da hayalinizin yakÄ±nda gerÃ§ekleÅŸeceÄŸini mÃ¼jdeler. YÄ±ldÄ±z dolu gÃ¶kyÃ¼zÃ¼; Ã¶nÃ¼nÃ¼zdeki olasÄ±lÄ±klarÄ±n ve seÃ§eneklerin bolluÄŸunu simgeler. Bir yÄ±ldÄ±zÄ±n sÃ¶nmesi; bir dÃ¶nemin kapandÄ±ÄŸÄ±nÄ± ya da uÄŸurlamak zorunda kalacaÄŸÄ±nÄ±z birini temsil eder."},
  {id:29,name:"Deniz",slug:"deniz",category:"doga",
   keywords:["deniz gÃ¶rmek","denize girmek","fÄ±rtÄ±nalÄ± deniz"],
   meaning:"BilinÃ§altÄ±nÄ±n derinliÄŸi, sonsuz olasÄ±lÄ±klar ve duygusal Ã¶zgÃ¼rlÃ¼ÄŸÃ¼n simgesidir.",
   detail:"Sakin, mavi deniz; duygusal dinginliÄŸi ve kendinizle barÄ±ÅŸÄ±klÄ±ÄŸÄ± temsil eder. Denize girmek; bilinÃ§altÄ±nÄ±za dalmak ve iÃ§sel keÅŸife Ã§Ä±kmak anlamÄ±na gelir. FÄ±rtÄ±nalÄ± deniz; kontrol edemediÄŸiniz duygularÄ± ve zorlu bir sÃ¼reci simgeler. Denizde kaybolmak; yÃ¶n arayÄ±ÅŸÄ±nÄ±, fÄ±rtÄ±nalÄ± denizden kurtulmak ise zorluÄŸu atlatacaÄŸÄ±nÄ±zÄ± gÃ¶sterir."},
  {id:30,name:"Nehir",slug:"nehir",category:"doga",
   keywords:["nehir gÃ¶rmek","nehirde yÃ¼zmek","nehir karÅŸÄ±sÄ±"],
   meaning:"YaÅŸam yolculuÄŸu, akÄ±ÅŸ ve yÃ¶nÃ¼n simgesidir. HayatÄ±n ritmiyle uyum ya da Ã§atÄ±ÅŸma.",
   detail:"Sakin akan nehir; hayatÄ±nÄ±zÄ±n doÄŸal akÄ±ÅŸÄ±nda ilerlediÄŸinizi gÃ¶sterir. Nehire karÅŸÄ± yÃ¼zmek; direniÅŸ gÃ¶sterdiÄŸiniz bir durumu ya da zorluÄŸa gÃ¶ÄŸÃ¼s germenizi simgeler. Nehri geÃ§mek; Ã¶nemli bir karar ya da yaÅŸam eÅŸiÄŸini aÅŸtÄ±ÄŸÄ±nÄ±zÄ± temsil eder. HÄ±zlÄ± akan Ã§aÄŸlayan; deÄŸiÅŸimin kontrolÃ¼nÃ¼zÃ¼n dÄ±ÅŸÄ±nda hÄ±zlandÄ±ÄŸÄ±na iÅŸaret eder."},
  {id:31,name:"DaÄŸ",slug:"dag",category:"doga",
   keywords:["daÄŸ gÃ¶rmek","daÄŸa tÄ±rmanmak","daÄŸ zirvesi"],
   meaning:"Zorluklar, baÅŸarÄ±lar ve geniÅŸ perspektifin simgesidir. Engeller ya da ulaÅŸÄ±lmak istenen hedefler.",
   detail:"RÃ¼yada daÄŸ gÃ¶rmek; Ã¶nÃ¼nÃ¼zdeki bÃ¼yÃ¼k bir hedefe ya da aÅŸmanÄ±z gereken Ã¶nemli bir zorluÄŸa iÅŸaret eder. DaÄŸa tÄ±rmanmak; hedefe doÄŸru adÄ±m adÄ±m ilerlemek iÃ§in emek verdiÄŸinizi gÃ¶sterir. DaÄŸ zirvesinde olmak; bÃ¼yÃ¼k bir baÅŸarÄ±ya ulaÅŸtÄ±ÄŸÄ±nÄ±zÄ± ve geniÅŸ bir bakÄ±ÅŸ aÃ§Ä±sÄ±na kavuÅŸtuÄŸunuzu simgeler. Ä°niÅŸte olmak; elde ettiÄŸinizi pratiÄŸe taÅŸÄ±ma zamanÄ±nÄ±n geldiÄŸini sÃ¶yler."},
  {id:32,name:"Orman",slug:"orman",category:"doga",
   keywords:["ormanda olmak","ormanda kaybolmak","orman yolu"],
   meaning:"Bilinmezlik, karmaÅŸÄ±k dÃ¼ÅŸÃ¼nceler ve iÃ§sel keÅŸifin simgesidir. BilinÃ§altÄ±nÄ±n labirenti.",
   detail:"RÃ¼yada ormanda olmak; hayatÄ±nÄ±zÄ±n karmaÅŸÄ±k, belirsiz ya da yoÄŸun bir dÃ¶neminden geÃ§tiÄŸinize iÅŸaret eder. Ormanda kaybolmak; kendinizi ya da yÃ¶nÃ¼nÃ¼zÃ¼ bulmakta zorlandÄ±ÄŸÄ±nÄ±zÄ± simgeler. Orman iÃ§inde bir yol bulmak; belirsizliÄŸin arasÄ±ndan bir Ã§Ä±kÄ±ÅŸ yolu keÅŸfettiÄŸinizi gÃ¶sterir. AydÄ±nlÄ±k orman; karmaÅŸanÄ±n iÃ§inde huzuru bulduÄŸunuzu temsil eder."},
  {id:33,name:"AÄŸaÃ§",slug:"agac",category:"doga",
   keywords:["aÄŸaÃ§ gÃ¶rmek","aÄŸaca tÄ±rmanmak","kÃ¶kler"],
   meaning:"KÃ¶klÃ¼lÃ¼k, bÃ¼yÃ¼me ve aile baÄŸlarÄ±nÄ±n simgesidir. Hayattaki sabitlik ve destekleyici gÃ¼Ã§ler.",
   detail:"GÃ¼Ã§lÃ¼ ve yeÅŸil bir aÄŸaÃ§; saÄŸlam kÃ¶klere, gÃ¼Ã§lÃ¼ aile ya da destek aÄŸÄ±na sahip olduÄŸunuzu simgeler. AÄŸaca tÄ±rmanmak; kendinizi geliÅŸtirme ve yÃ¼kselme Ã§abanÄ±zÄ± temsil eder. Devrilen ya da yÄ±kÄ±lan aÄŸaÃ§; hayatÄ±nÄ±zdaki Ã¶nemli bir desteÄŸi ya da gÃ¼ven duyulan birini kaybetme korkusunu gÃ¶sterir. KurumuÅŸ aÄŸaÃ§; tÃ¼kenmiÅŸ ya da ihmal edilmiÅŸ bir iliÅŸkiyi temsil eder."},
  {id:34,name:"Ã‡iÃ§ek",slug:"cicek",category:"doga",
   keywords:["Ã§iÃ§ek gÃ¶rmek","Ã§iÃ§ek toplamak","solmuÅŸ Ã§iÃ§ek"],
   meaning:"GÃ¼zellik, bÃ¼yÃ¼me ve potansiyelin simgesidir. AÃ§Ä±lmak Ã¼zere olan ya da aÃ§Ä±lmÄ±ÅŸ bir dÃ¶nem.",
   detail:"RÃ¼yada aÃ§an Ã§iÃ§ek gÃ¶rmek; kiÅŸisel geliÅŸiminizin Ã§iÃ§ek aÃ§tÄ±ÄŸÄ±nÄ± ve gÃ¼zel bir dÃ¶nemin iÃ§inde olduÄŸunuzu gÃ¶sterir. Ã‡iÃ§ek toplamak; gÃ¼zelliÄŸe ve olumlu enerjiye aÃ§Ä±k olduÄŸunuzu simgeler. SolmuÅŸ ya da kurumuÅŸ Ã§iÃ§ek; kaÃ§Ä±rÄ±lan fÄ±rsatlarÄ± ya da ihmal edilen bir iliÅŸkiyi temsil eder. BahÃ§e dolusu Ã§iÃ§ek; bereketli ve dolu bir yaÅŸamÄ± mÃ¼jdeler."},
  {id:35,name:"Toprak",slug:"toprak",category:"doga",
   keywords:["toprak gÃ¶rmek","topraÄŸa dÃ¼ÅŸmek","toprak kazmak"],
   meaning:"KÃ¶klÃ¼lÃ¼k, doÄŸurganlÄ±k ve temel ihtiyaÃ§larÄ±n simgesidir. GÃ¼venli zemin ve yaratÄ±cÄ± potansiyel.",
   detail:"Verimli, koyu toprak; yaratÄ±cÄ±lÄ±ÄŸÄ±n ve bÃ¼yÃ¼menin olgunlaÅŸtÄ±ÄŸÄ± bereketli bir dÃ¶nemi simgeler. TopraÄŸa dÃ¼ÅŸmek; gerÃ§eklikle yÃ¼zleÅŸme ya da mÃ¼tevazÄ± olmaya davet eder. Toprak kazmak; geÃ§miÅŸi araÅŸtÄ±rma, gizli bir gerÃ§eÄŸi ya da kaynaÄŸÄ± bulmak iÃ§in Ã§abaladÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir. Kuru Ã§atlak toprak; kaynak ve enerji ihtiyacÄ±nÄ±zÄ± temsil eder."},

  // MEKAN
  {id:36,name:"Ev",slug:"ev",category:"mekan",
   keywords:["ev gÃ¶rmek","eski ev","yeni ev","evde yangÄ±n"],
   meaning:"BenliÄŸin, gÃ¼venliÄŸin ve aile baÄŸlarÄ±nÄ±n simgesidir. Evin her odasÄ± farklÄ± bir anlam taÅŸÄ±r.",
   detail:"RÃ¼yada ev gÃ¶rmek; kendinizi, psikenizi ve iÃ§ dÃ¼nyanÄ±zÄ± temsil eder. Ã‡ocukluk evinizi gÃ¶rmek; geÃ§miÅŸ kalÄ±plarÄ± ve Ã§Ã¶zÃ¼me kavuÅŸturulmasÄ± gereken eski deneyimleri simgeler. Yeni bir ev; yeni bir baÅŸlangÄ±Ã§ ya da kendinizin yeni bir yÃ¶nÃ¼nÃ¼ keÅŸfetmek anlamÄ±na gelir. Evde yangÄ±n Ã§Ä±kmasÄ±; kÃ¶klÃ¼ bir dÃ¶nÃ¼ÅŸÃ¼mÃ¼, evin Ã§Ã¶kmesi ise bÃ¼yÃ¼k bir deÄŸiÅŸim korkusunu temsil eder."},
  {id:37,name:"Okul",slug:"okul",category:"mekan",
   keywords:["okul gÃ¶rmek","okula dÃ¶nmek","sÄ±nav olmak"],
   meaning:"Ã–ÄŸrenme, deÄŸerlendirilme ve geÃ§miÅŸ kalÄ±plarÄ±n simgesidir. Test edilme hissi ve hazÄ±r olup olmama.",
   detail:"RÃ¼yada okula dÃ¶nmek; kendinizi bir konuda yetersiz ya da test ediliyor hissettiÄŸinizde ortaya Ã§Ä±kar. SÄ±nava hazÄ±r olmamak; hayatÄ±n getirdiÄŸi sorumluluklara ya da zorluklara hazÄ±r olmadÄ±ÄŸÄ±nÄ±z hissini yansÄ±tÄ±r. Ã–ÄŸretmenle konuÅŸmak; bir konuda rehberlik ya da otorite figÃ¼rÃ¼ aramanÄ±zÄ± simgeler. Okuldan mezun olmak; bir Ã¶ÄŸrenme sÃ¼recinin tamamlandÄ±ÄŸÄ±nÄ± ve yeni evreye geÃ§iÅŸi temsil eder."},
  {id:38,name:"Hastane",slug:"hastane",category:"mekan",
   keywords:["hastanede olmak","hastane koridoru","ameliyat olmak"],
   meaning:"Ä°yileÅŸme ihtiyacÄ±, kÄ±rÄ±lganlÄ±k ve Ã¶zenin simgesidir. Beden ya da ruh iyileÅŸmesi.",
   detail:"RÃ¼yada hastanede olmak; fiziksel ya da duygusal olarak dinlenme ve iyileÅŸmeye ihtiyaÃ§ duyduÄŸunuzu gÃ¶sterir. Ameliyat olmak; hayatÄ±nÄ±zdan bir ÅŸeyi Ã§Ä±karma, derin bir dÃ¶nÃ¼ÅŸÃ¼mÃ¼ kabul etme sÃ¼recini simgeler. Hasta birini ziyaret etmek; ihmal ettiÄŸiniz bir iliÅŸkiye ya da kendinizin bakÄ±ma muhtaÃ§ bir yÃ¶nÃ¼ne dikkat Ã§eker. Hastaneden taburcu olmak; iyileÅŸme sÃ¼recinin tamamlandÄ±ÄŸÄ±nÄ± mÃ¼jdeler."},
  {id:39,name:"MezarlÄ±k",slug:"mezarlik",category:"mekan",
   keywords:["mezarlÄ±k gÃ¶rmek","mezara gitmek","mezarda aÄŸlamak"],
   meaning:"GeÃ§miÅŸle yÃ¼zleÅŸme, kabul ve anma sÃ¼recinin simgesidir. Korku deÄŸil, kapanÄ±ÅŸ ve huzur.",
   detail:"RÃ¼yada mezarlÄ±k gÃ¶rmek; geÃ§miÅŸle barÄ±ÅŸma, biten iliÅŸkileri ya da dÃ¶nemleri kabul etme sÃ¼recinin simgesidir. Bu rÃ¼ya genellikle Ã¶lÃ¼m korkusundan deÄŸil, bitiÅŸlere duyulan histen kaynaklanÄ±r. TanÄ±dÄ±ÄŸÄ±n birisinin mezarÄ±nÄ± ziyaret etmek; o kiÅŸiyle ya da o kiÅŸinin temsil ettiÄŸi bir dÃ¶nemle barÄ±ÅŸmak istediÄŸinizi gÃ¶sterir. MezarlÄ±kta huzurlu olmak; geÃ§miÅŸle barÄ±ÅŸtÄ±ÄŸÄ±nÄ±zÄ±n gÃ¼zel iÅŸaretidir."},
  {id:40,name:"KÃ¶prÃ¼",slug:"kopru",category:"mekan",
   keywords:["kÃ¶prÃ¼ gÃ¶rmek","kÃ¶prÃ¼den geÃ§mek","kÃ¶prÃ¼ Ã§Ã¶kmesi"],
   meaning:"GeÃ§iÅŸ, karar noktasÄ± ve iki dÃ¼nya arasÄ±ndaki baÄŸlantÄ±nÄ±n simgesidir.",
   detail:"RÃ¼yada kÃ¶prÃ¼ gÃ¶rmek; hayatÄ±nÄ±zdaki Ã¶nemli bir geÃ§iÅŸ dÃ¶nemini ya da kÃ¶klÃ¼ bir kararÄ± simgeler. KÃ¶prÃ¼den saÄŸlÄ±klÄ±ca geÃ§mek; bu geÃ§iÅŸi baÅŸarÄ±yla tamamlayacaÄŸÄ±nÄ±za iÅŸaret eder. KÃ¶prÃ¼nÃ¼n Ã§Ã¶kmesi; planlarÄ±nÄ±zda ya da gÃ¼vendiÄŸiniz bir baÄŸlantÄ±da aksaklÄ±k yaÅŸanacaÄŸÄ± korkusunu temsil eder. KÃ¶prÃ¼de durmak; henÃ¼z karar veremediÄŸiniz ve eÅŸikte olduÄŸunuzu gÃ¶sterir."},
  {id:41,name:"TÃ¼nel",slug:"tunel",category:"mekan",
   keywords:["tÃ¼nelden geÃ§mek","tÃ¼nel sonu","karanlÄ±k tÃ¼nel"],
   meaning:"KaranlÄ±ktan geÃ§iÅŸ ve Ä±ÅŸÄ±ÄŸa kavuÅŸmanÄ±n simgesidir. Zor dÃ¶nemin sonunda Ã§Ä±kÄ±ÅŸ.",
   detail:"RÃ¼yada tÃ¼nelden geÃ§mek; zorlu bir dÃ¶nemin ya da geÃ§iÅŸ sÃ¼recinin iÃ§inde olduÄŸunuzu simgeler. TÃ¼nelin ucunda Ä±ÅŸÄ±k gÃ¶rmek; zorluÄŸun bitmek Ã¼zere olduÄŸunu ve yeni bir baÅŸlangÄ±cÄ±n yaklaÅŸtÄ±ÄŸÄ±nÄ± mÃ¼jdeler. KaranlÄ±k ve Ã§Ä±kÄ±ÅŸsÄ±z tÃ¼nel; ÅŸu an iÃ§in Ã§Ã¶zÃ¼m bulamadÄ±ÄŸÄ±nÄ±z bir durumda sÄ±kÄ±ÅŸmÄ±ÅŸ hissettiÄŸinizi temsil eder. TÃ¼neli geÃ§mek; dÃ¶nÃ¼ÅŸÃ¼m sÃ¼recini tamamlamak anlamÄ±na gelir."},
  {id:42,name:"Cami",slug:"cami",category:"mekan",
   keywords:["camide olmak","namaz kÄ±lmak","cami avlusu"],
   meaning:"Maneviyat, topluluk ve iÃ§ huzur arayÄ±ÅŸÄ±nÄ±n simgesidir. Anlam ve rehberlik arayÄ±ÅŸÄ±.",
   detail:"RÃ¼yada camide olmak; manevi bir rehberlik ya da iÃ§sel huzur arayÄ±ÅŸÄ±nÄ±zÄ± temsil eder. Namaz kÄ±lmak; ÅŸÃ¼kran, teslimiyet ve iÃ§ dengeye duyulan Ã¶zlemi simgeler. Cami avlusunda bulunmak; topluluk duygusu ve aidiyet ihtiyacÄ±nÄ± gÃ¶sterir. Caminin kapÄ±larÄ±nÄ±n kapalÄ± olmasÄ±; manevi konularda kendinizi dÄ±ÅŸarÄ±da ya da uzak hissettiÄŸinize iÅŸaret eder."},
  {id:43,name:"Hapishane",slug:"hapishane",category:"mekan",
   keywords:["hapishanede olmak","hapsedilmek","hapisten Ã§Ä±kmak"],
   meaning:"KÄ±sÄ±tlanma, kendi yarattÄ±ÄŸÄ±nÄ±z sÄ±nÄ±rlar ve Ã¶zgÃ¼rlÃ¼k Ã¶zleminin simgesidir.",
   detail:"RÃ¼yada hapishanede olmak; kendinizi hayatÄ±nÄ±zda hapsolmuÅŸ, kÄ±sÄ±tlanmÄ±ÅŸ ya da gerÃ§ek benliÄŸinizi ifade edemez hissettiÄŸinizi simgeler. Bu kÄ±sÄ±tlama Ã§oÄŸunlukla dÄ±ÅŸarÄ±dan deÄŸil, kendi inanÃ§ ve korkularÄ±nÄ±zdan kaynaklanÄ±r. Hapisten kaÃ§mak ya da serbest bÄ±rakÄ±lmak; bu sÄ±nÄ±rlardan kurtulma cesaretini bulduÄŸunuzu temsil eder. Birini hapishanede ziyaret etmek; o kiÅŸiyle ilgili bir suÃ§luluk ya da endiÅŸe hissini yansÄ±tÄ±r."},
  {id:44,name:"Saray",slug:"saray",category:"mekan",
   keywords:["sarayda olmak","saray koridoru","saray bahÃ§esi"],
   meaning:"BÃ¼yÃ¼k baÅŸarÄ±lar, lÃ¼ks arzusu ve kendi deÄŸerinizi keÅŸfetmenin simgesidir.",
   detail:"RÃ¼yada sarayda olmak; yÃ¼ksek hedeflerinizi, bÃ¼yÃ¼k baÅŸarÄ± arzunuzu ve kendinizi deÄŸerli hissetme ihtiyacÄ±nÄ±zÄ± simgeler. Sarayda gezinmek; potansiyelinizin farkÄ±na varmaya baÅŸladÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir. Saray bahÃ§esinde olmak; gÃ¼zelliÄŸi ve bolluÄŸu keÅŸfetme dÃ¶neminde olduÄŸunuza iÅŸaret eder. Saraydan Ã§Ä±karÄ±lmak; hak ettiÄŸinizi dÃ¼ÅŸÃ¼ndÃ¼ÄŸÃ¼nÃ¼z bir ÅŸeyin elinizden gitmesinden duyulan korkuyu temsil eder."},
  {id:45,name:"Yol",slug:"yol",category:"mekan",
   keywords:["yolda yÃ¼rÃ¼mek","yol ayrÄ±mÄ±","uzun yol"],
   meaning:"YaÅŸam yolculuÄŸu, seÃ§imler ve ilerleyiÅŸin simgesidir. Nereye gittiÄŸinizin metaforu.",
   detail:"RÃ¼yada dÃ¼z ve aydÄ±nlÄ±k bir yol; doÄŸru yolda ilerlediÄŸinizi ve Ã¶nÃ¼nÃ¼zÃ¼n aÃ§Ä±k olduÄŸunu simgeler. Yol ayrÄ±mÄ±; karÅŸÄ±nÄ±zdaki Ã¶nemli bir seÃ§imi ya da karar noktasÄ±nÄ± temsil eder. Bitmek bilmeyen uzun yol; uzun soluklu bir hedefin sabÄ±r gerektirdiÄŸini gÃ¶sterir. Engellerle dolu yol; ilerlemenizi zorlaÅŸtÄ±ran durumlarÄ± ve buna raÄŸmen ilerlemek iÃ§in gereken kararlÄ±lÄ±ÄŸÄ± simgeler."},
  {id:46,name:"Merdiven",slug:"merdiven",category:"mekan",
   keywords:["merdiven Ã§Ä±kmak","merdivenden dÃ¼ÅŸmek","spiral merdiven"],
   meaning:"Ä°lerleme, Ã§aba ve seviyeleri aÅŸmanÄ±n simgesidir. YukarÄ± Ã§Ä±kmak ya da aÅŸaÄŸÄ± inmek.",
   detail:"RÃ¼yada merdiven Ã§Ä±kmak; hedeflerinize adÄ±m adÄ±m yaklaÅŸtÄ±ÄŸÄ±nÄ±zÄ±, kendinizi geliÅŸtirdiÄŸinizi simgeler. Merdivenden dÃ¼ÅŸmek; ani bir gerileme ya da baÅŸarÄ±sÄ±zlÄ±k korkusunu temsil eder. Bitmek bilmeyen uzun merdiven; uzun ve yorucu bir sÃ¼reÃ§te olduÄŸunuzu gÃ¶sterir. AÅŸaÄŸÄ± inen merdiven; temellerinize, kÃ¶klerinize ya da geÃ§miÅŸe dÃ¶nme ihtiyacÄ±nÄ± simgeler."},
  {id:47,name:"KapÄ±",slug:"kapi",category:"mekan",
   keywords:["kapÄ± gÃ¶rmek","aÃ§Ä±k kapÄ±","kilitli kapÄ±"],
   meaning:"FÄ±rsat, geÃ§iÅŸ ve yeni olasÄ±lÄ±klarÄ±n eÅŸiÄŸinin simgesidir. AÃ§Ä±k mÄ± yoksa kapalÄ± mÄ±?",
   detail:"RÃ¼yada aÃ§Ä±k kapÄ±; hayatÄ±nÄ±zdaki yeni bir fÄ±rsatÄ±, geÃ§iÅŸi ya da daveti simgeler. Kilitli kapÄ±; Ã¶nÃ¼nÃ¼zde engeller olduÄŸunu ya da henÃ¼z hazÄ±r olmadÄ±ÄŸÄ±nÄ±z bir kapÄ±nÄ±n kapanÄ±k kaldÄ±ÄŸÄ±nÄ± gÃ¶sterir. KapÄ±yÄ± Ã§almak; fÄ±rsat ya da iliÅŸkiye ulaÅŸmak iÃ§in Ã§aba gÃ¶stermeniz gerektiÄŸini temsil eder. KapÄ±nÄ±n kendiliÄŸinden aÃ§Ä±lmasÄ±; hazÄ±r olduÄŸunuzda olasÄ±lÄ±klarÄ±n size doÄŸru aÃ§Ä±lacaÄŸÄ±nÄ± simgeler."},
  {id:48,name:"AsansÃ¶r",slug:"asansor",category:"mekan",
   keywords:["asansÃ¶rde olmak","asansÃ¶r Ã§Ã¶kmesi","asansÃ¶r tÄ±kanmasÄ±"],
   meaning:"HÄ±zlÄ± yÃ¼kseliÅŸ ya da dÃ¼ÅŸÃ¼ÅŸÃ¼n, kontrol dÄ±ÅŸÄ± ilerlemenin simgesidir.",
   detail:"RÃ¼yada yÃ¼kselen asansÃ¶r; hÄ±zlÄ± bir kariyer ilerlÐµÐ¼esi, statÃ¼ kazanÄ±mÄ± ya da kiÅŸisel bir atÄ±lÄ±mÄ± simgeler. Ä°nen asansÃ¶r; geriye adÄ±m atmayÄ± ya da temellerinize inmeniz gerektiÄŸini gÃ¶sterir. AsansÃ¶rÃ¼n Ã§Ã¶kmesi; ani bir dÃ¼ÅŸÃ¼ÅŸ ya da kontrol kaybÄ± korkusunu temsil eder. AsansÃ¶rde tÄ±kanmak; hayatÄ±nÄ±zda bir yerde ilerlemenin durduÄŸunu hissettirdiÄŸinize iÅŸaret eder."},
  {id:49,name:"Deniz feneri",slug:"deniz-feneri",category:"mekan",
   keywords:["deniz feneri gÃ¶rmek","deniz feneri Ä±ÅŸÄ±ÄŸÄ±","deniz feneri sesi"],
   meaning:"YÃ¶nlendirme, gÃ¼venlik ve karanlÄ±kta Ä±ÅŸÄ±k olmanÄ±n simgesidir. Rehberlik ve gÃ¼ven.",
   detail:"RÃ¼yada deniz feneri gÃ¶rmek; belirsizlik ya da zorlu bir dÃ¶nemde size yol gÃ¶sterecek birinin ya da bir bilginin varlÄ±ÄŸÄ±nÄ± simgeler. Fener Ä±ÅŸÄ±ÄŸÄ±nÄ±n sizi aydÄ±nlatmasÄ±; doÄŸru yÃ¶nÃ¼ bulduÄŸunuzu ya da iÃ§sel sezginizin sizi yÃ¶nlendirdiÄŸini temsil eder. SÃ¶nen deniz feneri; rehbersiz hissetme ya da puslu bir dÃ¶nemde olduÄŸunuza iÅŸaret eder."},
  {id:50,name:"UÃ§ak",slug:"ucak",category:"mekan",
   keywords:["uÃ§akta olmak","uÃ§ak kazasÄ±","uÃ§ak kalkÄ±ÅŸÄ±"],
   meaning:"BÃ¼yÃ¼k hedefler, kaÃ§Ä±ÅŸ arzusu ve yÃ¼ksek perspektifin simgesidir.",
   detail:"RÃ¼yada uÃ§akta olmak; bÃ¼yÃ¼k hedeflere ulaÅŸma yolculuÄŸunuzu ya da gÃ¼ndelik hayattan uzaklaÅŸma arzunuzu simgeler. UÃ§ak kalkÄ±ÅŸÄ±; yeni bir projeye ya da hayat evresine cesurca baÅŸlamayÄ± temsil eder. UÃ§ak kazasÄ±; bÃ¼yÃ¼k hedeflerinizin baÅŸarÄ±sÄ±zlÄ±kla sonuÃ§lanacaÄŸÄ±na dair gizli korkunuzu yansÄ±tÄ±r. UÃ§aktan gÃ¼zel manzara; geniÅŸ bir perspektife sahip olduÄŸunuzu simgeler."},

  // KÄ°ÅžÄ°
  {id:51,name:"Anne",slug:"anne",category:"kisi",
   keywords:["anneyi gÃ¶rmek","Ã¶len anne","annesiyle kavga"],
   meaning:"Beslenme, kÃ¶kenler ve iÃ§sel bakÄ±cÄ±nÄ±n simgesidir. Anneniz ya da iÃ§inizdeki anne enerjisi.",
   detail:"RÃ¼yada annenizi gÃ¶rmek; annenizle ya da onun temsil ettiÄŸi besleyici, koruyucu enerjiyle baÄŸlantÄ±nÄ±zÄ± yansÄ±tÄ±r. Anneyle sarÄ±lmak; sevgi ve gÃ¼vene ihtiyaÃ§ duyduÄŸunuzu simgeler. Anneyle kavga etmek; baÄŸÄ±msÄ±zlÄ±k ya da benlik sÄ±nÄ±rlarÄ± Ã¼zerine iÃ§sel bir Ã§atÄ±ÅŸmanÄ±zÄ± temsil eder. Ã–len annenizi rÃ¼yada gÃ¶rmek; genellikle onun verdiÄŸi sevgi ya da bildiklerinizin rehberliÄŸini aradÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir."},
  {id:52,name:"Baba",slug:"baba",category:"kisi",
   keywords:["babayÄ± gÃ¶rmek","baba otoritesi","Ã¶len baba"],
   meaning:"Otorite, koruma ve rehberliÄŸin simgesidir. BabanÄ±z ya da iÃ§inizdeki otoriter ses.",
   detail:"RÃ¼yada babanÄ±zÄ± gÃ¶rmek; otorite, disiplin ve bilgelik temalarÄ±nÄ± gÃ¼ndeme getirir. Babayla konuÅŸmak; hayatÄ±nÄ±zda rehberlik ve onay aradÄ±ÄŸÄ±nÄ±zÄ± simgeler. Babayla Ã§atÄ±ÅŸmak; baÄŸÄ±msÄ±zlÄ±k ve kendi otoritenizi kurma sÃ¼recini temsil eder. Ã–len babanÄ±zÄ± gÃ¶rmek; onun deÄŸerlerini ya da Ã¶ÄŸÃ¼tlerini hatÄ±rlamanÄ±z ya da bÄ±rakmanÄ±z gereken bir dÃ¶nemde olduÄŸunuza iÅŸaret eder."},
  {id:53,name:"Bebek",slug:"bebek",category:"kisi",
   keywords:["bebek gÃ¶rmek","bebek tutmak","aÄŸlayan bebek"],
   meaning:"Yeni baÅŸlangÄ±Ã§lar, masumiyet ve potansiyelin simgesidir. Yeni bir proje ya da yaÅŸam evresi.",
   detail:"RÃ¼yada bebek gÃ¶rmek; hayatÄ±nÄ±zda yeni baÅŸlayan bir ÅŸeyi â€” bir projeyi, iliÅŸkiyi ya da kendinizin yeni bir yÃ¶nÃ¼nÃ¼ â€” temsil eder. Sevgi dolu bir bebek tutmak; bu yeni baÅŸlangÄ±cÄ± benimsediÄŸinizi ve onu bÃ¼yÃ¼teceÄŸinizi simgeler. AÄŸlayan bebek; bu yeni sÃ¼recin ilgi ve Ã¶zen gerektirdiÄŸini, ihmal edilmemesi gerektiÄŸini gÃ¶sterir. HastalÄ±klÄ± bebek; bÃ¼yÃ¼tmeye Ã§alÄ±ÅŸtÄ±ÄŸÄ±nÄ±z bir ÅŸeyin tehlikede olduÄŸuna iÅŸaret eder."},
  {id:54,name:"Ã‡ocuk",slug:"cocuk",category:"kisi",
   keywords:["Ã§ocuk gÃ¶rmek","Ã§ocukken olmak","oynayan Ã§ocuk"],
   meaning:"Ä°Ã§ Ã§ocuk, geÃ§miÅŸ ve masumiyetin simgesidir. Ä°hmal edilmiÅŸ ihtiyaÃ§lar ya da Ã¶zgÃ¼r ruh.",
   detail:"RÃ¼yada oynayan, mutlu Ã§ocuk gÃ¶rmek; iÃ§ Ã§ocuÄŸunuzun neÅŸesine ve Ã¶zgÃ¼rlÃ¼ÄŸÃ¼ne duyduÄŸunuz Ã¶zlemi simgeler. Ã‡ocukken olmak ya da kendinizi Ã§ocuk gÃ¶rmek; geÃ§miÅŸte Ã§Ã¶zÃ¼me kavuÅŸturulmamÄ±ÅŸ bir duyguya ya da dÃ¶neme dÃ¶nme ihtiyacÄ±nÄ± temsil eder. AÄŸlayan ya da kaybolan Ã§ocuk; ihmal ettiÄŸiniz iÃ§ ihtiyaÃ§larÄ±nÄ±za dikkat Ã§eker."},
  {id:55,name:"Eski Sevgili",slug:"eski-sevgili",category:"kisi",
   keywords:["eski sevgiliyi gÃ¶rmek","eski sevgiliyle barÄ±ÅŸmak","geÃ§miÅŸ iliÅŸki"],
   meaning:"Ã‡Ã¶zÃ¼me kavuÅŸturulmamÄ±ÅŸ duygular ve iliÅŸki kalÄ±plarÄ±nÄ±n simgesidir. Genellikle o kiÅŸiyle deÄŸil, o kiÅŸinin temsil ettiÄŸiyle ilgilidir.",
   detail:"Eski sevgiliyi rÃ¼yada gÃ¶rmek; genellikle o kiÅŸiyle yeniden olmak istediÄŸinizin deÄŸil, o iliÅŸkinin temsil ettiÄŸi bir duygu ya da dÃ¶nemin ruhunuzda henÃ¼z kapanmadÄ±ÄŸÄ±nÄ±n iÅŸaretidir. BarÄ±ÅŸmak; o dÃ¶nemin derslerini kabul ettiÄŸinizi simgeler. Kavga etmek; henÃ¼z iÅŸlememiÅŸ Ã¶fke ya da piÅŸmanlÄ±k duygularÄ±nÄ± temsil eder. Eski sevgiliyle mutlu anlar yaÅŸamak; o dÃ¶nemde iyi hissettiren bir ÅŸeye Ã¶zlem duyduÄŸunuzu gÃ¶sterir."},
  {id:56,name:"Vefat Eden Biri",slug:"vefat-eden-biri",category:"kisi",
   keywords:["Ã¶len birini gÃ¶rmek","hayatta olmayan biri","vefat eden akraba"],
   meaning:"GeÃ§miÅŸten gelen mesajlar, Ã¶ÄŸÃ¼tler ve Ã§Ã¶zÃ¼me kavuÅŸturulmamÄ±ÅŸ yasÄ±n simgesidir.",
   detail:"RÃ¼yada hayatÄ±nÄ± kaybetmiÅŸ birini gÃ¶rmek; genellikle o kiÅŸiyle kapanmamÄ±ÅŸ olan bir iliÅŸkiyi, onun sizi hÃ¢lÃ¢ yÃ¶nlendiren deÄŸerlerini ya da Ã¶zlemini simgeler. Onlarla konuÅŸmak; bilinÃ§altÄ±nÄ±zdan gelen bir bilgelik ya da rehberliÄŸi temsil eder. Size sarÄ±lan vefat etmiÅŸ biri; korunduÄŸunuzu ve sevgi enerjisinin hÃ¢lÃ¢ hayatÄ±nÄ±zda var olduÄŸunu gÃ¶sterir. Bu rÃ¼yalar Ã§oÄŸunlukla teselli edici ve anlamlÄ±dÄ±r."},
  {id:57,name:"YabancÄ± Biri",slug:"yabanci-biri",category:"kisi",
   keywords:["tanÄ±madÄ±ÄŸÄ±m biri","yabancÄ± yÃ¼z","gizemli kiÅŸi"],
   meaning:"Kendinizin bilinmeyen yÃ¶nleri, yeni karÅŸÄ±laÅŸmalar ve gÃ¶lge benliÄŸin simgesidir.",
   detail:"RÃ¼yada tanÄ±madÄ±ÄŸÄ±nÄ±z bir kiÅŸi; genellikle kendinizin henÃ¼z keÅŸfetmediÄŸiniz ya da kabul etmediÄŸiniz bir yÃ¶nÃ¼nÃ¼ temsil eder. Dostane yabancÄ±; fark etmeye hazÄ±r olduÄŸunuz yeni bir yeteneÄŸi ya da niteliÄŸi simgeler. ÃœrkÃ¼tÃ¼cÃ¼ yabancÄ±; korktuÄŸunuz ya da reddettiÄŸiniz bir tarafÄ±nÄ±zÄ±n yÃ¼zÃ¼ olabilir. YabancÄ±yla sohbet etmek; iÃ§sel bir diyaloÄŸa girdiÄŸinizi gÃ¶sterir."},
  {id:58,name:"DÃ¼ÄŸÃ¼n",slug:"dugun",category:"kisi",
   keywords:["dÃ¼ÄŸÃ¼n gÃ¶rmek","dÃ¼ÄŸÃ¼nde olmak","kendi dÃ¼ÄŸÃ¼nÃ¼"],
   meaning:"BaÄŸlÄ±lÄ±k, birlik ve yeni bir dÃ¶nemin baÅŸlangÄ±cÄ±nÄ±n simgesidir. Kendinin iki yanÄ±nÄ±n buluÅŸmasÄ±.",
   detail:"RÃ¼yada dÃ¼ÄŸÃ¼n gÃ¶rmek; bir kararlÄ±lÄ±k, baÄŸlÄ±lÄ±k ya da kendinizin iki farklÄ± yÃ¶nÃ¼nÃ¼n entegrasyonunu simgeler. Kendi dÃ¼ÄŸÃ¼nÃ¼nÃ¼zÃ¼ gÃ¶rmek; yeni bir dÃ¶nem ya da birlikteliÄŸe hazÄ±r olduÄŸunuzu temsil eder. DÃ¼ÄŸÃ¼ne geÃ§ kalmak ya da gidememek; bu kararlÄ±lÄ±k ya da birleÅŸmeye dair bilinÃ§dÄ±ÅŸÄ± bir tereddÃ¼dÃ¼ gÃ¶sterir. Mutlu bir dÃ¼ÄŸÃ¼n; uyum ve sevincin yakÄ±n olduÄŸunu mÃ¼jdeler."},
  {id:59,name:"Hamilelik",slug:"hamilelik",category:"kisi",
   keywords:["hamile olmak","hamile gÃ¶rmek","doÄŸum yapmak"],
   meaning:"YaratÄ±cÄ±lÄ±k, yeni projeler ve geliÅŸen potansiyelin simgesidir. DoÄŸmakta olan bir ÅŸey.",
   detail:"RÃ¼yada hamile olmak veya hamile birini gÃ¶rmek; kendinizde ya da hayatÄ±nÄ±zda geliÅŸmekte olan yeni bir fikri, projeyi ya da kapasiteyi simgeler. DoÄŸum yapmak; bu yeni ÅŸeyin dÃ¼nyaya Ã§Ä±kmaya hazÄ±r olduÄŸunu ve artÄ±k hayata geÃ§irileceÄŸini gÃ¶sterir. Beklenmedik bir hamilelik; farkÄ±nda olmadÄ±ÄŸÄ±nÄ±z ama bÃ¼yÃ¼yen bir potansiyelin iÅŸaretidir."},
  {id:60,name:"ArkadaÅŸ",slug:"arkadas",category:"kisi",
   keywords:["arkadaÅŸ gÃ¶rmek","eski arkadaÅŸ","arkadaÅŸla kavga"],
   meaning:"Sosyal baÄŸlar, destekleyici iliÅŸkiler ve topluluk hissinin simgesidir.",
   detail:"RÃ¼yada bir arkadaÅŸÄ± gÃ¶rmek; o kiÅŸiyle ya da o kiÅŸinin temsil ettiÄŸi bir deÄŸerle baÄŸlantÄ±nÄ±zÄ± yansÄ±tÄ±r. Eski bir arkadaÅŸÄ± gÃ¶rmek; Ã¶zlediÄŸiniz bir baÄŸÄ± ya da o dÃ¶nemde hissettiÄŸiniz bir duyguyu simgeler. ArkadaÅŸla kavga etmek; bu iliÅŸkide Ã§Ã¶zÃ¼me kavuÅŸturulmamÄ±ÅŸ bir gerilimi temsil eder. ArkadaÅŸlarla gÃ¼zel vakit geÃ§irmek; sosyal desteÄŸe ihtiyaÃ§ duyduÄŸunuzu ya da yakÄ±n zamanda bÃ¶yle bir dÃ¶nem yaÅŸayacaÄŸÄ±nÄ±zÄ± gÃ¶sterir."},

  // NESNE
  {id:61,name:"Para",slug:"para",category:"nesne",
   keywords:["para bulmak","para kaybetmek","para saymak"],
   meaning:"Ã–z deÄŸer, enerji alÄ±ÅŸveriÅŸi ve gÃ¼venliÄŸin simgesidir. ParanÄ±n durumu Ã¶z algÄ±nÄ±zÄ± yansÄ±tÄ±r.",
   detail:"RÃ¼yada para bulmak; Ã¶z deÄŸerinizin arttÄ±ÄŸÄ±nÄ±, kendinize olan gÃ¼veninizin gÃ¼Ã§lendiÄŸini simgeler. Para kaybetmek; gÃ¼venlik ya da Ã¶z deÄŸer konusundaki kaygÄ±larÄ± temsil eder. BÃ¼yÃ¼k miktarda para gÃ¶rmek; maddi ya da duygusal bolluk dÃ¶nemini mÃ¼jdeler. Para saymak; kaynaklarÄ±nÄ±zÄ± ve deÄŸerlerinizi yeniden deÄŸerlendirdiÄŸinizi gÃ¶sterir."},
  {id:62,name:"AltÄ±n",slug:"altin",category:"nesne",
   keywords:["altÄ±n bulmak","altÄ±n takÄ±","altÄ±n para"],
   meaning:"GerÃ§ek deÄŸer, bilgelik ve iÃ§sel zenginliÄŸin simgesidir. Maddi deÄŸil, manevi anlam taÅŸÄ±r.",
   detail:"RÃ¼yada altÄ±n bulmak; iÃ§sel bir zenginliÄŸi, bilgeliÄŸi ya da deÄŸerli bir fÄ±rsatÄ± keÅŸfettiÄŸinize iÅŸaret eder. AltÄ±n takÄ± takmak; kendinizi deÄŸerli hissettirmenin ve bu deÄŸeri gÃ¶stermenin zamanÄ± geldiÄŸini simgeler. AltÄ±n para; maddi ya da manevi bir Ã¶dÃ¼lÃ¼ temsil eder. AltÄ±nÄ±n Ã§alÄ±nmasÄ±; deÄŸer verdiÄŸiniz bir ÅŸeyi kaybetme korkusunu simgeler."},
  {id:63,name:"Ayna",slug:"ayna",category:"nesne",
   keywords:["aynaya bakmak","kÄ±rÄ±k ayna","aynada yansÄ±ma"],
   meaning:"Ã–z yansÄ±ma, kimlik ve gerÃ§eÄŸi gÃ¶rmenin simgesidir. Kendinizi nasÄ±l gÃ¶rdÃ¼ÄŸÃ¼nÃ¼zÃ¼n aynasÄ±.",
   detail:"RÃ¼yada aynaya bakmak; kendinizle yÃ¼zleÅŸme, Ã¶z farkÄ±ndalÄ±k ve kimliÄŸinizi keÅŸfetme sÃ¼recini simgeler. Aynada net bir yansÄ±ma gÃ¶rmek; Ã¶z bilginizin arttÄ±ÄŸÄ±nÄ± temsil eder. KÄ±rÄ±k ayna; parÃ§alanmÄ±ÅŸ ya da tutarsÄ±z bir kimlik algÄ±sÄ±nÄ± ya da kÃ¶tÃ¼ haber korkusunu simgeler. Aynada farklÄ± bir yÃ¼z gÃ¶rmek; kendinizin tanÄ±madÄ±ÄŸÄ±nÄ±z bir yÃ¶nÃ¼yle yÃ¼zleÅŸme davetini temsil eder."},
  {id:64,name:"Silah",slug:"silah",category:"nesne",
   keywords:["silah gÃ¶rmek","silah kullanmak","silahla tehdit"],
   meaning:"GÃ¼Ã§, kontrol ve savunmanÄ±n simgesidir. SaldÄ±rgan mÄ±, yoksa koruyucu mu?",
   detail:"RÃ¼yada silah gÃ¶rmek; gÃ¼Ã§ ve kontrol temalarÄ±nÄ± gÃ¼ndeme getirir. Silah taÅŸÄ±mak; kendinizi koruma ihtiyacÄ±nÄ± ya da gÃ¼Ã§ dengelerindeki deÄŸiÅŸimi simgeler. Silahla tehdit edilmek; hayatÄ±nÄ±zda baskÄ± hissettiÄŸiniz bir durumu temsil eder. Silah kullanmak; bastÄ±rÄ±lmÄ±ÅŸ Ã¶fkeyi ya da kendinizi savunma biÃ§iminizi yansÄ±tÄ±r. SilahÄ± bÄ±rakmak; Ã§atÄ±ÅŸmadan vazgeÃ§me ve uzlaÅŸma arzusunu simgeler."},
  {id:65,name:"BÄ±Ã§ak",slug:"bicak",category:"nesne",
   keywords:["bÄ±Ã§ak gÃ¶rmek","bÄ±Ã§aklanmak","bÄ±Ã§akla kesmek"],
   meaning:"Keskinlik, ayrÄ±lÄ±k ve netliÄŸin simgesidir. BaÄŸlarÄ± koparmak ya da gerÃ§eÄŸi kesmek.",
   detail:"RÃ¼yada bÄ±Ã§ak gÃ¶rmek; hayatÄ±nÄ±zda keskin kararlar almanÄ±z ya da bir ÅŸeyi ya da iliÅŸkiyi hayatÄ±nÄ±zdan Ã§Ä±karmanÄ±z gerektiÄŸini simgeler. BÄ±Ã§akla kesmek; gereksiz baÄŸlarÄ± koparmak ve netlik kazanmak anlamÄ±na gelir. BÄ±Ã§aklanmak; ihanet, acÄ± veren bir sÃ¶z ya da gerÃ§ekle sarsÄ±lmayÄ± temsil eder. BÄ±Ã§aÄŸÄ± uzatmak; yardÄ±m etme niyetini, almak ise ihtiyaÃ§ duyduÄŸunuz yardÄ±mÄ± kabul etmeyi simgeler."},
  {id:66,name:"YÃ¼zÃ¼k",slug:"yuzuk",category:"nesne",
   keywords:["yÃ¼zÃ¼k takmak","yÃ¼zÃ¼k kaybolmasÄ±","niÅŸan yÃ¼zÃ¼ÄŸÃ¼"],
   meaning:"BaÄŸlÄ±lÄ±k, bÃ¼tÃ¼nlÃ¼k ve sonsuzluk dÃ¶ngÃ¼sÃ¼nÃ¼n simgesidir.",
   detail:"RÃ¼yada yÃ¼zÃ¼k takmak; bir iliÅŸkiye ya da karara baÄŸlÄ±lÄ±k ve onayÄ± simgeler. YÃ¼zÃ¼ÄŸÃ¼ kaybetmek; bir iliÅŸki ya da baÄŸlÄ±lÄ±k konusundaki kaygÄ±larÄ± temsil eder. NiÅŸan ya da alyans yÃ¼zÃ¼ÄŸÃ¼; resmi bir baÄŸlÄ±lÄ±ÄŸÄ± ya da bu konudaki duygularÄ± yansÄ±tÄ±r. YÃ¼zÃ¼ÄŸÃ¼n kÄ±rÄ±lmasÄ±; bir baÄŸÄ±n ya da dÃ¶ngÃ¼nÃ¼n sonuna gelindiÄŸini gÃ¶sterir. DeÄŸerli taÅŸlÄ± yÃ¼zÃ¼k; tanÄ±nma ve deÄŸer gÃ¶rme arzusunu simgeler."},
  {id:67,name:"Araba",slug:"araba",category:"nesne",
   keywords:["araba sÃ¼rmek","araba kazasÄ±","arabada olmak"],
   meaning:"HayatÄ±nÄ±zÄ±n kontrolÃ¼, yÃ¶n ve kiÅŸisel gÃ¼cÃ¼n simgesidir. Kim sÃ¼rdÃ¼ÄŸÃ¼ Ã¶nemlidir.",
   detail:"RÃ¼yada araba sÃ¼rmek; hayatÄ±nÄ±zÄ±n direksiyonunda olduÄŸunuzu ve kontrolÃ¼ elinizde tuttuÄŸunuzu simgeler. Yolcu olmak; baÅŸkalarÄ±nÄ±n kararlarÄ±na bÄ±raktÄ±ÄŸÄ±nÄ±z ya da kontrol edemediÄŸiniz bir sÃ¼reci temsil eder. Araba kazasÄ±; hayatÄ±nÄ±zda ciddi bir aksama ya da kontrol kaybÄ± korkusunu simgeler. Araba Ã§alÄ±nmak; kimliÄŸinizin ya da gÃ¼cÃ¼nÃ¼zÃ¼n tehdit altÄ±nda hissettirildiÄŸini temsil eder."},
  {id:68,name:"Anahtar",slug:"anahtar",category:"nesne",
   keywords:["anahtar bulmak","anahtar kaybetmek","kapÄ± anahtarÄ±"],
   meaning:"Ã‡Ã¶zÃ¼mler, eriÅŸim ve gizli bilginin simgesidir. Bir kapÄ±yÄ± aÃ§ma gÃ¼cÃ¼.",
   detail:"RÃ¼yada anahtar bulmak; uzun sÃ¼redir aranan bir Ã§Ã¶zÃ¼me ya da cevaba ulaÅŸtÄ±ÄŸÄ±nÄ±zÄ± simgeler. Anahtar kaybetmek; bir fÄ±rsata ya da bilgiye eriÅŸimi kaybetme kaygÄ±sÄ±nÄ± temsil eder. AltÄ±n anahtar; Ã¶zellikle deÄŸerli bir Ã§Ã¶zÃ¼m ya da fÄ±rsatÄ± simgeler. BirÃ§ok anahtar; Ã¶nÃ¼nÃ¼zde birden fazla seÃ§enek ya da olasÄ±lÄ±k bulunduÄŸunu gÃ¶sterir."},
  {id:69,name:"Kitap",slug:"kitap",category:"nesne",
   keywords:["kitap okumak","eski kitap","kitap yazmak"],
   meaning:"Bilgi, hikaye ve yaÅŸam anlatÄ±sÄ±nÄ±n simgesidir. Ã–ÄŸrenme ya da yazÄ±lmakta olan bir hikaye.",
   detail:"RÃ¼yada kitap okumak; bilgi arayÄ±ÅŸÄ±nÄ±, kendinizi geliÅŸtirme arzusunu ya da geÃ§miÅŸten Ã¶ÄŸrenmeyi simgeler. Eski, gizemli bir kitap; bilinÃ§altÄ±ndan gelen Ã¶nemli bir bilgiyi temsil eder. Kitap yazmak; kendi hikayenizin yazarÄ± olduÄŸunuzu ve hayatÄ±nÄ±zÄ± bilinÃ§le ÅŸekillendirdiÄŸinizi simgeler. BoÅŸ ya da okunamaz sayfalÄ± kitap; henÃ¼z yazÄ±lmamÄ±ÅŸ, Ã¶nÃ¼nÃ¼zdeki boÅŸ sayfalarÄ± temsil eder."},
  {id:70,name:"Saat",slug:"saat",category:"nesne",
   keywords:["saat gÃ¶rmek","saat durmak","zamandan Ã¶nce"],
   meaning:"Zaman baskÄ±sÄ±, ritim ve Ã¶lÃ¼mlÃ¼lÃ¼ÄŸÃ¼n simgesidir. Zamana karÅŸÄ± hissedilen kaygÄ±.",
   detail:"RÃ¼yada saat gÃ¶rmek; zamanla ilgili kaygÄ±larÄ± ya da bitiÅŸ tarihlerinin baskÄ±sÄ±nÄ± simgeler. DurmuÅŸ saat; zamanÄ±n donduÄŸunu, bir ÅŸeyin beklediÄŸini ya da geÃ§miÅŸe sÄ±kÄ±ÅŸÄ±ldÄ±ÄŸÄ±nÄ± temsil eder. Saatin Ã§ok hÄ±zlÄ± iÅŸlemesi; hayatÄ±n Ã§abuk geÃ§tiÄŸi duygusunu ve bu konudaki kaygÄ±yÄ± yansÄ±tÄ±r. Eski antika saat; kÃ¶klere ve geÃ§miÅŸe baÄŸlÄ±lÄ±ÄŸÄ± simgeler."},
  {id:71,name:"Mektup",slug:"mektup",category:"nesne",
   keywords:["mektup almak","mektup yazmak","aÃ§Ä±lmamÄ±ÅŸ mektup"],
   meaning:"Mesajlar, iletiÅŸim ve Ã¶ÄŸrenmek isteyip istemediÄŸinizin simgesidir.",
   detail:"RÃ¼yada mektup almak; Ã¶nemli bir haber ya da mesajÄ±n yolda olduÄŸunu simgeler. AÃ§Ä±lmamÄ±ÅŸ mektup; yÃ¼zleÅŸmeye hazÄ±r olmadÄ±ÄŸÄ±nÄ±z bir gerÃ§eÄŸi ya da duyguyu temsil eder. Mektup yazmak; iletmek istediÄŸiniz ama henÃ¼z sÃ¶yleyemediÄŸiniz bir ÅŸeyi ifade etme ihtiyacÄ±nÄ±zÄ± gÃ¶sterir. Eski mektuplar; geÃ§miÅŸten gelen mesajlarÄ± ya da Ã§Ã¶zÃ¼me kavuÅŸturulmamÄ±ÅŸ bir iletiÅŸimi simgeler."},
  {id:72,name:"Telefon",slug:"telefon",category:"nesne",
   keywords:["telefon aÃ§mak","telefon Ã§almak","sinyal olmamak"],
   meaning:"Ä°letiÅŸim, baÄŸlantÄ± ve duyulmak istemenin simgesidir.",
   detail:"RÃ¼yada telefon Ã§almasÄ±; dikkat etmeniz gereken bir mesaj ya da baÄŸlantÄ± kurmanÄ±z gereken biri olduÄŸunu simgeler. Telefona bakamamak ya da sinyal olmamasÄ±; iletiÅŸim kopmalarÄ±nÄ± ya da ulaÅŸÄ±lamaz hissini temsil eder. Birine ulaÅŸamamak; o kiÅŸiyle ya da temsil ettikleriyle kopukluk hissinizi yansÄ±tÄ±r. Eski bir modelden telefon; nostalji ve geÃ§miÅŸ iletiÅŸimlere dair duygularÄ± simgeler."},
  {id:73,name:"Gemi",slug:"gemi",category:"nesne",
   keywords:["gemide olmak","gemi yolculuÄŸu","gemi batmasÄ±"],
   meaning:"Duygusal yolculuk, bilinÃ§altÄ± ve bÃ¼yÃ¼k bir yolculuÄŸun simgesidir.",
   detail:"RÃ¼yada gemide yolculuk yapmak; duygusal ya da yaÅŸamsal bÃ¼yÃ¼k bir yolculukta olduÄŸunuzu simgeler. Sakin denizde yÃ¼zen gemi; yolculuÄŸunuzun ÅŸimdilik sakince ilerlediÄŸini gÃ¶sterir. FÄ±rtÄ±nada sallanan gemi; zorlu duygusal sÃ¼reÃ§leri ya da belirsizlikleri temsil eder. Gemi batmasÄ±; bÃ¼yÃ¼k bir planÄ±n ya da dÃ¶nemin yÄ±kÄ±lma korkusunu simgeler."},
  {id:74,name:"Tren",slug:"tren",category:"nesne",
   keywords:["trene binmek","treni kaÃ§Ä±rmak","tren yolculuÄŸu"],
   meaning:"HayatÄ±n belirlenen yolu, kolektif yolculuk ve zamanlamanÄ±n simgesidir.",
   detail:"RÃ¼yada trene binmek; doÄŸru zamanda doÄŸru hamleler yaptÄ±ÄŸÄ±nÄ±zÄ± ve ortak bir yÃ¶nde ilerlediÄŸinizi simgeler. Treni kaÃ§Ä±rmak; kaÃ§Ä±rÄ±lan bir fÄ±rsata ya da yanlÄ±ÅŸ zamanlama kaygÄ±sÄ±na iÅŸaret eder. Tren yolculuÄŸu; Ã¶nemli bir hedefe uzanan sÃ¼reci temsil eder. Trenden inmek; bir dÃ¶nemden ya da toplu bir hareketten ayrÄ±lÄ±p kendi yolunuzu seÃ§tiÄŸinizi simgeler."},
  {id:75,name:"Ã‡anta",slug:"canta",category:"nesne",
   keywords:["Ã§anta taÅŸÄ±mak","Ã§anta kaybetmek","aÄŸÄ±r Ã§anta"],
   meaning:"TaÅŸÄ±nan yÃ¼kler, kimlik ve kiÅŸisel kapasitenin simgesidir.",
   detail:"RÃ¼yada aÄŸÄ±r Ã§anta taÅŸÄ±mak; hayatÄ±nÄ±zda Ã§ok fazla sorumluluk ya da duygusal yÃ¼k taÅŸÄ±dÄ±ÄŸÄ±nÄ±zÄ± simgeler. Ã‡anta kaybetmek; kimliÄŸinizi ya da kiÅŸisel kaynaklarÄ±nÄ±zÄ± kaybetme kaygÄ±sÄ±nÄ± temsil eder. BoÅŸ Ã§anta; kapasitenizin doldurmak istediÄŸiniz boÅŸluklarÄ±nÄ± gÃ¶sterir. Ã‡antayÄ± bÄ±rakmak; yÃ¼kleri bÄ±rakma ve hafifÃ§e ilerleme arzusunu simgeler."},

  // EYLEM
  {id:76,name:"UÃ§mak",slug:"ucmak",category:"eylem",
   keywords:["rÃ¼yada uÃ§mak","Ã¶zgÃ¼rce uÃ§mak","uÃ§amomak"],
   meaning:"Ã–zgÃ¼rlÃ¼k, Ã¼stÃ¼n gelme ve sÄ±nÄ±rlarÄ± aÅŸmanÄ±n en gÃ¼Ã§lÃ¼ simgesidir. En olumlu rÃ¼yalardan biri.",
   detail:"RÃ¼yada Ã¶zgÃ¼rce uÃ§mak; Ã¶zgÃ¼rlÃ¼k duygusunu, engellerin Ã¼stesinden gelmeyi ve yÃ¼ksek bir perspektife sahip olmayÄ± simgeler. Bu rÃ¼ya genellikle gerÃ§ek hayatta gÃ¼Ã§lÃ¼ hissedildiÄŸi dÃ¶nemlerde gÃ¶rÃ¼lÃ¼r. UÃ§amomak ya da uÃ§arken dÃ¼ÅŸmek; bir durumda tÄ±kandÄ±ÄŸÄ±nÄ±zÄ± ya da Ã¶zgÃ¼rlÃ¼ÄŸÃ¼nÃ¼zÃ¼n kÄ±sÄ±tlandÄ±ÄŸÄ±nÄ± temsil eder. BaÅŸkalarÄ±yla birlikte uÃ§mak; birlikte yÃ¼kselen ve gÃ¼Ã§lenen iliÅŸkileri simgeler."},
  {id:77,name:"DÃ¼ÅŸmek",slug:"dusmek",category:"eylem",
   keywords:["rÃ¼yada dÃ¼ÅŸmek","uÃ§urumdan dÃ¼ÅŸmek","dÃ¼ÅŸÃ¼p uyanmak"],
   meaning:"Kontrol kaybÄ±, belirsizlik ve bÄ±rakma sÃ¼recinin simgesidir. KaygÄ±nÄ±n en yaygÄ±n rÃ¼ya dili.",
   detail:"RÃ¼yada dÃ¼ÅŸmek; hayatÄ±nÄ±zda kontrolÃ¼ kaybetme ya da bir ÅŸeyin alt Ã¼st olma korkusunu simgeler. UÃ§urumdan dÃ¼ÅŸmek; bÃ¼yÃ¼k bir deÄŸiÅŸim ya da risk anÄ±nda duyulan kaygÄ±yÄ± temsil eder. DÃ¼ÅŸmeden Ã¶nce uyanmak; gÃ¼venli bÃ¶lgede kalmak istemenin bilinÃ§dÄ±ÅŸÄ± bir yansÄ±masÄ±dÄ±r. DÃ¼ÅŸÃ¼p saÄŸlÄ±klÄ±ca karÅŸÄ±ya gelmek ise zorluÄŸun Ã¼stesinden geleceÄŸinizin iÅŸaretidir."},
  {id:78,name:"KoÅŸmak",slug:"kosmak",category:"eylem",
   keywords:["rÃ¼yada koÅŸmak","bir ÅŸeyden kaÃ§mak","yetiÅŸememek"],
   meaning:"KaÃ§Ä±ÅŸ, motivasyon ve enerji dÄ±ÅŸavurumunun simgesidir. Kovalayan mÄ±, kaÃ§an mÄ±?",
   detail:"RÃ¼yada bir ÅŸeyden kaÃ§mak iÃ§in koÅŸmak; yÃ¼zleÅŸmek istemediÄŸiniz bir durumu, kiÅŸiyi ya da duyguyu temsil eder. Bir ÅŸeye yetiÅŸmek iÃ§in koÅŸmak; fÄ±rsatlarÄ± kovalama ve motivasyonunuzun gÃ¼Ã§lÃ¼ olduÄŸunu simgeler. KoÅŸup bir tÃ¼rlÃ¼ ilerliyememek; Ã§abalayan ama bir tÃ¼rlÃ¼ ilerleyemeyen enerjiyi ve hayal kÄ±rÄ±klÄ±ÄŸÄ±nÄ± yansÄ±tÄ±r."},
  {id:79,name:"YÃ¼zmek",slug:"yuzmek",category:"eylem",
   keywords:["rÃ¼yada yÃ¼zmek","derin suda yÃ¼zmek","yÃ¼zememek"],
   meaning:"Duygularla baÅŸ etme, sezgiye gÃ¼venme ve bilinÃ§altÄ±na dalmayÄ± simgeler.",
   detail:"RÃ¼yada Ã¶zgÃ¼rce yÃ¼zmek; duygularÄ±nÄ±zla uyum iÃ§inde olduÄŸunuzu ve bilinÃ§altÄ±nÄ±zda rahatÃ§a gezinebildiÄŸinizi simgeler. Derin, koyu suda yÃ¼zmek; bilinmeze ve belirsizliÄŸe girme cesaretini temsil eder. YÃ¼zememek ya da boÄŸulmak Ã¼zere olmak; bunaltÄ±cÄ± duygularla baÅŸ etmekte zorlandÄ±ÄŸÄ±nÄ±za iÅŸaret eder. SualtÄ±nda nefes alabilmek; duygularÄ±nÄ±za tamamen girme ve onlardan beslene bilme yeteneÄŸini simgeler."},
  {id:80,name:"Ã–lmek",slug:"olmek",category:"eylem",
   keywords:["rÃ¼yada Ã¶lmek","kendini Ã¶lÃ¼ gÃ¶rmek","cenaze"],
   meaning:"DÃ¶nÃ¼ÅŸÃ¼m, bir dÃ¶nemin kapanmasÄ± ve yeniden doÄŸuÅŸun simgesidir. Korkutmaz, deÄŸiÅŸtirir.",
   detail:"RÃ¼yada Ã¶lmek; gerÃ§ek bir Ã¶lÃ¼m korkusuyla deÄŸil, hayatÄ±nÄ±zda kÃ¶klÃ¼ bir deÄŸiÅŸim ya da bir dÃ¶nemin kapandÄ±ÄŸÄ±yla ilgilidir. Kendinizi Ã¶lÃ¼ gÃ¶rmek; eski kimliÄŸinizin ya da yaÅŸam biÃ§iminizin dÃ¶nÃ¼ÅŸÃ¼mÃ¼nÃ¼ simgeler. Cenaze tÃ¶renine katÄ±lmak; bir ÅŸeyi ya da bir dÃ¶nemi bilinÃ§le uÄŸurladÄ±ÄŸÄ±nÄ±zÄ± gÃ¶sterir. Ã–lÃ¼p yeniden uyanmak ise tam anlamÄ±yla yeniden doÄŸuÅŸu ve kÃ¶klÃ¼ bir dÃ¶nÃ¼ÅŸÃ¼mÃ¼ temsil eder."},
  {id:81,name:"DÃ¶vÃ¼ÅŸmek",slug:"dovusmek",category:"eylem",
   keywords:["kavga etmek","dÃ¶vÃ¼ÅŸe girmek","birini yenmek"],
   meaning:"Ä°Ã§sel Ã§atÄ±ÅŸma, kendini savunma ve bastÄ±rÄ±lmÄ±ÅŸ gÃ¼Ã§lerin simgesidir.",
   detail:"RÃ¼yada dÃ¶vÃ¼ÅŸmek; kendinizin iki farklÄ± yÃ¶nÃ¼ arasÄ±ndaki iÃ§sel Ã§atÄ±ÅŸmayÄ± ya da gÃ¼ndelik hayatta bastÄ±rdÄ±ÄŸÄ±nÄ±z bir gerilimi simgeler. Birini yenmek; zorluklarÄ± aÅŸtÄ±ÄŸÄ±nÄ±zÄ± ve kendinizi savunma kapasitesine sahip olduÄŸunuzu temsil eder. DÃ¶vÃ¼ÅŸte kaybetmek; ÅŸu an iÃ§in ezilmekte olduÄŸunuz bir duruma iÅŸaret eder. DÃ¶vÃ¼ÅŸmemek iÃ§in direnÃ§ gÃ¶stermek; barÄ±ÅŸÃ§Ä±l Ã§Ã¶zÃ¼m arayÄ±ÅŸÄ±nÄ±zÄ± simgeler."},
  {id:82,name:"AÄŸlamak",slug:"aglamak",category:"eylem",
   keywords:["rÃ¼yada aÄŸlamak","hÃ¼zÃ¼nle aÄŸlamak","mutluluktan aÄŸlamak"],
   meaning:"Duygusal salÄ±verme, iÃ§sel arÄ±nma ve bastÄ±rÄ±lmÄ±ÅŸ hislerin boÅŸalmasÄ±nÄ±n simgesidir.",
   detail:"RÃ¼yada aÄŸlamak; gerÃ§ek hayatta ifade edemediÄŸiniz ya da bastÄ±rdÄ±ÄŸÄ±nÄ±z duygularÄ±n bilinÃ§altÄ±nda serbest bÄ±rakÄ±lmasÄ±nÄ± simgeler. Bu rÃ¼yadan sonra genellikle daha hafif ve arÄ±nmÄ±ÅŸ hissedilir. HÃ¼zÃ¼nle aÄŸlamak; iÅŸlenmemiÅŸ bir kaybÄ± ya da kederi temsil eder. Mutluluktan aÄŸlamak ise uzun zamandÄ±r beklenen bir iyiliÄŸin ya da sevincin iÃ§ten dÄ±ÅŸa taÅŸmasÄ±nÄ± simgeler."},
  {id:83,name:"GÃ¼lmek",slug:"gulmek",category:"eylem",
   keywords:["rÃ¼yada gÃ¼lmek","kahkaha atmak","neÅŸeyle gÃ¼lmek"],
   meaning:"NeÅŸe, rahatlama ve sosyal mutluluÄŸun simgesidir. Ruhun hafiflemesinin iÅŸareti.",
   detail:"RÃ¼yada kahkaha atmak ya da iÃ§ten gÃ¼lmek; gerÃ§ek hayatÄ±nÄ±zda duygusal bir hafifliÄŸe kavuÅŸmak Ã¼zere olduÄŸunuzu mÃ¼jdeler. NeÅŸeyle gÃ¼lmek; hayata karÅŸÄ± pozitif enerji ve iyimserliÄŸin iÃ§inizde uyandÄ±ÄŸÄ±nÄ± simgeler. BaÅŸkalarÄ±yla birlikte gÃ¼lmek; sosyal baÄŸlarÄ±nÄ±zÄ±n gÃ¼Ã§leneceÄŸini ve keyifli paylaÅŸÄ±mlarÄ±n yaklaÅŸmakta olduÄŸunu temsil eder."},
  {id:84,name:"Kaybolmak",slug:"kaybolmak",category:"eylem",
   keywords:["rÃ¼yada kaybolmak","yolunu kaybetmek","ÅŸehirde kaybolmak"],
   meaning:"YÃ¶n arayÄ±ÅŸÄ±, kimlik belirsizliÄŸi ve geÃ§iÅŸ dÃ¶neminin simgesidir.",
   detail:"RÃ¼yada kaybolmak; hayatÄ±nÄ±zda net bir yÃ¶n ya da amaÃ§ bulamadÄ±ÄŸÄ±nÄ±z, bÃ¼yÃ¼k bir geÃ§iÅŸ ya da deÄŸiÅŸim sÃ¼recinde olduÄŸunuzu simgeler. Åžehirde kaybolmak; sosyal ya da kariyer hayatÄ±nÄ±zda yÃ¶n kaybÄ±nÄ± temsil eder. Ormanda kaybolmak; duygular ve iÃ§sel dÃ¼nyada kaybolmayÄ± simgeler. Yolu bulmak; bu belirsizlikten Ã§Ä±kmak iÃ§in ihtiyaÃ§ duyduÄŸunuz sezgiye gÃ¼venmeniz gerektiÄŸini gÃ¶sterir."},
  {id:85,name:"Ã‡Ä±plak Olmak",slug:"ciplak-olmak",category:"eylem",
   keywords:["rÃ¼yada Ã§Ä±plak olmak","herkesin Ã¶nÃ¼nde Ã§Ä±plak","utanarak Ã§Ä±plak"],
   meaning:"KÄ±rÄ±lganlÄ±k, otantiklik ve yargÄ±lanma korkusunun simgesidir.",
   detail:"RÃ¼yada herkesin Ã¶nÃ¼nde Ã§Ä±plak olmak ve utanmak; gerÃ§ek benliÄŸinizin ortaya Ã§Ä±kmasÄ±ndan ya da baÅŸkalarÄ± tarafÄ±ndan yargÄ±lanmaktan duyduÄŸunuz kaygÄ±yÄ± simgeler. Bu Ã§ok yaygÄ±n bir rÃ¼yadÄ±r ve genellikle performans baskÄ±sÄ±nÄ±n yoÄŸun hissedildiÄŸi dÃ¶nemlerde gÃ¶rÃ¼lÃ¼r. Ã‡Ä±plak olup utanmamak ise kendinizi olduÄŸu gibi kabul ettiÄŸinizin ve otantikliÄŸinizden gÃ¼Ã§ aldÄ±ÄŸÄ±nÄ±zÄ±n iÅŸaretidir."}
];

const CAT_LABELS = {
  hayvanlar: "Hayvanlar",
  doga: "DoÄŸa",
  mekan: "Mekan",
  kisi: "KiÅŸiler",
  nesne: "Nesneler",
  eylem: "Eylemler"
};

const CAT_ICONS = {
  hayvanlar: "ðŸ¾",
  doga: "ðŸŒ¿",
  mekan: "ðŸ›",
  kisi: "ðŸ‘¤",
  nesne: "ðŸ’Ž",
  eylem: "âš¡"
};

let activeCategory = "all";
let searchQuery = "";

function renderGrid() {
  const grid = document.getElementById("dream-grid");
  let filtered = DREAMS.filter(d => {
    const catMatch = activeCategory === "all" || d.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const textMatch = !q ||
      d.name.toLowerCase().includes(q) ||
      d.keywords.some(k => k.toLowerCase().includes(q)) ||
      d.meaning.toLowerCase().includes(q);
    return catMatch && textMatch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state">Arama sonucu bulunamadÄ±.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <a href="ruya/${d.slug}.html" class="dream-card">
      <div class="dream-card-icon">${CAT_ICONS[d.category]}</div>
      <div class="dream-card-name">${d.name}</div>
      <div class="dream-card-cat">${CAT_LABELS[d.category]}</div>
      <div class="dream-card-meaning">${d.meaning.substring(0, 80)}â€¦</div>
    </a>
  `).join("");
}

function setCategory(cat, el) {
  activeCategory = cat;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  el.classList.add("active");
  renderGrid();
}

function onSearch(val) {
  searchQuery = val;
  renderGrid();
}

document.addEventListener("DOMContentLoaded", () => {
  renderGrid();

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", e => onSearch(e.target.value));
  }

  // Animated stars
  const starsEl = document.getElementById("stars");
  if (starsEl) {
    let html = "";
    for (let i = 0; i < 120; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 0.5;
      const delay = Math.random() * 4;
      html += `<div class="star" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;animation-delay:${delay}s"></div>`;
    }
    starsEl.innerHTML = html;
  }
});
