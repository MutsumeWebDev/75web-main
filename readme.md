


## 変更済み
・instagram_iconを10MBのsvgから38kBのpngに
・スライダーのプレビュー画像img0-1.jpg, img0-2.jpg(system.jsの生成部分)とスライダーページのトップ画像noa_img.jpgとtalk_img.jpgにloadingとdecodingを追加して遅延読み込みに
<img src="img/pageimg/noa_img.jpg" alt="乃紫さんライブのポスター" loading="lazy", decoding="async">
・15MBのnoa_img.pngと1.7MBtalk_img.pngをjpgにして600kB~700kB程度のnoa_img.jpg、talk_img.jpgに変更
・1.7MB程度のicon.jpgとpoptone_icon.jpgをpngに変換したのち解像度を1/10にして作成した38kB程度のicon_449p.pngとpoptone_icon_449p.pngに差し替え
・jsのヘッダインポートのパスにjs/を追加して修正
・画像のパスを修正


## 変更予定
loading画面を消す


## 発見した問題箇所
右下のナビゲータのリンクが死んでる？→ソース見たらリンクらしきものがない、実装中か？
そのナビゲータがあるとことないとこがある
index.htmlのタイムテーブルのリンクのアイコンがない
