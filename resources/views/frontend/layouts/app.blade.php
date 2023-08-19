<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8" />
    <link rel="apple-touch-icon" sizes="76x76" href="{{asset('img/favicon.png')}}">
    <link rel="icon" type="image/png" href="{{asset('img/favicon.png')}}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>@yield('title') | {{ config('app.name') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="{{ setting('meta_description') }}">
    <meta name="keyword" content="{{ setting('meta_keyword') }}">

    @include('frontend.includes.meta')

    <!-- Shortcut Icon -->
    <link rel="shortcut icon" href="{{asset('img/favicon.png')}}">
    <link rel="icon" type="image/ico" href="{{asset('img/favicon.png')}}" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @stack('before-styles')

    
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">

    @stack('after-styles')
    <script src="{{ asset('js/main.js') }}"></script>

    <x-google-analytics />
</head>

<body oncontextmenu="return false;">

    @include('frontend.includes.header')


    <main>
        @yield('content')
    </main>
    <div class="cookies-wrap" style="display: none">
        <div class="cookies">
            <section>
                @include('cookie-consent::index')
            </section>
            <div class="cookies-close">
                <span>close</span>
            </div>
        </div>
    </div>


    @include('frontend.includes.footer')
    <a href="{{asset('img/images/popup-duyuru-21082021.png')}}" data-fancybox="images" data-day="22" class="popupimage"></a>
    <a href="{{asset('img/images/popup.png')}}" data-fancybox="images" class="popupimage" style="display:none"></a>

    <div class="btn-proposal">
        <a href="/hemen-teklif-al">Hemen Teklif Al</a>
        <div class="btn-proposal-close">
            <span>close</span>
        </div>
    </div>

</body>

<!-- Scripts -->
@stack('before-scripts')

<script src="{{ asset('js/frntmain.js') }}"></script>

@stack('after-scripts')

</html>
