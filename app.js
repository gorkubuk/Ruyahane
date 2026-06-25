const DREAMS = [
  // HAYVANLAR
  {id:1,name:"Yılan",slug:"yilan",category:"hayvanlar",
   keywords:["yılan görmek","yılan ısırması","yılan kovalamak"],
   meaning:"Dönüşümün, gizli tehlikenin veya şifanın habercisidir. Yılan enerji ve değişim sembolüdür.",
   detail:"Rüyada yılan görmek hayatınızda köklü bir dönüşüm sürecine girdiğinize işaret eder. Yılanın sizi ısırması, yakın çevrenizde sizi sarsacak bir ihaneti ya da sürpriz bir gelişmeyi müjdeler. Sizi kovalayan yılan ise kaçındığınız bir gerçekle yüzleşme zamanının geldiğini söyler. Beyaz yılan bereket ve şansı, siyah yılan farkında olmadığınız gizli bir kaygıyı simgeler."},
  {id:2,name:"Köpek",slug:"kopek",category:"hayvanlar",
   keywords:["köpek görmek","köpek ısırması","saldıran köpek"],
   meaning:"Sadakat, dostluk ve güvenin simgesidir. Köpeğin tavrı ilişkileriniz hakkında mesaj taşır.",
   detail:"Sizi seven, dostane bir köpek; hayatınızdaki sadık insanları ve güvenli ilişkileri temsil eder. Saldırgan ya da ısıran bir köpek ise çevrenizde güvenmemeniz gereken, sizi kıskanan veya zarar verebilecek birinin varlığına işaret eder. Yaralı köpek; ihmal ettiğiniz bir arkadaşlığın ya da ilişkinin onarıma ihtiyacı olduğunu söyler."},
  {id:3,name:"Kedi",slug:"kedi",category:"hayvanlar",
   keywords:["kedi görmek","kedi ısırması","siyah kedi"],
   meaning:"Sezgi, bağımsızlık ve gizem sembolüdür. Kadınlık enerjisi ve iç sesin mesajıdır.",
   detail:"Rüyada kedi görmek sezgilerinize güvenmeniz gerektiğine işaret eder. Beyaz kedi; huzur ve bereket, siyah kedi; belirsizlik veya görmezden geldiğiniz bir his, turuncu kedi ise yaratıcılık ve canlılık simgeler. Kedi ile oyun oynamak, hayatınızdaki bağımsız ve oyuncu yönünüzün gün yüzüne çıktığını gösterir."},
  {id:4,name:"At",slug:"at",category:"hayvanlar",
   keywords:["at görmek","ata binmek","yaban atı"],
   meaning:"Güç, özgürlük ve tutkuyu temsil eder. Hayatınızın kontrolü ve enerjinizle ilgili mesaj verir.",
   detail:"Ata binmek; hayatınızın kontrolünün sizde olduğunu, doğru yolda ilerlediğinizi gösterir. Kontrol edemediğiniz yabani bir at; disipline edilmesi gereken dağınık enerjinizi ya da frenlenemeyen duygularınızı temsil eder. Beyaz at başarı ve nezaketi, siyah at gizemli bir dönüşümü simgeler."},
  {id:5,name:"Aslan",slug:"aslan",category:"hayvanlar",
   keywords:["aslan görmek","aslan saldırısı","aslan ile konuşmak"],
   meaning:"Cesaret, otorite ve liderliğin simgesidir. Güçlü bir sınav ya da karşılaşmanın habercisidir.",
   detail:"Rüyada aslan görmek; hayatınızda kendinizden daha güçlü gördüğünüz biriyle ya da zor bir durumla yüzleşeceğinizi gösterir. Aslan sizi takip ediyorsa bu gücü kendi içinizde taşıdığınız anlamına gelir. Sakin bir aslan; içinizdeki lideri uyandırmanın zamanı geldiğini söyler."},
  {id:6,name:"Balık",slug:"balik",category:"hayvanlar",
   keywords:["balık görmek","balık tutmak","ölü balık"],
   meaning:"Bereket, duygular ve bilinçaltının sembolüdür. Duygusal akış ve bolluk mesajı taşır.",
   detail:"Suda özgürce yüzen balıklar; duygusal akışınızın iyi olduğunu ve bolluk döneminin kapıda olduğunu müjdeler. Balık tutmak; arzuladığınız bir fırsatı yakalamak üzere olduğunuza işaret eder. Ölü balık; içinizde ölen bir his ya da kaçırılan fırsatları temsil eder. Büyük balık; büyük kazanımların yakın olduğunu simgeler."},
  {id:7,name:"Kuş",slug:"kus",category:"hayvanlar",
   keywords:["kuş görmek","uçan kuş","kafesteki kuş"],
   meaning:"Özgürlük, haberler ve yüksek hedeflerin simgesidir. Ruhun özgürlük arayışını yansıtır.",
   detail:"Özgürce uçan kuşlar; özgürlük arzunuzu ve hedeflerinize yaklaştığınızı gösterir. Kafesteki kuş; kendinizi sıkışmış ya da özgür hissedemediğinizin işaretidir. Öten kuş; yakında güzel haberler geleceğine, ölü kuş ise bir dönemin kapanacağına işaret eder. Beyaz güvercin; barış ve huzuru simgeler."},
  {id:8,name:"Örümcek",slug:"orumcek",category:"hayvanlar",
   keywords:["örümcek görmek","örümcek ağı","örümcek ısırması"],
   meaning:"Yaratıcılık, sabır ve karmaşık ilişkilerin simgesidir. Ağ kurmak ve bağlantılar yaratmak.",
   detail:"Rüyada örümcek görmek; hayatınızda dikkatli planlar yapmanız gerektiğine işaret eder. Örümcek ağı; karmaşık ancak bir amaca hizmet eden ilişki veya iş ağlarınızı temsil eder. Büyük örümcek; sizi yönlendiren güçlü bir kadın enerjiyi ya da baskı hissettiğiniz bir durumu simgeler. Örümcek ısırması; farkında olmadan birinin tuzağına düştüğünüze işaret eder."},
  {id:9,name:"Arı",slug:"ari",category:"hayvanlar",
   keywords:["arı görmek","arı ısırması","arı kovanı"],
   meaning:"Çalışkanlık, topluluk ve ödülün simgesidir. Emek verilen şeyin karşılığını alma mesajıdır.",
   detail:"Arı görmek; çalışkanlığınızın yakında meyvesini vereceğine işaret eder. Arı ısırması; küçük bir acı ya da çaba karşılığında büyük bir ödül geleceğini söyler. Arı kovanı; sosyal çevrenizin hareketli olduğunu ve ekip çalışmasının önemine dikkat çeker. Bal toplayan arılar; üretkenlik ve bolluk döneminin yakın olduğunu müjdeler."},
  {id:10,name:"Fare",slug:"fare",category:"hayvanlar",
   keywords:["fare görmek","fare kovalamak","fare yuvası"],
   meaning:"Küçük kaygılar, fark edilmemiş detaylar ve hayatta kalma içgüdüsünün simgesidir.",
   detail:"Rüyada fare görmek; dikkat etmediğiniz küçük ama önemli bir ayrıntının varlığına işaret eder. Fareyi kovalamak; endişelerinizle yüzleşme çabanızı gösterir. Çok sayıda fare; küçük sorunların birikmesi ve onların getirdiği bunaltıcı hissi yansıtır. Fare yuvasına bakmak ise aile ya da yuva konusundaki gizli endişeleri simgeler."},
  {id:11,name:"Ayı",slug:"ayi",category:"hayvanlar",
   keywords:["ayı görmek","ayı saldırısı","anne ayı"],
   meaning:"Güç, koruma ve içe çekilmenin simgesidir. Kendinizi savunma ya da yeniden şarj olma ihtiyacı.",
   detail:"Rüyada ayı görmek; büyük bir güce ya da yetki sahibi birine yakın olduğunuza işaret eder. Anne ayı; koruyucu içgüdülerinizi ya da kendinizi koruyan bir figürü temsil eder. Ayının sizi takip etmesi; kaçmak yerine durmanız ve gerçekle yüzleşmeniz gerektiğini söyler. Uyuyan ayı; içe kapanma ve yeniden toparlanma dönemine girdiğinizi gösterir."},
  {id:12,name:"Kurt",slug:"kurt",category:"hayvanlar",
   keywords:["kurt görmek","kurt uluması","kurt sürüsü"],
   meaning:"Özgürlük, sezgi ve aidiyet duygusunun simgesidir. Sürüyle ya da yalnız olmanın dersi.",
   detail:"Rüyada kurt görmek; kendinize ait güçlü bir sezgiye ve içgüdüye sahip olduğunuzu gösterir. Kurt sürüsü; ait olduğunuz grubu ya da gerçek ailenizi simgeler. Yalnız kurt; bağımsızlık ve kendi yolunuzu bulma arayışını temsil eder. Kurt uluması; önemli bir mesajın veya haykırılması gereken bir gerçeğin simgesidir."},
  {id:13,name:"Kaplumbağa",slug:"kaplumbaga",category:"hayvanlar",
   keywords:["kaplumbağa görmek","kaplumbağa kabuğu","yavaş kaplumbağa"],
   meaning:"Sabır, kararlılık ve öz korumanın simgesidir. Yavaş ama sağlam ilerlemenin mesajıdır.",
   detail:"Rüyada kaplumbağa görmek; acele etmemeniz ve adım adım ilerlemeniz gerektiğine işaret eder. Kaplumbağanın kabuğuna çekilmesi; kendinizi korumaya ya da içe kapanmaya ihtiyaç duyduğunuzu gösterir. Yavaş ilerleyen kaplumbağa; istikrarlı çalışmanın ileride büyük başarı getireceğini söyler. Deniz kaplumbağası ise uzun bir yolculuğu simgeler."},
  {id:14,name:"Karga",slug:"karga",category:"hayvanlar",
   keywords:["karga görmek","karga sesi","karga uçuşu"],
   meaning:"Haber, dönüşüm ve gizem sembolüdür. Önemli bir mesajın yakında geleceğinin işaretidir.",
   detail:"Rüyada karga görmek; önemli bir haberin ya da kılavuzluk mesajının yolda olduğuna işaret eder. Karga sesinin duyulması; dikkat etmeniz gereken bir uyarı veya fırsatın yakın olduğunu söyler. Uçan karga; hayatınızda gerçekleşmek üzere olan bir dönüşümü simgeler. Elinize konan karga ise içsel bir bilgeliğe ulaştığınızı gösterir."},
  {id:15,name:"Kartal",slug:"kartal",category:"hayvanlar",
   keywords:["kartal görmek","kartal uçuşu","kartal pençesi"],
   meaning:"Vizyon, yüksek hedefler ve ruhsal perspektifin simgesidir. Yukarıdan bakabilme yeteneği.",
   detail:"Rüyada kartal görmek; yüksek bir vizyon ve geniş bir bakış açısına sahip olduğunuzu gösterir. Yükseklerde süzülen kartal; sorunlarınızın üstüne çıkma ve büyük resmi görme zamanının geldiğine işaret eder. Kartal pençesine geçmek; güçlü biriyle ittifak ya da kendi gücünüzü keşfetmek anlamına gelir. Kartal yuvası; zirveye ulaşma arzusunu simgeler."},
  {id:16,name:"Timsah",slug:"timsah",category:"hayvanlar",
   keywords:["timsah görmek","timsah saldırısı","timsahtan kaçmak"],
   meaning:"Gizli tehlikeler, ilkel korkular ve fırsatı kollamanın simgesidir. Sabır ve tehlike bir arada.",
   detail:"Rüyada timsah görmek; görünürde sakin ama içten tehlikeli bir durumu ya da kişiyi temsil eder. Timsahın sizi izlemesi; sizi bekleyen gizli bir tuzak ya da fırsatı kollayan biri olduğuna işaret eder. Timsahtan kaçmak; bu tehlikeden kurtulma çabanızı simgeler. Timsahla yüzleşmek ise korkularınıza cesurca yaklaşmanız gerektiğini söyler."},
  {id:17,name:"Fil",slug:"fil",category:"hayvanlar",
   keywords:["fil görmek","file binmek","beyaz fil"],
   meaning:"Bilgelik, hafıza ve istikrarın simgesidir. Uzun vadeli düşünce ve güçlü temellerin mesajı.",
   detail:"Rüyada fil görmek; hayatınızdaki büyük ama sakin gücü, bilgeliği ve dayanıklılığı temsil eder. File binmek; yetki sahibi ya da güçlü birileriyle birlikte hareket ettiğinizi gösterir. Beyaz fil; nadir bulunan bir şans ya da manevi bir armağanı simgeler. Fil sürüsü; aile bağlarının ve grup dayanışmasının önemine dikkat çeker."},
  {id:18,name:"Geyik",slug:"geyik",category:"hayvanlar",
   keywords:["geyik görmek","geyik boynuzu","koşan geyik"],
   meaning:"Zarafet, sezgi ve nazik büyümenin simgesidir. Doğayla uyum içinde gelişme mesajı.",
   detail:"Rüyada geyik görmek; nazik ve sezgisel bir büyüme dönemine girdiğinize işaret eder. Koşan geyik; hızla gelen fırsatları ve onları yakalamanız için çevikliğinizi sembolize eder. Boynuzlu geyik; güç ve onurunuzun arttığını, liderlik özelliklerinizin öne çıktığını gösterir. Dişi geyik ise annelik, şefkat ve sezgiye vurgu yapar."},
  {id:19,name:"Tavşan",slug:"tavsan",category:"hayvanlar",
   keywords:["tavşan görmek","beyaz tavşan","tavşan kovalamak"],
   meaning:"Bereket, şans ve hızlı fırsatların simgesidir. Verimlilik ve yeni başlangıçların habercisi.",
   detail:"Rüyada tavşan görmek; şansın kapınızı çaldığına ve fırsatların hızla geldiğine işaret eder. Beyaz tavşan; saflık ve şansı, gri tavşan ise dikkat gerektiren bir durumu simgeler. Tavşanı kovalamak; fırsatın peşinde koştuğunuzu ama henüz yakalayamadığınızı gösterir. Tavşan yavruları; yeni projeler veya aile büyümesinin habercisidir."},
  {id:20,name:"Kelebek",slug:"kelebek",category:"hayvanlar",
   keywords:["kelebek görmek","kelebek uçuşu","kelebekle oynamak"],
   meaning:"Dönüşüm, kırılganlık ve kısa ömürlü güzelliğin simgesidir. Tırtıldan kelebeğe geçiş.",
   detail:"Rüyada kelebek görmek; hayatınızda tamamlanan ya da tamamlanmak üzere olan bir dönüşümü simgeler. Uçan kelebek; özgürleşme, hafiflik ve yeni bir kimliğe adım atmayı temsil eder. Renkli kelebekler; neşe ve ilham dolu bir dönemi müjdeler. Kelebeği yakalamak; güzel ama kısa süren bir anın tadını çıkarma arzusunu yansıtır."},

  // DOĞA
  {id:21,name:"Su",slug:"su",category:"doga",
   keywords:["su görmek","temiz su","kirli su"],
   meaning:"Duygular, bilinçaltı ve arınmanın simgesidir. Duygusal durumunuzun en net aynasıdır.",
   detail:"Rüyada temiz, berrak su görmek; duygusal açıdan net olduğunuzu, içsel huzura yaklaştığınızı gösterir. Kirli ya da bulanık su; çözüme kavuşturulmamış duygular ve belirsizlikleri temsil eder. Akarsu; sürekli değişen ve akan yaşam enerjisini simgeler. Durgun göl; içsel derinliği ve kişisel yansımayı ifade eder. Suda boğulmak; duygulara hakim olamamanın işaretidir."},
  {id:22,name:"Ateş",slug:"ates",category:"doga",
   keywords:["ateş görmek","yangın","ateşe dokunmak"],
   meaning:"Tutku, dönüşüm ve arınmanın sembolüdür. Kontroldeki ateş güç, kontrolsüz ateş tehlike.",
   detail:"Kontrol altındaki şenlik ateşi; içinizdeki tutku ve enerjinin verimli bir şekilde kullanıldığını gösterir. Yangın; kontrol edemediğiniz duyguları veya çevrenizdeki yıkıcı bir güç olduğunu simgeler. Ateşe dokunup yanmamak; tehlikeyle başa çıkma yeteneğinizi temsil eder. Sönen ateş; motivasyon kaybı ya da bir dönemin kapandığına işaret eder."},
  {id:23,name:"Yağmur",slug:"yagmur",category:"doga",
   keywords:["yağmur görmek","yağmurda ıslanmak","şiddetli yağmur"],
   meaning:"Arınma, yenilenme ve duygusal salıvermenin simgesidir. Uzun kuraklıktan sonra gelen rahatlama.",
   detail:"Rüyada yağmur görmek; birikmiş duygusal yüklerin ve stresin yavaş yavaş çözüleceğine işaret eder. Yağmurda mutlulukla ıslanmak; yenilenme ve arınma sürecini kucaklamanızı simgeler. Şiddetli fırtınalı yağmur; yoğun duyguları ve sarsılacak bir dönemi temsil eder. Güneşli yağmur; zorluğun içinde güzelliği ve şansı bulmayı simgeler."},
  {id:24,name:"Kar",slug:"kar",category:"doga",
   keywords:["kar görmek","kar yağışı","karda yürümek"],
   meaning:"Saflık, sessizlik ve yeni başlangıçların simgesidir. Örtülüp bekleme ya da temiz sayfa açma.",
   detail:"Yavaşça yağan, beyaz kar; içsel huzuru, saf bir başlangıcı ve temizlenmeyi simgeler. Blizzard ya da tipi; bunaltıcı duygular ve zorlanma dönemini temsil eder. Karda yürümek; engellere rağmen ilerlemek ve yol açmak anlamına gelir. Eriyen kar; uzun süredir beklenen bir çözümün yaklaştığını müjdeler."},
  {id:25,name:"Fırtına",slug:"firtina",category:"doga",
   keywords:["fırtına görmek","fırtınada kalmak","fırtına geçmek"],
   meaning:"Güçlü duygular, büyük değişimler ve zorlu geçiş süreçlerinin simgesidir.",
   detail:"Rüyada fırtına görmek; hayatınızda sarsıcı bir dönemin kapıda olduğunu ya da halihazırda yaşandığını gösterir. Fırtınadan sığınacak yer bulmak; zorlu süreçlerde destek ve güvenlik arayışınızı simgeler. Fırtınanın dinmesini beklemek; sabır ve dayanıklılığınızı temsil eder. Fırtınanın ardından güneş; zor bir dönemin sona erip güzel günlerin geleceğini müjdeler."},
  {id:26,name:"Güneş",slug:"gunes",category:"doga",
   keywords:["güneş görmek","gün doğumu","güneş ışığı"],
   meaning:"Başarı, canlılık ve netliğin simgesidir. Olumlu enerji ve aydınlanmanın habercisi.",
   detail:"Rüyada parlak güneş görmek; başarı, sağlık ve bereketin yaklaştığına işaret eder. Gündoğumu; yeni başlangıçları ve taze umutları simgeler. Günbatımı; bir dönemin ya da ilişkinin sona erdiğini gösterir. Güneş ışığında yürümek; doğru yolda ilerlediğinizi ve korunduğunuzu hissettiren bir işarettir."},
  {id:27,name:"Ay",slug:"ay",category:"doga",
   keywords:["ay görmek","dolunay","hilal"],
   meaning:"Sezgi, duygular ve kadınsı enerjinin simgesidir. Bilinçaltının ışığını temsil eder.",
   detail:"Rüyada dolunay görmek; duygularınızın zirveye ulaştığını ve sezgilerinizin çok güçlü olduğunu gösterir. Hilal; yeni dönemlerin başlangıcını ve büyüme potansiyelini simgeler. Kırmızı ay; yoğun duygusal bir dönem ya da önemli bir dönüm noktasını temsil eder. Bulutların arkasına gizlenen ay; gizli bir gerçeğin ya da duygunun henüz gün yüzüne çıkmadığına işaret eder."},
  {id:28,name:"Yıldız",slug:"yildiz",category:"doga",
   keywords:["yıldız görmek","kayan yıldız","yıldız dolu gökyüzü"],
   meaning:"Umut, rehberlik ve kaderin simgesidir. Yol gösterici ışık ve ilham kaynağı.",
   detail:"Rüyada parlak yıldız görmek; umudun, ilhamın ve doğru yönde gittiğinizin işaretidir. Kayan yıldız görmek; bir dileğinizin ya da hayalinizin yakında gerçekleşeceğini müjdeler. Yıldız dolu gökyüzü; önünüzdeki olasılıkların ve seçeneklerin bolluğunu simgeler. Bir yıldızın sönmesi; bir dönemin kapandığını ya da uğurlamak zorunda kalacağınız birini temsil eder."},
  {id:29,name:"Deniz",slug:"deniz",category:"doga",
   keywords:["deniz görmek","denize girmek","fırtınalı deniz"],
   meaning:"Bilinçaltının derinliği, sonsuz olasılıklar ve duygusal özgürlüğün simgesidir.",
   detail:"Sakin, mavi deniz; duygusal dinginliği ve kendinizle barışıklığı temsil eder. Denize girmek; bilinçaltınıza dalmak ve içsel keşife çıkmak anlamına gelir. Fırtınalı deniz; kontrol edemediğiniz duyguları ve zorlu bir süreci simgeler. Denizde kaybolmak; yön arayışını, fırtınalı denizden kurtulmak ise zorluğu atlatacağınızı gösterir."},
  {id:30,name:"Nehir",slug:"nehir",category:"doga",
   keywords:["nehir görmek","nehirde yüzmek","nehir karşısı"],
   meaning:"Yaşam yolculuğu, akış ve yönün simgesidir. Hayatın ritmiyle uyum ya da çatışma.",
   detail:"Sakin akan nehir; hayatınızın doğal akışında ilerlediğinizi gösterir. Nehire karşı yüzmek; direniş gösterdiğiniz bir durumu ya da zorluğa göğüs germenizi simgeler. Nehri geçmek; önemli bir karar ya da yaşam eşiğini aştığınızı temsil eder. Hızlı akan çağlayan; değişimin kontrolünüzün dışında hızlandığına işaret eder."},
  {id:31,name:"Dağ",slug:"dag",category:"doga",
   keywords:["dağ görmek","dağa tırmanmak","dağ zirvesi"],
   meaning:"Zorluklar, başarılar ve geniş perspektifin simgesidir. Engeller ya da ulaşılmak istenen hedefler.",
   detail:"Rüyada dağ görmek; önünüzdeki büyük bir hedefe ya da aşmanız gereken önemli bir zorluğa işaret eder. Dağa tırmanmak; hedefe doğru adım adım ilerlemek için emek verdiğinizi gösterir. Dağ zirvesinde olmak; büyük bir başarıya ulaştığınızı ve geniş bir bakış açısına kavuştuğunuzu simgeler. İnişte olmak; elde ettiğinizi pratiğe taşıma zamanının geldiğini söyler."},
  {id:32,name:"Orman",slug:"orman",category:"doga",
   keywords:["ormanda olmak","ormanda kaybolmak","orman yolu"],
   meaning:"Bilinmezlik, karmaşık düşünceler ve içsel keşifin simgesidir. Bilinçaltının labirenti.",
   detail:"Rüyada ormanda olmak; hayatınızın karmaşık, belirsiz ya da yoğun bir döneminden geçtiğinize işaret eder. Ormanda kaybolmak; kendinizi ya da yönünüzü bulmakta zorlandığınızı simgeler. Orman içinde bir yol bulmak; belirsizliğin arasından bir çıkış yolu keşfettiğinizi gösterir. Aydınlık orman; karmaşanın içinde huzuru bulduğunuzu temsil eder."},
  {id:33,name:"Ağaç",slug:"agac",category:"doga",
   keywords:["ağaç görmek","ağaca tırmanmak","kökler"],
   meaning:"Köklülük, büyüme ve aile bağlarının simgesidir. Hayattaki sabitlik ve destekleyici güçler.",
   detail:"Güçlü ve yeşil bir ağaç; sağlam köklere, güçlü aile ya da destek ağına sahip olduğunuzu simgeler. Ağaca tırmanmak; kendinizi geliştirme ve yükselme çabanızı temsil eder. Devrilen ya da yıkılan ağaç; hayatınızdaki önemli bir desteği ya da güven duyulan birini kaybetme korkusunu gösterir. Kurumuş ağaç; tükenmiş ya da ihmal edilmiş bir ilişkiyi temsil eder."},
  {id:34,name:"Çiçek",slug:"cicek",category:"doga",
   keywords:["çiçek görmek","çiçek toplamak","solmuş çiçek"],
   meaning:"Güzellik, büyüme ve potansiyelin simgesidir. Açılmak üzere olan ya da açılmış bir dönem.",
   detail:"Rüyada açan çiçek görmek; kişisel gelişiminizin çiçek açtığını ve güzel bir dönemin içinde olduğunuzu gösterir. Çiçek toplamak; güzelliğe ve olumlu enerjiye açık olduğunuzu simgeler. Solmuş ya da kurumuş çiçek; kaçırılan fırsatları ya da ihmal edilen bir ilişkiyi temsil eder. Bahçe dolusu çiçek; bereketli ve dolu bir yaşamı müjdeler."},
  {id:35,name:"Toprak",slug:"toprak",category:"doga",
   keywords:["toprak görmek","toprağa düşmek","toprak kazmak"],
   meaning:"Köklülük, doğurganlık ve temel ihtiyaçların simgesidir. Güvenli zemin ve yaratıcı potansiyel.",
   detail:"Verimli, koyu toprak; yaratıcılığın ve büyümenin olgunlaştığı bereketli bir dönemi simgeler. Toprağa düşmek; gerçeklikle yüzleşme ya da mütevazı olmaya davet eder. Toprak kazmak; geçmişi araştırma, gizli bir gerçeği ya da kaynağı bulmak için çabaladığınızı gösterir. Kuru çatlak toprak; kaynak ve enerji ihtiyacınızı temsil eder."},

  // MEKAN
  {id:36,name:"Ev",slug:"ev",category:"mekan",
   keywords:["ev görmek","eski ev","yeni ev","evde yangın"],
   meaning:"Benliğin, güvenliğin ve aile bağlarının simgesidir. Evin her odası farklı bir anlam taşır.",
   detail:"Rüyada ev görmek; kendinizi, psikenizi ve iç dünyanızı temsil eder. Çocukluk evinizi görmek; geçmiş kalıpları ve çözüme kavuşturulması gereken eski deneyimleri simgeler. Yeni bir ev; yeni bir başlangıç ya da kendinizin yeni bir yönünü keşfetmek anlamına gelir. Evde yangın çıkması; köklü bir dönüşümü, evin çökmesi ise büyük bir değişim korkusunu temsil eder."},
  {id:37,name:"Okul",slug:"okul",category:"mekan",
   keywords:["okul görmek","okula dönmek","sınav olmak"],
   meaning:"Öğrenme, değerlendirilme ve geçmiş kalıpların simgesidir. Test edilme hissi ve hazır olup olmama.",
   detail:"Rüyada okula dönmek; kendinizi bir konuda yetersiz ya da test ediliyor hissettiğinizde ortaya çıkar. Sınava hazır olmamak; hayatın getirdiği sorumluluklara ya da zorluklara hazır olmadığınız hissini yansıtır. Öğretmenle konuşmak; bir konuda rehberlik ya da otorite figürü aramanızı simgeler. Okuldan mezun olmak; bir öğrenme sürecinin tamamlandığını ve yeni evreye geçişi temsil eder."},
  {id:38,name:"Hastane",slug:"hastane",category:"mekan",
   keywords:["hastanede olmak","hastane koridoru","ameliyat olmak"],
   meaning:"İyileşme ihtiyacı, kırılganlık ve özenin simgesidir. Beden ya da ruh iyileşmesi.",
   detail:"Rüyada hastanede olmak; fiziksel ya da duygusal olarak dinlenme ve iyileşmeye ihtiyaç duyduğunuzu gösterir. Ameliyat olmak; hayatınızdan bir şeyi çıkarma, derin bir dönüşümü kabul etme sürecini simgeler. Hasta birini ziyaret etmek; ihmal ettiğiniz bir ilişkiye ya da kendinizin bakıma muhtaç bir yönüne dikkat çeker. Hastaneden taburcu olmak; iyileşme sürecinin tamamlandığını müjdeler."},
  {id:39,name:"Mezarlık",slug:"mezarlik",category:"mekan",
   keywords:["mezarlık görmek","mezara gitmek","mezarda ağlamak"],
   meaning:"Geçmişle yüzleşme, kabul ve anma sürecinin simgesidir. Korku değil, kapanış ve huzur.",
   detail:"Rüyada mezarlık görmek; geçmişle barışma, biten ilişkileri ya da dönemleri kabul etme sürecinin simgesidir. Bu rüya genellikle ölüm korkusundan değil, bitişlere duyulan histen kaynaklanır. Tanıdığın birisinin mezarını ziyaret etmek; o kişiyle ya da o kişinin temsil ettiği bir dönemle barışmak istediğinizi gösterir. Mezarlıkta huzurlu olmak; geçmişle barıştığınızın güzel işaretidir."},
  {id:40,name:"Köprü",slug:"kopru",category:"mekan",
   keywords:["köprü görmek","köprüden geçmek","köprü çökmesi"],
   meaning:"Geçiş, karar noktası ve iki dünya arasındaki bağlantının simgesidir.",
   detail:"Rüyada köprü görmek; hayatınızdaki önemli bir geçiş dönemini ya da köklü bir kararı simgeler. Köprüden sağlıklıca geçmek; bu geçişi başarıyla tamamlayacağınıza işaret eder. Köprünün çökmesi; planlarınızda ya da güvendiğiniz bir bağlantıda aksaklık yaşanacağı korkusunu temsil eder. Köprüde durmak; henüz karar veremediğiniz ve eşikte olduğunuzu gösterir."},
  {id:41,name:"Tünel",slug:"tunel",category:"mekan",
   keywords:["tünelden geçmek","tünel sonu","karanlık tünel"],
   meaning:"Karanlıktan geçiş ve ışığa kavuşmanın simgesidir. Zor dönemin sonunda çıkış.",
   detail:"Rüyada tünelden geçmek; zorlu bir dönemin ya da geçiş sürecinin içinde olduğunuzu simgeler. Tünelin ucunda ışık görmek; zorluğun bitmek üzere olduğunu ve yeni bir başlangıcın yaklaştığını müjdeler. Karanlık ve çıkışsız tünel; şu an için çözüm bulamadığınız bir durumda sıkışmış hissettiğinizi temsil eder. Tüneli geçmek; dönüşüm sürecini tamamlamak anlamına gelir."},
  {id:42,name:"Cami",slug:"cami",category:"mekan",
   keywords:["camide olmak","namaz kılmak","cami avlusu"],
   meaning:"Maneviyat, topluluk ve iç huzur arayışının simgesidir. Anlam ve rehberlik arayışı.",
   detail:"Rüyada camide olmak; manevi bir rehberlik ya da içsel huzur arayışınızı temsil eder. Namaz kılmak; şükran, teslimiyet ve iç dengeye duyulan özlemi simgeler. Cami avlusunda bulunmak; topluluk duygusu ve aidiyet ihtiyacını gösterir. Caminin kapılarının kapalı olması; manevi konularda kendinizi dışarıda ya da uzak hissettiğinize işaret eder."},
  {id:43,name:"Hapishane",slug:"hapishane",category:"mekan",
   keywords:["hapishanede olmak","hapsedilmek","hapisten çıkmak"],
   meaning:"Kısıtlanma, kendi yarattığınız sınırlar ve özgürlük özleminin simgesidir.",
   detail:"Rüyada hapishanede olmak; kendinizi hayatınızda hapsolmuş, kısıtlanmış ya da gerçek benliğinizi ifade edemez hissettiğinizi simgeler. Bu kısıtlama çoğunlukla dışarıdan değil, kendi inanç ve korkularınızdan kaynaklanır. Hapisten kaçmak ya da serbest bırakılmak; bu sınırlardan kurtulma cesaretini bulduğunuzu temsil eder. Birini hapishanede ziyaret etmek; o kişiyle ilgili bir suçluluk ya da endişe hissini yansıtır."},
  {id:44,name:"Saray",slug:"saray",category:"mekan",
   keywords:["sarayda olmak","saray koridoru","saray bahçesi"],
   meaning:"Büyük başarılar, lüks arzusu ve kendi değerinizi keşfetmenin simgesidir.",
   detail:"Rüyada sarayda olmak; yüksek hedeflerinizi, büyük başarı arzunuzu ve kendinizi değerli hissetme ihtiyacınızı simgeler. Sarayda gezinmek; potansiyelinizin farkına varmaya başladığınızı gösterir. Saray bahçesinde olmak; güzelliği ve bolluğu keşfetme döneminde olduğunuza işaret eder. Saraydan çıkarılmak; hak ettiğinizi düşündüğünüz bir şeyin elinizden gitmesinden duyulan korkuyu temsil eder."},
  {id:45,name:"Yol",slug:"yol",category:"mekan",
   keywords:["yolda yürümek","yol ayrımı","uzun yol"],
   meaning:"Yaşam yolculuğu, seçimler ve ilerleyişin simgesidir. Nereye gittiğinizin metaforu.",
   detail:"Rüyada düz ve aydınlık bir yol; doğru yolda ilerlediğinizi ve önünüzün açık olduğunu simgeler. Yol ayrımı; karşınızdaki önemli bir seçimi ya da karar noktasını temsil eder. Bitmek bilmeyen uzun yol; uzun soluklu bir hedefin sabır gerektirdiğini gösterir. Engellerle dolu yol; ilerlemenizi zorlaştıran durumları ve buna rağmen ilerlemek için gereken kararlılığı simgeler."},
  {id:46,name:"Merdiven",slug:"merdiven",category:"mekan",
   keywords:["merdiven çıkmak","merdivenden düşmek","spiral merdiven"],
   meaning:"İlerleme, çaba ve seviyeleri aşmanın simgesidir. Yukarı çıkmak ya da aşağı inmek.",
   detail:"Rüyada merdiven çıkmak; hedeflerinize adım adım yaklaştığınızı, kendinizi geliştirdiğinizi simgeler. Merdivenden düşmek; ani bir gerileme ya da başarısızlık korkusunu temsil eder. Bitmek bilmeyen uzun merdiven; uzun ve yorucu bir süreçte olduğunuzu gösterir. Aşağı inen merdiven; temellerinize, köklerinize ya da geçmişe dönme ihtiyacını simgeler."},
  {id:47,name:"Kapı",slug:"kapi",category:"mekan",
   keywords:["kapı görmek","açık kapı","kilitli kapı"],
   meaning:"Fırsat, geçiş ve yeni olasılıkların eşiğinin simgesidir. Açık mı yoksa kapalı mı?",
   detail:"Rüyada açık kapı; hayatınızdaki yeni bir fırsatı, geçişi ya da daveti simgeler. Kilitli kapı; önünüzde engeller olduğunu ya da henüz hazır olmadığınız bir kapının kapanık kaldığını gösterir. Kapıyı çalmak; fırsat ya da ilişkiye ulaşmak için çaba göstermeniz gerektiğini temsil eder. Kapının kendiliğinden açılması; hazır olduğunuzda olasılıkların size doğru açılacağını simgeler."},
  {id:48,name:"Asansör",slug:"asansor",category:"mekan",
   keywords:["asansörde olmak","asansör çökmesi","asansör tıkanması"],
   meaning:"Hızlı yükseliş ya da düşüşün, kontrol dışı ilerlemenin simgesidir.",
   detail:"Rüyada yükselen asansör; hızlı bir kariyer ilerlемesi, statü kazanımı ya da kişisel bir atılımı simgeler. İnen asansör; geriye adım atmayı ya da temellerinize inmeniz gerektiğini gösterir. Asansörün çökmesi; ani bir düşüş ya da kontrol kaybı korkusunu temsil eder. Asansörde tıkanmak; hayatınızda bir yerde ilerlemenin durduğunu hissettirdiğinize işaret eder."},
  {id:49,name:"Deniz feneri",slug:"deniz-feneri",category:"mekan",
   keywords:["deniz feneri görmek","deniz feneri ışığı","deniz feneri sesi"],
   meaning:"Yönlendirme, güvenlik ve karanlıkta ışık olmanın simgesidir. Rehberlik ve güven.",
   detail:"Rüyada deniz feneri görmek; belirsizlik ya da zorlu bir dönemde size yol gösterecek birinin ya da bir bilginin varlığını simgeler. Fener ışığının sizi aydınlatması; doğru yönü bulduğunuzu ya da içsel sezginizin sizi yönlendirdiğini temsil eder. Sönen deniz feneri; rehbersiz hissetme ya da puslu bir dönemde olduğunuza işaret eder."},
  {id:50,name:"Uçak",slug:"ucak",category:"mekan",
   keywords:["uçakta olmak","uçak kazası","uçak kalkışı"],
   meaning:"Büyük hedefler, kaçış arzusu ve yüksek perspektifin simgesidir.",
   detail:"Rüyada uçakta olmak; büyük hedeflere ulaşma yolculuğunuzu ya da gündelik hayattan uzaklaşma arzunuzu simgeler. Uçak kalkışı; yeni bir projeye ya da hayat evresine cesurca başlamayı temsil eder. Uçak kazası; büyük hedeflerinizin başarısızlıkla sonuçlanacağına dair gizli korkunuzu yansıtır. Uçaktan güzel manzara; geniş bir perspektife sahip olduğunuzu simgeler."},

  // KİŞİ
  {id:51,name:"Anne",slug:"anne",category:"kisi",
   keywords:["anneyi görmek","ölen anne","annesiyle kavga"],
   meaning:"Beslenme, kökenler ve içsel bakıcının simgesidir. Anneniz ya da içinizdeki anne enerjisi.",
   detail:"Rüyada annenizi görmek; annenizle ya da onun temsil ettiği besleyici, koruyucu enerjiyle bağlantınızı yansıtır. Anneyle sarılmak; sevgi ve güvene ihtiyaç duyduğunuzu simgeler. Anneyle kavga etmek; bağımsızlık ya da benlik sınırları üzerine içsel bir çatışmanızı temsil eder. Ölen annenizi rüyada görmek; genellikle onun verdiği sevgi ya da bildiklerinizin rehberliğini aradığınızı gösterir."},
  {id:52,name:"Baba",slug:"baba",category:"kisi",
   keywords:["babayı görmek","baba otoritesi","ölen baba"],
   meaning:"Otorite, koruma ve rehberliğin simgesidir. Babanız ya da içinizdeki otoriter ses.",
   detail:"Rüyada babanızı görmek; otorite, disiplin ve bilgelik temalarını gündeme getirir. Babayla konuşmak; hayatınızda rehberlik ve onay aradığınızı simgeler. Babayla çatışmak; bağımsızlık ve kendi otoritenizi kurma sürecini temsil eder. Ölen babanızı görmek; onun değerlerini ya da öğütlerini hatırlamanız ya da bırakmanız gereken bir dönemde olduğunuza işaret eder."},
  {id:53,name:"Bebek",slug:"bebek",category:"kisi",
   keywords:["bebek görmek","bebek tutmak","ağlayan bebek"],
   meaning:"Yeni başlangıçlar, masumiyet ve potansiyelin simgesidir. Yeni bir proje ya da yaşam evresi.",
   detail:"Rüyada bebek görmek; hayatınızda yeni başlayan bir şeyi — bir projeyi, ilişkiyi ya da kendinizin yeni bir yönünü — temsil eder. Sevgi dolu bir bebek tutmak; bu yeni başlangıcı benimsediğinizi ve onu büyüteceğinizi simgeler. Ağlayan bebek; bu yeni sürecin ilgi ve özen gerektirdiğini, ihmal edilmemesi gerektiğini gösterir. Hastalıklı bebek; büyütmeye çalıştığınız bir şeyin tehlikede olduğuna işaret eder."},
  {id:54,name:"Çocuk",slug:"cocuk",category:"kisi",
   keywords:["çocuk görmek","çocukken olmak","oynayan çocuk"],
   meaning:"İç çocuk, geçmiş ve masumiyetin simgesidir. İhmal edilmiş ihtiyaçlar ya da özgür ruh.",
   detail:"Rüyada oynayan, mutlu çocuk görmek; iç çocuğunuzun neşesine ve özgürlüğüne duyduğunuz özlemi simgeler. Çocukken olmak ya da kendinizi çocuk görmek; geçmişte çözüme kavuşturulmamış bir duyguya ya da döneme dönme ihtiyacını temsil eder. Ağlayan ya da kaybolan çocuk; ihmal ettiğiniz iç ihtiyaçlarınıza dikkat çeker."},
  {id:55,name:"Eski Sevgili",slug:"eski-sevgili",category:"kisi",
   keywords:["eski sevgiliyi görmek","eski sevgiliyle barışmak","geçmiş ilişki"],
   meaning:"Çözüme kavuşturulmamış duygular ve ilişki kalıplarının simgesidir. Genellikle o kişiyle değil, o kişinin temsil ettiğiyle ilgilidir.",
   detail:"Eski sevgiliyi rüyada görmek; genellikle o kişiyle yeniden olmak istediğinizin değil, o ilişkinin temsil ettiği bir duygu ya da dönemin ruhunuzda henüz kapanmadığının işaretidir. Barışmak; o dönemin derslerini kabul ettiğinizi simgeler. Kavga etmek; henüz işlememiş öfke ya da pişmanlık duygularını temsil eder. Eski sevgiliyle mutlu anlar yaşamak; o dönemde iyi hissettiren bir şeye özlem duyduğunuzu gösterir."},
  {id:56,name:"Vefat Eden Biri",slug:"vefat-eden-biri",category:"kisi",
   keywords:["ölen birini görmek","hayatta olmayan biri","vefat eden akraba"],
   meaning:"Geçmişten gelen mesajlar, öğütler ve çözüme kavuşturulmamış yasın simgesidir.",
   detail:"Rüyada hayatını kaybetmiş birini görmek; genellikle o kişiyle kapanmamış olan bir ilişkiyi, onun sizi hâlâ yönlendiren değerlerini ya da özlemini simgeler. Onlarla konuşmak; bilinçaltınızdan gelen bir bilgelik ya da rehberliği temsil eder. Size sarılan vefat etmiş biri; korunduğunuzu ve sevgi enerjisinin hâlâ hayatınızda var olduğunu gösterir. Bu rüyalar çoğunlukla teselli edici ve anlamlıdır."},
  {id:57,name:"Yabancı Biri",slug:"yabanci-biri",category:"kisi",
   keywords:["tanımadığım biri","yabancı yüz","gizemli kişi"],
   meaning:"Kendinizin bilinmeyen yönleri, yeni karşılaşmalar ve gölge benliğin simgesidir.",
   detail:"Rüyada tanımadığınız bir kişi; genellikle kendinizin henüz keşfetmediğiniz ya da kabul etmediğiniz bir yönünü temsil eder. Dostane yabancı; fark etmeye hazır olduğunuz yeni bir yeteneği ya da niteliği simgeler. Ürkütücü yabancı; korktuğunuz ya da reddettiğiniz bir tarafınızın yüzü olabilir. Yabancıyla sohbet etmek; içsel bir diyaloğa girdiğinizi gösterir."},
  {id:58,name:"Düğün",slug:"dugun",category:"kisi",
   keywords:["düğün görmek","düğünde olmak","kendi düğünü"],
   meaning:"Bağlılık, birlik ve yeni bir dönemin başlangıcının simgesidir. Kendinin iki yanının buluşması.",
   detail:"Rüyada düğün görmek; bir kararlılık, bağlılık ya da kendinizin iki farklı yönünün entegrasyonunu simgeler. Kendi düğününüzü görmek; yeni bir dönem ya da birlikteliğe hazır olduğunuzu temsil eder. Düğüne geç kalmak ya da gidememek; bu kararlılık ya da birleşmeye dair bilinçdışı bir tereddüdü gösterir. Mutlu bir düğün; uyum ve sevincin yakın olduğunu müjdeler."},
  {id:59,name:"Hamilelik",slug:"hamilelik",category:"kisi",
   keywords:["hamile olmak","hamile görmek","doğum yapmak"],
   meaning:"Yaratıcılık, yeni projeler ve gelişen potansiyelin simgesidir. Doğmakta olan bir şey.",
   detail:"Rüyada hamile olmak veya hamile birini görmek; kendinizde ya da hayatınızda gelişmekte olan yeni bir fikri, projeyi ya da kapasiteyi simgeler. Doğum yapmak; bu yeni şeyin dünyaya çıkmaya hazır olduğunu ve artık hayata geçirileceğini gösterir. Beklenmedik bir hamilelik; farkında olmadığınız ama büyüyen bir potansiyelin işaretidir."},
  {id:60,name:"Arkadaş",slug:"arkadas",category:"kisi",
   keywords:["arkadaş görmek","eski arkadaş","arkadaşla kavga"],
   meaning:"Sosyal bağlar, destekleyici ilişkiler ve topluluk hissinin simgesidir.",
   detail:"Rüyada bir arkadaşı görmek; o kişiyle ya da o kişinin temsil ettiği bir değerle bağlantınızı yansıtır. Eski bir arkadaşı görmek; özlediğiniz bir bağı ya da o dönemde hissettiğiniz bir duyguyu simgeler. Arkadaşla kavga etmek; bu ilişkide çözüme kavuşturulmamış bir gerilimi temsil eder. Arkadaşlarla güzel vakit geçirmek; sosyal desteğe ihtiyaç duyduğunuzu ya da yakın zamanda böyle bir dönem yaşayacağınızı gösterir."},

  // NESNE
  {id:61,name:"Para",slug:"para",category:"nesne",
   keywords:["para bulmak","para kaybetmek","para saymak"],
   meaning:"Öz değer, enerji alışverişi ve güvenliğin simgesidir. Paranın durumu öz algınızı yansıtır.",
   detail:"Rüyada para bulmak; öz değerinizin arttığını, kendinize olan güveninizin güçlendiğini simgeler. Para kaybetmek; güvenlik ya da öz değer konusundaki kaygıları temsil eder. Büyük miktarda para görmek; maddi ya da duygusal bolluk dönemini müjdeler. Para saymak; kaynaklarınızı ve değerlerinizi yeniden değerlendirdiğinizi gösterir."},
  {id:62,name:"Altın",slug:"altin",category:"nesne",
   keywords:["altın bulmak","altın takı","altın para"],
   meaning:"Gerçek değer, bilgelik ve içsel zenginliğin simgesidir. Maddi değil, manevi anlam taşır.",
   detail:"Rüyada altın bulmak; içsel bir zenginliği, bilgeliği ya da değerli bir fırsatı keşfettiğinize işaret eder. Altın takı takmak; kendinizi değerli hissettirmenin ve bu değeri göstermenin zamanı geldiğini simgeler. Altın para; maddi ya da manevi bir ödülü temsil eder. Altının çalınması; değer verdiğiniz bir şeyi kaybetme korkusunu simgeler."},
  {id:63,name:"Ayna",slug:"ayna",category:"nesne",
   keywords:["aynaya bakmak","kırık ayna","aynada yansıma"],
   meaning:"Öz yansıma, kimlik ve gerçeği görmenin simgesidir. Kendinizi nasıl gördüğünüzün aynası.",
   detail:"Rüyada aynaya bakmak; kendinizle yüzleşme, öz farkındalık ve kimliğinizi keşfetme sürecini simgeler. Aynada net bir yansıma görmek; öz bilginizin arttığını temsil eder. Kırık ayna; parçalanmış ya da tutarsız bir kimlik algısını ya da kötü haber korkusunu simgeler. Aynada farklı bir yüz görmek; kendinizin tanımadığınız bir yönüyle yüzleşme davetini temsil eder."},
  {id:64,name:"Silah",slug:"silah",category:"nesne",
   keywords:["silah görmek","silah kullanmak","silahla tehdit"],
   meaning:"Güç, kontrol ve savunmanın simgesidir. Saldırgan mı, yoksa koruyucu mu?",
   detail:"Rüyada silah görmek; güç ve kontrol temalarını gündeme getirir. Silah taşımak; kendinizi koruma ihtiyacını ya da güç dengelerindeki değişimi simgeler. Silahla tehdit edilmek; hayatınızda baskı hissettiğiniz bir durumu temsil eder. Silah kullanmak; bastırılmış öfkeyi ya da kendinizi savunma biçiminizi yansıtır. Silahı bırakmak; çatışmadan vazgeçme ve uzlaşma arzusunu simgeler."},
  {id:65,name:"Bıçak",slug:"bicak",category:"nesne",
   keywords:["bıçak görmek","bıçaklanmak","bıçakla kesmek"],
   meaning:"Keskinlik, ayrılık ve netliğin simgesidir. Bağları koparmak ya da gerçeği kesmek.",
   detail:"Rüyada bıçak görmek; hayatınızda keskin kararlar almanız ya da bir şeyi ya da ilişkiyi hayatınızdan çıkarmanız gerektiğini simgeler. Bıçakla kesmek; gereksiz bağları koparmak ve netlik kazanmak anlamına gelir. Bıçaklanmak; ihanet, acı veren bir söz ya da gerçekle sarsılmayı temsil eder. Bıçağı uzatmak; yardım etme niyetini, almak ise ihtiyaç duyduğunuz yardımı kabul etmeyi simgeler."},
  {id:66,name:"Yüzük",slug:"yuzuk",category:"nesne",
   keywords:["yüzük takmak","yüzük kaybolması","nişan yüzüğü"],
   meaning:"Bağlılık, bütünlük ve sonsuzluk döngüsünün simgesidir.",
   detail:"Rüyada yüzük takmak; bir ilişkiye ya da karara bağlılık ve onayı simgeler. Yüzüğü kaybetmek; bir ilişki ya da bağlılık konusundaki kaygıları temsil eder. Nişan ya da alyans yüzüğü; resmi bir bağlılığı ya da bu konudaki duyguları yansıtır. Yüzüğün kırılması; bir bağın ya da döngünün sonuna gelindiğini gösterir. Değerli taşlı yüzük; tanınma ve değer görme arzusunu simgeler."},
  {id:67,name:"Araba",slug:"araba",category:"nesne",
   keywords:["araba sürmek","araba kazası","arabada olmak"],
   meaning:"Hayatınızın kontrolü, yön ve kişisel gücün simgesidir. Kim sürdüğü önemlidir.",
   detail:"Rüyada araba sürmek; hayatınızın direksiyonunda olduğunuzu ve kontrolü elinizde tuttuğunuzu simgeler. Yolcu olmak; başkalarının kararlarına bıraktığınız ya da kontrol edemediğiniz bir süreci temsil eder. Araba kazası; hayatınızda ciddi bir aksama ya da kontrol kaybı korkusunu simgeler. Araba çalınmak; kimliğinizin ya da gücünüzün tehdit altında hissettirildiğini temsil eder."},
  {id:68,name:"Anahtar",slug:"anahtar",category:"nesne",
   keywords:["anahtar bulmak","anahtar kaybetmek","kapı anahtarı"],
   meaning:"Çözümler, erişim ve gizli bilginin simgesidir. Bir kapıyı açma gücü.",
   detail:"Rüyada anahtar bulmak; uzun süredir aranan bir çözüme ya da cevaba ulaştığınızı simgeler. Anahtar kaybetmek; bir fırsata ya da bilgiye erişimi kaybetme kaygısını temsil eder. Altın anahtar; özellikle değerli bir çözüm ya da fırsatı simgeler. Birçok anahtar; önünüzde birden fazla seçenek ya da olasılık bulunduğunu gösterir."},
  {id:69,name:"Kitap",slug:"kitap",category:"nesne",
   keywords:["kitap okumak","eski kitap","kitap yazmak"],
   meaning:"Bilgi, hikaye ve yaşam anlatısının simgesidir. Öğrenme ya da yazılmakta olan bir hikaye.",
   detail:"Rüyada kitap okumak; bilgi arayışını, kendinizi geliştirme arzusunu ya da geçmişten öğrenmeyi simgeler. Eski, gizemli bir kitap; bilinçaltından gelen önemli bir bilgiyi temsil eder. Kitap yazmak; kendi hikayenizin yazarı olduğunuzu ve hayatınızı bilinçle şekillendirdiğinizi simgeler. Boş ya da okunamaz sayfalı kitap; henüz yazılmamış, önünüzdeki boş sayfaları temsil eder."},
  {id:70,name:"Saat",slug:"saat",category:"nesne",
   keywords:["saat görmek","saat durmak","zamandan önce"],
   meaning:"Zaman baskısı, ritim ve ölümlülüğün simgesidir. Zamana karşı hissedilen kaygı.",
   detail:"Rüyada saat görmek; zamanla ilgili kaygıları ya da bitiş tarihlerinin baskısını simgeler. Durmuş saat; zamanın donduğunu, bir şeyin beklediğini ya da geçmişe sıkışıldığını temsil eder. Saatin çok hızlı işlemesi; hayatın çabuk geçtiği duygusunu ve bu konudaki kaygıyı yansıtır. Eski antika saat; köklere ve geçmişe bağlılığı simgeler."},
  {id:71,name:"Mektup",slug:"mektup",category:"nesne",
   keywords:["mektup almak","mektup yazmak","açılmamış mektup"],
   meaning:"Mesajlar, iletişim ve öğrenmek isteyip istemediğinizin simgesidir.",
   detail:"Rüyada mektup almak; önemli bir haber ya da mesajın yolda olduğunu simgeler. Açılmamış mektup; yüzleşmeye hazır olmadığınız bir gerçeği ya da duyguyu temsil eder. Mektup yazmak; iletmek istediğiniz ama henüz söyleyemediğiniz bir şeyi ifade etme ihtiyacınızı gösterir. Eski mektuplar; geçmişten gelen mesajları ya da çözüme kavuşturulmamış bir iletişimi simgeler."},
  {id:72,name:"Telefon",slug:"telefon",category:"nesne",
   keywords:["telefon açmak","telefon çalmak","sinyal olmamak"],
   meaning:"İletişim, bağlantı ve duyulmak istemenin simgesidir.",
   detail:"Rüyada telefon çalması; dikkat etmeniz gereken bir mesaj ya da bağlantı kurmanız gereken biri olduğunu simgeler. Telefona bakamamak ya da sinyal olmaması; iletişim kopmalarını ya da ulaşılamaz hissini temsil eder. Birine ulaşamamak; o kişiyle ya da temsil ettikleriyle kopukluk hissinizi yansıtır. Eski bir modelden telefon; nostalji ve geçmiş iletişimlere dair duyguları simgeler."},
  {id:73,name:"Gemi",slug:"gemi",category:"nesne",
   keywords:["gemide olmak","gemi yolculuğu","gemi batması"],
   meaning:"Duygusal yolculuk, bilinçaltı ve büyük bir yolculuğun simgesidir.",
   detail:"Rüyada gemide yolculuk yapmak; duygusal ya da yaşamsal büyük bir yolculukta olduğunuzu simgeler. Sakin denizde yüzen gemi; yolculuğunuzun şimdilik sakince ilerlediğini gösterir. Fırtınada sallanan gemi; zorlu duygusal süreçleri ya da belirsizlikleri temsil eder. Gemi batması; büyük bir planın ya da dönemin yıkılma korkusunu simgeler."},
  {id:74,name:"Tren",slug:"tren",category:"nesne",
   keywords:["trene binmek","treni kaçırmak","tren yolculuğu"],
   meaning:"Hayatın belirlenen yolu, kolektif yolculuk ve zamanlamanın simgesidir.",
   detail:"Rüyada trene binmek; doğru zamanda doğru hamleler yaptığınızı ve ortak bir yönde ilerlediğinizi simgeler. Treni kaçırmak; kaçırılan bir fırsata ya da yanlış zamanlama kaygısına işaret eder. Tren yolculuğu; önemli bir hedefe uzanan süreci temsil eder. Trenden inmek; bir dönemden ya da toplu bir hareketten ayrılıp kendi yolunuzu seçtiğinizi simgeler."},
  {id:75,name:"Çanta",slug:"canta",category:"nesne",
   keywords:["çanta taşımak","çanta kaybetmek","ağır çanta"],
   meaning:"Taşınan yükler, kimlik ve kişisel kapasitenin simgesidir.",
   detail:"Rüyada ağır çanta taşımak; hayatınızda çok fazla sorumluluk ya da duygusal yük taşıdığınızı simgeler. Çanta kaybetmek; kimliğinizi ya da kişisel kaynaklarınızı kaybetme kaygısını temsil eder. Boş çanta; kapasitenizin doldurmak istediğiniz boşluklarını gösterir. Çantayı bırakmak; yükleri bırakma ve hafifçe ilerleme arzusunu simgeler."},

  // EYLEM
  {id:76,name:"Uçmak",slug:"ucmak",category:"eylem",
   keywords:["rüyada uçmak","özgürce uçmak","uçamomak"],
   meaning:"Özgürlük, üstün gelme ve sınırları aşmanın en güçlü simgesidir. En olumlu rüyalardan biri.",
   detail:"Rüyada özgürce uçmak; özgürlük duygusunu, engellerin üstesinden gelmeyi ve yüksek bir perspektife sahip olmayı simgeler. Bu rüya genellikle gerçek hayatta güçlü hissedildiği dönemlerde görülür. Uçamomak ya da uçarken düşmek; bir durumda tıkandığınızı ya da özgürlüğünüzün kısıtlandığını temsil eder. Başkalarıyla birlikte uçmak; birlikte yükselen ve güçlenen ilişkileri simgeler."},
  {id:77,name:"Düşmek",slug:"dusmek",category:"eylem",
   keywords:["rüyada düşmek","uçurumdan düşmek","düşüp uyanmak"],
   meaning:"Kontrol kaybı, belirsizlik ve bırakma sürecinin simgesidir. Kaygının en yaygın rüya dili.",
   detail:"Rüyada düşmek; hayatınızda kontrolü kaybetme ya da bir şeyin alt üst olma korkusunu simgeler. Uçurumdan düşmek; büyük bir değişim ya da risk anında duyulan kaygıyı temsil eder. Düşmeden önce uyanmak; güvenli bölgede kalmak istemenin bilinçdışı bir yansımasıdır. Düşüp sağlıklıca karşıya gelmek ise zorluğun üstesinden geleceğinizin işaretidir."},
  {id:78,name:"Koşmak",slug:"kosmak",category:"eylem",
   keywords:["rüyada koşmak","bir şeyden kaçmak","yetişememek"],
   meaning:"Kaçış, motivasyon ve enerji dışavurumunun simgesidir. Kovalayan mı, kaçan mı?",
   detail:"Rüyada bir şeyden kaçmak için koşmak; yüzleşmek istemediğiniz bir durumu, kişiyi ya da duyguyu temsil eder. Bir şeye yetişmek için koşmak; fırsatları kovalama ve motivasyonunuzun güçlü olduğunu simgeler. Koşup bir türlü ilerliyememek; çabalayan ama bir türlü ilerleyemeyen enerjiyi ve hayal kırıklığını yansıtır."},
  {id:79,name:"Yüzmek",slug:"yuzmek",category:"eylem",
   keywords:["rüyada yüzmek","derin suda yüzmek","yüzememek"],
   meaning:"Duygularla baş etme, sezgiye güvenme ve bilinçaltına dalmayı simgeler.",
   detail:"Rüyada özgürce yüzmek; duygularınızla uyum içinde olduğunuzu ve bilinçaltınızda rahatça gezinebildiğinizi simgeler. Derin, koyu suda yüzmek; bilinmeze ve belirsizliğe girme cesaretini temsil eder. Yüzememek ya da boğulmak üzere olmak; bunaltıcı duygularla baş etmekte zorlandığınıza işaret eder. Sualtında nefes alabilmek; duygularınıza tamamen girme ve onlardan beslene bilme yeteneğini simgeler."},
  {id:80,name:"Ölmek",slug:"olmek",category:"eylem",
   keywords:["rüyada ölmek","kendini ölü görmek","cenaze"],
   meaning:"Dönüşüm, bir dönemin kapanması ve yeniden doğuşun simgesidir. Korkutmaz, değiştirir.",
   detail:"Rüyada ölmek; gerçek bir ölüm korkusuyla değil, hayatınızda köklü bir değişim ya da bir dönemin kapandığıyla ilgilidir. Kendinizi ölü görmek; eski kimliğinizin ya da yaşam biçiminizin dönüşümünü simgeler. Cenaze törenine katılmak; bir şeyi ya da bir dönemi bilinçle uğurladığınızı gösterir. Ölüp yeniden uyanmak ise tam anlamıyla yeniden doğuşu ve köklü bir dönüşümü temsil eder."},
  {id:81,name:"Dövüşmek",slug:"dovusmek",category:"eylem",
   keywords:["kavga etmek","dövüşe girmek","birini yenmek"],
   meaning:"İçsel çatışma, kendini savunma ve bastırılmış güçlerin simgesidir.",
   detail:"Rüyada dövüşmek; kendinizin iki farklı yönü arasındaki içsel çatışmayı ya da gündelik hayatta bastırdığınız bir gerilimi simgeler. Birini yenmek; zorlukları aştığınızı ve kendinizi savunma kapasitesine sahip olduğunuzu temsil eder. Dövüşte kaybetmek; şu an için ezilmekte olduğunuz bir duruma işaret eder. Dövüşmemek için direnç göstermek; barışçıl çözüm arayışınızı simgeler."},
  {id:82,name:"Ağlamak",slug:"aglamak",category:"eylem",
   keywords:["rüyada ağlamak","hüzünle ağlamak","mutluluktan ağlamak"],
   meaning:"Duygusal salıverme, içsel arınma ve bastırılmış hislerin boşalmasının simgesidir.",
   detail:"Rüyada ağlamak; gerçek hayatta ifade edemediğiniz ya da bastırdığınız duyguların bilinçaltında serbest bırakılmasını simgeler. Bu rüyadan sonra genellikle daha hafif ve arınmış hissedilir. Hüzünle ağlamak; işlenmemiş bir kaybı ya da kederi temsil eder. Mutluluktan ağlamak ise uzun zamandır beklenen bir iyiliğin ya da sevincin içten dışa taşmasını simgeler."},
  {id:83,name:"Gülmek",slug:"gulmek",category:"eylem",
   keywords:["rüyada gülmek","kahkaha atmak","neşeyle gülmek"],
   meaning:"Neşe, rahatlama ve sosyal mutluluğun simgesidir. Ruhun hafiflemesinin işareti.",
   detail:"Rüyada kahkaha atmak ya da içten gülmek; gerçek hayatınızda duygusal bir hafifliğe kavuşmak üzere olduğunuzu müjdeler. Neşeyle gülmek; hayata karşı pozitif enerji ve iyimserliğin içinizde uyandığını simgeler. Başkalarıyla birlikte gülmek; sosyal bağlarınızın güçleneceğini ve keyifli paylaşımların yaklaşmakta olduğunu temsil eder."},
  {id:84,name:"Kaybolmak",slug:"kaybolmak",category:"eylem",
   keywords:["rüyada kaybolmak","yolunu kaybetmek","şehirde kaybolmak"],
   meaning:"Yön arayışı, kimlik belirsizliği ve geçiş döneminin simgesidir.",
   detail:"Rüyada kaybolmak; hayatınızda net bir yön ya da amaç bulamadığınız, büyük bir geçiş ya da değişim sürecinde olduğunuzu simgeler. Şehirde kaybolmak; sosyal ya da kariyer hayatınızda yön kaybını temsil eder. Ormanda kaybolmak; duygular ve içsel dünyada kaybolmayı simgeler. Yolu bulmak; bu belirsizlikten çıkmak için ihtiyaç duyduğunuz sezgiye güvenmeniz gerektiğini gösterir."},
  {id:85,name:"Çıplak Olmak",slug:"ciplak-olmak",category:"eylem",
   keywords:["rüyada çıplak olmak","herkesin önünde çıplak","utanarak çıplak"],
   meaning:"Kırılganlık, otantiklik ve yargılanma korkusunun simgesidir.",
   detail:"Rüyada herkesin önünde çıplak olmak ve utanmak; gerçek benliğinizin ortaya çıkmasından ya da başkaları tarafından yargılanmaktan duyduğunuz kaygıyı simgeler. Bu çok yaygın bir rüyadır ve genellikle performans baskısının yoğun hissedildiği dönemlerde görülür. Çıplak olup utanmamak ise kendinizi olduğu gibi kabul ettiğinizin ve otantikliğinizden güç aldığınızın işaretidir."}
];

const CAT_LABELS = {
  hayvanlar: "Hayvanlar",
  doga: "Doğa",
  mekan: "Mekan",
  kisi: "Kişiler",
  nesne: "Nesneler",
  eylem: "Eylemler"
};

const CAT_ICONS = {
  hayvanlar: "🐾",
  doga: "🌿",
  mekan: "🏛",
  kisi: "👤",
  nesne: "💎",
  eylem: "⚡"
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
    grid.innerHTML = `<div class="empty-state">Arama sonucu bulunamadı.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <a href="ruya/${d.slug}.html" class="dream-card">
      <div class="dream-card-icon">${CAT_ICONS[d.category]}</div>
      <div class="dream-card-name">${d.name}</div>
      <div class="dream-card-cat">${CAT_LABELS[d.category]}</div>
      <div class="dream-card-meaning">${d.meaning.substring(0, 80)}…</div>
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
