@extends('frontend.layouts.app')

@section('title') Önemle Taşır @endsection

@section('content')
    @include('frontend.includes.messages')
    <style>
        /* Modal style definitions */
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
            position: relative;
            background-color: #fefefe;
            padding: 10px;
            border: 1px solid #888;
            width: 80%;
            max-width: 800px;
            aspect-ratio: 16 / 9;  /* adjust this according to your image aspect ratio */
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: bold;
        }

        .close {
            position: absolute;
            top: -10px;
            right: -0px;
            color: red;
            font-size: 28px;
            font-weight: bold;
            background-color: white;
            border-radius: 25%;
            padding: 0 5px;
        }

        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }

        @media screen and (max-width: 720px) {
            .modal-content {
                width: 100%;
                height: auto;
            }
            .close {
                top: 2px;
                right: 0px;
            }
            .modal-content {
                padding: 4px;
            }
        }


        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    </style>

        <div class="hero-screen">
        <div class="slider-hero">
            <div class="slider-hero-item">
                <a href="#">
                    <div class="slider-hero-photo" style="background-image:url({{asset('img/images/uploads/verar1209_big.png')}});">
                        <img src="{{asset('img/images/hero-mask.png')}}" alt="" />
                    </div>
                    <div class="slider-hero-text">
                        <div class="wrap">
                            <div class="vertical-out">
                                <div class="vertical-in">
                                    <div class="slider-hero-content">
                                        <div class="page-title page-title-left">
                                            <strong>Tüm Avrupa Sadece 18.99 € </strong>
                                        </div>
                                        <div class="page-about page-about-left">Verar Kargo ile tüm avrupaya kargo gönderebilirsiniz. </div>
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
    <style>
        .slider-testimonials-wrap {
            overflow: hidden;
        }

        .slider-container {
            display: flex;
        }

        .slider {
            display: flex;
            animation: slide 32s infinite alternate;
            animation-timing-function: ease-in-out;
        }

        .slider img {
            width: 25%;
            margin-right: 20px;
        }

        @keyframes slide {
            0% {
                transform: translateX(0);
            }
            25% {
                transform: translateX(-100%);
            }
            50% {
                transform: translateX(-200%);
            }
            75% {
                transform: translateX(-300%);
            }
            100% {
                transform: translateX(-400%);
            }
        }


    </style>
    <div class="backs">
        <div class="page-title">
            <strong>Referanslarımız</strong>
            <p style="font-size: 18px; color: black">gönderilerinizde bizi tercih edin ve aynı gün teslimat seçenekleri ile müşterilerinizi memnun edin</p>
        </div>
        <div class="slider-testimonials-wrap">
            <div class="slider-container">
                <div class="slider">
                    <img src="{{asset('img/partner/audio.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/bkmkitap.png')}}" alt="Logo 1">
                    <img src="{{asset('img/partner/armine.png')}}" alt="Logo 2">
                    <img src="{{asset('img/partner/babilkitap.png')}}" alt="Logo 3">
                    <img src="{{asset('img/partner/bauhaus.png')}}" alt="Logo 4">
                    <img src="{{asset('img/partner/bershka.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/civil.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/cookplus.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/denizbutik.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/emekkitap.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/emsan.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/englishhome.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/evidea-copy.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/flo.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/gap.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/happycomtr.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/hediyesepeti.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/ikea.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/karaca.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/karacahome.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/lcw.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-01.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-02.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-03.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-04.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-05.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-06.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-07.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-08.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-09.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-10.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-11.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-12.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-13.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/logo-14.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/madamecoco.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/marksspencer.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/massimo_dutti.jpg')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/modanisa.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/modaselvim.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/oysho.jpg')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/pullandbear.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/sinoz.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/stradivarius.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/zara.png')}}" alt="Logo 5">
                    <img src="{{asset('img/partner/zara_home.jpg')}}" alt="Logo 5">


                    <!-- istediğiniz kadar logo ekleyebilirsiniz -->
                </div>
            </div>
        </div>
    </div>

    <script>
        const slider = document.querySelector('.slider');

        slider.addEventListener('wheel', (event) => {
            event.preventDefault();
            slider.scrollLeft += event.deltaY;
        });
    </script>
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

{{--    <div id="myModal" class="modal">--}}
{{--        <div class="modal-content" style="border-radius: 10px">--}}
{{--            <div style="background-color: rgba(0,0,0,0.78); padding: 3px; border-radius: 5px">--}}
{{--                <span class="close" id="dont-show-again">&times;</span>--}}
{{--                <img src="/img/verarkargo-bayram.png">--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </div>--}}
{{--    <!-- JavaScript -->--}}
{{--    <script>--}}
{{--        // Modal kutusunu açma fonksiyonu--}}
{{--        function openModal() {--}}
{{--            var modal = document.getElementById("myModal");--}}
{{--            modal.style.display = "block";--}}
{{--        }--}}

{{--        // Modal kutusunu kapama fonksiyonu--}}
{{--        function closeModal() {--}}
{{--            var modal = document.getElementById("myModal");--}}
{{--            modal.style.display = "none";--}}
{{--        }--}}

{{--        // Sayfa yüklendiğinde modal kutusu açılacak, ancak kullanıcının daha önce "bir daha gösterme" düğmesine tıklamışsa açılmayacak--}}
{{--        window.onload = function() {--}}
{{--            var dontShowAgainButton = document.getElementById("dont-show-again");--}}
{{--            dontShowAgainButton.onclick = function() {--}}
{{--                // 10 dakika geçerli olacak bir çerez ayarla--}}
{{--                var expirationDate = new Date();--}}
{{--                expirationDate.setTime(expirationDate.getTime() + (1 * 60 * 1000));--}}
{{--                document.cookie = "hideModal=true; expires=" + expirationDate.toUTCString() + "; path=/";--}}
{{--                closeModal();--}}
{{--            }--}}

{{--            if (document.cookie.indexOf("hideModal=true") === -1) {--}}
{{--                openModal();--}}
{{--            }--}}
{{--        }--}}

{{--        // Kapatma düğmesine tıklandığında modal kutusu kapanacak--}}
{{--        var closeButton = document.getElementsByClassName("close")[0];--}}
{{--        closeButton.onclick = function() {--}}
{{--            closeModal();--}}
{{--        }--}}

{{--        // Ekran boyutu değiştiğinde modal kutusunu ortalamak için--}}
{{--        window.onresize = function() {--}}
{{--            var modal = document.getElementById("myModal");--}}
{{--            var modalContent = document.getElementsByClassName("modal-content")[0];--}}
{{--            modalContent.style.top = Math.max((window.innerHeight - modalContent.offsetHeight) / 2, 0) + "px";--}}
{{--            modalContent.style.left = Math.max((window.innerWidth - modalContent.offsetWidth) / 2, 0) + "px";--}}
{{--        }--}}

{{--        // Modal kutusunu ortalamak için--}}
{{--        window.onresize();--}}
{{--    </script>--}}

    @include('frontend.includes.businesspartner')
    <div class="w100">
        <div class="wrap">
        </div>
    </div>


@endsection
