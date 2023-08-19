@extends('frontend.layouts.app')

@section('title') {{$$module_name_singular->name}} @endsection

@section('content')

    <div class="w100 sub-page-wrap">
        <div class="sub-hero"><img src="{{asset('img/images/header-image.jpg')}}" alt="{{$$module_name_singular->name}}" /></div>
        <div class="w100" data-sticky-container>
            <div class="wrap">
                <div class="blog-text-wrap">
                    <div class="page-title page-title-left"><h1><strong>{{$$module_name_singular->name}}</strong></h1></div>
                    @if($$module_name_singular->type == 'Blog')
                        <div class="blog-list-owner">
                            <a href="#">
                                <img src="{{asset('img/avatars/'.rand(1, 8).'.jpg')}}" alt="{{isset($$module_name_singular->created_by_alias)? $$module_name_singular->created_by_alias : $$module_name_singular->created_by_name}}" />
                                <strong>{{isset($$module_name_singular->created_by_alias)? $$module_name_singular->created_by_alias : $$module_name_singular->created_by_name}}</strong>
                            </a>
                            <span>{{$$module_name_singular->published_at->translatedFormat('d F Y')}}</span>
                        </div>
                    @endif
                    @if($$module_name_singular->type == 'Blog')
                    @if($$module_name_singular->intro != "")
                        <h2 class="blog-summary">
                            {{$$module_name_singular->intro}}
                        </h2>
                    @endif
                    <h2 class="blog-summary"></h2>

                        <div class="blog-photo">
                            <img src="{{$$module_name_singular->featured_image}}" alt="{{$$module_name_singular->name}}" />
                        </div>
                        <div class="blog-share">
                            <div class="addthis_inline_share_toolbox"></div>
                        </div>
                    @endif
                    <div class="blog-text">
                        <p>
                            <span>{!!$$module_name_singular->content!!}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@push ("after-style")

@endpush

@push ("after-scripts")
<script src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"></script>
@endpush
