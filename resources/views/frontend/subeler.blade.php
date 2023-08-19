@extends('frontend.layouts.app')

@section('title') Şubelerimiz - {{ config('app.name') }} @endsection

@section('content')

    <div class="w100 sub-page-wrap bottom-100">
        <div class="sub-hero"><img src="{{asset('img/images/header-image.jpg')}}" alt="{{ config('app.name') }}" /></div>
        <div class="wrap">
            <div class="page-title page-title-left"><strong>Verar Kargo Şube ve Dağıtım Noktalarımız</strong></div>
            <div class="page-about page-about-left"></div>
            <div class="pts-shops">
                <ul>
                    <li>
                        <img src="{{asset('img/images/s-02.png')}}" alt="">
                        <div class="shop-name">
                            <span>
                                <strong>{{ config('app.name') }} - Bah&#231;elievler</strong>
                            </span>
                        </div>
                        <div class="shop-hours">
                            <span>
                                <p>
                                    Hafta İçi: <strong>10:00 - 18:00</strong> <br />Cumartesi:<strong>09:00-15:00</strong>
                                </p>
                                <p>
                                    Pazar :<strong class="shop-closed"> KAPALI</strong>
                                </p>
                            </span>
                        </div>
                        <div class="shop-area">
                            <span>
                                <p>
                                    <strong>İstanbul</strong> Bahçelievler
                                </p>
                            </span>
                        </div>
                        <div class="shop-address">
                            <span>
                                Mahmutbey, Akdemir Sk. No:24, 34218 Bağcılar İstanbul
                            </span>
                        </div>
                        <a href="https://goo.gl/maps/wDLhFxkhGAAq8Zns9" target=_blank class="shop-direction">Yol Tarifi</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>


@endsection
