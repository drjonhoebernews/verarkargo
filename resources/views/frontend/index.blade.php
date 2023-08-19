@extends('frontend.layouts.app')

@section('title') Önemle Taşır @endsection

@section('content')
    @include('frontend.includes.messages')
    <style>
        /* Modal stil tanımları */
        .modal {
            display: none;
            position: fixed;
            z-index: 99999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-content {
            background-color: #fefefe;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
            max-width: 600px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
        }

        .close {
            color: red;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        @media screen and (max-width: 600px) {
            .modal-content {
                width: 90%;
            }
        }
    </style>

        <div class="hero-screen">
        <div class="slider-hero">
            <div class="slider-hero-item">
                <a href="#">
                    <div class="slider-hero-photo" style="background-image:url({{asset('img/images/uploads/mypts%2c1209_big.jpg')}});">
                        <img src="{{asset('img/images/hero-mask.png')}}" alt="" />
                    </div>
                    <div class="slider-hero-text">
                        <div class="wrap">
                            <div class="vertical-out">
                                <div class="vertical-in">
                                    <div class="slider-hero-content">
                                        <div class="page-title page-title-left">
                                            <strong>Gönderi Yapmaya Başlayın! </strong>
                                        </div>
                                        <div class="page-about page-about-left">Verar Kargo ile gerekli tüm işlemleri online yapabilirsiniz. </div>
                                        <div class="slider-hero-link">
                                            <span>HEMEN BAŞLAYIN</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="slider-hero-item">
                <a href="#">
                    <div class="slider-hero-photo" style="background-image:url({{asset('img/images/uploads/3%2c1208_big.jpg')}});">
                        <img src="{{asset('img/images/hero-mask.png')}}" alt="" />
                    </div>
                    <div class="slider-hero-text">
                        <div class="wrap">
                            <div class="vertical-out">
                                <div class="vertical-in">
                                    <div class="slider-hero-content">
                                        <div class="page-title page-title-left">
                                            <strong>Taşıma Süreçlerinizi Kolaylaştırıyoruz!</strong>
                                        </div>
                                        <div class="page-about page-about-left">Uluslararası gönderilerinizi dünyanın her yerine size en uygun çözümlerle taşıyoruz.</div>
                                        <div class="slider-hero-link">
                                            <span>&#199;&#214;Z&#220;MLERİMİZ</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

    @include('frontend.includes.cargotakipwidget')

    <div class="w100 block-waves bottom-50" id="hizmetlerimiz">
        <div class="wrap">
            <div class="page-title">
                <strong>Hizmetlerimiz</strong>
            </div>
            @php $hizmetler = Modules\Article\Entities\Post::where('type','News')->where('status',1)->get(); $i =1; @endphp
            <div class="page-about"></div>
            <div class="solutions">
                <div class="inner-20">
                    <ul>
                        @if(count($hizmetler)>0)
                            @foreach($hizmetler->take(5) as $item)
                                <li>
                                    <div class="box"><a href="#"><img src="{{asset('img/images/s-0'.$i++.'.png')}}" alt="" /></a>
                                        <section>
                                            <a href="#">
                                                <strong>{{$item->name}}</strong>
                                                <span>{{$item->intro}}</span>
                                            </a>
                                        </section>
                                        <div class="w100 link-all">
                                            <a href="/sayfa/{{encode_id($item->id).'/'.$item->slug}}"> Detaylar </a>
                                        </div>
                                    </div>
                                </li>
                            @endforeach
                        @endif
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="w100 bottom-50" id="mypts">
        <div class="wrap">
            <div class="page-title">
                <strong>Kargo göndermeye başlayın!</strong>
            </div>
            <div class="page-about">Verar Kargo'ya ücretsiz üye olarak bir çok işlemi online olarak yapabilirsiniz.</div>
            <div class="mypts">
                <div class="inner-20">
                    <ul>
                        <li>
                            <div class="box">
                                <a href="#">
                                    <img src="{{asset('img/images/mypts-2.jpg')}}" alt="" />
                                </a>
                                <section>
                                    <a href="#">
                                        <strong>Toplu<br />Sorgulayın</strong>
                                    </a>
                                </section>
                                <div class="w100 link-all">
                                    <a class="clickbutton" href="#"> </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="box">
                                <a href="#">
                                    <img src="{{asset('img/images/mypts-1.jpg')}}" alt="" />
                                </a>
                                <section>
                                    <a href="#">
                                        <strong>Gönderi<br />hesaplayın</strong>
                                    </a>
                                </section>
                                <div class="w100 link-all">
                                    <a class="clickbutton" href="#"> </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="box">
                                <a href="#">
                                    <img src="{{asset('img/images/mypts-3.jpg')}}" alt="" />
                                </a>
                                <section>
                                    <a href="#">
                                        <strong>Hızlı<br />ödeme yapın</strong>
                                    </a>
                                </section>
                                <div class="w100 link-all">
                                    <a class="clickbutton" href="#"> </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close" id="dont-show-again">&times;</span>
            <p>Türkiyem,</p>
            <p>
                Son deprem felaketi, hepimizi derinden üzdü ve çok canımızı yaktı. Verar Kargo olarak, bu zorlu zamanlarda depremzedelerimizin yanında olduğumuzu hissettirmek istiyoruz.</p>

            <p> Siz ve sevdikleriniz için büyük kayıplar yaşandığını biliyoruz. Acınızı paylaşıyor ve size sabır, güç ve dayanıklılık diliyoruz.</p>

            <p>Verar Kargo olarak, depremin yol açtığı hasar ve yıkımın üstesinden gelmek için tüm kaynaklarımızı kullanacağız. Çalışanlarımızın, müşterilerimizin ve tüm toplumun refahı için elimizden gelen her şeyi yapacağız.</p>

            <p> Size yardımcı olmak için buradayız. Sizlerin güçlü kalmanızı ve birlikte hareket ederek yeniden inşa sürecine başlamanızı destekliyoruz.</p>
        </div>

    </div>
    <!-- JavaScript -->
    <script>
        // Modal kutusunu açma fonksiyonu
        function openModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        }

        // Modal kutusunu kapama fonksiyonu
        function closeModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "none";
        }

        // Sayfa yüklendiğinde modal kutusu açılacak, ancak kullanıcının daha önce "bir daha gösterme" düğmesine tıklamışsa açılmayacak
        window.onload = function() {
            var dontShowAgainButton = document.getElementById("dont-show-again");
            dontShowAgainButton.onclick = function() {
                // 10 dakika geçerli olacak bir çerez ayarla
                var expirationDate = new Date();
                expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));
                document.cookie = "hideModal=true; expires=" + expirationDate.toUTCString() + "; path=/";
                closeModal();
            }

            if (document.cookie.indexOf("hideModal=true") === -1) {
                openModal();
            }
        }

        // Kapatma düğmesine tıklandığında modal kutusu kapanacak
        var closeButton = document.getElementsByClassName("close")[0];
        closeButton.onclick = function() {
            closeModal();
        }

        // Ekran boyutu değiştiğinde modal kutusunu ortalamak için
        window.onresize = function() {
            var modal = document.getElementById("myModal");
            var modalContent = document.getElementsByClassName("modal-content")[0];
            modalContent.style.top = Math.max((window.innerHeight - modalContent.offsetHeight) / 2, 0) + "px";
            modalContent.style.left = Math.max((window.innerWidth - modalContent.offsetWidth) / 2, 0) + "px";
        }

        // Modal kutusunu ortalamak için
        window.onresize();
    </script>

    @include('frontend.includes.businesspartner')
    <div class="w100">
        <div class="wrap">
        </div>
    </div>


@endsection
