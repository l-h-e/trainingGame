enchant();
window.onload = function() {
    var game_ = new Game(320, 320); // 表示領域の大きさを設定
    game_.fps = 24;                 // ゲームの進行スピードを設定
    game_.preload('./img/GUI/start.png','./img/gainen.png','./img/IINI.png','./img/title_bg.jpg','./img/hero_a.png','./img/icon/MDSI_icon.png','./img/ga_MDSI.png','./img/egg_te.png'); // ゲームに使う素材を、あらかじめ読み込む
    game_.preload('./img/AP/01.png','./img/AP/02.png','./img/AP/03.png','./img/AP/04.png','./img/AP/05.png','./img/AP/06.png','./img/AP/07.png','./img/AP/08.png','./img/AP/09.png','./img/CM/01.png','./img/CM/02.png','./img/CM/03.png','./img/CM/04.png','./img/CM/05.png','./img/CM/06.png','./img/CM/07.png','./img/CM/08.png','./img/CM/09.png','./img/CM/10.png','./img/ED/01.png','./img/ED/02.png','./img/ED/03.png','./img/ED/04.png','./img/ED/05.png','./img/ED/06.png','./img/ED/07.png','./img/ED/08.png','./img/ED/09.png','./img/ED/10.png','./img/ED/11.png','./img/EM/01.png','./img/EM/02.png','./img/EM/03.png','./img/EM/04.png','./img/EM/05.png','./img/EM/06.png','./img/EM/07.png','./img/EM/08.png','./img/EM/09.png','./img/EM/10.png','./img/ES/01.png','./img/ES/02.png','./img/ES/03.png','./img/ES/04.png','./img/ES/05.png','./img/ES/06.png','./img/ES/07.png','./img/ES/08.png','./img/ES/09.png','./img/ES/10.png','./img/II/01.png','./img/II/02.png','./img/II/03.png','./img/II/04.png','./img/II/05.png','./img/II/06.png','./img/II/07.png','./img/II/08.png','./img/II/09.png','./img/II/10.png','./img/NI/01.png','./img/NI/02.png','./img/NI/03.png','./img/NI/04.png','./img/NI/05.png','./img/NI/06.png','./img/NI/07.png','./img/NI/08.png','./img/NI/09.png','./img/NI/10.png','./img/NI/11.png','./img/SI/01.png','./img/SI/02.png','./img/SI/03.png','./img/SI/04.png','./img/SI/05.png','./img/SI/06.png','./img/SI/07.png','./img/SI/08.png','./img/SI/09.png','./img/MT/01.png','./img/MT/02.png','./img/MT/03.png','./img/MT/04.png','./img/MT/05.png','./img/MT/06.png','./img/MT/07.png','./img/MT/08.png','./img/MT/09.png','./img/MD/01.png','./img/MD/02.png','./img/MD/03.png','./img/MD/04.png','./img/MD/05.png','./img/MD/06.png','./img/MD/07.png','./img/MD/08.png');
    game_.preload('./img/egg/nr.png','./img/egg/sr.png','./img/egg/sr_anime.png','./img/egg/nr_anime.png');
		game_.preload('./img/GUI/creature.png','./img/GUI/gar.png','./img/GUI/how_1.png','./img/GUI/how_2.png','./img/GUI/how_to_play.png','./img/GUI/keyword.png','img/GUI/return.png');
  game_.preload('./img/teach_.png');
    game_.preload('./img/ga/APII.png','./img/ga/APNI.png','./img/ga/APSI.png');
/*
    game_.preload('./img/icon/APII.png','./img/icon/APNI.png','./img/icon/APSI.png','./img/icon/APMD.png','./img/icon/APCM.png','./img/icon/APMT.png','./img/icon/APED.png','./img/icon/APES.png','./img/icon/APEM.png');
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
    game_.onload = function() {     // ゲームの準備が整ったらメインの処理を実行します
}
    game_.start(); // ゲームをスタートさせます
};