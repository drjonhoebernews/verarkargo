<div class="w100 top-100"> <!-- foother -->
    <div class="footer-wrap">
        <div class="wrap">
            <div class="footer top-50 left-80 right-80">
                <div class="footer-about">
                    <div class="footer-title">Sosyal Medya</div>
                    @php

                        $settings = App\Models\Setting::all();
                        @endphp
                    <ul>
                        <li><a href="{!! setting('facebook_url') !!}" target="_blank" rel="noopener"><img src="{{asset('img/images/icon-facebook.png')}}" alt="" /></a></li>
                        <li><a href="{!! setting('twitter_url') !!}" target="_blank" rel="noopener"><img src="{{asset('img/images/icon-twitter.png')}}" alt="" /></a></li>
                        <li><a href="{!! setting('instagram_url') !!}" target="_blank" rel="noopener"><img src="{{asset('img/images/icon-instagram.png')}}" alt="" /></a></li>
                        <li><a href="{!! setting('linkedin_url') !!}" target="_blank" rel="noopener"><img src="{{asset('img/images/icon-linkedin.png')}}" alt="" /></a></li>
                        <li><a href="{!! setting('youtube_url') !!}" target="_blank" rel="noopener"><img src="{{asset('img/images/icon-youtube.png')}}" alt="" /></a></li>
                    </ul>
                    <div class="footer-title">Gönderi Takip İş Ortaklarımız</div>
                    <ul class="footer-partners">
                        <li><a href="https://www.aftership.com/" target="_blank"><img src="{{asset('img/images/logo-aftership.png')}}" alt="" /></a></li>
                        <li><a href="https://www.17track.net/" target="_blank"><img src="{{asset('img/images/logo-17-track.png')}}" alt="" /></a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <div class="inner-15">
                        <div class="footer-block">
                            <div class="footer-title">Kurumsal</div>
                            <ul>
                                <li><a href="/biz-kimiz">Biz Kimiz</a></li>
                                <li><a href="/kvkk">KVKK</a></li>
                                <li><a href="/iletisim">İletişim</a></li>
                                <li><a href="/yetki-belgeleri">Belgeler ve Sertifikalar</a></li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-title">Hizmetlerimiz</div>
                            @php $hizmetler = Modules\Article\Entities\Post::where('type','News')->where('status',1)->get(); $i =1; @endphp
                            <ul>
                                <li>
                                    <a href="/e-ticaret-sistemleri">E-Ticaret Yazılım</a>
                                </li>
                                <li>
                                    <a href="/reklam-hizmetleri">Reklam Hizmetleri</a>
                                </li>
                                @if(count($hizmetler)>0)
                                    @foreach($hizmetler as $item)
                                        <li>
                                            <a href="/sayfa/{{encode_id($item->id).'/'.$item->slug}}">{{$item->name}}</a>
                                        </li>
                                    @endforeach
                                @endif

                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-title">Diğer</div>
                            <ul>
                                <li><a href="/gonderi-takip">Gönderi Takip</a></li>
                                <li><a href="/hemen-teklif-al">Hemen Teklif Al</a></li>
                                <li><a href="#" target="_blank" rel="noopener">Kargo Gönder</a></li>

                                <li><a href="/cerez-politikasi">Çerez Politikası</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="w100 left-80 right-80">
                    <div class="fl">{!! setting('footer_text') !!}</div>
                    <div class="fr">designed by <a href="https://cmapps.com.tr/" target="_blank">CM Apps A.Ş</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
