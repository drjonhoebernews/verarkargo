@extends('frontend.layouts.app')

@section('title') Kargo Takip Sonuç - {{ config('app.name') }} @endsection

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
                        <textarea required="required" name="trackcodes" class="input" id="trackcodes" cols="500" rows="5" style="height:150px;" placeholder="@if(isset($barkod)) #{{$barkod}} nolu gönderiyi sorguladınız @else Gönderi takip numaranızı giriniz... @endif"></textarea>
                        <button id="send" class="button">Sorgula</button>
                    </form>
                </section>
            </div>

            @if(!$sonuc == 'bulunamadi')
                <div class="track-steps-wrap" id="result">
                    <div class="track-number">
                        <picture><img src="{{asset('img/images/icon-box.png')}}" alt=""></picture>
                        <section>
                            <strong>#{{$barkod}}</strong>
                            <span>Paket numaralı gönderi bilgileri aşağıda yer almaktadır.</span>
                        </section>
                    </div>
                    <div class="track-steps">
                        <ul>
                            @if($sonuc_durum == 'İADE')
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-01.png')}}" alt=""></picture><span>Hazırlanıyor</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-02.png')}}" alt=""></picture><span>Transfer</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-03.png')}}" alt=""></picture><span>Depoda</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-04.png')}}" alt=""></picture><span>Dağıtımda</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-05.png')}}" alt=""></picture><span>İade</span></section></li>
                            @elseif($sonuc_durum == 'TESLİM')
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-01.png')}}" alt=""></picture><span>Hazırlanıyor</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-02.png')}}" alt=""></picture><span>Transfer</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-03.png')}}" alt=""></picture><span>Depoda</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-04.png')}}" alt=""></picture><span>Dağıtımda</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-05.png')}}" alt=""></picture><span>Teslim Edildi</span></section></li>
                            @else
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-01.png')}}" alt=""></picture><span>Hazırlanıyor</span></section></li>
                                <li class=step-active><section><picture><img src="{{asset('img/images/step-02.png')}}" alt=""></picture><span>Transfer</span></section></li>
                                <li><section><picture><img src="{{asset('img/images/step-03.png')}}" alt=""></picture><span>Depoda</span></section></li>
                                <li><section><picture><img src="{{asset('img/images/step-04.png')}}" alt=""></picture><span>Dağıtımda</span></section></li>
                                <li><section><picture><img src="{{asset('img/images/step-05.png')}}" alt=""></picture><span>Teslim Edildi</span></section></li>
                            @endif
                        </ul>
                    </div>
                    <div class="track-destination">
                        <section>
                            <span>Çıkış Yeri</span>
                            <strong>{{$gonderici_sehir}}</strong>
                        </section>
                        <section>
                            <span>Varış Yeri</span>
                            <strong>{{$alici_ilce}}</strong>
                        </section>
                    </div>
                    <div class="track-parcel-info-wrap desktop">
                        <h4>Gönderi Bilgileri</h4>
                        <div class="accordion-track-info">
                            <div class="name">Teslimat Durumu</div>
                            <div class="information">Kabul</div>
                            <div class="name">Gönderici Adı</div>
                            <div class="information">{{$gonderici_adi}}</div>
                            <div class="name">Gönderici Adresi</div>
                            <div class="information">{{Str::limit($gonderici_adres,10)}}</div>
                            <br /><br />
                        </div>
                    </div>
                    <div class="track-transport-info-wrap desktop">
                        <h4>Alıcı Bilgileri</h4>
                        <div class="accordion-track-info">
                            <div class="name">Teslimat Durumu</div>
                            <div class="information">{{$sonuc_durum}}</div>
                            <div class="name">Alıcı Adı</div>
                            <div class="information">{{$alici_adi}}</div>
                            <div class="name">Alıcı Adresi</div>
                            <div class="information">{{Str::limit($alici_adres,10)}}</div>
                            <br /><br />
                        </div>
                    </div>
                    <div id="acc" class="accordion accordion-track">
                        <div class="accordion-section mobile">
                            <a class="accordion-section-title" href="#accordion-2-3">Taşıma Bilgileri</a>
                            <div id="accordion-2-3" class="accordion-section-content accordion-track-content">
                                <div class="accordion-track-info">
                                    <div class="name">Taşıyıcı Firma</div>
                                    <div class="desc">{{$varis_subesi}}</div>
                                    <div class="name">Taşıyıcı Firma Takip Kodu</div>
                                    <div class="desc">{{$barkod}}</div>
                                    <div class="name">Taşıyıcı Firma Takip Adresi</div>
                                    <div class="desc"><a href="javascript:;">-</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-section">
                            <a class="accordion-section-title" href="#accordion-3-3">Hareket Geçmişi</a>
                            <div id="accordion-3-3" class="accordion-section-content accordion-track-content">
                                <div class="track-history">
                                    <ul>
                                        @foreach($hareketler as $hareket)
                                            <li>
                                                <span>{{$hareket['yapilan_islem']}} - {{$hareket['kullanici_adi']}}</span>
                                                <section>
                                                    {{$hareket['tarih']}} {{$hareket['saat']}}
                                                </section>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <script type="text/javascript">
                        $(document).ready(function () { $("html, body").animate({ scrollTop: ($('#result').first().offset().top - 100) }, 500); });
                    </script>
                </div>
            @elseif($sonuc == 'yok')
            @else
                <div class="track-steps-wrap" id="result">
                    <div class="track-number">
                        <picture><img src="{{asset('img/images/icon-box.png')}}" alt=""></picture>
                        <section>
                            <strong># Hatalı Barkod</strong>
                            <span>Barkod Bulunamamıştır lütfen kontrol edin.</span>
                        </section>
                    </div>
                </div>
            @endif
        </div>
    </div>




    @if(isset($dd))

    @endif
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
