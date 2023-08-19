@extends('frontend.layouts.app')

@section('title') Çerez Politikaları - {{ config('app.name') }} @endsection

@section('content')
    @php
     $domain = Request::getHost();

    @endphp
    <div class="w100 sub-page-wrap bottom-100">
        <div class="sub-hero"><img src="{{asset('img/images/header-image.jpg')}}" alt="" /></div>
        <div class="wrap">
            <div class="page-title page-title-left"><strong>&#199;erez Politikası    </strong></div>
            <div class="page-about page-about-left">
                <p>Bu bildirimi internet sitemizden en verimli şekilde faydalanabilmeniz ve kullanıcı deneyiminizi geliştirebilmek için kullanıyoruz.</p>
                <p><b><br />Çerez Nedir?</b></p>
                <p>Çerez, bir web sitesini ziyaret ettiğinizde bilgisayarınıza gönderilen ve bir dizi karakter içeren küçük bir dosyadır. Çerezler, herhangi bir web sitesini ilk kez ziyaret ettiğiniz zaman, tarayıcınız aracılığıyla cihazınıza depolanabilirler. Aynı siteyi aynı cihazla tekrar ziyaret ettiğinizde tarayıcınız cihazınızda site adına kayıtlı bir çerez olup olmadığını kontrol eder. Eğer kayıt var ise, kaydın içerisinde var olan veriyi ziyaret etmekte olduğunuz web sitesine iletir. Bu sayede web sitesi, sizin siteyi daha önce ziyaret ettiğinizi anlar ve size iletilecek içeriği de ona göre tayin eder.</p>
                <p><b><br />Çerezler Neden Kullanılır?</b></p>
                <p>Bazı çerezler, daha önceki ziyaretlerinizde kullandığınız tercihlerin web sitesi tarafından hatırlanmasını sağlayarak, sonraki ziyaretlerinizin çok daha kullanıcı dostu ve kişiselleştirilmiş bir deneyim sunmasını sağlar.</p>
                <p>Ayrıca, web sitesinde bulunan üçüncü taraflara ait linkler, bu üçüncü taraflara ait gizlilik politikalarına tabi olmakla birlikte, gizlilik uygulamalarına ait sorumluluk {{$domain}}’ye ait olmamaktadır ve bu bağlamda ilgili link kapsamındaki site ziyaret edildiğinde siteye ait gizlilik politikasının okunması önerilmektedir.</p>
                <p><b><br />Çerez Türleri</b></p>
                <p>Esas kullanım amacı kullanıcılara kolaylık sağlamak olan çerezler temel olarak 4 ana grupta toplanır.</p>
                <p><b>- Oturum Çerezleri:</b>Internet sayfaları arasında bilgi taşınması ve kullanıcı tarafından girilen bilgilerin sistemsel olarak hatırlanması gibi çeşitli özelliklerden faydalanmaya olanak sağlayan çerezlerdir ve internet sitesine ait fonksiyonların düzgün bir şekilde işleyebilmesi için gereklidir.</p>
                <p><b>- Performans Çerezleri:</b>Sayfaların ziyaret edilme frekansı, olası hata iletileri, kullanıcıların ilgili sayfada harcadıkları toplam zaman ile birlikte siteyi kullanım desenleri konularında bilgi toplayan çerezlerdir ve internet sitesinin performansını arttırma amacıyla kullanılmaktadır.</p>
                <p><b>- Fonksiyonel Çerezler:</b>Kullanıcıya kolaylık sağlanması amacıyla önceden seçili olan seçeneklerin hatırlatılmasını sağlayan çerezlerdir ve internet sitesi kapsamında kullanıcılara gelişmiş Internet özellikleri sağlanmasını hedeflemektedir.</p>
                <p><b>- Reklam Ve Üçüncü Taraf Çerezleri:</b>Üçüncü parti tedarikçilere ait çerezlerdir ve internet sitesindeki bazı fonksiyonların kullanımına ve reklam takibinin yapılmasına olanak sağlamaktadır.</p>
                <p><b><br />Çerezlerin Kullanım Amaçları</b></p>
                <p>{{$domain}} tarafından kullanılmakta olan çerezlere ait kullanım amaçları aşağıdaki gibidir:</p>
                <p><b>- Güvenlik amaçlı kullanımlar:</b> {{$domain}}, sistemlerinin idaresi ve güvenliğinin sağlanması amacıyla, bu sitedeki fonksiyonlardan yararlanmayı sağlayan veya düzensiz davranışları tespit eden çerezler kullanabilmektedir.</p>
                <p><b>- İşlevselliğe yönelik kullanımlar:</b> {{$domain}}, sistemlerinin kullanımını kolaylaştırmak ve kullanıcı özelinde kullanım özellikleri sağlamak amacıyla, kullanıcıların bilgilerini ve geçmiş seçimlerini hatırlatan çerezler kullanabilmektedir.</p>
                <p><b>- Performansa yönelik kullanımlar:</b> {{$domain}}, sistemlerinin performansının artırılması ve ölçülmesi amacıyla, gönderilen iletilerle olan etkileşimi ve kullanıcı davranışlarını değerlendiren ve analiz eden çerezler kullanabilmektedir.</p>
                <p><b>- Reklam amaçlı kullanımlar:</b> {{$domain}}, kendine veya üçüncü taraflara ait sistemlerin üzerinden kullanıcıların ilgi alanları kapsamında reklam ve benzeri içeriklerin iletilmesi amacıyla, bu reklamların etkinliğini ölçen veya tıklanma durumunu analiz eden çerezler kullanabilmektedir.</p>
                <p><b><br />Çerezleri Kontrol Etme ve Silme</b></p>
                <p>Çerezlerin kullanımına ilişkin tercihlerinizi değiştirmek, çerezleri engellemek ya da silmek için tarayıcınızın ayarlarını değiştirmeniz yeterlidir. Birçok tarayıcı çerezleri kontrol edebilmeniz için size çerezleri kabul etme ya da reddetme, yalnızca belirli türdeki çerezleri kabul etme ve bir web sitesi cihazınıza çerez depolamayı talep ettiğinde tarayıcı tarafından uyarılma seçeneği sunar. Aynı zamanda daha önce tarayıcınıza kaydedilmiş çerezlerin silinmesi de mümkündür. Çerezlerin kontrol edilmesine veya silinmesine ilişkin işlemler kullandığınız tarayıcıya göre değişebilmektedir.</p>
                <p>Çerez kullanım seçiminin değiştirilmesine ait yöntem, tarayıcı tipine bağlı olarak değişmekte olup, ilgili hizmet sağlayıcıdan dilendiği zaman öğrenilebilmektedir.</p>
            </div>
        </div>
    </div>
@endsection
