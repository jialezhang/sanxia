var des1 ="截留纪念园：三峡截流纪念园是以三峡工程截流为主题，集游览、科普、表演、休闲等功能于一体的国内首家水利 工程主题公园。景区位于三峡大坝右岸下游800米处，占地面积93万平方米，投资3000万元。景区分入口区、演艺眺望区、遗址展示区和游乐休憩区等4个区域，由截流记事墙、演艺广场、亲水平台、幻影成像、大型机械展示场、攀爬四面体、平抛船等十几个景观组成。",
    des2 = "三峡大坝：世界第一大的水电工程，位于西陵峡中段的湖北省宜昌市境内的三斗坪，距下游葛洲坝水利枢纽工程38公里。于1994年12月14日正式动工修建，2006年5月20日全线建成。经国家防总批准，三峡水库于2011年9月10日零时正式启动第四次175米试验性蓄水，2012年7月23日，三峡枢纽开启7个泄洪深孔泄洪",
    des3 = "185平台：三峡大坝“185平台”因其海拔高度为185米而得名，它与大坝的坝顶是等高的。从左手方向看去，就是三分之二拦河大坝的正面，也就是左岸厂房坝段和泄洪坝段。离平台最近的是与德国合资的“单线一级垂直升船机”的修建部位，预计在2015年投入使用。右手方向往上游看，是可蓄水到175米水位的三峡水库。",
    des4 = "坛子岭：坛子岭是了解三峡文化、观赏三峡美景、宣传三峡工程的旅游景区，也是进行爱国主义教育的绝佳场所。目前，三峡坛子岭已成为三峡工地的代名词。作为一处旅游景区，坛子岭交通便利，游览设施齐全，安全、卫生、通讯状况良好，旅游商品丰富，综合管理完善，环境保护有力，旅游资源品位突出,国家旅游局对此给予了充分的肯定，并授予国家AAAA级景区殊荣。";
var des = ["",des1,des2,des3,des4];
var content = "<p>旅游攻略：1.畅游长江三峡 感受新时代的美丽风光2.东方迪斯科 长阳巴山舞3.逆流而上游三峡 看长江最深处的美4.本站推荐旅游攻略</p>";
function select(){
  var tmp_id = event.target.id;
  $(".show_main").html("<img src = 'images/guanguang/"+ tmp_id +".jpg'>");
  $("#descriptions").html(des[tmp_id]);
  console.log(event.target.id);
  }
$(".show_bottom>img").bind("click",select);
