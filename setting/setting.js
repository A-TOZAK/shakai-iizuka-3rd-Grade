//SchoolTextReader ver1.3
//©2023 学校教育情報処理研究会

//タイトルを設定。文字列なので「"」（ダブルクォーテーション）で囲むこと
let book_title = "飯塚市副読本";
let book_sub_title = "";
let book_copy = "飯塚市";


//ファイル名が連番の前に文字列がある場合に設定 test_10.pngの場合は"test_"
let filename = "page-";

//ファイル番号の0埋め。
//true:[xx009,xx010,xx011...]  false:[xx9,xx10,xx11...]
//埋める桁数は下の総ページ設定数から算出
let fileNo_rept = false;

//ページ画像の拡張子"png","jpeg","webp"など（大文字小文字注意）
let filetype = "png";

//総ページ数
let page_num = 9;

//開始ページ数
let start_page = 1;

//右綴じ:true 左綴じ:false
let Right_binding = false;

//本の１ページの用紙（画像）サイズを[幅,高さ](px)で指定。
const page_size = [2150,1518];

//見開きのサイズと縦型のサイズの[幅,高さ]
//上のページサイズが入るように設定。余白を含めて切りが良い数値に設定する。
//高さは４つ下の項目のUIアイコンのサイズも含めるように設定すること。
let main_canvas_size = [2200,1600];  //見開き用に横２倍のサイズが入る値を設定。
let sub_canvas_size = [1100,1600];    //メインキャンバスの半分の値を設定。

//初期の表示　0:１ページ　1:見開き（２ページ）
let show_mode =0;

//同一ウィンドウで外部へのリンク移動時の閲覧状況保存
//0:保存無し　1:現在のページとビューを保存　2:現在ページ及び拡大率や表示位置なども保持
let save_setting = 2;

//設定データの保持期間（分）
let save_period = 60;

//背景色　color1は横向き画面時、color2は縦向き画面時
const backgroud_color1= "#eeeeee";
const backgroud_color2= "#eeeeee";

//ページに影をつける
let add_shadow = true;

//影の色
let shadow_color = "gray";

//影のぼかし、値が大きいほどぼける。
let shadow_Blur = 8;

//UIアイコン一つ分のサイズ V:縦型時　H:横型時
let UI_size_V = 50;
let UI_size_H = 70;

//UIのベースカラー
const backgroud_colorUI= "#eeeeee";

//ローディングアイコン＆文字色
const loading_color = "#000000";

//ダークモードをtrueにするとアイコンが白になる
//フルスクリーン時は必ずダークモード
let dark_mode = false;

//本棚（ホームボタン）の設定
let home_btn = true;
let home_url = "https://~";//空値なら一つ上の階層へ

//描画ツールボタンの設置&サイズ（px）
let draw_btn = true;
let draw_btn_size_V = 50;
let draw_btn_size_H = 70;

//ペンと消しゴムのサイズリスト
let pen_size_list = [1,3,7,12,18,25];
let marker_size_list = [10,20,30,40,50,60];
let eraser_size_list = [5,10,15,25,40,65];

//最大拡大率
let max_expand = 3.0;

//拡大アイコンの拡大率（ボタンを押すごとにどれくらい変化するか）
let expand_scale = 0.5;

//スライダーの高さ
let slider_height = 30;

//スライダーつまみの最低幅
//スライダーのつまみはスライダー全体のページ数割だが、
//ページ数が多いとつまみが小さくなりすぎるので下限値を設定
let slider_width = 100;

//スライダーのページ数表示の値ずらし
//表紙を含めた時など画像に記載されたページ番号と合わない時に設定
let difference_page = 0;

//ページめくり判定の幅の割合
//0.2の場合、ページ幅の20％の左右をタッチすると、ページめくりを行う
let page_side_per = 0.2;

//スワイプページめくりを実行する判定時間（ミリ秒）と判定距離及び角度
let swipe_time = 500;
let swipe_dist = 50;
let swipe_angle = 25;

//ページ拡大時は左右タッチでページめくりを行わない
let change_page_block_expanded = false;

//ページをめくるアニメーションを行う
let change_page_animation = true;
//１ページめくるアニメーション時間（ミリ秒）
let change_page_time = 250;

//ページロード失敗時のリロード試行回数＆待機時間(ミリ秒)&リロードボタンカラー
let reload_num = 4;
let reload_time =3000;
let reload_btn_color = "#fff";

//ページリンクの設定
//ページ番号,開始x座標(px),開始y座標(px),幅(px),高さ(px),リンク先0:ページ 1:URL(同ウィンドウ) 2: URL（別ウィンドウ）,ページ番号orリンク先URL
//ページ番号はスライダーのページ差分ではなくファイル順の番号なので注意すること
let link_color = "#00f";
let page_link = new Array();
function set_pagelink(){
page_link = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]//最後はカンマ不要
];
}