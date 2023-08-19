<header class="header">
    <div class="wrap">
        <h1 id="logo"><a href="{{url('/')}}" alt="PTS Worldwide Express"><img src="{{asset('img/images/logo.png')}}" alt="{{app_name('')}}" /></a></h1>
        <div class="header-lang-wrap">
            <div class="header-lang-icon">
                <img src="{{ asset('img/images/turkey.svg') }}">
            </div>
            <div class="header-lang">
                <ul>
                    <li>
                        <a href="javascript:;" onclick="SetLanguage({{url('/')}})">
                            <img src="{{ asset('img/images/turkey.svg') }}">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="header-login-wrap">
            <div class="header-login">
                <a href="javascript:;">GİRİŞ YAP</a>
            </div>
            <div class="header-login-box">
                <ul>
                    <li>
                        <a href="http://kargotakip.verarkargo.com.tr/" target="_blank">Kurumsal Şube</a>
                    </li>
                    <li>
                        <a href="http://webpostman.verarkargo.com.tr:9999/user/login" target="_blank" class="verar-cmapps">Bireysel Şube</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="nav-icon">
            <span></span>
        </div>
        <div class="footer-phone">
            <a href="tel:08502700334">
                <img src="{{asset('img/images/icon-headset.png')}}" alt="" />
            </a>
            <span>Müşteri Hizmetleri</span>
            <strong id="mobile" style="display:none;"><a href="tel:08502700334">0850 270 03 34</a></strong>
            <strong id="desktop" style="display:none;"><a href="tel:08502700334">0850 270 03 34</a></strong>
        </div>
        <div id="nav">
            <ul>
                <li class="">
                    <a href="/gonderi-takip">GÖNDERİ TAKİP</a>
                </li>
                @php
                     $duyurular = Modules\Article\Entities\Post::where('type','Article')->where('status',1)->get();
                     $hizmetler = Modules\Article\Entities\Post::where('type','News')->where('status',1)->get();
                @endphp
                <li class="nav-multi">
                    <a href="#">HİZMETLERİMİZ</a>
                    @if(count($hizmetler)>0)
                        <span>
                        @foreach($hizmetler as $item)
                           <a href="/sayfa/{{encode_id($item->id).'/'.$item->slug}}">{{$item->name}}</a>
                        @endforeach
                        </span>
                    @endif
                </li>
                <li class="">
                    <a href="/blog">BLOG</a>
                </li>
                <li class="nav-multi">
                    <a href="#">DUYURULAR</a>
                    @if(count($duyurular)>0)
                        <span>
                    @foreach($duyurular as $item)
                                <a href="/sayfa/{{encode_id($item->id).'/'.$item->slug}}">{{$item->name}}</a>
                            @endforeach
                    </span>
                    @endif
                </li>
                <li class="nav-multi">
                    <a href="#">İLETİŞİM</a>
                    <span>
                        <a href="/iletisim">İletişim Bilgileri</a>
                        <a href="/destek">Müşteri Destek</a>
                        <a href="/subelerimiz">Şube ve Dağıtım</a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</header>
