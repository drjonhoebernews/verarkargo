@extends('frontend.layouts.app')

@section('title') {{ __("Blog") }} @endsection

@section('content')
    <div class="w100 sub-page-wrap">
        <div class="sub-hero">
            <img src="{{asset('img/images/header-image.jpg')}}" alt="" />
        </div>
        @include('frontend.includes.messages')
        <div class="w100 top-50" data-sticky-container>
            <div class="wrap">
                <div class="sidebar-content fl">
                    <div class="title-medium title-medium-left"><strong>Blog</strong></div>
                    <div class="blog-list">
                        <ul>
                            @foreach ($$module_name as $$module_name_singular)
                                @php
                                    $details_url = route("frontend.$module_name.show",[encode_id($$module_name_singular->id), $$module_name_singular->slug]);
                                @endphp
                                 @if($$module_name_singular->type == 'Blog')
                                    <li>
                                        <div class="blog-list-picture"><img src="{{$$module_name_singular->featured_image}}" alt="{{$$module_name_singular->name}}" /></div>
                                        <div class="blog-list-content">
                                            <div class="blog-list-title"><a href="{{$details_url}}">{{$$module_name_singular->name}}</a></div>
                                            <div class="blog-list-owner">
                                                <a href="#">
                                                    <img src="{{asset('img/images/logo.png')}}" alt="" />
                                                    <strong>{{$$module_name_singular->created_by_name}}</strong>
                                                </a>
                                                <span>{{$$module_name_singular->created_at->translatedFormat('d F Y')}}</span>
                                            </div>
                                            <div class="blog-list-go"><a href="{{$details_url}}">DEVAMINI OKU</a></div>
                                        </div>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
