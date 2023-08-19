@extends('frontend.layouts.app')

@section('title') Çerez Politikaları - {{ config('app.name') }} @endsection

@section('content')
<div class="w100 sub-page-wrap">
    <div class="sub-hero sub-hero-proposal" style="display:block">
        <img src="{{asset('img/images/sub-proposal.jpg')}}" alt="">
        <div class="wrap"></div>
    </div>
    <div class="wrap">
        <div id="successful" class="proposal-wrap">
            <div class="proposal-left" style="display:block">
                <div class="page-title page-title-left"><strong></strong></div>
                <div class="page-about page-about-left"><p>Uluslararası gönderilerinizi size en uygun çözümlerimizle hızlı, ekonomik ve maksimum güvenlikle taşıyoruz.<br /><br />Gönderi bilgilerinizi bize iletin. Uluslararası deneyime sahip uzman ekibimiz, ihtiyaçlarınıza özel lojistik çözümlerimiz ve fiyatlarımız için sizinle hızlıca iletişime geçsin.</p></div>
            </div>
            <div class="proposal-right" style="display:block">
                <div class="contact-form proposal-form">
                    <div class="inner-15">
                        <form action="#" method="post" onsubmit="return validateForm()" name="form" id="form">
                            <div class="form-item">
                                <div class="proposal-form-title">Adınız, Soyadınız</div>
                                <input required="required" type="text" name="CustomerName" id="CustomerName" placeholder="Adınız, Soyadınız" class="input">
                            </div>
                            <div class="form-item">
                                <div class="proposal-form-title">Gönderi tipi seçiniz</div>
                                <label for="Bireysel" class="CustomerType">
                                    <input type="radio" id="Bireysel" name="CustomerType" value="Bireysel" class="input w100 CustomerType" required>
                                    Bireysel
                                </label>
                                <label for="Kurumsal" class="CustomerType fr">
                                    <input type="radio" id="Kurumsal" name="CustomerType" value="Kurumsal" class="input w100 CustomerType" required>
                                    Kurumsal
                                </label>
                            </div>
                            <div class="form-item">
                                <div class="proposal-form-title">Telefon</div>
                                <input required="required" type="text" name="CustomerPhone" id="CustomerPhone" placeholder="Telefon" class="input">
                            </div>
                            <div class="form-item">
                                <div class="proposal-form-title">E-Posta</div>
                                <input required="required" type="email" name="CustomerEmail" id="CustomerEmail" placeholder="E-Posta" class="input">
                            </div>
                            <div class="form-item w100" style="display:none;">
                                <div class="proposal-form-title">Şirket Ünvanı</div>
                                <input type="text" name="CompanyName" id="CompanyName" placeholder="Şirket Ünvanı" class="input">
                            </div>
                            <div class="form-item">
                                <div class="proposal-form-title">Gönderim sıklığı seçiniz</div>
                                <label for="Bireysel">
                                    <input type="radio" id="Single" name="ShippingFrequency" value="Tek Gönderim" class="input w100 ShippingFrequency" required>
                                    <span class="ShippingFrequencyText">
                                Tek Gönderim
                                <span class="tooltiptext">Tek sefer gönderiminiz için fiyat teklifi alabilirsiniz.</span>
                                </span>
                                </label>
                                <label for="Kurumsal" class="fr">
                                    <input type="radio" id="SürekliGönderim" name="ShippingFrequency" value="Sürekli Gönderim" class="input w100 ShippingFrequency" required>
                                    <span class="ShippingFrequencyText">
                                Sürekli Gönderim
                                <span class="tooltiptext">Birden fazla düzenli gönderimleriniz için size özel fiyat teklifi alabilirsiniz.</span>
                                </span>
                                </label>
                            </div>
                            <div class="form-item" style="display:none;">
                                <div class="proposal-form-title">Aylık Gönderi Adetiniz</div>
                                <select class="input select" data-val="true" data-val-maxlength="The field ShippingFrequencyData must be a string or array type with a maximum length of &#39;70&#39;." data-val-maxlength-max="70" id="ShippingFrequencyData" name="ShippingFrequencyData"><option value="">Aylık G&#246;nderi Adetiniz</option>
                                    <option value="1-10">1-10</option>
                                    <option value="11-25">11-25</option>
                                    <option value="26-50">26-50</option>
                                    <option value="+50 ve üzeri">+50 ve &#252;zeri</option>
                                </select>
                            </div>
                            <div class="w100">
                                <div class="w50">
                                    <div class="form-item w100">
                                        <div class="proposal-form-title">Çıkış ülkesi seçiniz</div>
                                        <select class="input select" data-val="true" data-val-maxlength="The field FromCountry must be a string or array type with a maximum length of &#39;70&#39;." data-val-maxlength-max="70" data-val-required="The FromCountry field is required." id="FromCountry" name="FromCountry" required="required"><option value="">&#199;ıkış &#252;lkesi se&#231;iniz</option>
                                            <option value="TÜRKİYE">T&#220;RKİYE</option>
                                        </select>
                                    </div>
                                    <div class="form-item w100">
                                        <div class="proposal-form-title">Çıkış şehri seçiniz</div>
                                        <select class="input select" data-val="true" data-val-maxlength="The field FromCountryCity must be a string or array type with a maximum length of &#39;70&#39;." data-val-maxlength-max="70" id="FromCountryCity" name="FromCountryCity"><option value="">&#199;ıkış şehri se&#231;iniz</option>
                                            <option value="Adana">Adana</option>
                                            <option value="Adıyaman">Adıyaman</option>
                                            <option value="Afyonkarahisar">Afyonkarahisar</option>
                                            <option value="Ağrı">Ağrı</option>
                                            <option value="Amasya">Amasya</option>
                                            <option value="Ankara">Ankara</option>
                                            <option value="Antalya">Antalya</option>
                                            <option value="Artvin">Artvin</option>
                                            <option value="Aydın">Aydın</option>
                                            <option value="Balıkesir">Balıkesir</option>
                                            <option value="Bilecik">Bilecik</option>
                                            <option value="Bingöl">Bing&#246;l</option>
                                            <option value="Bitlis">Bitlis</option>
                                            <option value="Bolu">Bolu</option>
                                            <option value="Burdur">Burdur</option>
                                            <option value="Bursa">Bursa</option>
                                            <option value="Çanakkale">&#199;anakkale</option>
                                            <option value="Çankırı">&#199;ankırı</option>
                                            <option value="Çorum">&#199;orum</option>
                                            <option value="Denizli">Denizli</option>
                                            <option value="Diyarbakır">Diyarbakır</option>
                                            <option value="Edirne">Edirne</option>
                                            <option value="Elazığ">Elazığ</option>
                                            <option value="Erzincan">Erzincan</option>
                                            <option value="Erzurum">Erzurum</option>
                                            <option value="Eskişehir">Eskişehir</option>
                                            <option value="Gaziantep">Gaziantep</option>
                                            <option value="Giresun">Giresun</option>
                                            <option value="Gümüşhane">G&#252;m&#252;şhane</option>
                                            <option value="Hakkari">Hakkari</option>
                                            <option value="Hatay">Hatay</option>
                                            <option value="Isparta">Isparta</option>
                                            <option value="Mersin">Mersin</option>
                                            <option value="İstanbul">İstanbul</option>
                                            <option value="İzmir">İzmir</option>
                                            <option value="Kars">Kars</option>
                                            <option value="Kastamonu">Kastamonu</option>
                                            <option value="Kayseri">Kayseri</option>
                                            <option value="Kırklareli">Kırklareli</option>
                                            <option value="Kırşehir">Kırşehir</option>
                                            <option value="Kocaeli">Kocaeli</option>
                                            <option value="Konya">Konya</option>
                                            <option value="Kütahya">K&#252;tahya</option>
                                            <option value="Malatya">Malatya</option>
                                            <option value="Manisa">Manisa</option>
                                            <option value="Kahramanmaraş">Kahramanmaraş</option>
                                            <option value="Mardin">Mardin</option>
                                            <option value="Muğla">Muğla</option>
                                            <option value="Muş">Muş</option>
                                            <option value="Nevşehir">Nevşehir</option>
                                            <option value="Niğde">Niğde</option>
                                            <option value="Ordu">Ordu</option>
                                            <option value="Rize">Rize</option>
                                            <option value="Sakarya">Sakarya</option>
                                            <option value="Samsun">Samsun</option>
                                            <option value="Siirt">Siirt</option>
                                            <option value="Sinop">Sinop</option>
                                            <option value="Sivas">Sivas</option>
                                            <option value="Tekirdağ">Tekirdağ</option>
                                            <option value="Tokat">Tokat</option>
                                            <option value="Trabzon">Trabzon</option>
                                            <option value="Tunceli">Tunceli</option>
                                            <option value="Şanlıurfa">Şanlıurfa</option>
                                            <option value="Uşak">Uşak</option>
                                            <option value="Van">Van</option>
                                            <option value="Yozgat">Yozgat</option>
                                            <option value="Zonguldak">Zonguldak</option>
                                            <option value="Aksaray">Aksaray</option>
                                            <option value="Bayburt">Bayburt</option>
                                            <option value="Karaman">Karaman</option>
                                            <option value="Kırıkkale">Kırıkkale</option>
                                            <option value="Batman">Batman</option>
                                            <option value="Şırnak">Şırnak</option>
                                            <option value="Bartın">Bartın</option>
                                            <option value="Ardahan">Ardahan</option>
                                            <option value="Iğdır">Iğdır</option>
                                            <option value="Yalova">Yalova</option>
                                            <option value="Karabük">Karab&#252;k</option>
                                            <option value="Kilis">Kilis</option>
                                            <option value="Osmaniye">Osmaniye</option>
                                            <option value="Düzce">D&#252;zce</option>
                                        </select>
                                    </div>
                                    <div class="form-item w100" style="display: none; padding-bottom:25px; ">
                                        <div class="proposal-form-title">Çıkış ilçesi seçiniz</div>
                                        <select class="input select" data-val="true" data-val-maxlength="The field FromCountryTown must be a string or array type with a maximum length of &#39;70&#39;." data-val-maxlength-max="70" id="FromCountryTown" name="FromCountryTown"><option value="">&#199;ıkış il&#231;esi se&#231;iniz</option>
                                            <option value="Adalar">Adalar</option>
                                            <option value="Bakırköy">Bakırk&#246;y</option>
                                            <option value="Beşiktaş">Beşiktaş</option>
                                            <option value="Beykoz">Beykoz</option>
                                            <option value="Beyoğlu">Beyoğlu</option>
                                            <option value="Çatalca">&#199;atalca</option>
                                            <option value="Eyüp">Ey&#252;p</option>
                                            <option value="Fatih">Fatih</option>
                                            <option value="Gaziosmanpaşa">Gaziosmanpaşa</option>
                                            <option value="Kadıköy">Kadık&#246;y</option>
                                            <option value="Kartal">Kartal</option>
                                            <option value="Sarıyer">Sarıyer</option>
                                            <option value="Silivri">Silivri</option>
                                            <option value="Şile">Şile</option>
                                            <option value="Şişli">Şişli</option>
                                            <option value="Üsküdar">&#220;sk&#252;dar</option>
                                            <option value="Zeytinburnu">Zeytinburnu</option>
                                            <option value="Büyükçekmece">B&#252;y&#252;k&#231;ekmece</option>
                                            <option value="Kağıthane">Kağıthane</option>
                                            <option value="Küçükçekmece">K&#252;&#231;&#252;k&#231;ekmece</option>
                                            <option value="Pendik">Pendik</option>
                                            <option value="Ümraniye">&#220;mraniye</option>
                                            <option value="Bayrampaşa">Bayrampaşa</option>
                                            <option value="Avcılar">Avcılar</option>
                                            <option value="Bağcılar">Bağcılar</option>
                                            <option value="Bahçelievler">Bah&#231;elievler</option>
                                            <option value="Güngören">G&#252;ng&#246;ren</option>
                                            <option value="Maltepe">Maltepe</option>
                                            <option value="Sultanbeyli">Sultanbeyli</option>
                                            <option value="Tuzla">Tuzla</option>
                                            <option value="Esenler">Esenler</option>
                                            <option value="Arnavutköy">Arnavutk&#246;y</option>
                                            <option value="Ataşehir">Ataşehir</option>
                                            <option value="Başakşehir">Başakşehir</option>
                                            <option value="Beylikdüzü">Beylikd&#252;z&#252;</option>
                                            <option value="Çekmeköy">&#199;ekmek&#246;y</option>
                                            <option value="Esenyurt">Esenyurt</option>
                                            <option value="Sancaktepe">Sancaktepe</option>
                                            <option value="Sultangazi">Sultangazi</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="w50">
                                    <div class="form-item w100">
                                        <div class="proposal-form-title">Varış ülkesi seçiniz</div>
                                        <select class="input select" data-val="true" data-val-maxlength="The field ToCountry must be a string or array type with a maximum length of &#39;70&#39;." data-val-maxlength-max="70" data-val-required="The ToCountry field is required." id="ToCountry" name="ToCountry" required="required"><option value="">Varış &#252;lkesi se&#231;iniz</option>
                                            <option value="AFGANİSTAN">AFGANİSTAN</option>
                                            <option value="ARNAVUTLUK">ARNAVUTLUK</option>
                                            <option value="CEZAYİR">CEZAYİR</option>
                                            <option value="AMERİKAN SAMOASI">AMERİKAN SAMOASI</option>
                                            <option value="ANDORRA">ANDORRA</option>
                                            <option value="ANGOLA">ANGOLA</option>
                                            <option value="ANGUİLLA">ANGUİLLA</option>
                                            <option value="ANTİGUA VE BARBUDA">ANTİGUA VE BARBUDA</option>
                                            <option value="ARJANTİN">ARJANTİN</option>
                                            <option value="ERMENİSTAN">ERMENİSTAN</option>
                                            <option value="ARUBA">ARUBA</option>
                                            <option value="AVUSTRALYA">AVUSTRALYA</option>
                                            <option value="AVUSTURYA">AVUSTURYA</option>
                                            <option value="AZERBAYCAN">AZERBAYCAN</option>
                                            <option value="BAHAMALAR">BAHAMALAR</option>
                                            <option value="BAHREYN">BAHREYN</option>
                                            <option value="BANGLADEŞ">BANGLADEŞ</option>
                                            <option value="BARBADOS">BARBADOS</option>
                                            <option value="BELARUS">BELARUS</option>
                                            <option value="BELÇİKA">BEL&#199;İKA</option>
                                            <option value="BELİZE">BELİZE</option>
                                            <option value="BENİN">BENİN</option>
                                            <option value="BERMUDA">BERMUDA</option>
                                            <option value="BUTAN">BUTAN</option>
                                            <option value="BOLİVYA">BOLİVYA</option>
                                            <option value="BOSNA HERSEK">BOSNA HERSEK</option>
                                            <option value="BOTSVANA">BOTSVANA</option>
                                            <option value="BREZİLYA">BREZİLYA</option>
                                            <option value="BRUNEİ DARÜSSALAM">BRUNEİ DAR&#220;SSALAM</option>
                                            <option value="BULGARİSTAN">BULGARİSTAN</option>
                                            <option value="BURKİNA FASO">BURKİNA FASO</option>
                                            <option value="BURUNDİ">BURUNDİ</option>
                                            <option value="KAMBOÇYA">KAMBO&#199;YA</option>
                                            <option value="KAMERUN">KAMERUN</option>
                                            <option value="KANADA">KANADA</option>
                                            <option value="KANARYA ADALARI">KANARYA ADALARI</option>
                                            <option value="CAPE VERDE ADALARI">CAPE VERDE ADALARI</option>
                                            <option value="CAYMAN ADALARI">CAYMAN ADALARI</option>
                                            <option value="ORTA AFRİKA CUMHURİYETİ">ORTA AFRİKA CUMHURİYETİ</option>
                                            <option value="CHAD">CHAD</option>
                                            <option value="ŞİLİ">ŞİLİ</option>
                                            <option value="ÇİN, HALK CUMHURİYETİ">&#199;İN, HALK CUMHURİYETİ</option>
                                            <option value="NOEL ADALARI">NOEL ADALARI</option>
                                            <option value="COCOS ADASI">COCOS ADASI</option>
                                            <option value="KOLOMBİYA">KOLOMBİYA</option>
                                            <option value="KOMOROS">KOMOROS</option>
                                            <option value="KONGO">KONGO</option>
                                            <option value="KONGO, DEMOKRATİK REP">KONGO, DEMOKRATİK REP</option>
                                            <option value="COOK ADALARI">COOK ADALARI</option>
                                            <option value="KOSTA RİKA">KOSTA RİKA</option>
                                            <option value="HIRVATİSTAN">HIRVATİSTAN</option>
                                            <option value="KÜBA">K&#220;BA</option>
                                            <option value="CURACAO">CURACAO</option>
                                            <option value="KIBRIS">KIBRIS</option>
                                            <option value="ÇECHIA">&#199;ECHIA</option>
                                            <option value="DANİMARKA">DANİMARKA</option>
                                            <option value="DJİBUTİ">DJİBUTİ</option>
                                            <option value="DOMİNİKA">DOMİNİKA</option>
                                            <option value="DOMİNİK CUMHURİYETİ">DOMİNİK CUMHURİYETİ</option>
                                            <option value="EKVADOR">EKVADOR</option>
                                            <option value="MISIR">MISIR</option>
                                            <option value="EL SALVADOR">EL SALVADOR</option>
                                            <option value="EKVATOR GİNESİ">EKVATOR GİNESİ</option>
                                            <option value="ERİTRE">ERİTRE</option>
                                            <option value="ESTONYA">ESTONYA</option>
                                            <option value="ETİYOPYA">ETİYOPYA</option>
                                            <option value="FALKLAND ADALARI">FALKLAND ADALARI</option>
                                            <option value="FAROE ADALARI">FAROE ADALARI</option>
                                            <option value="FİJİ">FİJİ</option>
                                            <option value="FİNLANDİYA">FİNLANDİYA</option>
                                            <option value="FRANSA">FRANSA</option>
                                            <option value="FRANSIZ GUYANASI">FRANSIZ GUYANASI</option>
                                            <option value="FRANSIZ POLİNEZYASI">FRANSIZ POLİNEZYASI</option>
                                            <option value="GABON">GABON</option>
                                            <option value="GAMBİYA">GAMBİYA</option>
                                            <option value="GÜRCİSTAN">G&#220;RCİSTAN</option>
                                            <option value="ALMANYA">ALMANYA</option>
                                            <option value="GANA">GANA</option>
                                            <option value="CEBELİTARIK">CEBELİTARIK</option>
                                            <option value="YUNANİSTAN">YUNANİSTAN</option>
                                            <option value="GRÖNLAND">GR&#214;NLAND</option>
                                            <option value="GRENADA">GRENADA</option>
                                            <option value="GUADELOUPE">GUADELOUPE</option>
                                            <option value="GUAM">GUAM</option>
                                            <option value="GUATEMALA">GUATEMALA</option>
                                            <option value="GUERNSEY">GUERNSEY</option>
                                            <option value="GİNE">GİNE</option>
                                            <option value="GİNE-BİSSAU">GİNE-BİSSAU</option>
                                            <option value="GUYANA">GUYANA</option>
                                            <option value="HAİTİ">HAİTİ</option>
                                            <option value="HONDURAS">HONDURAS</option>
                                            <option value="HONG KONG">HONG KONG</option>
                                            <option value="MACARİSTAN">MACARİSTAN</option>
                                            <option value="İZLANDA">İZLANDA</option>
                                            <option value="HİNDİSTAN">HİNDİSTAN</option>
                                            <option value="ENDONEZYA">ENDONEZYA</option>
                                            <option value="IRAK">IRAK</option>
                                            <option value="İRLANDA, CUMHURİYETİ">İRLANDA, CUMHURİYETİ</option>
                                            <option value="İSRAİL">İSRAİL</option>
                                            <option value="İTALYA">İTALYA</option>
                                            <option value="FİLDİŞİ SAHİLİ">FİLDİŞİ SAHİLİ</option>
                                            <option value="JAMAİKA">JAMAİKA</option>
                                            <option value="JAPONYA">JAPONYA</option>
                                            <option value="JERSEY">JERSEY</option>
                                            <option value="ÜRDÜN">&#220;RD&#220;N</option>
                                            <option value="KAZAKİSTAN">KAZAKİSTAN</option>
                                            <option value="KENYA">KENYA</option>
                                            <option value="KİRİBATİ">KİRİBATİ</option>
                                            <option value="KORE CUMHURİYETİ">KORE CUMHURİYETİ</option>
                                            <option value="KOSOVA">KOSOVA</option>
                                            <option value="KUVEYT">KUVEYT</option>
                                            <option value="KIRGIZİSTAN">KIRGIZİSTAN</option>
                                            <option value="LAO HALK DEMOKRATİK CUMHURİYETİ">LAO HALK DEMOKRATİK CUMHURİYETİ</option>
                                            <option value="LETONYA">LETONYA</option>
                                            <option value="LÜBNAN">L&#220;BNAN</option>
                                            <option value="LESOTO">LESOTO</option>
                                            <option value="LİBERYA">LİBERYA</option>
                                            <option value="LİBYAN AR.JAMAHİRİYA">LİBYAN AR.JAMAHİRİYA</option>
                                            <option value="LİECHTENSTEİN">LİECHTENSTEİN</option>
                                            <option value="LİTVANYA">LİTVANYA</option>
                                            <option value="LÜKSEMBURG">L&#220;KSEMBURG</option>
                                            <option value="MAKAO">MAKAO</option>
                                            <option value="MAKEDONYA">MAKEDONYA</option>
                                            <option value="MADAGASKAR">MADAGASKAR</option>
                                            <option value="MALAWİ">MALAWİ</option>
                                            <option value="MALEZYA">MALEZYA</option>
                                            <option value="MALDİVLER">MALDİVLER</option>
                                            <option value="MALİ">MALİ</option>
                                            <option value="MALTA">MALTA</option>
                                            <option value="MARŞAL ADALARI">MARŞAL ADALARI</option>
                                            <option value="MARTİNİQUE">MARTİNİQUE</option>
                                            <option value="MORİTANYA">MORİTANYA</option>
                                            <option value="MAURİTİUS">MAURİTİUS</option>
                                            <option value="MAYO">MAYO</option>
                                            <option value="MEKSİKA">MEKSİKA</option>
                                            <option value="MİKRONEZYA">MİKRONEZYA</option>
                                            <option value="MOLDOVA, CUMHURİYETİ">MOLDOVA, CUMHURİYETİ</option>
                                            <option value="MONAKO">MONAKO</option>
                                            <option value="MOĞOLİSTAN">MOĞOLİSTAN</option>
                                            <option value="KARADAĞ">KARADAĞ</option>
                                            <option value="MONTSERRAT">MONTSERRAT</option>
                                            <option value="FAS">FAS</option>
                                            <option value="MOZAMBİK">MOZAMBİK</option>
                                            <option value="MYANMAR">MYANMAR</option>
                                            <option value="NAMİBYA">NAMİBYA</option>
                                            <option value="NAURU">NAURU</option>
                                            <option value="NEPAL">NEPAL</option>
                                            <option value="HOLLANDA ANTİLLERİ">HOLLANDA ANTİLLERİ</option>
                                            <option value="HOLLANDA">HOLLANDA</option>
                                            <option value="NEVİS">NEVİS</option>
                                            <option value="YENİ KALEDONYA">YENİ KALEDONYA</option>
                                            <option value="YENİ ZELANDA">YENİ ZELANDA</option>
                                            <option value="NİKARAGUA">NİKARAGUA</option>
                                            <option value="NİJER">NİJER</option>
                                            <option value="NİJERYA">NİJERYA</option>
                                            <option value="NİUE">NİUE</option>
                                            <option value="NORVEÇ">NORVE&#199;</option>
                                            <option value="NOTERN MARİANA ADASI">NOTERN MARİANA ADASI</option>
                                            <option value="UMMAN">UMMAN</option>
                                            <option value="PAKİSTAN">PAKİSTAN</option>
                                            <option value="PALAU">PALAU</option>
                                            <option value="FİLİSTİN">FİLİSTİN</option>
                                            <option value="PANAMA">PANAMA</option>
                                            <option value="PAPUA YENİ GİNE">PAPUA YENİ GİNE</option>
                                            <option value="PARAGUAY">PARAGUAY</option>
                                            <option value="PERU">PERU</option>
                                            <option value="FİLİPİNLER">FİLİPİNLER</option>
                                            <option value="POLONYA">POLONYA</option>
                                            <option value="PORTEKİZ">PORTEKİZ</option>
                                            <option value="PORTO RİKO">PORTO RİKO</option>
                                            <option value="QATAR">QATAR</option>
                                            <option value="YENİDEN BİRLEŞME">YENİDEN BİRLEŞME</option>
                                            <option value="ROMANYA">ROMANYA</option>
                                            <option value="RUSYA FEDERASYONU">RUSYA FEDERASYONU</option>
                                            <option value="RUANDA">RUANDA</option>
                                            <option value="SAİNT LUCİA">SAİNT LUCİA</option>
                                            <option value="SAMOA">SAMOA</option>
                                            <option value="SAN MARİNO">SAN MARİNO</option>
                                            <option value="SAO TOME &amp; PRİNCİPE">SAO TOME &amp; PRİNCİPE</option>
                                            <option value="SUUDİ ARABİSTAN">SUUDİ ARABİSTAN</option>
                                            <option value="SENEGAL">SENEGAL</option>
                                            <option value="SIRBİSTAN">SIRBİSTAN</option>
                                            <option value="SEYŞELLER">SEYŞELLER</option>
                                            <option value="SİERRA LEONE">SİERRA LEONE</option>
                                            <option value="SİNGAPUR">SİNGAPUR</option>
                                            <option value="SLOVAKYA">SLOVAKYA</option>
                                            <option value="SLOVENYA">SLOVENYA</option>
                                            <option value="SOLOMON ADALARI">SOLOMON ADALARI</option>
                                            <option value="SOMALİ">SOMALİ</option>
                                            <option value="SOMALİLAND">SOMALİLAND</option>
                                            <option value="GÜNEY AFRİKA">G&#220;NEY AFRİKA</option>
                                            <option value="İSPANYA">İSPANYA</option>
                                            <option value="SRİ LANKA">SRİ LANKA</option>
                                            <option value="NS. MAARTEN">NS. MAARTEN</option>
                                            <option value="ST.KİTTS VE NEVİS">ST.KİTTS VE NEVİS</option>
                                            <option value="ST.MAARTEN">ST.MAARTEN</option>
                                            <option value="ST.PİERRE &amp; MİQUELON">ST.PİERRE &amp; MİQUELON</option>
                                            <option value="VİNCENT SOKAĞI">VİNCENT SOKAĞI</option>
                                            <option value="SUDAN">SUDAN</option>
                                            <option value="SUDAN GÜNEY">SUDAN G&#220;NEY</option>
                                            <option value="SURİNAM">SURİNAM</option>
                                            <option value="SVAZİLAND">SVAZİLAND</option>
                                            <option value="İSVEÇ">İSVE&#199;</option>
                                            <option value="İSVİÇRE">İSVİ&#199;RE</option>
                                            <option value="SURİYE ARAP CUMHURİYETİ">SURİYE ARAP CUMHURİYETİ</option>
                                            <option value="TAYVAN">TAYVAN</option>
                                            <option value="TANZANYA CUMHURİYETİ">TANZANYA CUMHURİYETİ</option>
                                            <option value="TAYLAND">TAYLAND</option>
                                            <option value="TİMOR DOĞU">TİMOR DOĞU</option>
                                            <option value="GİTMEK">GİTMEK</option>
                                            <option value="TONGA">TONGA</option>
                                            <option value="TRİNİDAD">TRİNİDAD</option>
                                            <option value="KKTC">KKTC</option>
                                            <option value="TUNUS">TUNUS</option>
                                            <option value="TURKS VE CAICOS ADASI">TURKS VE CAICOS ADASI</option>
                                            <option value="TUVAL">TUVAL</option>
                                            <option value="AMERİKA BİRLEŞİK DEVLETLERİ.">AMERİKA BİRLEŞİK DEVLETLERİ.</option>
                                            <option value="UGANDA">UGANDA</option>
                                            <option value="UKRAYNA">UKRAYNA</option>
                                            <option value="BİRLEŞİK ARAP EMİRLİKLERİ">BİRLEŞİK ARAP EMİRLİKLERİ</option>
                                            <option value="BİRLEŞİK KRALLIK">BİRLEŞİK KRALLIK</option>
                                            <option value="URUGUAY">URUGUAY</option>
                                            <option value="ABD AZINLIKLAR">ABD AZINLIKLAR</option>
                                            <option value="ÖZBEKİSTAN">&#214;ZBEKİSTAN</option>
                                            <option value="VANUATU">VANUATU</option>
                                            <option value="VENEZUELA">VENEZUELA</option>
                                            <option value="VİETNAM">VİETNAM</option>
                                            <option value="VİRGİN ADALARI-UK">VİRGİN ADALARI-UK</option>
                                            <option value="VİRGİN ADALARI-ABD">VİRGİN ADALARI-ABD</option>
                                            <option value="WALLİS VE FUTUNA ADASI">WALLİS VE FUTUNA ADASI</option>
                                            <option value="YEMEN">YEMEN</option>
                                            <option value="ZAİRE">ZAİRE</option>
                                            <option value="ZAMBİYA">ZAMBİYA</option>
                                            <option value="ZİMBABWE">ZİMBABWE</option>
                                            <option value="DİĞER ÜLKELER">DİĞER &#220;LKELER</option>
                                        </select>
                                    </div>
                                    <div class="form-item w100" style="display: none;">
                                        <div class="proposal-form-title">Varış şehri seçiniz</div>
                                        <select class="input select" data-val="true" data-val-maxlength="The field ToCountryCity must be a string or array type with a maximum length of &#39;70&#39;." data-val-maxlength-max="70" id="ToCountryCity" name="ToCountryCity"><option value="">Varış şehri se&#231;iniz</option>
                                            <option value="Adana">Adana</option>
                                            <option value="Adıyaman">Adıyaman</option>
                                            <option value="Afyonkarahisar">Afyonkarahisar</option>
                                            <option value="Ağrı">Ağrı</option>
                                            <option value="Amasya">Amasya</option>
                                            <option value="Ankara">Ankara</option>
                                            <option value="Antalya">Antalya</option>
                                            <option value="Artvin">Artvin</option>
                                            <option value="Aydın">Aydın</option>
                                            <option value="Balıkesir">Balıkesir</option>
                                            <option value="Bilecik">Bilecik</option>
                                            <option value="Bingöl">Bing&#246;l</option>
                                            <option value="Bitlis">Bitlis</option>
                                            <option value="Bolu">Bolu</option>
                                            <option value="Burdur">Burdur</option>
                                            <option value="Bursa">Bursa</option>
                                            <option value="Çanakkale">&#199;anakkale</option>
                                            <option value="Çankırı">&#199;ankırı</option>
                                            <option value="Çorum">&#199;orum</option>
                                            <option value="Denizli">Denizli</option>
                                            <option value="Diyarbakır">Diyarbakır</option>
                                            <option value="Edirne">Edirne</option>
                                            <option value="Elazığ">Elazığ</option>
                                            <option value="Erzincan">Erzincan</option>
                                            <option value="Erzurum">Erzurum</option>
                                            <option value="Eskişehir">Eskişehir</option>
                                            <option value="Gaziantep">Gaziantep</option>
                                            <option value="Giresun">Giresun</option>
                                            <option value="Gümüşhane">G&#252;m&#252;şhane</option>
                                            <option value="Hakkari">Hakkari</option>
                                            <option value="Hatay">Hatay</option>
                                            <option value="Isparta">Isparta</option>
                                            <option value="Mersin">Mersin</option>
                                            <option value="İstanbul">İstanbul</option>
                                            <option value="İzmir">İzmir</option>
                                            <option value="Kars">Kars</option>
                                            <option value="Kastamonu">Kastamonu</option>
                                            <option value="Kayseri">Kayseri</option>
                                            <option value="Kırklareli">Kırklareli</option>
                                            <option value="Kırşehir">Kırşehir</option>
                                            <option value="Kocaeli">Kocaeli</option>
                                            <option value="Konya">Konya</option>
                                            <option value="Kütahya">K&#252;tahya</option>
                                            <option value="Malatya">Malatya</option>
                                            <option value="Manisa">Manisa</option>
                                            <option value="Kahramanmaraş">Kahramanmaraş</option>
                                            <option value="Mardin">Mardin</option>
                                            <option value="Muğla">Muğla</option>
                                            <option value="Muş">Muş</option>
                                            <option value="Nevşehir">Nevşehir</option>
                                            <option value="Niğde">Niğde</option>
                                            <option value="Ordu">Ordu</option>
                                            <option value="Rize">Rize</option>
                                            <option value="Sakarya">Sakarya</option>
                                            <option value="Samsun">Samsun</option>
                                            <option value="Siirt">Siirt</option>
                                            <option value="Sinop">Sinop</option>
                                            <option value="Sivas">Sivas</option>
                                            <option value="Tekirdağ">Tekirdağ</option>
                                            <option value="Tokat">Tokat</option>
                                            <option value="Trabzon">Trabzon</option>
                                            <option value="Tunceli">Tunceli</option>
                                            <option value="Şanlıurfa">Şanlıurfa</option>
                                            <option value="Uşak">Uşak</option>
                                            <option value="Van">Van</option>
                                            <option value="Yozgat">Yozgat</option>
                                            <option value="Zonguldak">Zonguldak</option>
                                            <option value="Aksaray">Aksaray</option>
                                            <option value="Bayburt">Bayburt</option>
                                            <option value="Karaman">Karaman</option>
                                            <option value="Kırıkkale">Kırıkkale</option>
                                            <option value="Batman">Batman</option>
                                            <option value="Şırnak">Şırnak</option>
                                            <option value="Bartın">Bartın</option>
                                            <option value="Ardahan">Ardahan</option>
                                            <option value="Iğdır">Iğdır</option>
                                            <option value="Yalova">Yalova</option>
                                            <option value="Karabük">Karab&#252;k</option>
                                            <option value="Kilis">Kilis</option>
                                            <option value="Osmaniye">Osmaniye</option>
                                            <option value="Düzce">D&#252;zce</option>
                                        </select>
                                    </div>
                                    <div class="form-item w100" style="display: none; padding-bottom:25px; ">
                                        <div class="proposal-form-title">Varış ilçesi seçiniz</div>
                                        <select class="input select" data-val="true" data-val-maxlength="The field ToCountryTown must be a string or array type with a maximum length of &#39;70&#39;." data-val-maxlength-max="70" id="ToCountryTown" name="ToCountryTown"><option value="">Varış il&#231;esi se&#231;iniz</option>
                                            <option value="Adalar">Adalar</option>
                                            <option value="Bakırköy">Bakırk&#246;y</option>
                                            <option value="Beşiktaş">Beşiktaş</option>
                                            <option value="Beykoz">Beykoz</option>
                                            <option value="Beyoğlu">Beyoğlu</option>
                                            <option value="Çatalca">&#199;atalca</option>
                                            <option value="Eyüp">Ey&#252;p</option>
                                            <option value="Fatih">Fatih</option>
                                            <option value="Gaziosmanpaşa">Gaziosmanpaşa</option>
                                            <option value="Kadıköy">Kadık&#246;y</option>
                                            <option value="Kartal">Kartal</option>
                                            <option value="Sarıyer">Sarıyer</option>
                                            <option value="Silivri">Silivri</option>
                                            <option value="Şile">Şile</option>
                                            <option value="Şişli">Şişli</option>
                                            <option value="Üsküdar">&#220;sk&#252;dar</option>
                                            <option value="Zeytinburnu">Zeytinburnu</option>
                                            <option value="Büyükçekmece">B&#252;y&#252;k&#231;ekmece</option>
                                            <option value="Kağıthane">Kağıthane</option>
                                            <option value="Küçükçekmece">K&#252;&#231;&#252;k&#231;ekmece</option>
                                            <option value="Pendik">Pendik</option>
                                            <option value="Ümraniye">&#220;mraniye</option>
                                            <option value="Bayrampaşa">Bayrampaşa</option>
                                            <option value="Avcılar">Avcılar</option>
                                            <option value="Bağcılar">Bağcılar</option>
                                            <option value="Bahçelievler">Bah&#231;elievler</option>
                                            <option value="Güngören">G&#252;ng&#246;ren</option>
                                            <option value="Maltepe">Maltepe</option>
                                            <option value="Sultanbeyli">Sultanbeyli</option>
                                            <option value="Tuzla">Tuzla</option>
                                            <option value="Esenler">Esenler</option>
                                            <option value="Arnavutköy">Arnavutk&#246;y</option>
                                            <option value="Ataşehir">Ataşehir</option>
                                            <option value="Başakşehir">Başakşehir</option>
                                            <option value="Beylikdüzü">Beylikd&#252;z&#252;</option>
                                            <option value="Çekmeköy">&#199;ekmek&#246;y</option>
                                            <option value="Esenyurt">Esenyurt</option>
                                            <option value="Sancaktepe">Sancaktepe</option>
                                            <option value="Sultangazi">Sultangazi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-item w100">
                                <div class="proposal-form-title ShippingTypeLi-title">GÖNDERİ TÜRÜ</div>
                                <div class="proposal-types">
                                    <div class="inner-15">
                                        <ul class="ShippingTypeLi">
                                            <li><article id="Döküman"><img src="{{asset('img/images/icon-document.png')}}" alt="" /><i>Döküman</i></article></li>
                                            <li><article id="Paket"><img src="{{asset('img/images/icon-box.png')}}" alt="" /><i>Paket</i></article></li>
                                            <li><article id="Koli"><img src="{{asset('img/images/icon-weight.png')}}" alt="" /><i>Koli</i></article></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <input type="text" name="ShippingType" id="ShippingType" value="" style="display:none" required>
                            <div class="form-item w100 weightDoc" id="weightDoc" style="display:none">
                                <div class="proposal-form-title">LÜTFEN GÖNDERİ AĞIRLIĞINI GİRİNİZ</div>
                                <div class="proposal-heavy-load">
                                    <div class="inner-10">
                                        <section><select class="input select" id="weightDoc" name="weightDoc"><option value="">Paket ağırlığı se&#231;iniz</option>
                                                <option value="0,5 kg">0,5 kg</option>
                                                <option value="1 kg">1 kg</option>
                                                <option value="1,5 kg">1,5 kg</option>
                                                <option value="2 kg">2 kg</option>
                                                <option value="2,5 kg">2,5 kg</option>
                                                <option value="3 kg">3 kg</option>
                                                <option value="3,5 kg">3,5 kg</option>
                                                <option value="4 kg">4 kg</option>
                                                <option value="4,5 kg">4,5 kg</option>
                                                <option value="5 kg">5 kg</option>
                                                <option value="5,5 kg">5,5 kg</option>
                                                <option value="6 kg">6 kg</option>
                                                <option value="6,5 kg">6,5 kg</option>
                                                <option value="7 kg">7 kg</option>
                                                <option value="7,5 kg">7,5 kg</option>
                                                <option value="8 kg">8 kg</option>
                                                <option value="8,5 kg">8,5 kg</option>
                                                <option value="9 kg">9 kg</option>
                                                <option value="9,5 kg">9,5 kg</option>
                                                <option value="10 kg">10 kg</option>
                                                <option value="10,5 kg">10,5 kg</option>
                                                <option value="11 kg">11 kg</option>
                                                <option value="11,5 kg">11,5 kg</option>
                                                <option value="12 kg">12 kg</option>
                                                <option value="12,5 kg">12,5 kg</option>
                                                <option value="13 kg">13 kg</option>
                                                <option value="13,5 kg">13,5 kg</option>
                                                <option value="14 kg">14 kg</option>
                                                <option value="14,5 kg">14,5 kg</option>
                                                <option value="15 kg">15 kg</option>
                                                <option value="15,5 kg">15,5 kg</option>
                                                <option value="16 kg">16 kg</option>
                                                <option value="16,5 kg">16,5 kg</option>
                                                <option value="17 kg">17 kg</option>
                                                <option value="17,5 kg">17,5 kg</option>
                                                <option value="18 kg">18 kg</option>
                                                <option value="18,5 kg">18,5 kg</option>
                                                <option value="19 kg">19 kg</option>
                                                <option value="19,5 kg">19,5 kg</option>
                                                <option value="20 kg">20 kg</option>
                                                <option value="20,5 kg">20,5 kg</option>
                                                <option value="21 kg">21 kg</option>
                                                <option value="21,5 kg">21,5 kg</option>
                                                <option value="22 kg">22 kg</option>
                                                <option value="22,5 kg">22,5 kg</option>
                                                <option value="23 kg">23 kg</option>
                                                <option value="23,5 kg">23,5 kg</option>
                                                <option value="24 kg">24 kg</option>
                                                <option value="24,5 kg">24,5 kg</option>
                                                <option value="25 kg">25 kg</option>
                                                <option value="25,5 kg">25,5 kg</option>
                                                <option value="26 kg">26 kg</option>
                                                <option value="26,5 kg">26,5 kg</option>
                                                <option value="27 kg">27 kg</option>
                                                <option value="27,5 kg">27,5 kg</option>
                                                <option value="28 kg">28 kg</option>
                                                <option value="28,5 kg">28,5 kg</option>
                                                <option value="29 kg">29 kg</option>
                                                <option value="29,5 kg">29,5 kg</option>
                                                <option value="30 kg">30 kg</option>
                                                <option value="30,5 kg">30,5 kg</option>
                                                <option value="31 kg">31 kg</option>
                                            </select></section>
                                        <a href="javascript:;" data-fancybox="inline2" data-src="#hidden-content2" alt="Detaylı bilgi için tıklayın."><img src="{{asset('img/images/information.png')}}" style="height: 21px;margin: 12px 0;"></a>
                                    </div>
                                </div>
                            </div>
                            <div id="post-list">
                                <div class="form-item w100 post" id="post" style="display:none">
                                    <div class="proposal-form-title">LÜTFEN GÖNDERİ AĞIRLIĞINI GİRİNİZ</div>
                                    <div class="proposal-heavy-load">
                                        <div class="inner-10">
                                            <section><select class="input select weight-item" id="weight-item" name="weight-item"><option value="">Koli ağırlığı se&#231;iniz</option>
                                                    <option value="0,5 kg">0,5 kg</option>
                                                    <option value="1 kg">1 kg</option>
                                                    <option value="1,5 kg">1,5 kg</option>
                                                    <option value="2 kg">2 kg</option>
                                                    <option value="2,5 kg">2,5 kg</option>
                                                    <option value="3 kg">3 kg</option>
                                                    <option value="3,5 kg">3,5 kg</option>
                                                    <option value="4 kg">4 kg</option>
                                                    <option value="4,5 kg">4,5 kg</option>
                                                    <option value="5 kg">5 kg</option>
                                                    <option value="5,5 kg">5,5 kg</option>
                                                    <option value="6 kg">6 kg</option>
                                                    <option value="6,5 kg">6,5 kg</option>
                                                    <option value="7 kg">7 kg</option>
                                                    <option value="7,5 kg">7,5 kg</option>
                                                    <option value="8 kg">8 kg</option>
                                                    <option value="8,5 kg">8,5 kg</option>
                                                    <option value="9 kg">9 kg</option>
                                                    <option value="9,5 kg">9,5 kg</option>
                                                    <option value="10 kg">10 kg</option>
                                                    <option value="10,5 kg">10,5 kg</option>
                                                    <option value="11 kg">11 kg</option>
                                                    <option value="11,5 kg">11,5 kg</option>
                                                    <option value="12 kg">12 kg</option>
                                                    <option value="12,5 kg">12,5 kg</option>
                                                    <option value="13 kg">13 kg</option>
                                                    <option value="13,5 kg">13,5 kg</option>
                                                    <option value="14 kg">14 kg</option>
                                                    <option value="14,5 kg">14,5 kg</option>
                                                    <option value="15 kg">15 kg</option>
                                                    <option value="15,5 kg">15,5 kg</option>
                                                    <option value="16 kg">16 kg</option>
                                                    <option value="16,5 kg">16,5 kg</option>
                                                    <option value="17 kg">17 kg</option>
                                                    <option value="17,5 kg">17,5 kg</option>
                                                    <option value="18 kg">18 kg</option>
                                                    <option value="18,5 kg">18,5 kg</option>
                                                    <option value="19 kg">19 kg</option>
                                                    <option value="19,5 kg">19,5 kg</option>
                                                    <option value="20 kg">20 kg</option>
                                                    <option value="20,5 kg">20,5 kg</option>
                                                    <option value="21 kg">21 kg</option>
                                                    <option value="21,5 kg">21,5 kg</option>
                                                    <option value="22 kg">22 kg</option>
                                                    <option value="22,5 kg">22,5 kg</option>
                                                    <option value="23 kg">23 kg</option>
                                                    <option value="23,5 kg">23,5 kg</option>
                                                    <option value="24 kg">24 kg</option>
                                                    <option value="24,5 kg">24,5 kg</option>
                                                    <option value="25 kg">25 kg</option>
                                                    <option value="25,5 kg">25,5 kg</option>
                                                    <option value="26 kg">26 kg</option>
                                                    <option value="26,5 kg">26,5 kg</option>
                                                    <option value="27 kg">27 kg</option>
                                                    <option value="27,5 kg">27,5 kg</option>
                                                    <option value="28 kg">28 kg</option>
                                                    <option value="28,5 kg">28,5 kg</option>
                                                    <option value="29 kg">29 kg</option>
                                                    <option value="29,5 kg">29,5 kg</option>
                                                    <option value="30 kg">30 kg</option>
                                                    <option value="30,5 kg">30,5 kg</option>
                                                    <option value="31 kg">31 kg</option>
                                                </select></section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-item w100 post-button" style="display: none; padding-top:25px;">
                                <div class="proposal-buttons">
                                    <div class="inner-10">
                                        <ul>
                                            <li><a href="javascript:;" class="add post-add" id="post-add"><i><img src="{{asset('img/images/icon-add.png')}}" alt="" />KOLİ EKLE</a></i></li>
                                            <li><a href="javascript:;" class="add post-delete" id="post-delete"><i><img src="{{asset('img/images/icon-trash.png')}}" alt="" />KOLİ SİL</a></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="form-item w100" style="display: none;"><a href="javascript:;" data-fancybox="inline" data-src="#hidden-content" id="weightCal" class="count-weight">Ağırlık Hesabı Nasıl Yapılır?</a></div>
                            <input type="text" name="Weight" id="Weight" value="" style="display:none">
                            <div class="form-item" style="display:none;">
                                <div class="proposal-form-title">GÖNDERİ MODELİ SEÇİNİZ</div>
                                <label for="Numune" class="ShipingModal">
                                    <input type="radio" id="Numune" name="ShipingModal" value="Numune" class="input w100 ShipingModal">
                                    Numune
                                </label>
                                <label for="Mikro İhracat" class="ShipingModal fr">
                                    <input type="radio" id="Mikro İhracat" name="ShipingModal" value="Mikro İhracat" class="input w100 ShipingModal">
                                    Mikro İhracat
                                </label>
                            </div>
                            <div class="form-item w100" style="display:none;">
                                <p class="ShipingModalText"></p>
                            </div>
                            <div class="form-item w100">
                                * Zorunlu alan<br>
                                <input type="checkbox" id="PersonalApproval" class="PersonalApproval" name="PersonalApproval" required>* Değerli Müşterimiz, yapacağınız işlemler doğrultusunda paylaşacağınız kişisel verileriniz Verar Kargo L.T.D tarafından, taleplerinizi yerine getirmek için işlenmek üzere ilgili birimlere aktarılacaktır. Kişisel verilerinizin işlenmesi ve haklarınız ile ilgili detaylı bilgi için <a href="/kvkk" target="_blank">tıklayınız.</a><br><br>
                                <br>
                            </div>
                            <div class="form-item w100"><button id="send" class="button" type="submit">Hızlı Teklif Al</button></div>
                        </form>
                        <div class="post-model" style="display: none;">
                            <div class="form-item w100 post" id="post">
                                <div class="proposal-form-title">LÜTFEN GÖNDERİ AĞIRLIĞINI GİRİNİZ</div>
                                <div class="proposal-heavy-load">
                                    <div class="inner-10">
                                        <section><select class="input select weight-item" id="weight-item" name="weight-item"><option value="">Koli ağırlığı se&#231;iniz</option>
                                                <option value="0,5 kg">0,5 kg</option>
                                                <option value="1 kg">1 kg</option>
                                                <option value="1,5 kg">1,5 kg</option>
                                                <option value="2 kg">2 kg</option>
                                                <option value="2,5 kg">2,5 kg</option>
                                                <option value="3 kg">3 kg</option>
                                                <option value="3,5 kg">3,5 kg</option>
                                                <option value="4 kg">4 kg</option>
                                                <option value="4,5 kg">4,5 kg</option>
                                                <option value="5 kg">5 kg</option>
                                                <option value="5,5 kg">5,5 kg</option>
                                                <option value="6 kg">6 kg</option>
                                                <option value="6,5 kg">6,5 kg</option>
                                                <option value="7 kg">7 kg</option>
                                                <option value="7,5 kg">7,5 kg</option>
                                                <option value="8 kg">8 kg</option>
                                                <option value="8,5 kg">8,5 kg</option>
                                                <option value="9 kg">9 kg</option>
                                                <option value="9,5 kg">9,5 kg</option>
                                                <option value="10 kg">10 kg</option>
                                                <option value="10,5 kg">10,5 kg</option>
                                                <option value="11 kg">11 kg</option>
                                                <option value="11,5 kg">11,5 kg</option>
                                                <option value="12 kg">12 kg</option>
                                                <option value="12,5 kg">12,5 kg</option>
                                                <option value="13 kg">13 kg</option>
                                                <option value="13,5 kg">13,5 kg</option>
                                                <option value="14 kg">14 kg</option>
                                                <option value="14,5 kg">14,5 kg</option>
                                                <option value="15 kg">15 kg</option>
                                                <option value="15,5 kg">15,5 kg</option>
                                                <option value="16 kg">16 kg</option>
                                                <option value="16,5 kg">16,5 kg</option>
                                                <option value="17 kg">17 kg</option>
                                                <option value="17,5 kg">17,5 kg</option>
                                                <option value="18 kg">18 kg</option>
                                                <option value="18,5 kg">18,5 kg</option>
                                                <option value="19 kg">19 kg</option>
                                                <option value="19,5 kg">19,5 kg</option>
                                                <option value="20 kg">20 kg</option>
                                                <option value="20,5 kg">20,5 kg</option>
                                                <option value="21 kg">21 kg</option>
                                                <option value="21,5 kg">21,5 kg</option>
                                                <option value="22 kg">22 kg</option>
                                                <option value="22,5 kg">22,5 kg</option>
                                                <option value="23 kg">23 kg</option>
                                                <option value="23,5 kg">23,5 kg</option>
                                                <option value="24 kg">24 kg</option>
                                                <option value="24,5 kg">24,5 kg</option>
                                                <option value="25 kg">25 kg</option>
                                                <option value="25,5 kg">25,5 kg</option>
                                                <option value="26 kg">26 kg</option>
                                                <option value="26,5 kg">26,5 kg</option>
                                                <option value="27 kg">27 kg</option>
                                                <option value="27,5 kg">27,5 kg</option>
                                                <option value="28 kg">28 kg</option>
                                                <option value="28,5 kg">28,5 kg</option>
                                                <option value="29 kg">29 kg</option>
                                                <option value="29,5 kg">29,5 kg</option>
                                                <option value="30 kg">30 kg</option>
                                                <option value="30,5 kg">30,5 kg</option>
                                                <option value="31 kg">31 kg</option>
                                            </select></section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function () {
        $(".btn-proposal").hide();

        $('#form').submit(function () {
            $(this).find(':input[type=submit]').prop('disabled', true);
        });
    });

    $("#FromCountry").change(function () {
        if ($(this).val() == "TÜRKİYE") {
            $('#FromCountryCity').parent().show();
            $('#FromCountryCity').prop('required', true);
        } else {
            $('#FromCountryCity').parent().hide();
            $('#FromCountryCity').prop('required', false);
            $('#FromCountryCity').val("");

            $('#FromCountryTown').parent().hide();
            $('#FromCountryTown').prop('required', false);
            $('#FromCountryTown').val("");
        }
    });

    $("#FromCountryCity").change(function () {
        if ($(this).val() == "İstanbul") {
            $('#FromCountryTown').parent().show();
            $('#FromCountryTown').prop('required', true);
        } else {
            $('#FromCountryTown').parent().hide();
            $('#FromCountryTown').prop('required', false);
            $('#FromCountryTown').val("");
        }
    });

    $("#ToCountry").change(function () {
        if ($(this).val() == "TÜRKİYE") {
            $('#ToCountryCity').parent().show();
            $('#ToCountryCity').prop('required', true);
        } else {
            $('#ToCountryCity').parent().hide();
            $('#ToCountryCity').prop('required', false);
            $('#ToCountryCity').val("");

            $('#ToCountryTown').parent().hide();
            $('#ToCountryTown').prop('required', false);
            $('#ToCountryTown').val("");
        }
    });

    $("#ToCountryCity").change(function () {
        if ($(this).val() == "İstanbul") {
            $('#ToCountryTown').parent().show();
            $('#ToCountryTown').prop('required', true);
        } else {
            $('#ToCountryTown').parent().hide();
            $('#ToCountryTown').prop('required', false);
            $('#ToCountryTown').val("");
        }
    });

    $(document).on("ifChanged", "input.CustomerType", function () {
        if (this.value == "Kurumsal") {
            $('#CompanyName').parent().show();
            $('#CompanyName').prop('required', true);
        } else {
            $('#CompanyName').parent().hide();
            $('#CompanyName').prop('required', false);
            $('#CompanyName').val("");
        }
    });

    $(document).on("ifChanged", "input.ShippingFrequency", function () {
        if (this.value == "Sürekli Gönderim") {
            $('#ShippingFrequencyData').parent().show();
            $('#ShippingFrequencyData').prop('required', true);
        } else {
            $('#ShippingFrequencyData').parent().hide();
            $('#ShippingFrequencyData').prop('required', false);
            $('#ShippingFrequencyData').val("");
        }
    });

    $(document).on("ifChanged", "input.ShipingModal", function () {
        if (this.value == "Mikro İhracat") {
            $('.ShipingModalText').parent().show();
            $('.ShipingModalText').empty().append("* Mikro İhracat olarak gönderi yapabilmek için fatura kesebilir bir şirket olunmalıdır. Detaylı bilgi için <a href='/mikro-ihracat' target='_blank'>tıklayınız</a>.");
        } else if (this.value == "Numune") {
            $('.ShipingModalText').parent().show();
            $('.ShipingModalText').empty().append("* Proforma düzenleyerek gönderinizi hazırlayabilirsiniz.");
        }
    });

    $(document).on("ifChanged", "input.CampaignApproval,input.PersonalApproval", function () {
        if ($(this).prop("checked")) {
            $(this).val(true);
        } else {
            $(this).val(false);
        }
    });

    function cleanBoxes() {
        $('#Weight').val("");

        $(".weightDoc").each(function () {
            $(this).val("");
        });

        $(".weight-item").each(function () {
            $(this).val("");
        });
    }

    function calculateBoxes() {
        $('#Weight').val("");

        $(".weight-item").each(function () {
            $('#Weight').val($('#Weight').val() + "|" + $(this).val());
        });
    }
    $(document).on('click', 'ul.ShippingTypeLi>li>article', function () {
        var selected = $(this).attr('id');

        $('ul.ShippingTypeLi>li>article').removeClass();
        $(this).addClass("selected");

        $('#ShippingType').val(selected);

        if (selected !== "Döküman") {
            $('.ShipingModalText').parent().show();
            $('.ShipingModal').prop('required', true);
            $('.ShipingModal').parent().show();
        } else {
            $('.ShipingModalText').parent().hide();
            $('.ShipingModal').prop('required', false);
            $('.ShipingModal').parent().hide();
        }


        if (selected === "Döküman") {
            $('section > #weightDoc').parent().empty().append('<select class="input select" id="weightDoc" name="weightDoc" required=""><option value="">Döküman ağırlığı seçiniz</option><option value="0,5 kg">0,5 kg</option><option value="1 kg">1 kg</option><option value="1,5 kg">1,5 kg</option><option value="2 kg">2 kg</option><option value="2,5 kg">2,5 kg</option><option value="3 kg">3 kg</option><option value="3,5 kg">3,5 kg</option><option value="4 kg">4 kg</option><option value="4,5 kg">4,5 kg</option><option value="5 kg">5 kg</option><option value="5,5 kg">5,5 kg</option><option value="6 kg">6 kg</option><option value="6,5 kg">6,5 kg</option><option value="7 kg">7 kg</option><option value="7,5 kg">7,5 kg</option><option value="8 kg">8 kg</option><option value="8,5 kg">8,5 kg</option><option value="9 kg">9 kg</option><option value="9,5 kg">9,5 kg</option><option value="10 kg">10 kg</option><option value="10,5 kg">10,5 kg</option><option value="11 kg">11 kg</option><option value="11,5 kg">11,5 kg</option><option value="12 kg">12 kg</option><option value="12,5 kg">12,5 kg</option><option value="13 kg">13 kg</option><option value="13,5 kg">13,5 kg</option><option value="14 kg">14 kg</option><option value="14,5 kg">14,5 kg</option><option value="15 kg">15 kg</option><option value="15,5 kg">15,5 kg</option><option value="16 kg">16 kg</option><option value="16,5 kg">16,5 kg</option><option value="17 kg">17 kg</option><option value="17,5 kg">17,5 kg</option><option value="18 kg">18 kg</option><option value="18,5 kg">18,5 kg</option><option value="19 kg">19 kg</option><option value="19,5 kg">19,5 kg</option><option value="20 kg">20 kg</option><option value="20,5 kg">20,5 kg</option><option value="21 kg">21 kg</option><option value="21,5 kg">21,5 kg</option><option value="22 kg">22 kg</option><option value="22,5 kg">22,5 kg</option><option value="23 kg">23 kg</option><option value="23,5 kg">23,5 kg</option><option value="24 kg">24 kg</option><option value="24,5 kg">24,5 kg</option><option value="25 kg">25 kg</option><option value="25,5 kg">25,5 kg</option><option value="26 kg">26 kg</option><option value="26,5 kg">26,5 kg</option><option value="27 kg">27 kg</option><option value="27,5 kg">27,5 kg</option><option value="28 kg">28 kg</option><option value="28,5 kg">28,5 kg</option><option value="29 kg">29 kg</option><option value="29,5 kg">29,5 kg</option><option value="30 kg">30 kg</option><option value="30,5 kg">30,5 kg</option><option value="31 kg">31 kg</option></select>');
        } else if (selected === "Paket") {
            $('section > #weightDoc').parent().empty().append('<select class="input select" id="weightDoc" name="weightDoc" required=""><option value="">Paket ağırlığı seçiniz</option><option value="0,5 kg">0,5 kg</option><option value="1 kg">1 kg</option><option value="1,5 kg">1,5 kg</option><option value="2 kg">2 kg</option><option value="2,5 kg">2,5 kg</option><option value="3 kg">3 kg</option><option value="3,5 kg">3,5 kg</option><option value="4 kg">4 kg</option><option value="4,5 kg">4,5 kg</option><option value="5 kg">5 kg</option><option value="5,5 kg">5,5 kg</option><option value="6 kg">6 kg</option><option value="6,5 kg">6,5 kg</option><option value="7 kg">7 kg</option><option value="7,5 kg">7,5 kg</option><option value="8 kg">8 kg</option><option value="8,5 kg">8,5 kg</option><option value="9 kg">9 kg</option><option value="9,5 kg">9,5 kg</option><option value="10 kg">10 kg</option><option value="10,5 kg">10,5 kg</option><option value="11 kg">11 kg</option><option value="11,5 kg">11,5 kg</option><option value="12 kg">12 kg</option><option value="12,5 kg">12,5 kg</option><option value="13 kg">13 kg</option><option value="13,5 kg">13,5 kg</option><option value="14 kg">14 kg</option><option value="14,5 kg">14,5 kg</option><option value="15 kg">15 kg</option><option value="15,5 kg">15,5 kg</option><option value="16 kg">16 kg</option><option value="16,5 kg">16,5 kg</option><option value="17 kg">17 kg</option><option value="17,5 kg">17,5 kg</option><option value="18 kg">18 kg</option><option value="18,5 kg">18,5 kg</option><option value="19 kg">19 kg</option><option value="19,5 kg">19,5 kg</option><option value="20 kg">20 kg</option><option value="20,5 kg">20,5 kg</option><option value="21 kg">21 kg</option><option value="21,5 kg">21,5 kg</option><option value="22 kg">22 kg</option><option value="22,5 kg">22,5 kg</option><option value="23 kg">23 kg</option><option value="23,5 kg">23,5 kg</option><option value="24 kg">24 kg</option><option value="24,5 kg">24,5 kg</option><option value="25 kg">25 kg</option><option value="25,5 kg">25,5 kg</option><option value="26 kg">26 kg</option><option value="26,5 kg">26,5 kg</option><option value="27 kg">27 kg</option><option value="27,5 kg">27,5 kg</option><option value="28 kg">28 kg</option><option value="28,5 kg">28,5 kg</option><option value="29 kg">29 kg</option><option value="29,5 kg">29,5 kg</option><option value="30 kg">30 kg</option><option value="30,5 kg">30,5 kg</option><option value="31 kg">31 kg</option></select>');
        }

        if (selected !== "Koli") {
            $('.post,.post-button').hide();
            $('.form-item #weight-item').parent().hide();
            $('.form-item #weight-item').prop('required', false);
            $('.weightDoc').show();
            $('.form-item #weightDoc,#weightCal').parent().show();
            $('.form-item #weightDoc').prop('required', true);
            cleanBoxes();
            calculateBoxes();
        }
        else {
            $('.post,.post-button').show();
            $('.form-item #weight-item,#weightCal').parent().show();
            $('.form-item #weight-item').prop('required', true);
            $('.weightDoc').hide();
            $('.form-item #weightDoc').parent().hide();
            $('.form-item #weightDoc').prop('required', false);
            cleanBoxes();
            calculateBoxes();
        }
    });

    $(document).on('change', '.form-item #weight-item,.form-item #height-item,.form-item #length-item,.form-item #depth-item', function () {
        calculateBoxes();
    });

    $(document).ready(function () {
        $("#post-add").click(function () {
            $(".post-model>.post").clone().appendTo("#post-list");
        });
        $("#post-delete").click(function () {
            if ($("form .post").length > 1) {
                $("form .post").last().remove();
                calculateBoxes();
            }
        });
        $('#FromCountry').val("TÜRKİYE");
    });

    //$(document).on('change', '#CustomerPhone', function () {
    //    var phoneNumber = $('#CustomerPhone').val();
    //    var fromCountry = $('#FromCountry').val();

    //    if (fromCountry == "TURKEY") {
    //        var regEx = new RegExp(/^(([\+]90?)|([0]?))([ ]?)((\([0-9]{3}\))|([0-9]{3}))([ ]?)([0-9]{3})(\s*[\-]?)([0-9]{2})(\s*[\-]?)([0-9]{2})$/);
    //        alert( regEx.test(phoneNumber) )
    //    }

    //});

    function validateForm() {
        var kvkk = document.forms["form"]["PersonalApproval"].checked;
        var phoneNumber = document.forms["form"]["CustomerPhone"].value;
        var fromCountry = document.forms["form"]["FromCountry"].value;

        if (!kvkk) {
            alert("Kişisel verilerinizin işlenmesi için izin vermeniz gerekmektedir!");
            return false
        }

        if (fromCountry == "TÜRKİYE") {
            var regEx = new RegExp(/^(([\+]90?)|([0]?))([ ]?)((\([0-9]{3}\))|([0-9]{3}))([ ]?)([0-9]{3})(\s*[\-]?)([0-9]{2})(\s*[\-]?)([0-9]{2})$/);
            if (!regEx.test(phoneNumber)) {
                alert("Lütfen telefon numaranızı doğru formatta giriniz. Örn: 0534 000 0000");
            }
            return regEx.test(phoneNumber)
        }
    }

    $(document).on('click', 'button#calculateSend', function () {
        var wdth = $('#calculateWidth').val();
        var lngth = $('#calculateLength').val();
        var hght = $('#calculateHeight').val();

        if (hght && lngth && wdth) {
            var t = ((wdth * lngth * hght) / 5000).toFixed(1);

            $('#calculateText').empty().append(t + " Kilogram");
        } else {
            $('#calculateText').empty().append("Tüm alanları giriniz.");
        }
    });

</script>
<div style="display:none; padding:50px 80px; width:800px; cursor:pointer;" id="hidden-content">
    <div class="page-title page-title-left"><strong>AĞIRLIK HESABI NASIL YAPILIR?</strong></div>
    <div class="page-about page-about-left">
        Paketinizin ağırlığını 2 şekilde yapmalısınız ve hangi ağırlık yüksek ise o ağırlık siparişini vermelisiniz aksi halde fiyat farkı çıkacaktır ve gönderiniz fiyat farkı ödenene kadar yurt dışı çıkışı yapılamayacaktır.
    </div>
    <div class="page-about page-about-left">
        1- Normal Ağırlık: Herhangi bir tartıda(Mutfak veya banyo baskülü) normal ağırlığına bakmak.<br>
        2- Hacimsel Ağırlık: Paketinizin resimde gösterildiği En, Boy, Yükseklik ölçülerini cm(santimetre) olarak ölçüp çarpımlarını 5000(beşbin)’e bölmeniz hacimsel ağırlığını verecektir.
    </div>
    <div class="page-about page-about-left">
        <strong>
            Hacimsel Ağırlık = (En * Boy * Yükseklik) / 5000
        </strong>
    </div>
    <img src="{{asset('img/images/en-boy-yukseklik.png')}}" class="w50" />
    <div class="w50">
        <div class="form-item"><input required="required" type="number" name="calculateWidth" id="calculateWidth" placeholder="En" step=".01" class="input"></div>
        <div class="form-item"><input required="required" type="number" name="calculateLength" id="calculateLength" placeholder="Boy" step=".01" class="input"></div>
        <div class="form-item"><input required="required" type="number" name="calculateHeight" id="calculateHeight" placeholder="Yükseklik" step=".01" class="input"></div>
        <div class="form-item"><button id="calculateSend" class="button">Hesapla</button></div>
        <div class="form-item">
            <div id="calculateText" class="page-about page-about-left" style="font-weight:800;"></div>
        </div>
    </div>
</div>
<div style="display:none; padding:50px 80px; width:800px; cursor:pointer;" id="hidden-content2">
    <div class="page-about page-about-left">
        Paket türündeki gönderileriniz için aşağodaki Verar Kargo poşet ölçülerini aşmamalıdır. Gönderileriniz bu ölçülerin dışına çıktığı taktirde hacimsel ağırlık baz alınır.
    </div>

</div>
@endsection
