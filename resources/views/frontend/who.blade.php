@extends('frontend.layouts.app')

@section('title') Kargo Takip - {{ config('app.name') }} @endsection

@section('content')
<div class="w100 sub-page-wrap bottom-100">
    <div class="sub-hero"><img src="{{asset('img/images/header-image.jpg')}}" alt="" /></div>
    <div class="wrap">
        <div class="page-title page-title-left">Biz kimiz</div>
        <div class="page-about page-about-left">
            <p><br /><strong>1997 yılından beri 220’yi aşkın ülkeye gönderilerinizi;</strong></p>
            <p>● En kısa sürede</p>
            <p>● Maksimum güvenlikte</p>
            <p>● En uygun fiyatlarla</p>
            <p>● En yeni çözümlerle taşıyoruz!</p>
            <p><br />E-ihracattaki deneyimimiz, ekspres kurye ve kargo taşımacılığındaki esnek ve teknolojik çözümlerimizle sizi tüm dünya ile buluşturuyoruz.</p>
            <p><br /><strong>Marka Değerlerimiz;</strong></p>
            <p>● Uluslararası tecrübelerimiz</p>
            <p>● Zamanlama hassasiyetimiz</p>
            <p>● Dijital odaklı ve teknolojik hizmetlerimiz</p>
            <p>● Gelecek bilincimiz</p>
            <p>● Eşsiz hizmet anlayışımız</p>
            <p>● Her zaman erişilebilir olmamız</p>
        </div>
    </div>
</div>
@endsection
