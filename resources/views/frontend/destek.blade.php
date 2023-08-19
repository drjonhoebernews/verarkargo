@extends('frontend.layouts.app')

@section('title') Müşteri Destek - {{ config('app.name') }} @endsection

@section('content')
    <div class="w100 sub-page-wrap">
        <div class="sub-hero"><img src="{{asset('img/images/header-image.jpg')}}" alt="{{ config('app.name') }}" /></div>
        <div class="wrap">
            <div class="page-title page-title-left"><strong>Destek</strong></div>
            <div class="page-about page-about-left"><p>Gönderileriniz ile ilgili soru ve talepleriniz için uzman ekiplerimizden destek alabilirsiniz.<br /> İlgili ekibimiz şikayetinizi 24 saat içerisinde çözümleyecektir. Bizi tercih ettiğiniz için teşekkür ederiz.<br /><br /><strong>Destek Hattı Çalışma Saatlerimiz</strong></p>
                <table>
                    <tbody>
                    <tr>
                        <th>Hafta içi</th>
                        <td style="width: 15px; text-align: center;">:</td>
                        <td>08.30 - 17.30</td>
                    </tr>
                    <tr>
                        <th>Cumartesi</th>
                        <td style="width: 15px; text-align: center;">:</td>
                        <td><span>09.00-15.00</span></td>
                    </tr>
                    </tbody>
                </table>
                <p>0850 270 03 34 - <a href="mailto:kargo@verarkargo.com.tr"><span class="__cf_email__" data-cfemail="9af9e9daeaeee9b4f4ffee">kargo@verarkargo.com.tr</span></a></p>
                <p></p>
                <p>Şikayetleri ele alma politikamız için lütfen <strong><a data-fancybox="" data-src="#modal">tıklayınız</a></strong>.</p>
                <div style="display: none; width: 50%;" id="modal">
                    <p>- Şikayetlerin ele alınmasında müşteri memnuniyeti asıl ve zorunlu koşuldur.</p>
                    <p>- İç ve dış müşterilerimizin şikayetlerini en kolay ve en anlaşılır şekilde iletebilmeleri için gerekli ortamları yaratır ve geliştiririz.</p>
                    <p>- Tüm Verar Kargo çalışanları müşteri şikayetlerinin çözülmesinden sorumludur.</p>
                    <p>- Bize farklı yollarla ulaşan müşteri şikayetlerini düzenli olarak raporlar, analiz eder ve şikayetlerin tekrar etmemesi için gerekli önlemleri hayata geçiririz.</p>
                    <p>- Çalışanlarımızın müşteri şikayetlerini müşteri memnuniyetine dönüştürmek için ihtiyacı olan yetkinlikleri ve ortamları sürekli iyileştirmeye ve geliştirmeye çalışırız.</p>
                    <p>- Bizim için müşteri şikayetleri, müşterilerimize daha iyi hizmet verebilmemiz için kendimizi geliştirme fırsatları demektir. Müşteri şikayetlerini hizmet kalitemizi sürekli iyileştirmek için gerekli bilgiler olarak değerlendiririz.</p>
                </div></div>
            <div class="contact-form">
                <div class="inner-15">
                    <form action="#" method="post">
                        <div class="form-item"><input required="required" type="text" name="name" id="name" placeholder="Adınız, Soyadınız" class="input"></div>
                        <div class="form-item"><input required="required" type="email" name="email" id="email" placeholder="E-Posta" class="input"></div>
                        <div class="form-item"><input required="required" type="text" name="phone" id="phone" placeholder="Telefon" class="input" pattern="^[0-9]{0,15}$" maxlength="15" oninvalid="setCustomValidity('Telefon numaranızı kontrol ediniz.')" onchange="try{setCustomValidity('')}catch(e){}"></div>
                        <div class="form-item">
                            <select name="subject" id="subject" class="input select" required>
                                <option value="">Konu seçiniz</option>
                                <option value="Gönderi hakkında bilgi talebi">Gönderi hakkında bilgi talebi</option>
                                <option value="Şikayet">Şikayet</option>
                                <option value="Görüş-Öneri-Talep">Görüş-Öneri-Talep</option>
                                <option value="Teşekkür">Teşekkür</option>
                            </select>
                        </div>
                        <div class="form-item" style="display:none;"><input type="text" name="gonderitakip" id="gonderitakip" placeholder="Gönderi Kodu" class="input"></div>
                        <div class="form-item w100"><textarea required="required" name="message" class="input" id="message" cols="500" rows="5" style="height:100px;" placeholder="Mesajınız"></textarea></div>
                        <div class="form-item"><p class="g-recaptcha w100 captcha security-code" data-sitekey="6LesGM0UAAAAAG820E7DoEXvfsr9Exm_d7aUCaL-"></p></div>
                        <div class="form-item w100"><button id="send" class="button">Mesajı Gönder</button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <a data-fancybox="inline" data-src="#hidden-content" class="popupimageAlways" style="display:none"></a>
    <div style="display: none;padding:0px;" id="hidden-content">
        <a href="#">
            <img src="{{asset('img/images/covid-11-12-2020.png')}}" style="width:100%;" />
        </a>
    </div>
    <script>
        $('#subject').on('change',function()
        {
            var selected = $(this).val();

            if(selected === "Gönderi hakkında bilgi talebi") {
                $('#gonderitakip').parent().show();
                $('#gonderitakip').prop('required',true);
            }
            else {
                $('#gonderitakip').parent().hide();
                $('#gonderitakip').prop('required',false);
            }
        });
    </script>
@endsection
