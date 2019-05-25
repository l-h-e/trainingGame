enchant();
window.onload = function() {
    var game_ = new Game(1270,720); // 表示領域の大きさを設定
    game_wait=0;
    game_.fps = 24;                 // ゲームの進行スピードを設定
    game_.preload('./img/GUI/start.png','./img/gainen.png','./img/IINI.png','./img/title_bg.png','./img/hero_a.png','./img/icon/MDSI_icon.png','./img/ga_MDSI.png','./img/egg_te.png'); // ゲームに使う素材を、あらかじめ読み込む
    game_.preload('./img/AP/01.png','./img/AP/02.png','./img/AP/03.png','./img/AP/04.png','./img/AP/05.png','./img/AP/06.png','./img/AP/07.png','./img/AP/08.png','./img/AP/09.png','./img/CM/01.png','./img/CM/02.png','./img/CM/03.png','./img/CM/04.png','./img/CM/05.png','./img/CM/06.png','./img/CM/07.png','./img/CM/08.png','./img/CM/09.png','./img/CM/10.png','./img/ED/01.png','./img/ED/02.png','./img/ED/03.png','./img/ED/04.png','./img/ED/05.png','./img/ED/06.png','./img/ED/07.png','./img/ED/08.png','./img/ED/09.png','./img/ED/10.png','./img/ED/11.png','./img/EM/01.png','./img/EM/02.png','./img/EM/03.png','./img/EM/04.png','./img/EM/05.png','./img/EM/06.png','./img/EM/07.png','./img/EM/08.png','./img/EM/09.png','./img/EM/10.png','./img/ES/01.png','./img/ES/02.png','./img/ES/03.png','./img/ES/04.png','./img/ES/05.png','./img/ES/06.png','./img/ES/07.png','./img/ES/08.png','./img/ES/09.png','./img/ES/10.png','./img/II/01.png','./img/II/02.png','./img/II/03.png','./img/II/04.png','./img/II/05.png','./img/II/06.png','./img/II/07.png','./img/II/08.png','./img/II/09.png','./img/II/10.png','./img/NI/01.png','./img/NI/02.png','./img/NI/03.png','./img/NI/04.png','./img/NI/05.png','./img/NI/06.png','./img/NI/07.png','./img/NI/08.png','./img/NI/09.png','./img/NI/10.png','./img/NI/11.png','./img/SI/01.png','./img/SI/02.png','./img/SI/03.png','./img/SI/04.png','./img/SI/05.png','./img/SI/06.png','./img/SI/07.png','./img/SI/08.png','./img/SI/09.png','./img/MT/01.png','./img/MT/02.png','./img/MT/03.png','./img/MT/04.png','./img/MT/05.png','./img/MT/06.png','./img/MT/07.png','./img/MT/08.png','./img/MT/09.png','./img/MD/01.png','./img/MD/02.png','./img/MD/03.png','./img/MD/04.png','./img/MD/05.png','./img/MD/06.png','./img/MD/07.png','./img/MD/08.png');
    game_.preload('./img/egg/nr.png','./img/egg/sr.png','./img/egg/sr_anime.png','./img/egg/nr_anime.png');
		game_.preload('./img/GUI/creature.png','./img/GUI/gar.png','./img/GUI/how_1.png','./img/GUI/how_2.png','./img/GUI/how_to_play.png','./img/GUI/keyword.png','./img/GUI/return.png');
    game_.preload('./img/teach_.png');

/*	メモリ不足？
    game_.preload('./img/ga/APII.png','./img/ga/APNI.png','./img/ga/APSI.png','./img/ga/APMD.png','./img/ga/APCM.png','./img/ga/APMT.png','./img/ga/APED.png','./img/ga/APES.png','./img/ga/APEM.png');
    game_.preload('./img/ga/CMII.png','./img/ga/CMNI.png','./img/ga/CMSI.png','./img/ga/CMMD.png','./img/ga/CMAP.png','./img/ga/CMMT.png','./img/ga/CMED.png','./img/ga/CMES.png','./img/ga/CMEM.png');
    game_.preload('./img/ga/EDII.png','./img/ga/EDNI.png','./img/ga/EDSI.png','./img/ga/EDMD.png','./img/ga/EDCM.png','./img/ga/EDMT.png','./img/ga/EDAP.png','./img/ga/EDES.png','./img/ga/EDEM.png');
    game_.preload('./img/ga/EMII.png','./img/ga/EMNI.png','./img/ga/EMSI.png','./img/ga/EMMD.png','./img/ga/EMCM.png','./img/ga/EMMT.png','./img/ga/EMED.png','./img/ga/EMES.png','./img/ga/EMAP.png');
    game_.preload('./img/ga/ESII.png','./img/ga/ESNI.png','./img/ga/ESSI.png','./img/ga/ESMD.png','./img/ga/ESCM.png','./img/ga/ESMT.png','./img/ga/ESED.png','./img/ga/ESAP.png','./img/ga/ESEM.png');
    game_.preload('./img/ga/IIAP.png','./img/ga/IINI.png','./img/ga/IISI.png','./img/ga/IIMD.png','./img/ga/IICM.png','./img/ga/IIMT.png','./img/ga/IIED.png','./img/ga/IIES.png','./img/ga/IIEM.png');
    game_.preload('./img/ga/MDII.png','./img/ga/MDNI.png','./img/ga/MDSI.png','./img/ga/MDAP.png','./img/ga/MDCM.png','./img/ga/MDMT.png','./img/ga/MDED.png','./img/ga/MDES.png','./img/ga/MDEM.png');
    game_.preload('./img/ga/MTII.png','./img/ga/MTNI.png','./img/ga/MTSI.png','./img/ga/MTMD.png','./img/ga/MTCM.png','./img/ga/MTAP.png','./img/ga/MTED.png','./img/ga/MTES.png','./img/ga/MTEM.png');
    game_.preload('./img/ga/NIII.png','./img/ga/NIAP.png','./img/ga/NISI.png','./img/ga/NIMD.png','./img/ga/NICM.png','./img/ga/NIMT.png','./img/ga/NIED.png','./img/ga/NIES.png','./img/ga/NIEM.png');
    game_.preload('./img/ga/SIII.png','./img/ga/SINI.png','./img/ga/SIAP.png','./img/ga/SIMD.png','./img/ga/SICM.png','./img/ga/SIMT.png','./img/ga/SIED.png','./img/ga/SIES.png','./img/ga/SIEM.png');

*/
  /*  game_.preload('./img/icon/APII.png','./img/icon/APNI.png','./img/icon/APSI.png','./img/icon/APMD.png','./img/icon/APCM.png','./img/icon/APMT.png','./img/icon/APED.png','./img/icon/APES.png','./img/icon/APEM.png');
    game_.preload('./img/icon/CMII.png','./img/icon/CMNI.png','./img/icon/CMSI.png','./img/icon/CMMD.png','./img/icon/CMAP.png','./img/icon/CMMT.png','./img/icon/CMED.png','./img/icon/CMES.png','./img/icon/CMEM.png');
    game_.preload('./img/icon/EDII.png','./img/icon/EDNI.png','./img/icon/EDSI.png','./img/icon/EDMD.png','./img/icon/EDCM.png','./img/icon/EDMT.png','./img/icon/EDAP.png','./img/icon/EDES.png','./img/icon/EDEM.png');
    game_.preload('./img/icon/EMII.png','./img/icon/EMNI.png','./img/icon/EMSI.png','./img/icon/EMMD.png','./img/icon/EMCM.png','./img/icon/EMMT.png','./img/icon/EMED.png','./img/icon/EMES.png','./img/icon/EMAP.png');
    game_.preload('./img/icon/ESII.png','./img/icon/ESNI.png','./img/icon/ESSI.png','./img/icon/ESMD.png','./img/icon/ESCM.png','./img/icon/ESMT.png','./img/icon/ESED.png','./img/icon/ESAP.png','./img/icon/ESEM.png');
    game_.preload('./img/icon/IIAP.png','./img/icon/IINI.png','./img/icon/IISI.png','./img/icon/IIMD.png','./img/icon/IICM.png','./img/icon/IIMT.png','./img/icon/IIED.png','./img/icon/IIES.png','./img/icon/IIEM.png');
    game_.preload('./img/icon/MDII.png','./img/icon/MDNI.png','./img/icon/MDSI.png','./img/icon/MDAP.png','./img/icon/MDCM.png','./img/icon/MDMT.png','./img/icon/MDED.png','./img/icon/MDES.png','./img/icon/MDEM.png');
    game_.preload('./img/icon/MTII.png','./img/icon/MTNI.png','./img/icon/MTSI.png','./img/icon/MTMD.png','./img/icon/MTCM.png','./img/icon/MTAP.png','./img/icon/MTED.png','./img/icon/MTES.png','./img/icon/MTEM.png');
    game_.preload('./img/icon/NIII.png','./img/icon/NIAP.png','./img/icon/NISI.png','./img/icon/NIMD.png','./img/icon/NICM.png','./img/icon/NIMT.png','./img/icon/NIED.png','./img/icon/NIES.png','./img/icon/NIEM.png');
    game_.preload('./img/icon/SIII.png','./img/icon/SINI.png','./img/icon/SIAP.png','./img/icon/SIMD.png','./img/icon/SICM.png','./img/icon/SIMT.png','./img/icon/SIED.png','./img/icon/SIES.png','./img/icon/SIEM.png');
*/
    game_.onload = function() { // ゲームの準備が整ったらメインの処理を実行します
//ギャラリーのフラグ
	var flag_APII=0;var flag_APNI=0;var flag_APSI=0;var flag_APMD=0;var flag_APCM=0;var flag_APMT=0;var flag_APED=0;var flag_APES=0;var flag_APEM=0;var flag_CMII=0;var flag_CMNI=0;var flag_CMSI=0;var flag_CMMD=0;var flag_CMAP=0;var flag_CMMT=0;var flag_CMED=0;var flag_CMES=0;var flag_CMEM=0;var flag_EDII=0;var flag_EDNI=0;var flag_EDSI=0;var flag_EDMD=0;var flag_EDCM=0;var flag_EDMT=0;var flag_EDAP=0;var flag_EDES=0;var flag_EDEM=0;var flag_EMII=0;var flag_EMNI=0;var flag_EMSI=0;var flag_EMMD=0;var flag_EMCM=0;var flag_EMMT=0;var flag_EMED=0;var flag_EMES=0;var flag_EMAP=0;var flag_ESII=0;var flag_ESNI=0;var flag_ESSI=0;var flag_ESMD=0;var flag_ESCM=0;var flag_ESMT=0;var flag_ESED=0;var flag_ESAP=0;var flag_ESEM=0;var flag_IIAP=0;var flag_IINI=0;var flag_IISI=0;var flag_IIMD=0;var flag_IICM=0;var flag_IIMT=0;var flag_IIED=0;var flag_IIES=0;var flag_IIEM=0;var flag_MDII=0;var flag_MDNI=0;var flag_MDSI=0;var flag_MDAP=0;var flag_MDCM=0;var flag_MDMT=0;var flag_MDED=0;var flag_MDES=0;var flag_MDEM=0;var flag_MTII=0;var flag_MTNI=0;var flag_MTSI=0;var flag_MTMD=0;var flag_MTCM=0;var flag_MTAP=0;var flag_MTED=0;var flag_MTES=0;var flag_MTEM=0;var flag_NIII=0;var flag_NIAP=0;var flag_NISI=0;var flag_NIMD=0;var flag_NICM=0;var flag_NIMT=0;var flag_NIED=0;var flag_NIES=0;var flag_NIEM=0;var flag_SIII=0;var flag_SINI=0;var flag_SIAP=0;var flag_SIMD=0;var flag_SICM=0;var flag_SIMT=0;var flag_SIED=0;var flag_SIES=0;var flag_SIEM=0;
//	var flag_APII=1;var flag_APNI=1;var flag_APSI=1;var flag_APMD=1;var flag_APCM=1;var flag_APMT=1;var flag_APED=1;var flag_APES=1;var flag_APEM=1;var flag_CMII=1;var flag_CMNI=1;var flag_CMSI=1;var flag_CMMD=1;var flag_CMAP=1;var flag_CMMT=1;var flag_CMED=1;var flag_CMES=1;var flag_CMEM=1;var flag_EDII=1;var flag_EDNI=1;var flag_EDSI=1;var flag_EDMD=1;var flag_EDCM=1;var flag_EDMT=1;var flag_EDAP=1;var flag_EDES=1;var flag_EDEM=1;var flag_EMII=1;var flag_EMNI=1;var flag_EMSI=1;var flag_EMMD=1;var flag_EMCM=1;var flag_EMMT=1;var flag_EMED=1;var flag_EMES=1;var flag_EMAP=1;var flag_ESII=1;var flag_ESNI=1;var flag_ESSI=1;var flag_ESMD=1;var flag_ESCM=1;var flag_ESMT=1;var flag_ESED=1;var flag_ESAP=1;var flag_ESEM=1;var flag_IIAP=1;var flag_IINI=1;var flag_IISI=1;var flag_IIMD=1;var flag_IICM=1;var flag_IIMT=1;var flag_IIED=1;var flag_IIES=1;var flag_IIEM=1;var flag_MDII=1;var flag_MDNI=1;var flag_MDSI=1;var flag_MDAP=1;var flag_MDCM=1;var flag_MDMT=1;var flag_MDED=1;var flag_MDES=1;var flag_MDEM=1;var flag_MTII=1;var flag_MTNI=1;var flag_MTSI=1;var flag_MTMD=1;var flag_MTCM=1;var flag_MTAP=1;var flag_MTED=1;var flag_MTES=1;var flag_MTEM=1;var flag_NIII=1;var flag_NIAP=1;var flag_NISI=1;var flag_NIMD=1;var flag_NICM=1;var flag_NIMT=1;var flag_NIED=1;var flag_NIES=1;var flag_NIEM=1;var flag_SIII=1;var flag_SINI=1;var flag_SIAP=1;var flag_SIMD=1;var flag_SICM=1;var flag_SIMT=1;var flag_SIED=1;var flag_SIES=1;var flag_SIEM=1;



        /**
        * タイトルシーン
        *
        * タイトルシーンを作り、返す関数です。
        */
        var createStartScene = function() {
            var scene = new Scene();



                                // 新しいシーンを作る
	//背景表示
		var bg = new Sprite(1270,720);
		bg.image = game_.assets['./img/title_bg.png'];
		scene.addChild(bg);
            // スタート画像設定
            var startImage = new Sprite(163, 45);                   // スプライトを作る
            startImage.image = game_.assets['./img/GUI/start.png'];     // スタート画像を設定
	    startImage.scaleX=2;startImage.scaleY=2;
            startImage.x = 530;                                      // 横位置調整
            startImage.y = 560;                                     // 縦位置調整
            scene.addChild(startImage);                             // シーンに追加
	   //ギャラリーボタン
            var g_button = new Sprite(130, 62);                   // スプライトを作る
            g_button.image = game_.assets['./img/GUI/gar.png'];     // スタート画像を設定
            g_button.x = 1120;                                      // 横位置調整
            g_button.y = 650;                                     // 縦位置調整
            scene.addChild(g_button);                             // シーンに追加
	   //あそびかたボタン
            var a_button = new Sprite(163, 45);                   // スプライトを作る
            a_button.image = game_.assets['./img/GUI/how_to_play.png'];     // スタート画像を設定
	    //a_button.scaleX=2;a_button.scaleY=2;
            a_button.x = 940;                                      // 横位置調整
            a_button.y = 665;                                     // 縦位置調整
            scene.addChild(a_button);                             // シーンに追加
         /*   // タイトルラベル設定
            var title = new Label('めざせ！　メジャー制！');                     // ラベルを作る
            title.textAlign = 'center';                             // 文字を中央寄せ
            title.color = '#ffffff';                                // 文字を白色に
	    title.x = 150;                                            // 横位置調整
            title.y = 226;                                           // 縦位置調整
            title.font = '30px sans-serif';                         // 28pxのゴシック体にする
            scene.addChild(title);                                  // シーンに追加
*/
            // スタート画像にタッチイベントを設定
            startImage.addEventListener(Event.TOUCH_START, function(e) {
                game_.replaceScene(createGameScene());    // 現在表示しているシーンをゲームシーンに置き換える
            });
		//ギャラリーボタンにタッチイベントを設定
            g_button.addEventListener(Event.TOUCH_START, function(e) {
                game_.replaceScene(createGallery_topScene());    // 現在表示しているシーンをギャラリーシーンに置き換える
            });
            a_button.addEventListener(Event.TOUCH_START, function(e) {
            var how_1 = new Sprite(1270, 720);                   // スプライトを作る
            how_1.image = game_.assets['./img/GUI/how_1.png'];     // スタート画像を設定
            scene.addChild(how_1);
            how_1.addEventListener(Event.TOUCH_START, function(e) {
            var how_2 = new Sprite(1270, 720);                   // スプライトを作る
            how_2.image = game_.assets['./img/GUI/how_2.png'];     // スタート画像を設定
            scene.addChild(how_2);
            how_2.addEventListener(Event.TOUCH_START, function(e) {
            game_.replaceScene(createStartScene());                             // シーンに追加
            });                             // シーンに追加                             // シーンに追加
            });
            });
            // タイトルシーンを返します。
            return scene;
        };

//3個のイメージファイルを読み込んで、imgurl順で画像を縦並びに表示する例.

var imgurl = ['./img/ga/APII.png','./img/ga/APNI.png','./img/ga/APSI.png','./img/ga/APMD.png','./img/ga/APCM.png','./img/ga/APMT.png','./img/ga/APED.png','./img/ga/APES.png','./img/ga/APEM.png','./img/ga/CMII.png','./img/ga/CMNI.png','./img/ga/CMSI.png','./img/ga/CMMD.png','./img/ga/CMAP.png','./img/ga/CMMT.png','./img/ga/CMED.png','./img/ga/CMES.png','./img/ga/CMEM.png','./img/ga/EDII.png','./img/ga/EDNI.png','./img/ga/EDSI.png','./img/ga/EDMD.png','./img/ga/EDCM.png','./img/ga/EDMT.png','./img/ga/EDAP.png','./img/ga/EDES.png','./img/ga/EDEM.png','./img/ga/EMII.png','./img/ga/EMNI.png','./img/ga/EMSI.png','./img/ga/EMMD.png','./img/ga/EMCM.png','./img/ga/EMMT.png','./img/ga/EMED.png','./img/ga/EMES.png','./img/ga/EMAP.png','./img/ga/ESII.png','./img/ga/ESNI.png','./img/ga/ESSI.png','./img/ga/ESMD.png','./img/ga/ESCM.png','./img/ga/ESMT.png','./img/ga/ESED.png','./img/ga/ESAP.png','./img/ga/ESEM.png','./img/ga/IIAP.png','./img/ga/IINI.png','./img/ga/IISI.png','./img/ga/IIMD.png','./img/ga/IICM.png','./img/ga/IIMT.png','./img/ga/IIED.png','./img/ga/IIES.png','./img/ga/IIEM.png','./img/ga/MDII.png','./img/ga/MDNI.png','./img/ga/MDSI.png','./img/ga/MDAP.png','./img/ga/MDCM.png','./img/ga/MDMT.png','./img/ga/MDED.png','./img/ga/MDES.png','./img/ga/MDEM.png','./img/ga/MTII.png','./img/ga/MTNI.png','./img/ga/MTSI.png','./img/ga/MTMD.png','./img/ga/MTCM.png','./img/ga/MTAP.png','./img/ga/MTED.png','./img/ga/MTES.png','./img/ga/MTEM.png','./img/ga/NIII.png','./img/ga/NIAP.png','./img/ga/NISI.png','./img/ga/NIMD.png','./img/ga/NICM.png','./img/ga/NIMT.png','./img/ga/NIED.png','./img/ga/NIES.png','./img/ga/NIEM.png','./img/ga/SIII.png','./img/ga/SINI.png','./img/ga/SIAP.png','./img/ga/SIMD.png','./img/ga/SICM.png','./img/ga/SIMT.png','./img/ga/SIED.png','./img/ga/SIES.png','./img/ga/SIEM.png'];

for(var i=0;i<90;i++){
	//画像をロードするよ
	game_.load(imgurl[i],function(){
	/*	//_element.srcをチェックして設定する配列番号確定.
    	for(var i=0;i<3;i++){
    		if(imgurl[i] == this._element.src){
    			icon[i] = new Sprite(48,48);
    			icon[i].image = game.assets[imgurl[i]];
    			icon[i].y = 48*i;
    			break;
    		}
    	}*/
	});
}

var ga_oth = ['./img/others/01.png','./img/others/02.png','./img/others/03.png','./img/others/04.png','./img/others/05.png','./img/others/06.png','./img/others/07.png','./img/others/08.png','./img/others/09.png','./img/others/10.png','./img/others/12.png','./img/others/13.png','./img/others/14.png','./img/others/15.png','./img/others/16.png'];
for(var i=0;i<15;i++){game_.load(ga_oth[i],function(){	});}
//	for(var i=5;i<9;i++){game_.load(imgurl[i],function(){	});}

var imgurl2 = ['./img/icon/APII.png','./img/icon/APNI.png','./img/icon/APSI.png','./img/icon/APMD.png','./img/icon/APCM.png','./img/icon/APMT.png','./img/icon/APED.png','./img/icon/APES.png','./img/icon/APEM.png','./img/icon/CMII.png','./img/icon/CMNI.png','./img/icon/CMSI.png','./img/icon/CMMD.png','./img/icon/CMAP.png','./img/icon/CMMT.png','./img/icon/CMED.png','./img/icon/CMES.png','./img/icon/CMEM.png','./img/icon/EDII.png','./img/icon/EDNI.png','./img/icon/EDSI.png','./img/icon/EDMD.png','./img/icon/EDCM.png','./img/icon/EDMT.png','./img/icon/EDAP.png','./img/icon/EDES.png','./img/icon/EDEM.png','./img/icon/EMII.png','./img/icon/EMNI.png','./img/icon/EMSI.png','./img/icon/EMMD.png','./img/icon/EMCM.png','./img/icon/EMMT.png','./img/icon/EMED.png','./img/icon/EMES.png','./img/icon/EMAP.png','./img/icon/ESII.png','./img/icon/ESNI.png','./img/icon/ESSI.png','./img/icon/ESMD.png','./img/icon/ESCM.png','./img/icon/ESMT.png','./img/icon/ESED.png','./img/icon/ESAP.png','./img/icon/ESEM.png','./img/icon/IIAP.png','./img/icon/IINI.png','./img/icon/IISI.png','./img/icon/IIMD.png','./img/icon/IICM.png','./img/icon/IIMT.png','./img/icon/IIED.png','./img/icon/IIES.png','./img/icon/IIEM.png','./img/icon/MDII.png','./img/icon/MDNI.png','./img/icon/MDSI.png','./img/icon/MDAP.png','./img/icon/MDCM.png','./img/icon/MDMT.png','./img/icon/MDED.png','./img/icon/MDES.png','./img/icon/MDEM.png','./img/icon/MTII.png','./img/icon/MTNI.png','./img/icon/MTSI.png','./img/icon/MTMD.png','./img/icon/MTCM.png','./img/icon/MTAP.png','./img/icon/MTED.png','./img/icon/MTES.png','./img/icon/MTEM.png','./img/icon/NIII.png','./img/icon/NIAP.png','./img/icon/NISI.png','./img/icon/NIMD.png','./img/icon/NICM.png','./img/icon/NIMT.png','./img/icon/NIED.png','./img/icon/NIES.png','./img/icon/NIEM.png','./img/icon/SIII.png','./img/icon/SINI.png','./img/icon/SIAP.png','./img/icon/SIMD.png','./img/icon/SICM.png','./img/icon/SIMT.png','./img/icon/SIED.png','./img/icon/SIES.png','./img/icon/SIEM.png','./img/icon/unknown.png'];
for(var i=0;i<91;i++){game_.load(imgurl2[i],function(){	});}

var imgurl3 = ['./img/ga/APII.png','./img/ga/APNI.png','./img/ga/APSI.png','./img/ga/APMD.png','./img/ga/APCM.png','./img/ga/APMT.png','./img/ga/APED.png','./img/ga/APES.png','./img/ga/APEM.png','./img/ga/CMII.png','./img/ga/CMNI.png','./img/ga/CMSI.png','./img/ga/CMMD.png','./img/ga/CMAP.png','./img/ga/CMMT.png','./img/ga/CMED.png','./img/ga/CMES.png','./img/ga/CMEM.png','./img/ga/EDII.png','./img/ga/EDNI.png','./img/ga/EDSI.png','./img/ga/EDMD.png','./img/ga/EDCM.png','./img/ga/EDMT.png','./img/ga/EDAP.png','./img/ga/EDES.png','./img/ga/EDEM.png','./img/ga/EMII.png','./img/ga/EMNI.png','./img/ga/EMSI.png','./img/ga/EMMD.png','./img/ga/EMCM.png','./img/ga/EMMT.png','./img/ga/EMED.png','./img/ga/EMES.png','./img/ga/EMAP.png','./img/ga/ESII.png','./img/ga/ESNI.png','./img/ga/ESSI.png','./img/ga/ESMD.png','./img/ga/ESCM.png','./img/ga/ESMT.png','./img/ga/ESED.png','./img/ga/ESAP.png','./img/ga/ESEM.png','./img/ga/IIAP.png','./img/ga/IINI.png','./img/ga/IISI.png','./img/ga/IIMD.png','./img/ga/IICM.png','./img/ga/IIMT.png','./img/ga/IIED.png','./img/ga/IIES.png','./img/ga/IIEM.png','./img/ga/MDII.png','./img/ga/MDNI.png','./img/ga/MDSI.png','./img/ga/MDAP.png','./img/ga/MDCM.png','./img/ga/MDMT.png','./img/ga/MDED.png','./img/ga/MDES.png','./img/ga/MDEM.png','./img/ga/MTII.png','./img/ga/MTNI.png','./img/ga/MTSI.png','./img/ga/MTMD.png','./img/ga/MTCM.png','./img/ga/MTAP.png','./img/ga/MTED.png','./img/ga/MTES.png','./img/ga/MTEM.png','./img/ga/NIII.png','./img/ga/NIAP.png','./img/ga/NISI.png','./img/ga/NIMD.png','./img/ga/NICM.png','./img/ga/NIMT.png','./img/ga/NIED.png','./img/ga/NIES.png','./img/ga/NIEM.png','./img/ga/SIII.png','./img/ga/SINI.png','./img/ga/SIAP.png','./img/ga/SIMD.png','./img/ga/SICM.png','./img/ga/SIMT.png','./img/ga/SIED.png','./img/ga/SIES.png','./img/ga/SIEM.png','./img/ga/unknown.png'];
for(var i=0;i<90;i++){game_.load(imgurl3[i],function(){	});}

var imgurl4 = ['./img/born/APII.png','./img/born/APNI.png','./img/born/APSI.png','./img/born/APMD.png','./img/born/APCM.png','./img/born/APMT.png','./img/born/APED.png','./img/born/APES.png','./img/born/APEM.png','./img/born/CMII.png','./img/born/CMNI.png','./img/born/CMSI.png','./img/born/CMMD.png','./img/born/CMAP.png','./img/born/CMMT.png','./img/born/CMED.png','./img/born/CMES.png','./img/born/CMEM.png','./img/born/EDII.png','./img/born/EDNI.png','./img/born/EDSI.png','./img/born/EDMD.png','./img/born/EDCM.png','./img/born/EDMT.png','./img/born/EDAP.png','./img/born/EDES.png','./img/born/EDEM.png','./img/born/EMII.png','./img/born/EMNI.png','./img/born/EMSI.png','./img/born/EMMD.png','./img/born/EMCM.png','./img/born/EMMT.png','./img/born/EMED.png','./img/born/EMES.png','./img/born/EMAP.png','./img/born/ESII.png','./img/born/ESNI.png','./img/born/ESSI.png','./img/born/ESMD.png','./img/born/ESCM.png','./img/born/ESMT.png','./img/born/ESED.png','./img/born/ESAP.png','./img/born/ESEM.png','./img/born/IIAP.png','./img/born/IINI.png','./img/born/IISI.png','./img/born/IIMD.png','./img/born/IICM.png','./img/born/IIMT.png','./img/born/IIED.png','./img/born/IIES.png','./img/born/IIEM.png','./img/born/MDII.png','./img/born/MDNI.png','./img/born/MDSI.png','./img/born/MDAP.png','./img/born/MDCM.png','./img/born/MDMT.png','./img/born/MDED.png','./img/born/MDES.png','./img/born/MDEM.png','./img/born/MTII.png','./img/born/MTNI.png','./img/born/MTSI.png','./img/born/MTMD.png','./img/born/MTCM.png','./img/born/MTAP.png','./img/born/MTED.png','./img/born/MTES.png','./img/born/MTEM.png','./img/born/NIII.png','./img/born/NIAP.png','./img/born/NISI.png','./img/born/NIMD.png','./img/born/NICM.png','./img/born/NIMT.png','./img/born/NIED.png','./img/born/NIES.png','./img/born/NIEM.png','./img/born/SIII.png','./img/born/SINI.png','./img/born/SIAP.png','./img/born/SIMD.png','./img/born/SICM.png','./img/born/SIMT.png','./img/born/SIED.png','./img/born/SIES.png','./img/born/SIEM.png','./img/born/unknown.png'];
for(var i=0;i<90;i++){game_.load(imgurl4[i],function(){	});}

var ga_oth = ['./img/play_bg.jpg'];
for(var i=0;i<1;i++){game_.load(ga_oth[i],function(){	});}

        /**
        * ぎゃらりーシーン
        *
        * ギャラリーシーンを作り、返す関数です。
        */
        var createGallery_topScene = function() {
            var scene = new Scene();                            // 新しいシーンを作る
	//背景表示
		var bg = new Sprite(1270,720);
		bg.image = game_.assets['./img/title_bg.png'];
		scene.addChild(bg);
            
            var creature = new Sprite(212,94);                     // ラベルを作る
		creature.image = game_.assets['./img/GUI/creature.png'];
		creature.scaleX=3/2;creature.scaleY=3/2;
	    creature.x = 320;                                            // 横位置調整
            creature.y = 360;                                           // 縦位置調整
            scene.addChild(creature);                                  // シーンに追加
            var keyword = new Sprite(190,45);                     // ラベルを作る
		keyword.image = game_.assets['./img/GUI/keyword.png'];
		keyword.scaleX=3/2;keyword.scaleY=3/2;
	    keyword.x = 730;                                            // 横位置調整
            keyword.y = 375;                                           // 縦位置調整
            scene.addChild(keyword);                                  // シーンに追加
	//背景表示
	/*	var test = new Sprite(1270,720);
		test.image = game_.assets['./img/ga/CMII.png'];
		scene.addChild(test);*/
	/*var test=0,test2=0;
	for (var i=0; i<90; ++i) {
				        var MDSI_icon = new Sprite(40, 40);                   // スプライトを作る
				        MDSI_icon.image = game_.assets['./img/icon/MDSI_icon.png'];     // スタート画像を設定
				        MDSI_icon.x = 300+test*10;                                      // 横位置調整
				        MDSI_icon.y = 150+test2;                                     // 縦位置調整
								test+=5;
				        scene.addChild(MDSI_icon);                             // シーンに追加
				        MDSI_icon.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDSI.image = game_.assets['./img/ga_MDSI.png'];     // スタート画像を設定
						      ga_MDSI.x = 0;                                      // 横位置調整
						      ga_MDSI.y = 0;                                    // 縦位置調整
									ga_MDSI.addEventListener(Event.TOUCH_START, function(e) {
										ga_MDSI.parentNode.removeChild(ga_MDSI);
				 		      });
				   	      scene.addChild(ga_MDSI);                             // シーンに追加
				        });

								if(test==50){
									test=0; test2+=50;
								}
	}*/
		//テスト文字にタッチイベントを設定
            creature.addEventListener(Event.TOUCH_START, function(e) {
                game_.replaceScene(createCreature_gaScene());    // 現在表示しているシーンをギャラリーシーンに置き換える
            });
            keyword.addEventListener(Event.TOUCH_START, function(e) {
                game_.replaceScene(createKeyword_gaScene());    // 現在表示しているシーンをギャラリーシーンに置き換える
            });
	return scene;
	};
        var createCreature_gaScene = function() {
            var scene = new Scene();                            // 新しいシーンを作る
	//背景表示
		var bg = new Sprite(1270,720);
		bg.image = game_.assets['./img/title_bg.png'];
		scene.addChild(bg);

		var back = new Sprite(187,60);
		back.image = game_.assets['./img/GUI/return.png'];
		back.x=1050;back.y=640
		scene.addChild(back);
				        back.addEventListener(Event.TOUCH_START, function(e) {
								game_.replaceScene(createStartScene());
				 		    });
				var icon_un = new Sprite(70,70);
								var test=0,test2=0;
	for (var i=0; i<90; ++i) {
				var icon_uns = new Sprite(70,70);
				        icon_uns.x = 180+test;                                      // 横位置調整
				        icon_uns.y = 30+test2;                                     // 縦位置調整
								test+=75;
		icon_uns.image = game_.assets['./img/icon/unknown.png'];
scene.addChild(icon_uns);
//console.log("ssss");
								if(test==750){
									test=0; test2+=75;
								} 
}

if(flag_MDSI==1){

				var icon_MDSI = new Sprite(70,70);
		icon_MDSI.image = game_.assets['./img/icon/MDSI.png'];
		icon_MDSI.x=180;icon_MDSI.y=30;
		scene.addChild(icon_MDSI);
				        scene.addChild(icon_MDSI);                             // シーンに追加
				        icon_MDSI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDSI.image = game_.assets['./img/ga/MDSI.png'];     // スタート画像を設定
							ga_MDSI.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDSI.parentNode.removeChild(ga_MDSI);
				 		      });
				   	      scene.addChild(ga_MDSI);                             // シーンに追加
				        });
}
if(flag_SIMD==1){

				var icon_SIMD = new Sprite(70,70);
		icon_SIMD.image = game_.assets['./img/icon/SIMD.png'];
		icon_SIMD.x=180+75;icon_SIMD.y=30;
		scene.addChild(icon_SIMD);
				        scene.addChild(icon_SIMD);                             // シーンに追加
				        icon_SIMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SIMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SIMD.image = game_.assets['./img/ga/SIMD.png'];     // スタート画像を設定
							ga_SIMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_SIMD.parentNode.removeChild(ga_SIMD);
				 		      });
				   	      scene.addChild(ga_SIMD);                             // シーンに追加
				        });
}
if(flag_EDES==1){

				var icon_EDES = new Sprite(70,70);
		icon_EDES.image = game_.assets['./img/icon/EDES.png'];
		icon_EDES.x=180+75*2;icon_EDES.y=30;
		scene.addChild(icon_EDES);
				        scene.addChild(icon_EDES);                             // シーンに追加
				        icon_EDES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDES.image = game_.assets['./img/ga/EDES.png'];     // スタート画像を設定
							ga_EDES.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDES.parentNode.removeChild(ga_EDES);
				 		      });
				   	      scene.addChild(ga_EDES);                             // シーンに追加
				        });
}
if(flag_ESED==1){

				var icon_ESED = new Sprite(70,70);
		icon_ESED.image = game_.assets['./img/icon/ESED.png'];
		icon_ESED.x=180+75*3;icon_ESED.y=30;
		scene.addChild(icon_ESED);
				        scene.addChild(icon_ESED);                             // シーンに追加
				        icon_ESED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESED.image = game_.assets['./img/ga/ESED.png'];     // スタート画像を設定
							ga_ESED.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESED.parentNode.removeChild(ga_ESED);
				 		      });
				   	      scene.addChild(ga_ESED);                             // シーンに追加
				        });
}
if(flag_NIII==1){

				var icon_NIII = new Sprite(70,70);
		icon_NIII.image = game_.assets['./img/icon/NIII.png'];
		icon_NIII.x=180+75*4;icon_NIII.y=30;
		scene.addChild(icon_NIII);
				        scene.addChild(icon_NIII);                             // シーンに追加
				        icon_NIII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NIII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NIII.image = game_.assets['./img/ga/NIII.png'];     // スタート画像を設定
							ga_NIII.addEventListener(Event.TOUCH_START, function(e) {
								ga_NIII.parentNode.removeChild(ga_NIII);
				 		      });
				   	      scene.addChild(ga_NIII);                             // シーンに追加
				        });
}
if(flag_IINI==1){

				var icon_IINI = new Sprite(70,70);
		icon_IINI.image = game_.assets['./img/icon/IINI.png'];
		icon_IINI.x=180+75*5;icon_IINI.y=30;
		scene.addChild(icon_IINI);
				        scene.addChild(icon_IINI);                             // シーンに追加
				        icon_IINI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IINI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IINI.image = game_.assets['./img/ga/IINI.png'];     // スタート画像を設定
							ga_IINI.addEventListener(Event.TOUCH_START, function(e) {
								ga_IINI.parentNode.removeChild(ga_IINI);
				 		      });
				   	      scene.addChild(ga_IINI);                             // シーンに追加
				        });
}
if(flag_MTEM==1){

				var icon_MTEM = new Sprite(70,70);
		icon_MTEM.image = game_.assets['./img/icon/MTEM.png'];
		icon_MTEM.x=180+75*6;icon_MTEM.y=30;
		scene.addChild(icon_MTEM);
				        scene.addChild(icon_MTEM);                             // シーンに追加
				        icon_MTEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTEM.image = game_.assets['./img/ga/MTEM.png'];     // スタート画像を設定
							ga_MTEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTEM.parentNode.removeChild(ga_MTEM);
				 		      });
				   	      scene.addChild(ga_MTEM);                             // シーンに追加
				        });
}
if(flag_EMMT==1){

				var icon_EMMT = new Sprite(70,70);
		icon_EMMT.image = game_.assets['./img/icon/EMMT.png'];
		icon_EMMT.x=180+75*7;icon_EMMT.y=30;
		scene.addChild(icon_EMMT);
				        scene.addChild(icon_EMMT);                             // シーンに追加
				        icon_EMMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMMT.image = game_.assets['./img/ga/EMMT.png'];     // スタート画像を設定
							ga_EMMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMMT.parentNode.removeChild(ga_EMMT);
				 		      });
				   	      scene.addChild(ga_EMMT);                             // シーンに追加
				        });
}
if(flag_CMAP==1){
				var icon_CMAP = new Sprite(70,70);
		icon_CMAP.image = game_.assets['./img/icon/CMAP.png'];
		icon_CMAP.x=180+75*8;icon_CMAP.y=30;
		scene.addChild(icon_CMAP);
				        scene.addChild(icon_CMAP);                             // シーンに追加
				        icon_CMAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMAP.image = game_.assets['./img/ga/CMAP.png'];     // スタート画像を設定
							ga_CMAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMAP.parentNode.removeChild(ga_CMAP);
				 		      });
				   	      scene.addChild(ga_CMAP);                             // シーンに追加
				        });
}
if(flag_APCM==1){

				var icon_APCM = new Sprite(70,70);
		icon_APCM.image = game_.assets['./img/icon/APCM.png'];
		icon_APCM.x=180+75*9;icon_APCM.y=30;
		scene.addChild(icon_APCM);
				        scene.addChild(icon_APCM);                             // シーンに追加
				        icon_APCM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APCM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APCM.image = game_.assets['./img/ga/APCM.png'];     // スタート画像を設定
							ga_APCM.addEventListener(Event.TOUCH_START, function(e) {
								ga_APCM.parentNode.removeChild(ga_APCM);
				 		      });
				   	      scene.addChild(ga_APCM);                             // シーンに追加
				        });
}
if(flag_ESCM==1){

				var icon_ESCM = new Sprite(70,70);
		icon_ESCM.image = game_.assets['./img/icon/ESCM.png'];
		icon_ESCM.x=180;icon_ESCM.y=30+75;
		scene.addChild(icon_ESCM);
				        scene.addChild(icon_ESCM);                             // シーンに追加
				        icon_ESCM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESCM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESCM.image = game_.assets['./img/ga/ESCM.png'];     // スタート画像を設定
							ga_ESCM.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESCM.parentNode.removeChild(ga_ESCM);
				 		      });
				   	      scene.addChild(ga_ESCM);                             // シーンに追加
				        });
}
if(flag_CMES==1){

				var icon_CMES = new Sprite(70,70);
		icon_CMES.image = game_.assets['./img/icon/CMES.png'];
		icon_CMES.x=180+75;icon_CMES.y=30+75;
		scene.addChild(icon_CMES);
				        scene.addChild(icon_CMES);                             // シーンに追加
				        icon_CMES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMES.image = game_.assets['./img/ga/CMES.png'];     // スタート画像を設定
							ga_CMES.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMES.parentNode.removeChild(ga_CMES);
				 		      });
				   	      scene.addChild(ga_CMES);                             // シーンに追加
				        });
}
if(flag_MTII==1){

				var icon_MTII = new Sprite(70,70);
		icon_MTII.image = game_.assets['./img/icon/MTII.png'];
		icon_MTII.x=180+75*2;icon_MTII.y=30+75;
		scene.addChild(icon_MTII);
				        scene.addChild(icon_MTII);                             // シーンに追加
				        icon_MTII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTII.image = game_.assets['./img/ga/MTII.png'];     // スタート画像を設定
							ga_MTII.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTII.parentNode.removeChild(ga_MTII);
				 		      });
				   	      scene.addChild(ga_MTII);                             // シーンに追加
				        });
}
if(flag_IIMT==1){

				var icon_IIMT = new Sprite(70,70);
		icon_IIMT.image = game_.assets['./img/icon/IIMT.png'];
		icon_IIMT.x=180+75*3;icon_IIMT.y=30+75;
		scene.addChild(icon_IIMT);
				        scene.addChild(icon_IIMT);                             // シーンに追加
				        icon_IIMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IIMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IIMT.image = game_.assets['./img/ga/IIMT.png'];     // スタート画像を設定
							ga_IIMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_IIMT.parentNode.removeChild(ga_IIMT);
				 		      });
				   	      scene.addChild(ga_IIMT);                             // シーンに追加
				        });
}
if(flag_SINI==1){

				var icon_SINI = new Sprite(70,70);
		icon_SINI.image = game_.assets['./img/icon/SINI.png'];
		icon_SINI.x=180+75*4;icon_SINI.y=30+75;
		scene.addChild(icon_SINI);
				        scene.addChild(icon_SINI);                             // シーンに追加
				        icon_SINI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SINI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SINI.image = game_.assets['./img/ga/SINI.png'];     // スタート画像を設定
							ga_SINI.addEventListener(Event.TOUCH_START, function(e) {
								ga_SINI.parentNode.removeChild(ga_SINI);
				 		      });
				   	      scene.addChild(ga_SINI);                             // シーンに追加
				        });
}
if(flag_NISI==1){

				var icon_NISI = new Sprite(70,70);
		icon_NISI.image = game_.assets['./img/icon/NISI.png'];
		icon_NISI.x=180+75*5;icon_NISI.y=30+75;
		scene.addChild(icon_NISI);
				        scene.addChild(icon_NISI);                             // シーンに追加
				        icon_NISI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NISI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NISI.image = game_.assets['./img/ga/NISI.png'];     // スタート画像を設定
							ga_NISI.addEventListener(Event.TOUCH_START, function(e) {
								ga_NISI.parentNode.removeChild(ga_NISI);
				 		      });
				   	      scene.addChild(ga_NISI);                             // シーンに追加
				        });
}
if(flag_APEM==1){

				var icon_APEM = new Sprite(70,70);
		icon_APEM.image = game_.assets['./img/icon/APEM.png'];
		icon_APEM.x=180+75*6;icon_APEM.y=30+75;
		scene.addChild(icon_APEM);
				        scene.addChild(icon_APEM);                             // シーンに追加
				        icon_APEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APEM.image = game_.assets['./img/ga/APEM.png'];     // スタート画像を設定
							ga_APEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_APEM.parentNode.removeChild(ga_APEM);
				 		      });
				   	      scene.addChild(ga_APEM);                             // シーンに追加
				        });
}
if(flag_EMAP==1){

				var icon_EMAP = new Sprite(70,70);
		icon_EMAP.image = game_.assets['./img/icon/EMAP.png'];
		icon_EMAP.x=180+75*7;icon_EMAP.y=30+75;
		scene.addChild(icon_EMAP);
				        scene.addChild(icon_EMAP);                             // シーンに追加
				        icon_EMAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMAP.image = game_.assets['./img/ga/EMAP.png'];     // スタート画像を設定
							ga_EMAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMAP.parentNode.removeChild(ga_EMAP);
				 		      });
				   	      scene.addChild(ga_EMAP);                             // シーンに追加
				        });
}
if(flag_SIII==1){

				var icon_SIII = new Sprite(70,70);
		icon_SIII.image = game_.assets['./img/icon/SIII.png'];
		icon_SIII.x=180+75*8;icon_SIII.y=30+75;
		scene.addChild(icon_SIII);
				        scene.addChild(icon_SIII);                             // シーンに追加
				        icon_SIII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SIII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SIII.image = game_.assets['./img/ga/SIII.png'];     // スタート画像を設定
							ga_SIII.addEventListener(Event.TOUCH_START, function(e) {
								ga_SIII.parentNode.removeChild(ga_SIII);
				 		      });
				   	      scene.addChild(ga_SIII);                             // シーンに追加
				        });
}
if(flag_IISI==1){

				var icon_IISI = new Sprite(70,70);
		icon_IISI.image = game_.assets['./img/icon/IISI.png'];
		icon_IISI.x=180+75*9;icon_IISI.y=30+75;
		scene.addChild(icon_IISI);
				        scene.addChild(icon_IISI);                             // シーンに追加
				        icon_IISI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IISI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IISI.image = game_.assets['./img/ga/IISI.png'];     // スタート画像を設定
							ga_IISI.addEventListener(Event.TOUCH_START, function(e) {
								ga_IISI.parentNode.removeChild(ga_IISI);
				 		      });
				   	      scene.addChild(ga_IISI);                             // シーンに追加
				        });
}
if(flag_SIMT==1){

				var icon_SIMT = new Sprite(70,70);
		icon_SIMT.image = game_.assets['./img/icon/SIMT.png'];
		icon_SIMT.x=180;icon_SIMT.y=30+75*2;
		scene.addChild(icon_SIMT);
				        scene.addChild(icon_SIMT);                             // シーンに追加
				        icon_SIMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SIMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SIMT.image = game_.assets['./img/ga/SIMT.png'];     // スタート画像を設定
							ga_SIMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_SIMT.parentNode.removeChild(ga_SIMT);
				 		      });
				   	      scene.addChild(ga_SIMT);                             // シーンに追加
				        });
}
if(flag_MTSI==1){

				var icon_MTSI = new Sprite(70,70);
		icon_MTSI.image = game_.assets['./img/icon/MTSI.png'];
		icon_MTSI.x=180+75;icon_MTSI.y=30+75*2;
		scene.addChild(icon_MTSI);
				        scene.addChild(icon_MTSI);                             // シーンに追加
				        icon_MTSI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTSI.image = game_.assets['./img/ga/MTSI.png'];     // スタート画像を設定
							ga_MTSI.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTSI.parentNode.removeChild(ga_MTSI);
				 		      });
				   	      scene.addChild(ga_MTSI);                             // シーンに追加
				        });
}
if(flag_SIAP==1){
				var icon_SIAP = new Sprite(70,70);
		icon_SIAP.image = game_.assets['./img/icon/SIAP.png'];
		icon_SIAP.x=180+75*2;icon_SIAP.y=30+75*2;
		scene.addChild(icon_SIAP);
				        scene.addChild(icon_SIAP);                             // シーンに追加
				        icon_SIAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SIAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SIAP.image = game_.assets['./img/ga/SIAP.png'];     // スタート画像を設定
							ga_SIAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_SIAP.parentNode.removeChild(ga_SIAP);
				 		      });
				   	      scene.addChild(ga_SIAP);                             // シーンに追加
				        });
}
if(flag_APSI==1){
				var icon_APSI = new Sprite(70,70);
		icon_APSI.image = game_.assets['./img/icon/APSI.png'];
		icon_APSI.x=180+75*3;icon_APSI.y=30+75*2;
		scene.addChild(icon_APSI);
				        scene.addChild(icon_APSI);                             // シーンに追加
				        icon_APSI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APSI.image = game_.assets['./img/ga/APSI.png'];     // スタート画像を設定
							ga_APSI.addEventListener(Event.TOUCH_START, function(e) {
								ga_APSI.parentNode.removeChild(ga_APSI);
				 		      });
				   	      scene.addChild(ga_APSI);                             // シーンに追加
				        });
}
if(flag_SICM==1){
				var icon_SICM = new Sprite(70,70);
		icon_SICM.image = game_.assets['./img/icon/SICM.png'];
		icon_SICM.x=180+75*4;icon_SICM.y=30+75*2;
		scene.addChild(icon_SICM);
				        scene.addChild(icon_SICM);                             // シーンに追加
				        icon_SICM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SICM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SICM.image = game_.assets['./img/ga/SICM.png'];     // スタート画像を設定
							ga_SICM.addEventListener(Event.TOUCH_START, function(e) {
								ga_SICM.parentNode.removeChild(ga_SICM);
				 		      });
				   	      scene.addChild(ga_SICM);                             // シーンに追加
				        });
}
if(flag_CMSI==1){
				var icon_CMSI = new Sprite(70,70);
		icon_CMSI.image = game_.assets['./img/icon/CMSI.png'];
		icon_CMSI.x=180+75*5;icon_CMSI.y=30+75*2;
		scene.addChild(icon_CMSI);
				        scene.addChild(icon_CMSI);                             // シーンに追加
				        icon_CMSI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMSI.image = game_.assets['./img/ga/CMSI.png'];     // スタート画像を設定
							ga_CMSI.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMSI.parentNode.removeChild(ga_CMSI);
				 		      });
				   	      scene.addChild(ga_CMSI);                             // シーンに追加
				        });
}
if(flag_SIEM==1){
				var icon_SIEM = new Sprite(70,70);
		icon_SIEM.image = game_.assets['./img/icon/SIEM.png'];
		icon_SIEM.x=180+75*6;icon_SIEM.y=30+75*2;
		scene.addChild(icon_SIEM);
				        scene.addChild(icon_SIEM);                             // シーンに追加
				        icon_SIEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SIEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SIEM.image = game_.assets['./img/ga/SIEM.png'];     // スタート画像を設定
							ga_SIEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_SIEM.parentNode.removeChild(ga_SIEM);
				 		      });
				   	      scene.addChild(ga_SIEM);                             // シーンに追加
				        });
}
if(flag_EMSI==1){
				var icon_EMSI = new Sprite(70,70);
		icon_EMSI.image = game_.assets['./img/icon/EMSI.png'];
		icon_EMSI.x=180+75*7;icon_EMSI.y=30+75*2;
		scene.addChild(icon_EMSI);
				        scene.addChild(icon_EMSI);                             // シーンに追加
				        icon_EMSI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMSI.image = game_.assets['./img/ga/EMSI.png'];     // スタート画像を設定
							ga_EMSI.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMSI.parentNode.removeChild(ga_EMSI);
				 		      });
				   	      scene.addChild(ga_EMSI);                             // シーンに追加
				        });
}
if(flag_SIES==1){
				var icon_SIES = new Sprite(70,70);
		icon_SIES.image = game_.assets['./img/icon/SIES.png'];
		icon_SIES.x=180+75*8;icon_SIES.y=30+75*2;
		scene.addChild(icon_SIES);
				        scene.addChild(icon_SIES);                             // シーンに追加
				        icon_SIES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SIES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SIES.image = game_.assets['./img/ga/SIES.png'];     // スタート画像を設定
							ga_SIES.addEventListener(Event.TOUCH_START, function(e) {
								ga_SIES.parentNode.removeChild(ga_SIES);
				 		      });
				   	      scene.addChild(ga_SIES);                             // シーンに追加
				        });
}
if(flag_ESSI==1){
				var icon_ESSI = new Sprite(70,70);
		icon_ESSI.image = game_.assets['./img/icon/ESSI.png'];
		icon_ESSI.x=180+75*9;icon_ESSI.y=30+75*2;
		scene.addChild(icon_ESSI);
				        scene.addChild(icon_ESSI);                             // シーンに追加
				        icon_ESSI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESSI.image = game_.assets['./img/ga/ESSI.png'];     // スタート画像を設定
							ga_ESSI.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESSI.parentNode.removeChild(ga_ESSI);
				 		      });
				   	      scene.addChild(ga_ESSI);                             // シーンに追加
				        });
}
if(flag_SIED==1){
				var icon_SIED = new Sprite(70,70);
		icon_SIED.image = game_.assets['./img/icon/SIED.png'];
		icon_SIED.x=180;icon_SIED.y=30+75*3;
		scene.addChild(icon_SIED);
				        scene.addChild(icon_SIED);                             // シーンに追加
				        icon_SIED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_SIED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_SIED.image = game_.assets['./img/ga/SIED.png'];     // スタート画像を設定
							ga_SIED.addEventListener(Event.TOUCH_START, function(e) {
								ga_SIED.parentNode.removeChild(ga_SIED);
				 		      });
				   	      scene.addChild(ga_SIED);                             // シーンに追加
				        });
}
if(flag_EDSI==1){
				var icon_EDSI = new Sprite(70,70);
		icon_EDSI.image = game_.assets['./img/icon/EDSI.png'];
		icon_EDSI.x=180+75;icon_EDSI.y=30+75*3;
		scene.addChild(icon_EDSI);
				        scene.addChild(icon_EDSI);                             // シーンに追加
				        icon_EDSI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDSI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDSI.image = game_.assets['./img/ga/EDSI.png'];     // スタート画像を設定
							ga_EDSI.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDSI.parentNode.removeChild(ga_EDSI);
				 		      });
				   	      scene.addChild(ga_EDSI);                             // シーンに追加
				        });
}
if(flag_MTMD==1){
	var icon_MTMD = new Sprite(70,70);
		icon_MTMD.image = game_.assets['./img/icon/MTMD.png'];
		icon_MTMD.x=180+75*2;icon_MTMD.y=30+75*3;
		scene.addChild(icon_MTMD);
				        scene.addChild(icon_MTMD);                             // シーンに追加
				        icon_MTMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTMD.image = game_.assets['./img/ga/MTMD.png'];     // スタート画像を設定
							ga_MTMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTMD.parentNode.removeChild(ga_MTMD);
				 		      });
				   	      scene.addChild(ga_MTMD);                             // シーンに追加
				        });
}
if(flag_MDMT==1){
var icon_MDMT = new Sprite(70,70);
		icon_MDMT.image = game_.assets['./img/icon/MDMT.png'];
		icon_MDMT.x=180+75*3;icon_MDMT.y=30+75*3;
		scene.addChild(icon_MDMT);
				        scene.addChild(icon_MDMT);                             // シーンに追加
				        icon_MDMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDMT.image = game_.assets['./img/ga/MDMT.png'];     // スタート画像を設定
							ga_MDMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDMT.parentNode.removeChild(ga_MDMT);
				 		      });
				   	      scene.addChild(ga_MDMT);                             // シーンに追加
				        });
}
if(flag_MTNI==1){
var icon_MTNI = new Sprite(70,70);
		icon_MTNI.image = game_.assets['./img/icon/MTNI.png'];
		icon_MTNI.x=180+75*4;icon_MTNI.y=30+75*3;
		scene.addChild(icon_MTNI);
				        scene.addChild(icon_MTNI);                             // シーンに追加
				        icon_MTNI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTNI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTNI.image = game_.assets['./img/ga/MTNI.png'];     // スタート画像を設定
							ga_MTNI.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTNI.parentNode.removeChild(ga_MTNI);
				 		      });
				   	      scene.addChild(ga_MTNI);                             // シーンに追加
				        });
}
if(flag_NIMT==1){
var icon_NIMT = new Sprite(70,70);
		icon_NIMT.image = game_.assets['./img/icon/NIMT.png'];
		icon_NIMT.x=180+75*5;icon_NIMT.y=30+75*3;
		scene.addChild(icon_NIMT);
				        scene.addChild(icon_NIMT);                             // シーンに追加
				        icon_NIMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NIMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NIMT.image = game_.assets['./img/ga/NIMT.png'];     // スタート画像を設定
							ga_NIMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_NIMT.parentNode.removeChild(ga_NIMT);
				 		      });
				   	      scene.addChild(ga_NIMT);                             // シーンに追加
				        });
}
if(flag_MTES==1){
var icon_MTES = new Sprite(70,70);
		icon_MTES.image = game_.assets['./img/icon/MTES.png'];
		icon_MTES.x=180+75*6;icon_MTES.y=30+75*3;
		scene.addChild(icon_MTES);
				        scene.addChild(icon_MTES);                             // シーンに追加
				        icon_MTES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTES.image = game_.assets['./img/ga/MTES.png'];     // スタート画像を設定
							ga_MTES.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTES.parentNode.removeChild(ga_MTES);
				 		      });
				   	      scene.addChild(ga_MTES);                             // シーンに追加
				        });
}
if(flag_ESMT==1){
var icon_ESMT = new Sprite(70,70);
		icon_ESMT.image = game_.assets['./img/icon/ESMT.png'];
		icon_ESMT.x=180+75*7;icon_ESMT.y=30+75*3;
		scene.addChild(icon_ESMT);
				        scene.addChild(icon_ESMT);                             // シーンに追加
				        icon_ESMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESMT.image = game_.assets['./img/ga/ESMT.png'];     // スタート画像を設定
							ga_ESMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESMT.parentNode.removeChild(ga_ESMT);
				 		      });
				   	      scene.addChild(ga_ESMT);                             // シーンに追加
				        });
}

if(flag_CMMT==1){
var icon_CMMT = new Sprite(70,70);
		icon_CMMT.image = game_.assets['./img/icon/CMMT.png'];
		icon_CMMT.x=180+75*8;icon_CMMT.y=30+75*3;
		scene.addChild(icon_CMMT);
				        scene.addChild(icon_CMMT);                             // シーンに追加
				        icon_CMMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMMT.image = game_.assets['./img/ga/CMMT.png'];     // スタート画像を設定
							ga_CMMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMMT.parentNode.removeChild(ga_CMMT);
				 		      });
				   	      scene.addChild(ga_CMMT);                             // シーンに追加
				        });
}
if(flag_MTCM==1){
var icon_MTCM = new Sprite(70,70);
		icon_MTCM.image = game_.assets['./img/icon/MTCM.png'];
		icon_MTCM.x=180+75*9;icon_MTCM.y=30+75*3;
		scene.addChild(icon_MTCM);
				        scene.addChild(icon_MTCM);                             // シーンに追加
				        icon_MTCM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTCM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTCM.image = game_.assets['./img/ga/MTCM.png'];     // スタート画像を設定
							ga_MTCM.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTCM.parentNode.removeChild(ga_MTCM);
				 		      });
				   	      scene.addChild(ga_MTCM);                             // シーンに追加
				        });
}
if(flag_MTAP==1){
var icon_MTAP = new Sprite(70,70);
		icon_MTAP.image = game_.assets['./img/icon/MTAP.png'];
		icon_MTAP.x=180;icon_MTAP.y=30+75*4;
		scene.addChild(icon_MTAP);
				        scene.addChild(icon_MTAP);                             // シーンに追加
				        icon_MTAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTAP.image = game_.assets['./img/ga/MTAP.png'];     // スタート画像を設定
							ga_MTAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTAP.parentNode.removeChild(ga_MTAP);
				 		      });
				   	      scene.addChild(ga_MTAP);                             // シーンに追加
				        });
}
if(flag_APMT==1){
var icon_APMT = new Sprite(70,70);
		icon_APMT.image = game_.assets['./img/icon/APMT.png'];
		icon_APMT.x=180+75;icon_APMT.y=30+75*4;
		scene.addChild(icon_APMT);
				        scene.addChild(icon_APMT);                             // シーンに追加
				        icon_APMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APMT.image = game_.assets['./img/ga/APMT.png'];     // スタート画像を設定
							ga_APMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_APMT.parentNode.removeChild(ga_APMT);
				 		      });
				   	      scene.addChild(ga_APMT);                             // シーンに追加
				        });
}
if(flag_MTED==1){
var icon_MTED = new Sprite(70,70);
		icon_MTED.image = game_.assets['./img/icon/MTED.png'];
		icon_MTED.x=180+75*2;icon_MTED.y=30+75*4;
		scene.addChild(icon_MTED);
				        scene.addChild(icon_MTED);                             // シーンに追加
				        icon_MTED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MTED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MTED.image = game_.assets['./img/ga/MTED.png'];     // スタート画像を設定
							ga_MTED.addEventListener(Event.TOUCH_START, function(e) {
								ga_MTED.parentNode.removeChild(ga_MTED);
				 		      });
				   	      scene.addChild(ga_MTED);                             // シーンに追加
				        });
}
if(flag_EDMT==1){
var icon_EDMT = new Sprite(70,70);
		icon_EDMT.image = game_.assets['./img/icon/EDMT.png'];
		icon_EDMT.x=180+75*3;icon_EDMT.y=30+75*4;
		scene.addChild(icon_EDMT);
				        scene.addChild(icon_EDMT);                             // シーンに追加
				        icon_EDMT.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDMT = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDMT.image = game_.assets['./img/ga/EDMT.png'];     // スタート画像を設定
							ga_EDMT.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDMT.parentNode.removeChild(ga_EDMT);
				 		      });
				   	      scene.addChild(ga_EDMT);                             // シーンに追加
				        });
}
if(flag_EDCM==1){
var icon_EDCM = new Sprite(70,70);
		icon_EDCM.image = game_.assets['./img/icon/EDCM.png'];
		icon_EDCM.x=180+75*4;icon_EDCM.y=30+75*4;
		scene.addChild(icon_EDCM);
				        scene.addChild(icon_EDCM);                             // シーンに追加
				        icon_EDCM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDCM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDCM.image = game_.assets['./img/ga/EDCM.png'];     // スタート画像を設定
							ga_EDCM.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMCM.parentNode.removeChild(ga_EDCM);
				 		      });
				   	      scene.addChild(ga_EDCM);                             // シーンに追加
				        });
}
if(flag_CMEM==1){
var icon_CMEM = new Sprite(70,70);
		icon_CMEM.image = game_.assets['./img/icon/CMEM.png'];
		icon_CMEM.x=180+75*5;icon_CMEM.y=30+75*4;
		scene.addChild(icon_CMEM);
				        scene.addChild(icon_CMEM);                             // シーンに追加
				        icon_CMEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMEM.image = game_.assets['./img/ga/CMEM.png'];     // スタート画像を設定
							ga_CMEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMEM.parentNode.removeChild(ga_CMEM);
				 		      });
				   	      scene.addChild(ga_CMEM);                             // シーンに追加
				        });
}
if(flag_EMII==1){
var icon_EMII = new Sprite(70,70);
		icon_EMII.image = game_.assets['./img/icon/EMII.png'];
		icon_EMII.x=180+75*6;icon_EMII.y=30+75*4;
		scene.addChild(icon_EMII);
				        scene.addChild(icon_EMII);                             // シーンに追加
				        icon_EMII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMII.image = game_.assets['./img/ga/EMII.png'];     // スタート画像を設定
							ga_EMII.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMII.parentNode.removeChild(ga_EMII);
				 		      });
				   	      scene.addChild(ga_EMII);                             // シーンに追加
				        });
}
if(flag_IIEM==1){
var icon_IIEM = new Sprite(70,70);
		icon_IIEM.image = game_.assets['./img/icon/IIEM.png'];
		icon_IIEM.x=180+75*7;icon_IIEM.y=30+75*4;
		scene.addChild(icon_IIEM);
				        scene.addChild(icon_IIEM);                             // シーンに追加
				        icon_IIEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IIEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IIEM.image = game_.assets['./img/ga/IIEM.png'];     // スタート画像を設定
							ga_IIEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_IIEM.parentNode.removeChild(ga_IIEM);
				 		      });
				   	      scene.addChild(ga_IIEM);                             // シーンに追加
				        });
}
if(flag_EMNI==1){
var icon_EMNI = new Sprite(70,70);
		icon_EMNI.image = game_.assets['./img/icon/EMNI.png'];
		icon_EMNI.x=180+75*8;icon_EMNI.y=30+75*4;
		scene.addChild(icon_EMNI);
				        scene.addChild(icon_EMNI);                             // シーンに追加
				        icon_EMNI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMNI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMNI.image = game_.assets['./img/ga/EMNI.png'];     // スタート画像を設定
							ga_EMNI.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMNI.parentNode.removeChild(ga_EMNI);
				 		      });
				   	      scene.addChild(ga_EMNI);                             // シーンに追加
				        });
}
if(flag_NIEM==1){
var icon_NIEM = new Sprite(70,70);
		icon_NIEM.image = game_.assets['./img/icon/NIEM.png'];
		icon_NIEM.x=180+75*9;icon_NIEM.y=30+75*4;
		scene.addChild(icon_NIEM);
				        scene.addChild(icon_NIEM);                             // シーンに追加
				        icon_NIEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NIEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NIEM.image = game_.assets['./img/ga/NIEM.png'];     // スタート画像を設定
							ga_NIEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_NIEM.parentNode.removeChild(ga_NIEM);
				 		      });
				   	      scene.addChild(ga_NIEM);                             // シーンに追加
				        });
}
if(flag_EMES==1){
var icon_EMES = new Sprite(70,70);
		icon_EMES.image = game_.assets['./img/icon/EMES.png'];
		icon_EMES.x=180;icon_EMES.y=30+75*5;
		scene.addChild(icon_EMES);
				        scene.addChild(icon_EMES);                             // シーンに追加
				        icon_EMES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMES.image = game_.assets['./img/ga/EMES.png'];     // スタート画像を設定
							ga_EMES.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMES.parentNode.removeChild(ga_EMES);
				 		      });
				   	      scene.addChild(ga_EMES);                             // シーンに追加
				        });
}
if(flag_ESEM==1){
var icon_ESEM = new Sprite(70,70);
		icon_ESEM.image = game_.assets['./img/icon/ESEM.png'];
		icon_ESEM.x=180+75;icon_ESEM.y=30+75*5;
		scene.addChild(icon_ESEM);
				        scene.addChild(icon_ESEM);                             // シーンに追加
				        icon_ESEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESEM.image = game_.assets['./img/ga/ESEM.png'];     // スタート画像を設定
							ga_ESEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESEM.parentNode.removeChild(ga_ESEM);
				 		      });
				   	      scene.addChild(ga_ESEM);                             // シーンに追加
				        });
}
if(flag_EMED==1){
var icon_EMED = new Sprite(70,70);
		icon_EMED.image = game_.assets['./img/icon/EMED.png'];
		icon_EMED.x=180+75*2;icon_EMED.y=30+75*5;
		scene.addChild(icon_EMED);
				        scene.addChild(icon_EMED);                             // シーンに追加
				        icon_EMED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMED.image = game_.assets['./img/ga/EMED.png'];     // スタート画像を設定
							ga_EMED.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMED.parentNode.removeChild(ga_EMED);
				 		      });
				   	      scene.addChild(ga_EMED);                             // シーンに追加
				        });
}
if(flag_EDEM==1){
var icon_EDEM = new Sprite(70,70);
		icon_EDEM.image = game_.assets['./img/icon/EDEM.png'];
		icon_EDEM.x=180+75*3;icon_EDEM.y=30+75*5;
		scene.addChild(icon_EDEM);
				        scene.addChild(icon_EDEM);                             // シーンに追加
				        icon_EDEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDEM.image = game_.assets['./img/ga/EDEM.png'];     // スタート画像を設定
							ga_EDEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDEM.parentNode.removeChild(ga_EDEM);
				 		      });
				   	      scene.addChild(ga_EDEM);                             // シーンに追加
				        });
}
if(flag_EMMD==1){
var icon_EMMD = new Sprite(70,70);
		icon_EMMD.image = game_.assets['./img/icon/EMMD.png'];
		icon_EMMD.x=180+75*4;icon_EMMD.y=30+75*5;
		scene.addChild(icon_EMMD);
				        scene.addChild(icon_EMMD);                             // シーンに追加
				        icon_EMMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EMMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EMMD.image = game_.assets['./img/ga/EMMD.png'];     // スタート画像を設定
							ga_EMMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_EMMD.parentNode.removeChild(ga_EMMD);
				 		      });
				   	      scene.addChild(ga_EMMD);                             // シーンに追加
				        });
}
if(flag_MDEM==1){
var icon_MDEM = new Sprite(70,70);
		icon_MDEM.image = game_.assets['./img/icon/MDEM.png'];
		icon_MDEM.x=180+75*5;icon_MDEM.y=30+75*5;
		scene.addChild(icon_MDEM);
				        scene.addChild(icon_MDEM);                             // シーンに追加
				        icon_MDEM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDEM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDEM.image = game_.assets['./img/ga/MDEM.png'];     // スタート画像を設定
							ga_MDEM.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDEM.parentNode.removeChild(ga_MDEM);
				 		      });
				   	      scene.addChild(ga_MDEM);                             // シーンに追加
				        });
}
if(flag_APII==1){
var icon_APII = new Sprite(70,70);
		icon_APII.image = game_.assets['./img/icon/APII.png'];
		icon_APII.x=180+75*6;icon_APII.y=30+75*5;
		scene.addChild(icon_APII);
				        scene.addChild(icon_APII);                             // シーンに追加
				        icon_APII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APII.image = game_.assets['./img/ga/APII.png'];     // スタート画像を設定
							ga_APII.addEventListener(Event.TOUCH_START, function(e) {
								ga_APII.parentNode.removeChild(ga_APII);
				 		      });
				   	      scene.addChild(ga_APII);                             // シーンに追加
				        });
}
if(flag_IIAP==1){
var icon_IIAP = new Sprite(70,70);
		icon_IIAP.image = game_.assets['./img/icon/IIAP.png'];
		icon_IIAP.x=180+75*7;icon_IIAP.y=30+75*5;
		scene.addChild(icon_IIAP);
				        scene.addChild(icon_IIAP);                             // シーンに追加
				        icon_IIAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IIAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IIAP.image = game_.assets['./img/ga/IIAP.png'];     // スタート画像を設定
							ga_IIAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_IIAP.parentNode.removeChild(ga_IIAP);
				 		      });
				   	      scene.addChild(ga_IIAP);                             // シーンに追加
				        });
}
if(flag_APNI==1){
var icon_APNI = new Sprite(70,70);
		icon_APNI.image = game_.assets['./img/icon/APNI.png'];
		icon_APNI.x=180+75*8;icon_APNI.y=30+75*5;
		scene.addChild(icon_APNI);
				        scene.addChild(icon_APNI);                             // シーンに追加
				        icon_APNI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APNI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APNI.image = game_.assets['./img/ga/APNI.png'];     // スタート画像を設定
							ga_APNI.addEventListener(Event.TOUCH_START, function(e) {
								ga_APNI.parentNode.removeChild(ga_APNI);
				 		      });
				   	      scene.addChild(ga_APNI);                             // シーンに追加
				        });
}
if(flag_NIAP==1){
var icon_NIAP = new Sprite(70,70);
		icon_NIAP.image = game_.assets['./img/icon/NIAP.png'];
		icon_NIAP.x=180+75*9;icon_NIAP.y=30+75*5;
		scene.addChild(icon_NIAP);
				        scene.addChild(icon_NIAP);                             // シーンに追加
				        icon_NIAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NIAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NIAP.image = game_.assets['./img/ga/NIAP.png'];     // スタート画像を設定
							ga_NIAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_NIAP.parentNode.removeChild(ga_NIAP);
				 		      });
				   	      scene.addChild(ga_NIAP);                             // シーンに追加
				        });
}
if(flag_APES==1){
var icon_APES = new Sprite(70,70);
		icon_APES.image = game_.assets['./img/icon/APES.png'];
		icon_APES.x=180;icon_APES.y=30+75*6;
		scene.addChild(icon_APES);
				        scene.addChild(icon_APES);                             // シーンに追加
				        icon_APES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APES.image = game_.assets['./img/ga/APES.png'];     // スタート画像を設定
							ga_APES.addEventListener(Event.TOUCH_START, function(e) {
								ga_APES.parentNode.removeChild(ga_APES);
				 		      });
				   	      scene.addChild(ga_APES);                             // シーンに追加
				        });
}
if(flag_ESAP==1){
var icon_ESAP = new Sprite(70,70);
		icon_ESAP.image = game_.assets['./img/icon/ESAP.png'];
		icon_ESAP.x=180+75;icon_ESAP.y=30+75*6;
		scene.addChild(icon_ESAP);
				        scene.addChild(icon_ESAP);                             // シーンに追加
				        icon_ESAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESAP.image = game_.assets['./img/ga/ESAP.png'];     // スタート画像を設定
							ga_ESAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESAP.parentNode.removeChild(ga_ESAP);
				 		      });
				   	      scene.addChild(ga_ESAP);                             // シーンに追加
				        });
}
if(flag_APED==1){
var icon_APED = new Sprite(70,70);
		icon_APED.image = game_.assets['./img/icon/APED.png'];
		icon_APED.x=180+75*2;icon_APED.y=30+75*6;
		scene.addChild(icon_APED);
				        scene.addChild(icon_APED);                             // シーンに追加
				        icon_APED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APED.image = game_.assets['./img/ga/APED.png'];     // スタート画像を設定
							ga_APED.addEventListener(Event.TOUCH_START, function(e) {
								ga_APED.parentNode.removeChild(ga_APED);
				 		      });
				   	      scene.addChild(ga_APED);                             // シーンに追加
				        });
}
if(flag_EDAP==1){
var icon_EDAP = new Sprite(70,70);
		icon_EDAP.image = game_.assets['./img/icon/EDAP.png'];
		icon_EDAP.x=180+75*3;icon_EDAP.y=30+75*6;
		scene.addChild(icon_EDAP);
				        scene.addChild(icon_EDAP);                             // シーンに追加
				        icon_EDAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDAP.image = game_.assets['./img/ga/EDAP.png'];     // スタート画像を設定
							ga_EDAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDAP.parentNode.removeChild(ga_EDAP);
				 		      });
				   	      scene.addChild(ga_EDAP);                             // シーンに追加
				        });
}
if(flag_APMD==1){
var icon_APMD = new Sprite(70,70);
		icon_APMD.image = game_.assets['./img/icon/APMD.png'];
		icon_APMD.x=180+75*4;icon_APMD.y=30+75*6;
		scene.addChild(icon_APMD);
				        scene.addChild(icon_APMD);                             // シーンに追加
				        icon_APMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_APMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_APMD.image = game_.assets['./img/ga/APMD.png'];     // スタート画像を設定
							ga_APMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_APMD.parentNode.removeChild(ga_APMD);
				 		      });
				   	      scene.addChild(ga_APMD);                             // シーンに追加
				        });
}
if(flag_MDAP==1){
var icon_MDAP = new Sprite(70,70);
		icon_MDAP.image = game_.assets['./img/icon/MDAP.png'];
		icon_MDAP.x=180+75*5;icon_MDAP.y=30+75*6;
		scene.addChild(icon_MDAP);
				        scene.addChild(icon_MDAP);                             // シーンに追加
				        icon_MDAP.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDAP = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDAP.image = game_.assets['./img/ga/MDAP.png'];     // スタート画像を設定
							ga_MDAP.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDAP.parentNode.removeChild(ga_MDAP);
				 		      });
				   	      scene.addChild(ga_MDAP);                             // シーンに追加
				        });
}
if(flag_CMII==1){
var icon_CMII = new Sprite(70,70);
		icon_CMII.image = game_.assets['./img/icon/CMII.png'];
		icon_CMII.x=180+75*6;icon_CMII.y=30+75*6;
		scene.addChild(icon_CMII);
				        scene.addChild(icon_CMII);                             // シーンに追加
				        icon_CMII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMII.image = game_.assets['./img/ga/CMII.png'];     // スタート画像を設定
							ga_CMII.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMII.parentNode.removeChild(ga_CMII);
				 		      });
				   	      scene.addChild(ga_CMII);                             // シーンに追加
				        });
}
if(flag_IICM==1){
var icon_IICM = new Sprite(70,70);
		icon_IICM.image = game_.assets['./img/icon/IICM.png'];
		icon_IICM.x=180+75*7;icon_IICM.y=30+75*6;
		scene.addChild(icon_IICM);
				        scene.addChild(icon_IICM);                             // シーンに追加
				        icon_IICM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IICM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IICM.image = game_.assets['./img/ga/IICM.png'];     // スタート画像を設定
							ga_IICM.addEventListener(Event.TOUCH_START, function(e) {
								ga_IICM.parentNode.removeChild(ga_IICM);
				 		      });
				   	      scene.addChild(ga_IICM);                             // シーンに追加
				        });
}
if(flag_CMNI==1){
var icon_CMNI = new Sprite(70,70);
		icon_CMNI.image = game_.assets['./img/icon/CMNI.png'];
		icon_CMNI.x=180+75*8;icon_CMNI.y=30+75*6;
		scene.addChild(icon_CMNI);
				        scene.addChild(icon_CMNI);                             // シーンに追加
				        icon_CMNI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMNI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMNI.image = game_.assets['./img/ga/CMNI.png'];     // スタート画像を設定
							ga_CMNI.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMNI.parentNode.removeChild(ga_CMNI);
				 		      });
				   	      scene.addChild(ga_CMNI);                             // シーンに追加
				        });
}
if(flag_NICM==1){
var icon_NICM = new Sprite(70,70);
		icon_NICM.image = game_.assets['./img/icon/NICM.png'];
		icon_NICM.x=180+75*9;icon_NICM.y=30+75*6;
		scene.addChild(icon_NICM);
				        scene.addChild(icon_NICM);                             // シーンに追加
				        icon_NICM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NICM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NICM.image = game_.assets['./img/ga/NICM.png'];     // スタート画像を設定
							ga_NICM.addEventListener(Event.TOUCH_START, function(e) {
								ga_NICM.parentNode.removeChild(ga_NICM);
				 		      });
				   	      scene.addChild(ga_NICM);                             // シーンに追加
				        });
}
if(flag_CMED==1){
var icon_CMED = new Sprite(70,70);
		icon_CMED.image = game_.assets['./img/icon/CMED.png'];
		icon_CMED.x=180;icon_CMED.y=30+75*7;
		scene.addChild(icon_CMED);
				        scene.addChild(icon_CMED);                             // シーンに追加
				        icon_CMED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMED.image = game_.assets['./img/ga/CMED.png'];     // スタート画像を設定
							ga_CMED.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMED.parentNode.removeChild(ga_CMED);
				 		      });
				   	      scene.addChild(ga_CMED);                             // シーンに追加
				        });
}
if(flag_EDCM==1){
var icon_EDCM = new Sprite(70,70);
		icon_EDCM.image = game_.assets['./img/icon/EDCM.png'];
		icon_EDCM.x=180+75;icon_EDCM.y=30+75*7;
		scene.addChild(icon_EDCM);
				        scene.addChild(icon_EDCM);                             // シーンに追加
				        icon_EDCM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDCM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDCM.image = game_.assets['./img/ga/EDCM.png'];     // スタート画像を設定
							ga_EDCM.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDCM.parentNode.removeChild(ga_EDCM);
				 		      });
				   	      scene.addChild(ga_EDCM);                             // シーンに追加
				        });
}
if(flag_CMMD==1){
var icon_CMMD = new Sprite(70,70);
		icon_CMMD.image = game_.assets['./img/icon/CMMD.png'];
		icon_CMMD.x=180+75*2;icon_CMMD.y=30+75*7;
		scene.addChild(icon_CMMD);
				        scene.addChild(icon_CMMD);                             // シーンに追加
				        icon_CMMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_CMMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_CMMD.image = game_.assets['./img/ga/CMMD.png'];     // スタート画像を設定
							ga_CMMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_CMMD.parentNode.removeChild(ga_CMMD);
				 		      });
				   	      scene.addChild(ga_CMMD);                             // シーンに追加
				        });
}
if(flag_MDCM==1){
var icon_MDCM = new Sprite(70,70);
		icon_MDCM.image = game_.assets['./img/icon/MDCM.png'];
		icon_MDCM.x=180+75*3;icon_MDCM.y=30+75*7;
		scene.addChild(icon_MDCM);
				        scene.addChild(icon_MDCM);                             // シーンに追加
				        icon_MDCM.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDCM = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDCM.image = game_.assets['./img/ga/MDCM.png'];     // スタート画像を設定
							ga_MDCM.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDCM.parentNode.removeChild(ga_MDCM);
				 		      });
				   	      scene.addChild(ga_MDCM);                             // シーンに追加
				        });
}
if(flag_NIES==1){
var icon_NIES = new Sprite(70,70);
		icon_NIES.image = game_.assets['./img/icon/NIES.png'];
		icon_NIES.x=180+75*4;icon_NIES.y=30+75*7;
		scene.addChild(icon_NIES);
				        scene.addChild(icon_NIES);                             // シーンに追加
				        icon_NIES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NIES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NIES.image = game_.assets['./img/ga/NIES.png'];     // スタート画像を設定
							ga_NIES.addEventListener(Event.TOUCH_START, function(e) {
								ga_NIES.parentNode.removeChild(ga_NIES);
				 		      });
				   	      scene.addChild(ga_NIES);                             // シーンに追加
				        });
}
if(flag_ESNI==1){
var icon_ESNI = new Sprite(70,70);
		icon_ESNI.image = game_.assets['./img/icon/ESNI.png'];
		icon_ESNI.x=180+75*5;icon_ESNI.y=30+75*7;
		scene.addChild(icon_ESNI);
				        scene.addChild(icon_ESNI);                             // シーンに追加
				        icon_ESNI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESNI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESNI.image = game_.assets['./img/ga/ESNI.png'];     // スタート画像を設定
							ga_ESNI.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESNI.parentNode.removeChild(ga_ESNI);
				 		      });
				   	      scene.addChild(ga_ESNI);                             // シーンに追加
				        });
}
if(flag_NIED==1){
var icon_NIED = new Sprite(70,70);
		icon_NIED.image = game_.assets['./img/icon/NIED.png'];
		icon_NIED.x=180+75*6;icon_NIED.y=30+75*7;
		scene.addChild(icon_NIED);
				        scene.addChild(icon_NIED);                             // シーンに追加
				        icon_NIED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NIED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NIED.image = game_.assets['./img/ga/NIED.png'];     // スタート画像を設定
							ga_NIED.addEventListener(Event.TOUCH_START, function(e) {
								ga_NIED.parentNode.removeChild(ga_NIED);
				 		      });
				   	      scene.addChild(ga_NIED);                             // シーンに追加
				        });
}
if(flag_EDNI==1){
var icon_EDNI = new Sprite(70,70);
		icon_EDNI.image = game_.assets['./img/icon/EDNI.png'];
		icon_EDNI.x=180+75*7;icon_EDNI.y=30+75*7;
		scene.addChild(icon_EDNI);
				        scene.addChild(icon_EDNI);                             // シーンに追加
				        icon_EDNI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDNI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDNI.image = game_.assets['./img/ga/EDNI.png'];     // スタート画像を設定
							ga_EDNI.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDNI.parentNode.removeChild(ga_EDNI);
				 		      });
				   	      scene.addChild(ga_EDNI);                             // シーンに追加
				        });
}
if(flag_NIMD==1){
var icon_NIMD = new Sprite(70,70);
		icon_NIMD.image = game_.assets['./img/icon/NIMD.png'];
		icon_NIMD.x=180+75*8;icon_NIMD.y=30+75*7;
		scene.addChild(icon_NIMD);
				        scene.addChild(icon_NIMD);                             // シーンに追加
				        icon_NIMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_NIMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_NIMD.image = game_.assets['./img/ga/NIMD.png'];     // スタート画像を設定
							ga_NIMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_NIMD.parentNode.removeChild(ga_NIMD);
				 		      });
				   	      scene.addChild(ga_NIMD);                             // シーンに追加
				        });
}
if(flag_MDNI==1){
var icon_MDNI = new Sprite(70,70);
		icon_MDNI.image = game_.assets['./img/icon/MDNI.png'];
		icon_MDNI.x=180+75*9;icon_MDNI.y=30+75*7;
		scene.addChild(icon_MDNI);
				        scene.addChild(icon_MDNI);                             // シーンに追加
				        icon_MDNI.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDNI = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDNI.image = game_.assets['./img/ga/MDNI.png'];     // スタート画像を設定
							ga_MDNI.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDNI.parentNode.removeChild(ga_MDNI);
				 		      });
				   	      scene.addChild(ga_MDNI);                             // シーンに追加
				        });
}
if(flag_IIES==1){
var icon_IIES = new Sprite(70,70);
		icon_IIES.image = game_.assets['./img/icon/IIES.png'];
		icon_IIES.x=180;icon_IIES.y=30+75*8;
		scene.addChild(icon_IIES);
				        scene.addChild(icon_IIES);                             // シーンに追加
				        icon_IIES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IIES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IIES.image = game_.assets['./img/ga/IIES.png'];     // スタート画像を設定
							ga_IIES.addEventListener(Event.TOUCH_START, function(e) {
								ga_IIES.parentNode.removeChild(ga_IIES);
				 		      });
				   	      scene.addChild(ga_IIES);                             // シーンに追加
				        });
}
if(flag_ESII==1){
var icon_ESII = new Sprite(70,70);
		icon_ESII.image = game_.assets['./img/icon/ESII.png'];
		icon_ESII.x=180+75;icon_ESII.y=30+75*8;
		scene.addChild(icon_ESII);
				        scene.addChild(icon_ESII);                             // シーンに追加
				        icon_ESII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESII.image = game_.assets['./img/ga/ESII.png'];     // スタート画像を設定
							ga_ESII.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESII.parentNode.removeChild(ga_ESII);
				 		      });
				   	      scene.addChild(ga_ESII);                             // シーンに追加
				        });
}
if(flag_IIED==1){
var icon_IIED = new Sprite(70,70);
		icon_IIED.image = game_.assets['./img/icon/IIED.png'];
		icon_IIED.x=180+75*2;icon_IIED.y=30+75*8;
		scene.addChild(icon_IIED);
				        scene.addChild(icon_IIED);                             // シーンに追加
				        icon_IIED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IIED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IIED.image = game_.assets['./img/ga/IIED.png'];     // スタート画像を設定
							ga_IIED.addEventListener(Event.TOUCH_START, function(e) {
								ga_IIED.parentNode.removeChild(ga_IIED);
				 		      });
				   	      scene.addChild(ga_IIED);                             // シーンに追加
				        });
}
if(flag_EDII==1){
var icon_EDII = new Sprite(70,70);
		icon_EDII.image = game_.assets['./img/icon/EDII.png'];
		icon_EDII.x=180+75*3;icon_EDII.y=30+75*8;
		scene.addChild(icon_EDII);
				        scene.addChild(icon_EDII);                             // シーンに追加
				        icon_EDII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDII.image = game_.assets['./img/ga/EDII.png'];     // スタート画像を設定
							ga_EDII.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDII.parentNode.removeChild(ga_EDII);
				 		      });
				   	      scene.addChild(ga_EDII);                             // シーンに追加
				        });
}
if(flag_IIMD==1){
var icon_IIMD = new Sprite(70,70);
		icon_IIMD.image = game_.assets['./img/icon/IIMD.png'];
		icon_IIMD.x=180+75*4;icon_IIMD.y=30+75*8;
		scene.addChild(icon_IIMD);
				        scene.addChild(icon_IIMD);                             // シーンに追加
				        icon_IIMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_IIMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_IIMD.image = game_.assets['./img/ga/IIMD.png'];     // スタート画像を設定
							ga_IIMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_IIMD.parentNode.removeChild(ga_IIMD);
				 		      });
				   	      scene.addChild(ga_IIMD);                             // シーンに追加
				        });
}
if(flag_MDII==1){
var icon_MDII = new Sprite(70,70);
		icon_MDII.image = game_.assets['./img/icon/MDII.png'];
		icon_MDII.x=180+75*5;icon_MDII.y=30+75*8;
		scene.addChild(icon_MDII);
				        scene.addChild(icon_MDII);                             // シーンに追加
				        icon_MDII.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDII = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDII.image = game_.assets['./img/ga/MDII.png'];     // スタート画像を設定
							ga_MDII.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDII.parentNode.removeChild(ga_MDII);
				 		      });
				   	      scene.addChild(ga_MDII);                             // シーンに追加
				        });
}
if(flag_MDES==1){
var icon_MDES = new Sprite(70,70);
		icon_MDES.image = game_.assets['./img/icon/MDES.png'];
		icon_MDES.x=180+75*6;icon_MDES.y=30+75*8;
		scene.addChild(icon_MDES);
				        scene.addChild(icon_MDES);                             // シーンに追加
				        icon_MDES.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDES = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDES.image = game_.assets['./img/ga/MDES.png'];     // スタート画像を設定
							ga_MDES.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDES.parentNode.removeChild(ga_MDES);
				 		      });
				   	      scene.addChild(ga_MDES);                             // シーンに追加
				        });
}
if(flag_ESMD==1){
var icon_ESMD = new Sprite(70,70);
		icon_ESMD.image = game_.assets['./img/icon/ESMD.png'];
		icon_ESMD.x=180+75*7;icon_ESMD.y=30+75*8;
		scene.addChild(icon_ESMD);
				        scene.addChild(icon_ESMD);                             // シーンに追加
				        icon_ESMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_ESMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_ESMD.image = game_.assets['./img/ga/ESMD.png'];     // スタート画像を設定
							ga_ESMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_ESMD.parentNode.removeChild(ga_ESMD);
				 		      });
				   	      scene.addChild(ga_ESMD);                             // シーンに追加
				        });
}
if(flag_MDED==1){
var icon_MDED = new Sprite(70,70);
		icon_MDED.image = game_.assets['./img/icon/MDED.png'];
		icon_MDED.x=180+75*8;icon_MDED.y=30+75*8;
		scene.addChild(icon_MDED);
				        scene.addChild(icon_MDED);                             // シーンに追加
				        icon_MDED.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_MDED = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_MDED.image = game_.assets['./img/ga/MDED.png'];     // スタート画像を設定
							ga_MDED.addEventListener(Event.TOUCH_START, function(e) {
								ga_MDED.parentNode.removeChild(ga_MDED);
				 		      });
				   	      scene.addChild(ga_MDED);                             // シーンに追加
				        });
}
if(flag_EDMD==1){
var icon_EDMD = new Sprite(70,70);
		icon_EDMD.image = game_.assets['./img/icon/EDMD.png'];
		icon_EDMD.x=180+75*9;icon_EDMD.y=30+75*8;
		scene.addChild(icon_EDMD);
				        scene.addChild(icon_EDMD);                             // シーンに追加
				        icon_EDMD.addEventListener(Event.TOUCH_START, function(e) {
						      var ga_EDMD = new Sprite(1270, 1000);                   // スプライトを作る
						      ga_EDMD.image = game_.assets['./img/ga/EDMD.png'];     // スタート画像を設定
							ga_EDMD.addEventListener(Event.TOUCH_START, function(e) {
								ga_EDMD.parentNode.removeChild(ga_EDMD);
				 		      });
				   	      scene.addChild(ga_EDMD);                             // シーンに追加
				        });
}



            return scene;
	};
        var createKeyword_gaScene = function() {
            var scene = new Scene();                            // 新しいシーンを作る
	//背景表示
		var bg = new Sprite(1270,720);
		bg.image = game_.assets['./img/title_bg.png'];
		scene.addChild(bg);
            return scene;
	};

        /**
        * ゲームシーン
        *
        * ゲームシーンを作り、返す関数です。
        */
        var createGameScene = function() {
            var scene = new Scene();                            // 新しいシーンを作る
            scene.backgroundColor = '#ffffff';
	//背景表示
		var bg = new Sprite(1270,720);
		bg.image = game_.assets['./img/play_bg.jpg'];
		bg.x = 0;
		bg.y = 0;
		scene.addChild(bg);


            // くまを作成
            var kuma = new Sprite(200, 175);                      // スプライトを作る
            kuma.image = game_.assets['./img/hero_a.png'];      // くま画像を設定
            kuma.x = 450;                       // くまの座標指定
            kuma.y = 300;                       // くまの座標指定
	    kuma.II=0;//知能情報の得点
	    kuma.NI=0;//ネットワーク
	    kuma.SI=0;//社会情報
	    kuma.MD=0;//メディアデザイン
	    kuma.MT=0;//機械電子
	    kuma.ED=0;//電子制御
	    kuma.CM=0;//化学
	    kuma.AP=0;//物理
	    kuma.ES=0;//環境科学
	    kuma.ED=0;//環境デザイン
	    kuma.wait=0;//アニメーション制御用変数
			kuma.IINI=0;
            scene.addChild(kuma);                               // シーンに追加
            
	    kuma.addEventListener('enterframe', function() {
		if(this.wait==5){
	        	this.frame=1;
			this.wait++;
		}else if(this.wait==11){
			this.wait=0;
			this.frame=0;
		}else{
			this.wait++;
		}
            });


           /* var teach = new Sprite(200, 200);                      // スプライトを作る
            teach.image = game_.assets['./img/teach_.png'];      // くま画像を設定
	    teach.wait=0;
	    teach.x=1000;teach.y=0;
            scene.addChild(teach);                           // シーンに追加
	    teach.addEventListener('enterframe', function() {
		if(this.wait==5){
	        	this.frame=1;
			this.wait++;
		}else if(this.wait==14){
			this.wait=0;
			this.frame=0;
		}else{
			this.wait++;
		}
            });*/


	   //ギャラリーボタン
            var g_button = new Sprite(130, 62);                   // スプライトを作る
            g_button.image = game_.assets['./img/GUI/gar.png'];     // スタート画像を設定
            g_button.x = 1120;                                      // 横位置調整
            g_button.y = 650;                                     // 縦位置調整
            scene.addChild(g_button);                             // シーンに追加
		//ギャラリーボタンにタッチイベントを設定
            g_button.addEventListener(Event.TOUCH_START, function(e) {
                game_.replaceScene(createGallery_topScene());    // 現在表示しているシーンをギャラリーシーンに置き換える
            });

 //卵が生まれた時、点数を全てリセットする。
	function reset(){
			kuma.II=0;//知能情報の得点
	    kuma.NI=0;//ネットワーク
	    kuma.SI=0;//社会情報
	    kuma.MD=0;//メディアデザイン
	    kuma.MT=0;//機械電子
	    kuma.EM=0;//電子計測
	    kuma.CM=0;//化学
	    kuma.AP=0;//物理
	    kuma.ES=0;//環境科学
	    kuma.ED=0;//環境デザイン
			nr_anime.flag=0;
			sr_anime.flag=0;
	}

	var sr_anime=new Sprite(1270,720);
	sr_anime.image = game_.assets['./img/egg/sr_anime.png'];     // スタート画像を設定
	sr_anime.wait=0;
	sr_anime.flag=0;
  var nr = new Sprite(567, 567);                   // スプライトを作る
	var nr_anime=new Sprite(1270,720);
	nr_anime.image = game_.assets['./img/egg/nr_anime.png'];     // スタート画像を設定
	nr_anime.wait=0;
	nr_anime.flag=0;
  var sr = new Sprite(567, 567);                   // スプライトを作る

	function egg_product(){
		if(kuma.II>=12||kuma.NI>=12||kuma.MT>=12||kuma.EM>=12||kuma.SI>=12||kuma.MD>=12||kuma.AP>=12||kuma.CM>=12||kuma.ES>=12||kuma.ED>=12){
			if(kuma.II>=12&&kuma.NI>=6||kuma.NI>=12&&kuma.II>=6||kuma.II>=12&&kuma.MT>=6||kuma.MT>=12&&kuma.II>=6||kuma.MT>=12&&kuma.EM>=6||kuma.EM>=12&&kuma.MT>=6||kuma.EM>=12&&kuma.AP>=6||kuma.AP>=12&&kuma.EM>=6||kuma.AP>=12&&kuma.CM>=6||kuma.CM>=12&&kuma.AP>=6||kuma.CM>=12&&kuma.ES>=6||kuma.ES>=12&&kuma.CM>=6||kuma.NI>=12&&kuma.SI>=6||kuma.SI>=12&&kuma.NI>=6||kuma.ES>=12&&kuma.ED>=6||kuma.ED>=12&&kuma.ES>=6||kuma.SI>=12&&kuma.MD>=6||kuma.MD>=12&&kuma.SI>=6){
				egg_product_sr();
			}else{egg_product_nr();}
		}
	}
	function egg_product_sr(){

/*卵が生まれた時のアニメーション処理関数*/

				sr_anime.wait=0;
							sr.scaleX=1/2;sr.scaleY=1/2;
							sr.x=400;sr.y=200;
		          sr.image = game_.assets['./img/egg/sr.png'];     // スタート画像を設定
		          scene.addChild(sr);                             // シーンに追加
										sr.wait=0;
										sr.tl
										.tween({
						          x: 600,
						          y: 550,
						          rotation: 5550,
						          time: 150
						      })
				sr_anime.flag=1;
		    sr.addEventListener('enterframe', function() {
				switch(this.wait){
					case 30:
						scene.addChild(sr_anime);break;
					default:
						this.wait++;break;
					}
    });
			    sr_anime.addEventListener('enterframe', function() {
				switch(this.wait){
					case 2:
						this.frame=0;this.wait++;break;
					case 10:
						this.frame=1;this.wait++;break;
					case 12:
						this.frame=2;this.wait++;break;
					case 14:
						this.frame=3;this.wait++;break;
					case 16:
						this.frame=4;this.wait++;break;
					case 28:
						this.frame=5;this.wait++;break;
					case 20:
						this.frame=6;this.wait++;break;
					case 22:
						this.frame=7;this.wait++;break;
					case 24:
						this.frame=8;this.wait++;break;
					case 26:
						this.frame=9;this.wait++;break;
					case 28:
						this.frame=10;this.wait++;break;
					case 30:
						this.frame=11;this.wait++;break;
					case 32:
						this.frame=12;this.wait++;break;
					case 34:
						egg_kind();break;
					default:
						this.wait++;break;
				}
		            });
	}

	function egg_product_nr(){

/*卵が生まれた時のアニメーション処理関数(ノーマル)*/

				nr_anime.wait=0;
							nr.scaleX=1/2;nr.scaleY=1/2;
							nr.x=400;nr.y=200;
		          nr.image = game_.assets['./img/egg/nr.png'];     // スタート画像を設定
		          scene.addChild(nr);                             // シーンに追加
										nr.wait=0;
										nr.tl
										.tween({
						          x: 600,
						          y: 550,
						          rotation: 5550,
						          time: 150
						      })
				nr_anime.flag=1;
		    nr.addEventListener('enterframe', function() {
				switch(this.wait){
					case 30:
						scene.addChild(nr_anime);break;
					default:
						this.wait++;break;
					}
    });
			    nr_anime.addEventListener('enterframe', function() {
				switch(this.wait){
					case 2:
						this.frame=0;this.wait++;break;
					case 10:
						this.frame=1;this.wait++;break;
					case 12:
						this.frame=2;this.wait++;break;
					case 14:
						this.frame=3;this.wait++;break;
					case 16:
						this.frame=4;this.wait++;break;
					case 20:
						this.frame=5;this.wait++;break;
					case 24:
						egg_kind();break;
					default:
						this.wait++;break;
				}
		            });
	}



	function egg_kind(){
						          var born = new Sprite(1270,720);                      // スプライトを作る
					if(kuma.II>=12){	//第1メジャーが知能に決定
						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IINI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IINI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IISI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IISI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がMDに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IIMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IIMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がmtに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IIMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IIMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がemに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IIEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IIEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IICM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IICM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がapに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IIAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IIAP=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IIES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IIES=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/IIED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_IIED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}


				}else if(kuma.SI>=12){//第１メジャーが社会情報に決定

						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SINI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SINI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SIII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SIII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がMDに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SIMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SIMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がmtに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SIMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SIMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がemに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SIEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SIEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SICM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rCMoveChild(nr);
														nr_anime.parentNode.rCMoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SICM=1;
														console.log("終わり");
														born.parentNode.rCMoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がapに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SIAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rAPoveChild(nr);
														nr_anime.parentNode.rAPoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SIAP=1;
														console.log("終わり");
														born.parentNode.rAPoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SIES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rESoveChild(nr);
														nr_anime.parentNode.rESoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SIES=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/SIED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_SIED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
				}else if(kuma.MD>=12){//第１メジャーがメディアに決定


						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDNI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDNI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がMDに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDSI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDSI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がmtに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がemに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDCM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rCMoveChild(nr);
														nr_anime.parentNode.rCMoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDCM=1;
														console.log("終わり");
														born.parentNode.rCMoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がapに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rAPoveChild(nr);
														nr_anime.parentNode.rAPoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDAP=1;
														console.log("終わり");
														born.parentNode.rAPoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rESoveChild(nr);
														nr_anime.parentNode.rESoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDES=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MDED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MDED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}

				}else if(kuma.MT>=12){//第１メジャーが機械に決定

						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTNI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTNI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTSI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTSI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がmdに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がemに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTCM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rCMoveChild(nr);
														nr_anime.parentNode.rCMoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTCM=1;
														console.log("終わり");
														born.parentNode.rCMoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がapに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rAPoveChild(nr);
														nr_anime.parentNode.rAPoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTAP=1;
														console.log("終わり");
														born.parentNode.rAPoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rESoveChild(nr);
														nr_anime.parentNode.rESoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTES=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/MTED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_MTED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
				}else if(kuma.EM>=12){//第１メジャーが電子に決定
						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMNI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMNI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMSI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMSI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がmdに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がmtに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMCM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rCMoveChild(nr);
														nr_anime.parentNode.rCMoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMCM=1;
														console.log("終わり");
														born.parentNode.rCMoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がapに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rAPoveChild(nr);
														nr_anime.parentNode.rAPoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMAP=1;
														console.log("終わり");
														born.parentNode.rAPoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rESoveChild(nr);
														nr_anime.parentNode.rESoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMES=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EMED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EMED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
				}else if(kuma.CM>=12){//第１メジャーが化学に決定
						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMNI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMNI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMSI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMSI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がmdに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がMTに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がemに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がapに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.rAPoveChild(sr);
														sr_anime.parentNode.rAPoveChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMAP=1;
														console.log("終わり");
														born.parentNode.rAPoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rESoveChild(nr);
														nr_anime.parentNode.rESoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMES=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/CMED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_CMED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
				}else if(kuma.AP>=12){//第１メジャーが物理に決定
						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APNI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APNI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APSI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APSI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がmdに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がMTに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がEMに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APCM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.rAPoveChild(sr);
														sr_anime.parentNode.rAPoveChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APCM=1;
														console.log("終わり");
														born.parentNode.rAPoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rESoveChild(nr);
														nr_anime.parentNode.rESoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APES=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/APED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_APED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}

				}else if(kuma.ES>=12){//第１メジャーが環境に決定
						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESNI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESNI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESSI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESSI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がmdに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がMTに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がEMに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESCM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.rESoveChild(sr);
														sr_anime.parentNode.rESoveChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESCM=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がesに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rESoveChild(nr);
														nr_anime.parentNode.rESoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESAP=1;
														console.log("終わり");
														born.parentNode.rESoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/ESED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_ESED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}



				}else if(kuma.ED>=12){//第１メジャーが環デザに決定

						if(kuma.NI>=6){//第2がネットワークに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDNI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDNI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDSI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDSI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がmdに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がMTに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がEMに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDCM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rEDoveChild(nr);
														nr_anime.parentNode.rEDoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDCM=1;
														console.log("終わり");
														born.parentNode.rEDoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がEDに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rEDoveChild(nr);
														nr_anime.parentNode.rEDoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDAP=1;
														console.log("終わり");
														born.parentNode.rEDoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/EDES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_EDES=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
				}else if(kuma.NI>=12){//第１メジャーがネットワークに決定

						if(kuma.ED>=6){//第2がedに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NIED.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NIED=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);


						}
						else if(kuma.II>=6){//第2がIIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NIII.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NIII=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.SI>=6){//第2がSIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NISI.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														sr.parentNode.removeChild(sr);
														sr_anime.parentNode.removeChild(sr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NISI=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MD>=6){//第2がmdに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NIMD.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NIMD=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.MT>=6){//第2がMTに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NIMT.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NIMT=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.EM>=6){//第2がEMに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NIEM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NIEM=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.CM>=6){//第2がcmに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NICM.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rNIoveChild(nr);
														nr_anime.parentNode.rNIoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NICM=1;
														console.log("終わり");
														born.parentNode.rNIoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.AP>=6){//第2がNIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NIAP.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.rNIoveChild(nr);
														nr_anime.parentNode.rNIoveChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NIAP=1;
														console.log("終わり");
														born.parentNode.rNIoveChild(born);
														reset();
													}
											}, 500);
						}
						else if(kuma.ES>=6){//第2がNIに決定
						          	    //召喚の儀
						          born.image = game_.assets['./img/born/NIES.png'];      // くま画像を設定
											born.x=0;born.y=0;
											var huga = 0;
											var hoge = setInterval(function() {
													console.log(huga);
													huga++;

								          scene.addChild(born);
													//終了条件
													if(huga==1){
														nr.parentNode.removeChild(nr);
														nr_anime.parentNode.removeChild(nr_anime);
													}
													if (huga == 6) {
														clearInterval(hoge);
														flag_NIES=1;
														console.log("終わり");
														born.parentNode.removeChild(born);
														reset();
													}
											}, 500);
						}
}

			console.log(sr_anime.flag+"ああ");
			//nr_anime.flag=0;
	}

	var	touchFunc_ = function(){
	};

	var locateX=0;
	var locateY=0;
	var locate_cnt=0;
	scene.onenterframe = function(){
		if(game_.frame % 20 ==0&&sr_anime.flag==0&&nr_anime.flag==0){ //特定フレームごとに概念を生成
			var gainen = new Sprite(680,680);
			gainen.scaleX=1/4;
			gainen.scaleY=1/4;
			var gainen_rand = Math.floor(Math.random()*113);//0~114の乱数を生成
			//gainen_rand=0;//デバッグ用
			//ランダムで画像表示（ランダムで概念が出現）
			switch(gainen_rand){
				case 0:
					gainen.image = game_.assets['./img/II/10.png'];break;//人工知能
				case 1:
					gainen.image = game_.assets['./img/II/09.png'];break;//構文解析
				case 2:
					gainen.image = game_.assets['./img/II/08.png'];break;//形態素解析
				case 3:
					gainen.image = game_.assets['./img/II/04.png'];break;//ハードウェア
				case 4:
					gainen.image = game_.assets['./img/II/05.png'];break;//ファームウェア
				case 5:
					gainen.image = game_.assets['./img/II/06.png'];break;//ミドルウェア
				case 6:
					gainen.image = game_.assets['./img/II/07.png'];break;//機械学習
				case 7:
					gainen.image = game_.assets['./img/II/01.png'];break;//MATLAB
				case 8:
					gainen.image = game_.assets['./img/II/03.png'];break;//ｺﾝﾊﾟｲﾗコンパイラ
				case 9:
					gainen.image = game_.assets['./img/II/02.png'];break;//オペレーティングシステム
				case 10:
					gainen.image = game_.assets['./img/NI/11.png'];break;//無線通信
				case 11:
					gainen.image = game_.assets['./img/NI/07.png'];break;//データベース
				case 12:
					gainen.image = game_.assets['./img/NI/08.png'];break;//ネットワークインフラストラクチャ
				case 13:
					gainen.image = game_.assets['./img/NI/06.png'];break;//セキュリティ
				case 14:
					gainen.image = game_.assets['./img/NI/10.png'];break;//符号理論
				case 15:
					gainen.image = game_.assets['./img/NI/04.png'];break;//Unix
				case 16:
					gainen.image = game_.assets['./img/NI/05.png'];break;//オブジェクト指向プログラミンフ
				case 17:
					gainen.image = game_.assets['./img/NI/03.png'];break;//OSS
				case 18:
					gainen.image = game_.assets['./img/NI/01.png'];break;//CGI
				case 19:
					gainen.image = game_.assets['./img/NI/02.png'];break;//FreeBSD
				case 20:
					gainen.image = game_.assets['./img/NI/09.png'];break;//図書館情報学
				case 21:
					gainen.image = game_.assets['./img/SI/08.png'];break;//ビッグデータ
				case 22:
					gainen.image = game_.assets['./img/SI/07.png'];break;//データマイニング
				case 23:
					gainen.image = game_.assets['./img/SI/04.png'];break;//ウェブデザイン
				case 24:
					gainen.image = game_.assets['./img/SI/01.png'];break;//AR
				case 25:
					gainen.image = game_.assets['./img/SI/09.png'];break;//モバイルオペレーティングシステム
				case 26:
					gainen.image = game_.assets['./img/SI/05.png'];break;//クラウドコンピューティングシステム
				case 27:
					gainen.image = game_.assets['./img/SI/02.png'];break;//Ajax
				case 28:
					gainen.image = game_.assets['./img/SI/03.png'];break;//HCIデザイン
				case 29:
					gainen.image = game_.assets['./img/SI/06.png'];break;//グループウェア
				case 30:
					gainen.image = game_.assets['./img/MD/07.png'];break;//音響設計
				case 31:
					gainen.image = game_.assets['./img/MD/08.png'];break;//人間工学
				case 32:
					gainen.image = game_.assets['./img/MD/01.png'];break;//インテリアデザイン
				case 33:
					gainen.image = game_.assets['./img/MD/02.png'];break;//デザイン企画論
				case 34:
					gainen.image = game_.assets['./img/MD/05.png'];break;//プロダクトデザイン
				case 35:
					gainen.image = game_.assets['./img/MD/04.png'];break;//ヒューマンインターフェース
				case 36:
					gainen.image = game_.assets['./img/MD/03.png'];break;//デザイン方法論
				case 37:
					gainen.image = game_.assets['./img/MD/06.png'];break;//ユーザビリティ
				case 38:
					gainen.image = game_.assets['./img/MT/09.png'];break;//流体・熱・機械力学
				case 39:
					gainen.image = game_.assets['./img/MT/01.png'];break;//CAD
				case 40:
					gainen.image = game_.assets['./img/MT/08.png'];break;//電気回路
				case 41:
					gainen.image = game_.assets['./img/MT/03.png'];break;//ラプラス変換
				case 42:
					gainen.image = game_.assets['./img/MT/06.png'];break;//ロボティクス
				case 43:
					gainen.image = game_.assets['./img/MT/05.png'];break;//ロボットビジョン
				case 44:
					gainen.image = game_.assets['./img/MT/07.png'];break;//機械設計
				case 45:
					gainen.image = game_.assets['./img/MT/04.png'];break;//レスキューロボット
				case 46:
					gainen.image = game_.assets['./img/MT/02.png'];break;//サイバスロン
				case 47:
					gainen.image = game_.assets['./img/EM/05.png'];break;//光学
				case 48:
					gainen.image = game_.assets['./img/EM/08.png'];break;//電磁波
				case 49:
					gainen.image = game_.assets['./img/EM/03.png'];break;//計測
				case 50:
					gainen.image = game_.assets['./img/EM/07.png'];break;//電子回路
				case 51:
					gainen.image = game_.assets['./img/EM/01.png'];break;//アクチュエータ工学
				case 52:
					gainen.image = game_.assets['./img/EM/04.png'];break;//光ファイバ通信
				case 53:
					gainen.image = game_.assets['./img/EM/09.png'];break;//非線形光学
				case 54:
					gainen.image = game_.assets['./img/EM/06.png'];break;//超音波
				case 55:
					gainen.image = game_.assets['./img/EM/02.png'];break;//空間位相変調光波
				case 56:
					gainen.image = game_.assets['./img/EM/10.png'];break;//非破壊計測
				case 57:
					gainen.image = game_.assets['./img/CM/08.png'];break;//無機・有機化学
				case 58:
					gainen.image = game_.assets['./img/CM/01.png'];break;//ナノ構造化学
				case 59:
					gainen.image = game_.assets['./img/CM/04.png'];break;//結晶構造解析
				case 60:
					gainen.image = game_.assets['./img/CM/03.png'];break;//蛍光バイオセンサー
				case 61:
					gainen.image = game_.assets['./img/CM/05.png'];break;//生体適合性材料
				case 62:
					gainen.image = game_.assets['./img/CM/02.png'];break;//ポリオキソメタレート
				case 63:
					gainen.image = game_.assets['./img/CM/07.png'];break;//分析化学
				case 64:
					gainen.image = game_.assets['./img/CM/09.png'];break;//有機材料化学
				case 65:
					gainen.image = game_.assets['./img/CM/06.png'];break;//生命化学
				case 66:
					gainen.image = game_.assets['./img/CM/10.png'];break;//理論化学
				case 67:
					gainen.image = game_.assets['./img/AP/09.png'];break;//量子力学
				case 68:
					gainen.image = game_.assets['./img/AP/05.png'];break;//電磁気学
				case 69:
					gainen.image = game_.assets['./img/AP/02.png'];break;//メゾスコピック物理
				case 70:
					gainen.image = game_.assets['./img/AP/04.png'];break;//相対論
				case 71:
					gainen.image = game_.assets['./img/AP/06.png'];break;//半導体
				case 72:
					gainen.image = game_.assets['./img/AP/08.png'];break;//物性基礎論
				case 73:
					gainen.image = game_.assets['./img/AP/03.png'];break;//固体物理学
				case 74:
					gainen.image = game_.assets['./img/AP/07.png'];break;//半導体工学
				case 75:
					gainen.image = game_.assets['./img/AP/01.png'];break;//ナノ結晶工学
				case 76:
					gainen.image = game_.assets['./img/ES/08.png'];break;//水理学
				case 77:
					gainen.image = game_.assets['./img/ES/07.png'];break;//材料工学
				case 78:
					gainen.image = game_.assets['./img/ES/01.png'];break;//GIS
				case 79:
					gainen.image = game_.assets['./img/ES/03.png'];break;//ランドスケープエコロジー
				case 80:
					gainen.image = game_.assets['./img/ES/10.png'];break;//生態系影響変化
				case 81:
					gainen.image = game_.assets['./img/ES/06.png'];break;//森林環境学
				case 82:
					gainen.image = game_.assets['./img/ES/09.png'];break;//生活環境設計製図
				case 83:
					gainen.image = game_.assets['./img/ES/07.png'];break;//水土環境
				case 84:
					gainen.image = game_.assets['./img/ES/02.png'];break;//ハザードマップ
				case 85:
					gainen.image = game_.assets['./img/ES/05.png'];break;//産業エコロジー
				case 86:
					gainen.image = game_.assets['./img/ED/08.png'];break;//生活環境設計製図
				case 87:
					gainen.image = game_.assets['./img/ED/11.png'];break;//緑地環境学
				case 88:
					gainen.image = game_.assets['./img/ED/10.png'];break;//都市デザイン
				case 89:
					gainen.image = game_.assets['./img/ED/07.png'];break;//森林環境学
				case 90:
					gainen.image = game_.assets['./img/ED/03.png'];break;//意匠設計
				case 91:
					gainen.image = game_.assets['./img/ED/02.png'];break;//ラーメン
				case 92:
					gainen.image = game_.assets['./img/ED/01.png'];break;//ビオトープ
				case 93:
					gainen.image = game_.assets['./img/ED/09.png'];break;//地域デザイン
				case 94:
					gainen.image = game_.assets['./img/ED/05.png'];break;//持続循環型社会
				case 95:
					gainen.image = game_.assets['./img/ED/06.png'];break;//循環システム
				case 96:
					gainen.image = game_.assets['./img/ED/04.png'];break;//空間デザイン
				case 97:
					gainen.image = game_.assets['./img/others/01.png'];break;//アルゴリズム
				case 98:
					gainen.image = game_.assets['./img/others/02.png'];break;//データ解析
				case 99:
					gainen.image = game_.assets['./img/others/03.png'];break;//画像処理
				case 100:
					gainen.image = game_.assets['./img/others/04.png'];break;//離散数学
				case 101:
					gainen.image = game_.assets['./img/others/05.png'];break;//論理回路
				case 102:
					gainen.image = game_.assets['./img/others/06.png'];break;//統計
				case 103:
					gainen.image = game_.assets['./img/others/07.png'];break;//フーリエ変換
				case 104:
					gainen.image = game_.assets['./img/others/08.png'];break;//信号処理
				case 105:
					gainen.image = game_.assets['./img/others/09.png'];break;//ソフトウェア工学
				case 106:
					gainen.image = game_.assets['./img/others/10.png'];break;//建築計画額
				case 107:
					gainen.image = game_.assets['./img/others/10.png'];break;//コンピュータグラフィックス
				case 108:
					gainen.image = game_.assets['./img/others/12.png'];break;//パターン認識
				case 109:
					gainen.image = game_.assets['./img/others/13.png'];break;//エンベデッドシステム
				case 110:
					gainen.image = game_.assets['./img/others/14.png'];break;//空間デザイン
				case 111:
					gainen.image = game_.assets['./img/others/15.png'];break;//材料力学
				case 112:
					gainen.image = game_.assets['./img/others/16.png'];break;//温暖化
}

			gainen.time=0; gainen.limit_time=180;//制限時間
			switch(locate_cnt){
				case 0:
					locateX=0;locateY=-200;break;
				case 1:
					locateX=200;locateY=-250;break;
				case 2:
					locateX=400;locateY=-200;break;
				case 3:
					locateX=500;locateY=-50;break;
				case 4:
					locateX=500;locateY=120;break;
				case 5:
					locateX=400;locateY=270;break;
				case 6:
					locateX=200;locateY=320;break;
				case 7:
					locateX=0;locateY=270;break;
				case 8:
					locateX=-100;locateY=120;break;
				case 9:
					locateX=-100;locateY=-50;break;
				case 10:
					locateX=0;locateY=-200;locate_cnt=0;break;
			}
						locate_cnt++;

			gainen.moveTo(locateX,locateY);//座標指定。主人公と被らないように出現させたい


						//gainen.ontouchstart_ = touchFunc_;//どらっぐで移動
						gainen.addEventListener(enchant.Event.TOUCH_START, function(e){
								originX = e.x - this.x;
								originY = e.y - this.y;
							gainen.addEventListener(enchant.Event.TOUCH_MOVE, function(e){
								this.x = e.x - originX;
								this.y = e.y - originY;
							});
							});

											scene.addChild(gainen);   
            //衝突処理
		gainen.addEventListener("enterframe",function(){
		if(gainen.within(kuma,100)) {//主体となるSprite(obj1)と衝突対象となるSprite(obj2)、逆になっても同じです。
			kuma.frame=2;
			kuma.wait=0;
			switch(gainen_rand){//概念の画像に応じて得点が変わる
				case 0://人工知能
					kuma.SI+=4;kuma.MD+=2;
					egg_product();
				break;
				case 1://構文解析
					kuma.II+=2;
					egg_product();
					break;
				case 2:
					kuma.II+=2;
					egg_product();
					break;
				case 3:
					kuma.II+=2;
					egg_product();
					break;
				case 4:
					kuma.II+=2;
					egg_product();
					break;
				case 5:
					kuma.II+=2;
					egg_product();
					break;
				case 6:
					kuma.II+=2;
					egg_product();
					break;
				case 7:
					kuma.II+=2;
					egg_product();
					break;
				case 8:
					kuma.II+=2;
					egg_product();
					break;
				case 9:
					kuma.II+=2;
					break;
				case 10:
					kuma.NI+=2;
					egg_product();
					break;
				case 11:
					kuma.NI+=2;
					egg_product();
					break;
				case 12:
					kuma.NI+=2;
					egg_product();
					break;
				case 13:
					kuma.NI+=2;
					egg_product();
					break;
				case 14:
					kuma.NI+=2;
					egg_product();
					break;
				case 15:
					kuma.NI+=2;
					egg_product();
					break;
				case 16:
					kuma.NI+=2;
					egg_product();
					break;
				case 17:
					kuma.NI+=2;
					egg_product();
					break;
				case 18:
					kuma.NI+=2;
					egg_product();
					break;
				case 19:
					kuma.NI+=2;
					egg_product();
					break;
				case 20:
					kuma.NI+=2;
					egg_product();
					break;
				case 21:
					kuma.SI+=2;
					egg_product();
					break;
				case 22:
					kuma.SI+=2;
					egg_product();
					break;
				case 23:
					kuma.SI+=2;
					egg_product();
					break;
				case 24:
					kuma.SI+=2;
					egg_product();
					break;
				case 25:
					kuma.SI+=2;
					egg_product();
					break;
				case 26:
					kuma.SI+=2;
					egg_product();
					break;
				case 27:
					kuma.SI+=2;
					egg_product();
					break;
				case 28:
					kuma.SI+=2;
					egg_product();
					break;
				case 29:
					kuma.SI+=2;
					egg_product();
					break;
				case 30:
					kuma.MD+=2;
					egg_product();
					break;
				case 31:
					kuma.MD+=2;
					egg_product();
					break;
				case 32:
					kuma.MD+=2;
					egg_product();
					break;
				case 33:
					kuma.MD+=2;
					egg_product();
					break;
				case 34:
					kuma.MD+=2;
					egg_product();
					break;
				case 35:
					kuma.MD+=2;
					egg_product();
					break;
				case 36:
					kuma.MD+=2;
					egg_product();
					break;
				case 37:
					kuma.MD+=2;
					egg_product();
					break;
				case 38:
					kuma.MT+=2;
					egg_product();
					break;
				case 39:
					kuma.MT+=2;
					egg_product();
					break;
				case 40:
					kuma.MT+=2;
					egg_product();
					break;
				case 41:
					kuma.MT+=2;
						egg_product();
					break;
				case 42:
					kuma.MT+=2;
					egg_product();
					break;
				case 43:
					kuma.MT+=2;
					egg_product();
					break;
				case 44:
					kuma.MT+=2;
					egg_product();
					break;
				case 45:
					kuma.MT+=2;
					egg_product();
					break;
				case 46:
					kuma.MT+=2;
					egg_product();
					break;
				case 47:
					kuma.EM+=2;
					egg_product();
					break;
				case 48:
					kuma.EM+=2;
					egg_product();
					break;
				case 49:
					kuma.EM+=2;
					egg_product();
					break;
				case 50:
					kuma.EM+=2;
					egg_product();
					break;
				case 51:
					kuma.EM+=2;
					egg_product();
					break;
				case 52:
					kuma.EM+=2;
					egg_product();
					break;
				case 53:
					kuma.EM+=2;
					egg_product();
					break;
				case 54:
					kuma.EM+=2;
					egg_product();
					break;
				case 55:
					kuma.EM+=2;
					egg_product();
					break;
				case 56:
					kuma.EM+=2;
					egg_product();
					break;
				case 57:
					kuma.CM+=2;
					egg_product();
					break;
				case 58:
					kuma.CM+=2;
					egg_product();
					break;
				case 59:
					kuma.CM+=2;
					egg_product();
					break;
				case 60:
					kuma.CM+=2;
					egg_product();
					break;
				case 61:
					kuma.CM+=2;
					egg_product();
					break;
				case 62:
					kuma.CM+=2;
					egg_product();
					break;
				case 63:
					kuma.CM+=2;
					egg_product();
					break;
				case 64:
					kuma.CM+=2;
					egg_product();
					break;
				case 65:
					kuma.CM+=2;
					egg_product();
					break;
				case 66:
					kuma.CM+=2;
					egg_product();
					break;
				case 67:
					kuma.AP+=2;
					egg_product();
					break;
				case 68:
					kuma.AP+=2;
					egg_product();
					break;
				case 69:
					kuma.AP+=2;
					egg_product();
					break;
				case 70:
					kuma.AP+=2;
					egg_product();
					break;
				case 71:
					kuma.AP+=2;
					egg_product();
					break;
				case 72:
					kuma.AP+=2;
					egg_product();
					break;
				case 73:
					kuma.AP+=2;
					egg_product();
					break;
				case 74:
					kuma.AP+=2;
					egg_product();
					break;
				case 75:
					kuma.AP+=2;
					egg_product();
					break;
				case 76:
					kuma.ES+=2;
					egg_product();
					break;
				case 77:
					kuma.ES+=2;
					egg_product();
					break;
				case 78:
					kuma.ES+=2;
					egg_product();
					break;
				case 79:
					kuma.ES+=2;
					egg_product();
					break;
				case 80:
					kuma.ES+=2;
					egg_product();
					break;
				case 81:
					kuma.ES+=2;
					egg_product();
					break;
				case 82:
					kuma.ES+=2;
					egg_product();
					break;
				case 83:
					kuma.ES+=2;
					egg_product();
					break;
				case 84:
					kuma.ES+=2;
					egg_product();
					break;
				case 85:
					kuma.ES+=2;
					egg_product();
					break;
				case 86:
					kuma.ED+=2;
					egg_product();
					break;
				case 87:
					kuma.ED+=2;
					egg_product();
					break;
				case 88:
					kuma.ED+=2;
					egg_product();
					break;
				case 89:
					kuma.ED+=2;
					egg_product();
					break;
				case 90:
					kuma.ED+=2;
					egg_product();
					break;
				case 91:
					kuma.ED+=2;
					egg_product();
					break;
				case 92:
					kuma.ED+=2;
					egg_product();
					break;
				case 93:
					kuma.ED+=2;
					egg_product();
					break;
				case 94:
					kuma.ED+=2;
					egg_product();
					break;
				case 95:
					kuma.ED+=2;
					egg_product();
					break;
				case 96:
					kuma.ED+=2;
					egg_product();
					break;
				case 97:
					kuma.NI++;
					kuma.II++;
					kuma.SI++;
					egg_product();
					break;
				case 98:
					kuma.MD++;
					kuma.II++;
					egg_product();
					break;
				case 99:
					kuma.II++;
					kuma.MD++;
					egg_product();
					break;
				case 100:
					kuma.II++;
					kuma.NI++;
					kuma.SI++;
					egg_product();
					break;
				case 101:
					kuma.II++;
					kuma.NI++;
					kuma.SI++;
					egg_product();
					break;
				case 102:
					kuma.NI++;
					kuma.SI++;
					kuma.AP++;
					kuma.CM++;
					egg_product();
					break;
				case 103:
					kuma.II++;
					kuma.NI++;
					kuma.MD++;
					kuma.MT++;
					egg_product();
					break;
				case 104:
					kuma.II++;
					kuma.MT++;
					kuma.EM++;
					egg_product();
					break;
				case 105:
					kuma.NI++;
					kuma.SI++;
					egg_product();
					break;
				case 106:
					kuma.MD++;
					kuma.ED++;
					egg_product();
					break;
				case 107:
					kuma.MD++;
					kuma.II++;
					egg_product();
					break;
				case 108:
					kuma.II+=2;
					kuma.MD++;
					egg_product();
					break;
				case 109:
					kuma.II++;
					kuma.MT+=2;
					egg_product();
					break;
				case 110:
					kuma.MD++;
					kuma.ED++;
					egg_product();
					break;
				case 111:
					kuma.MT++;
					kuma.ES++;
					egg_product();
					break;
				case 112:
					kuma.ED++;
					kuma.ES++;
					egg_product();
					break;
				case 113:
					kuma.ED++;
					kuma.ES++;
					egg_product();
					break;

			}



		 gainen.parentNode.removeChild(this);
		 }else{
		 //衝突してない時の処理
			this.time++;//インクリメント
			if(gainen.time>gainen.limit_time){//制限時間に達したら消去
				if(sr_anime.flag==0&&nr_anime.flag==0){
					this.parentNode.removeChild(this);
				}
			}
		 }
		});
/*		teach.addEventListener("enterframe",function(){

		if(teach.within(gainen,100)) {//主体となるSprite(obj1)と衝突対象となるSprite(obj2)、逆になっても同じです。
						sr_anime.flag=1;
					  var ga_ga = new Sprite(1200, 720);                   // スプライトを作る
						ga_ga.x=0;ga_ga.y=0;
			switch(gainen_rand){//概念の画像に応じて得点が変わる
				case 0://人工知能

            ga_ga.image = game_.assets['./img/ga_ga/II/01.png'];     // スタート画像を設定

				break;
				case 1://構文解析
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				case 5:
					break;
				case 6:
					break;
				case 7:
					break;
				case 8:
					break;
				case 9:
					break;
				case 10:
					break;
				case 11:
					break;
				case 12:
					break;
				case 13:
					break;
				case 14:
					break;
				case 15:
					break;
				case 16:
					break;
				case 17:
					break;
				case 18:
					break;
				case 19:
					break;
				case 20:
					break;
				case 21:
					break;
				case 22:
					break;
				case 23:
					break;
				case 24:
					break;
				case 25:
					break;
				case 26:
					break;
				case 27:
					break;
				case 28:
					break;
				case 29:
					break;
				case 30:
					break;
				case 31:
					break;
				case 32:
					break;
				case 33:
					break;
				case 34:
					break;
				case 35:
					break;
				case 36:
					break;
				case 37:
					break;
				case 38:
					break;
				case 39:
					break;
				case 40:
					break;
				case 41:
					break;
				case 42:
					break;
				case 43:
					break;
				case 44:
					break;
				case 45:
					break;
				case 46:
					break;
				case 47:
					break;
				case 48:
					break;
				case 49:
					break;
				case 50:
					break;
				case 51:
					break;
				case 52:
					break;
				case 53:
					break;
				case 54:
					break;
				case 55:
					break;
				case 56:
					break;
				case 57:
					break;
				case 58:
					break;
				case 59:
					break;
				case 60:
					break;
				case 61:
					break;
				case 62:
					break;
				case 63:
					break;
				case 64:
					break;
				case 65:
					break;
				case 66:
					break;
				case 67:
					break;
				case 68:
					break;
				case 69:
					break;
				case 70:
					break;
				case 71:
					break;
				case 72:
					break;
				case 73:
					break;
				case 74:
					break;
				case 75:
					break;
				case 76:
					break;
				case 77:
					break;
				case 78:
					break;
				case 79:
					break;
				case 80:
					break;
				case 81:
					break;
				case 82:
					break;
				case 83:
					break;
				case 84:
					break;
				case 85:
					break;
				case 86:
					break;
				case 87:
					break;
				case 88:
					break;
				case 89:
					break;
				case 90:
					break;
				case 91:
					break;
				case 92:
					break;
				case 93:
					break;
				case 94:
					break;
				case 95:
					break;
				case 96:
					break;
				case 97:
					break;
				case 98:
					break;
				case 99:
					break;
				case 100:
					break;
				case 101:
					break;
				case 102:
					break;
				case 103:
					break;
				case 104:
					break;
				case 105:
					break;
				case 106:
					break;
				case 107:
					break;
				case 108:
					break;
				case 109:
					break;
				case 110:
					break;
				case 111:
					break;
				case 112:
					break;
				case 113:
					break;
				default:break;
			}
									ga_ga.addEventListener(Event.TOUCH_START, function(e) {
										sr_anime.flag=0;
										ga_ga.parentNode.removeChild(ga_ga);
				 		      });
						scene.addChild(ga_ga);
					  var kesu = new Sprite(200, 200);                   // スプライトを作る
						kesu.image = game_.assets['./img/GUI/return.png'];     // スタート画像を設定
						kesu.x=0;kesu.y=0;
						kesu.addEventListener(Event.TOUCH_START, function(e) {
										sr_anime.flag=0;
										kesu.parentNode.removeChild(ga_ga);
				 		      })
						scene.addChild(kesu);
		 }


		});*/

		}
	}



		/* スプライト大量生成
	for (var i=0; i<10; ++i) {
	    var sprite = new Sprite(250, 250);			// スプライト生成
	    sprite.moveTo(Math.random()*(320-32), Math.random()*(320-32));	// ランダムな位置に移動
	    sprite.image = game_.assets['./img/gainen.png'];	// 画像をセット
	    sprite.ontouchstart = touchFunc;			// タッチイベント登録
	    scene.addChild(sprite);				// シーンに追加
	}*/
            
 /*	kuma.scaleX=2;
 	kuma.scaleY=2;*/
 	// シーンにタッチ移動時イベントを登録
	/*var isTouch = false;
	var targetX = 0;
	var targetY = 0;

	// タッチ開始
	scene.addEventListener("touchstart", function(e) {
	    isTouch = true;
	    // タッチした位置に移動
	    targetX = e.x - (gainen.width/2);	// スプライト幅の半分の値を引くことで中央にする
	    targetY = e.y - (gainen.height/2);	// スプライト高さの半分の値を引くことで中央にする
	});
	// タッチ終了
	scene.addEventListener("touchend", function(e) { isTouch = false; });
	
	// タッチ移動
	scene.addEventListener("touchmove", function(e) {
	    // タッチした位置に移動
	    if(e.x>gainen.x){gainen.scaleX=2;}else{kuma.scaleX=-2}
	    targetX = e.x - (gainen.width/2);	// スプライト幅の半分の値を引くことで中央にする
	    targetY = e.y - (gainen.height/2);	// スプライト高さの半分の値を引くことで中央にする
	});
	scene.addEventListener("enterframe", function(e) {
	    // タッチ中のみスプライトを動かす
	    if (isTouch) {
			// 徐々にタッチした位置に近づける
			var moveX = (targetX - gainen.x)*0.25;
			var moveY = (targetY - gainen.y)*0.25;
			gainen.moveBy(moveX, moveY);
	    }
	    
	    

    
    
	});*/
            
 
           
            // ゲームシーンを返す
            return scene;
        };
        game_.replaceScene(createStartScene());  // ゲームの_rootSceneをスタートシーンに置き換える
    }
    game_.start(); // ゲームをスタートさせます
};
