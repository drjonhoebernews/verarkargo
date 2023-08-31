<div class="w100 bottom-100">
    <div class="wrap">
        <div class="track-parcel">
            <span>Gönderinizi Takip Edin</span>
            <section>
                <form action="/gonderi-takip-sonuc" method="post">
                    @csrf
                    <input type="text" placeholder="Takip Numarası Giriniz..." name="trackcodes" id="trackcodes" class="input"  required/>
                    <button id="send" class="button">Sorgula</button>
                </form>
            </section>
        </div>
    </div>
</div>
