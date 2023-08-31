@extends('frontend.layouts.app')

@section('title') Kargo Takip - {{ config('app.name') }} @endsection

@section('content')
    <div class="w100 sub-page-wrap">
        <div class="sub-hero"><img src="{{asset('img/images/header-image.jpg')}}" alt="{{ config('app.name') }}" /></div>
        <div class="wrap">
            <div class="page-title page-title-left"><strong>Gönderi Takip</strong></div>
            <div class="page-about page-about-left">
                <p>Gönderi takip numaranızı aşağıdaki bölüme yazınız.</p>
            </div>

            <div class="track-parcel track-parcel-multiple">
                <span>Gönderinizi Takip Edin <a data-fancybox="" data-src="#modal" alt="Detaylı bilgi için tıklayın."><img src="{{asset('img/images/information.png')}}" style="height: 16px;"></a></span>
                <section>
                    <form action="/gonderi-takip-sonuc" method="post">
                        @csrf
                        <textarea required="required" name="trackcodes" class="input" id="trackcodes" cols="500" rows="5" style="height:150px;" placeholder=" Gönderi takip numaranızı giriniz... " aria-required="true"></textarea>
                        <button id="send" class="button">Sorgula</button>
                    </form>
                </section>
            </div>
        </div>
    </div>
    <div style="display: none; width: 50%;" id="modal">
        <div class="page-title page-title-left" style="padding-top: 0;">Gönderi numarası hakkında</div>
        <div class="page-about page-about-left">
            <p>
                Aynı anda 10 gönderiyi arayabilirsiniz. Birden fazla gönderiyi aramak için gönderi takip
                numaralarınızı her satıra bir tane gelecek şekilde yazarak arama yapabilirsiniz.
            </p>
        </div>
    </div>
@endsection
