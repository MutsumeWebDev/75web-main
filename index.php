<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>埼玉大学ホームカミングデー | 第75回むつめ祭公式ウェブサイト</title>
        <meta name="description" content="第75回むつめ祭の公式ウェブサイトです。「Pop Tone」をテーマに、キャンパス中に広がる緑豊かな景色の中で、学生が一丸となって企画したさまざまな展示やパフォーマンスがむつめ祭を華やかに彩ります。">
        <link rel="icon" href="icon.jpg" sizes="16x16" type="image/jpg">
        <!--layout-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap" rel="stylesheet">
        <!-- <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap" rel="stylesheet"> -->
        <link rel="stylesheet" href="https://unpkg.com/destyle.css@1.0.5/destyle.css">
        <link rel="stylesheet" href="default.css">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="slider.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
        <!--javascript-->
        <script type="text/javascript" src="system.js" defer></script>
        <script type="text/javascript" src="support.js" defer></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script type="text/javascript" src="slider.js" defer></script>
        <script type="text/javascript" src="loading.js" defer></script>
        <!--<script type="text/javascript" src="motal_window.js" defer></script>-->
        <script type="text/javascript" src="modalWindowsystem.js" defer></script>      
    </head>
</head>
<body>
    <div id="loading">
        <p>Loading...</p>
        <div id="loading-screen"></div>
    </div>
    <!--header-->
    <noscript>
        <div class="important" style="margin: 5rem 10% 0 10%;">
            <p>
                <strong>JavaScriptの設定を変更してください。</strong><br>
                当サイトではJavaScriptを使用しています。オフになっている場合メニューなどの機能が大幅に制限される可能性があります。
            </p>
        </div>
    </noscript>
    <header class="header">
        <div class="top__header">
            <a class="top__ttl" href="index.html">
                <img  src="icon.jpg" alt="">
                <!-- svg挿入予定 -->
                <div class="75thmutsume">
                    <p>第75回</p>
                    <p class="mutsume">むつめ祭</p>
                </div>
            </a>
        </div>
        <!-- <div class="top__nav">
            <a href="">むつめ祭について</a>
            <a href="">ご案内</a>
            <a href=""></a>
        </div>
        <div id="header">
            <div id="menu_open" class="menu__open">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div> -->
    </header>
    <main>
        <section class="detail__page">
            <div class="detail__ttl">
                <h2 class="slider__ttl">団体紹介</h2>
            </div>
            <div id="motalWindow">
                <?php
                    $json = file_get_contents("data.json");
                    $json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
                    $arr = json_decode($json,true);
                    for ($i = 0 ; $i < count($arr); $i++){
                        $data = $arr[$i];
                        if($data["show_place"] !== null){
                            $place = $data["show_place"];
                        }else if($data["room"] !== null){
                            if($data["room_num"] !== null){
                              $place = "{$data["room"]}{$data["room_num"]}教室";
                            }else{
                              $place = `{$data["room"]}`;
                            }
                        }else if($data["area"]){
                            $place = "{$data["area"]}{$data["area_num"]}";
                        }
                        echo "
                            <button id=\"open{$data["number"]}\" class=\"motalWindow\">
                              <div class=\"group__ttl\">
                                <div class=\"group__icon\"></div>
                                <h3>{$data["name"]}</h3>
                              </div>
                              <p>{$data["group"]}</p>
                              <div class=\"group__info\">
                                <img src=\"img/grouplogo2/{$data["logo"]}.jpg\" alt=\"{$data["group"]}のロゴ\">
                                <div class=\"place___category\">
                                  <div class=\"place\">
                                    <p>{$place}</p>
                                  </div>
                                  <div class=\"category\">
                                    <div class=\"marker__green__white kikaku__kind\">{$data["class"]}</div>
                                  </div>
                                </div>
                              </div>
                            </button>
                            <section id=\"modal{$data["number"]}\" class=\"modal__inner\">
                              <h3>{$data["name"]}</h3>
                              <p>{$data["group"]}</p>
                              <img class=\"group__logo\" src=\"img/grouplogo2/{$data["logo"]}.jpg\" data-src=\"img/grouplogo60px/{$data["logo"]}.jpg\" alt=\"{$data["group"]}のロゴ\">
                                <div class=\"place__category__inner\">
                                  <p class=\"abst\">{$data["abst"]}</p>
                                  <p class=\"place\">{$place}</p>
                                  <div class=\"category\">
                                    <div class=\"marker__green__white kikaku__kind\">{$data["class"]}</div>
                                  </div>
                                </div>
                              <p class=\"group__explanation\">{$data["explanation"]}</p>
                                <div id=\"SNS{$data["number"]}\" class=\"SNS_icon__inner\"></div>
                              <button id=\"close{$data["number"]}\" class=\"close__modal\">閉じる</button>
                            </section>
                            <div id=\"mask\"></div>";
                    }
                ?> 
            </div>
        </section>
    </main>
    <footer>
        <section class="footer">
            <section class="contact">
                <h3 class="contact__ttl">CONTACT</h3>
                <dl class="address">
                    <dt class="address__ttl">住所</dt>
                    <dd class="address__content">〒338-8570<br>
                    埼玉県さいたま市桜区下大久保255 埼玉大学内</dd>
                    <dt class="address__ttl">Email</dt>
                    <dd class="address__content">staff[at]mutsume.com <br>([at]を@に変えてください。)</dd>
                </dl>
            </section>
            <section class="fotter__bottom">
                <div class="fotter__ttl">
                    <img src="committee_logo.png" alt="委員会ロゴ">
                    <h2>第75回むつめ祭</h2>
                </div>
                <div class="SNS_icon">
                    <a href="https://x.com/mutsume_fes">
                        <img src="x_logo.svg" alt="xのロゴ">
                    </a>
                    <a href="https://www.instagram.com/mutsume_fes/">
                        <img src="instagram_logo.svg" alt="">
                    </a>
                    <a href="https://youtube.com/channel/UCs0YR5YGuo0cAUmU9_i7xDg?feature=shared">
                        <img src="youtube_logo.svg" alt="">
                    </a>
                </div>
            </section>
        </section>
    </footer>
</body>
</html>