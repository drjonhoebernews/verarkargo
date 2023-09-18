@extends('frontend.layouts.app')

@section('title') İletişim Bilgileri - {{ config('app.name') }} @endsection

@section('content')

    <div class="w100 sub-page-wrap">
        <div class="sub-hero"><img src="{{asset('img/images/header-image.jpg')}}" alt="{{ config('app.name') }}" /></div>
        <div class="wrap">
            <div class="page-title page-title-left"><strong>İletişim Bilgileri </strong></div>
            <div class="page-about page-about-left">Destek hattı: 0850 270 03 34 – <a href="mailto:kargo@verarkargo.com.tr"><span class="__cf_email__" data-cfemail="dbb8a89babafa8f5b5beaf">kargo@verarkargo.com.tr</span></a> <br />Gönderileriniz ile ilgili soru ve talepleriniz için uzman ekiplerimizden destek alabilirsiniz.<br /><br /><strong>Verar Kargo L.T.D</strong><br /><strong>E-posta Adresleri</strong> <br />
                <table>
                    <tbody>
                    <tr>
                        <td>Müşteri Hizmetleri</td>
                        <td style="width: 15px; text-align: center;">:</td>
                        <td><a href="mailto:musteri@verarkargo.com.tr"><span class="__cf_email__" data-cfemail="b4d7c7f4c4c0c79adad1c0">musteri@verarkargo.com.tr</span></a></td>
                    </tr>
                    <tr>
                        <td>Satış</td>
                        <td style="width: 15px; text-align: center;">:</td>
                        <td><a href="mailto:satis@verarkargo.com.tr"><span class="__cf_email__" data-cfemail="e29183968b91a2929691cc8c8796">satis@verarkargo.com.tr</span></a></td>
                    </tr>
                    <tr>
                        <td>İthalat</td>
                        <td style="width: 15px; text-align: center;">:</td>
                        <td><a href="mailto:ithalat@verarkargo.com.tr"><span class="__cf_email__" data-cfemail="28414558475a5c68585c5b06464d5c">ithalat@verarkargo.com.tr</span></a></td>
                    </tr>
                    <tr>
                        <td>Muhasebe</td>
                        <td style="width: 15px; text-align: center;">:</td>
                        <td><a href="mailto:muhasebe@verarkargo.com.tr"><span class="__cf_email__" data-cfemail="4d2038252c3e282f280d3d393e63232839">muhasebe@verarkargo.com.tr</span></a></td>
                    </tr>
                    <tr>
                        <td>İK</td>
                        <td style="width: 15px; text-align: center;">:</td>
                        <td><a href="mailto:ik@verarkargo.com.tr"><span class="__cf_email__" data-cfemail="274e4c6757535409494253">ik@verarkargo.com.tr</span></a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="pts-offices">
                <div class="inner-15">
                    <ul>
                        <li>
                            <section>
                                <div class="pts-office-info">
                                    <h3>Genel Müdürlük</h3>
                                    <span>Mahmutbey, Akdemir Sk. No:24, 34218 Bağcılar   İstanbul</span></div>
                                <div class="pts-office-map">
                                    <iframe width="100%" height="100%" style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.262883358993!2d28.826889!3d41.0620909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66b5b0d905e39f27!2sVerar%20Kargo!5e0!3m2!1str!2str!4v1655688841093!5m2!1str!2str" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </section>
                        </li>
                        <li>
                            <section>
                                <div class="pts-office-info">
                                    <h3>Operasyon Merkezi</h3>
                                    <span>Mahmutbey, Akdemir Sk. No:24, 34218 Bağcılar   İstanbul</span></div>
                                <div class="pts-office-map">
                                    <iframe width="100%" height="100%" style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.262883358993!2d28.826889!3d41.0620909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66b5b0d905e39f27!2sVerar%20Kargo!5e0!3m2!1str!2str!4v1655688841093!5m2!1str!2str" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </section>
                        </li>
                        <li>
                            <section>
                                <div class="pts-office-info">
                                    <h3>Bölge Müdürlüğü</h3>
                                    <span>Mahmutbey, Akdemir Sk. No:24, 34218 Bağcılar   İstanbul</span></div>
                                <div class="pts-office-map">
                                    <iframe width="100%" height="100%" style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12033.262883358993!2d28.826889!3d41.0620909!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x66b5b0d905e39f27!2sVerar%20Kargo!5e0!3m2!1str!2str!4v1655688841093!5m2!1str!2str" frameborder="0" allowfullscreen="allowfullscreen" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </section>
                        </li>
                    </ul>
                </div>
            </div> </div>
    </div>
    <a data-fancybox="inline" data-src="#hidden-content" class="popupimageAlways" style="display:none"></a>
    <div style="display: none;padding:0px;" id="hidden-content">
        <a href="iletisim-bilgileri.html">
            <img src="../Content/images/covid-11-12-2020.png" style="width:100%;" />
        </a>
    </div>
@endsection
