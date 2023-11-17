<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use DOMDocument;
use GuzzleHttp\Client;
use GuzzleHttp\Promise;
use Psr\Http\Message\ResponseInterface;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CargoTrackController extends Controller
{
    public function index(){
        return view('frontend.cargo-track');
    }

    public function sorgula(Request $request)
    {
        $kod = $request->trackcodes;
        error_reporting(0);
        $url = 'http://kargotakip.verarkargo.com.tr/hareket_service?har_kod='.$kod;
        $json = file_get_contents($url, false);

        log::info($json);
        $data = json_decode($json, true);

        if($url===true || $data['barkod_no']){
            log::info($url);
            $dd = [
                'barkod' => $data['barkod_no'],
                'gonderici_adres' => $data['gonderici_adres'],
                'gonderici_adi' => $data['gonderici_adi'],
                'gonderici_sehir'=> $data['gonderici_sehir'],
                'alici_adi' => $data['alici_adi'],
                'alici_adres' => $data['alici_adres'],
                'durum' => $data['durum'],
                'varis_subesi' =>$data['varis_subesi'],
                'sonuc_durum' => $data['sonuc_durum'],
                'alici_ilce' => $data['alici_ilce'],
                'sonuc_aciklama' => $data['sonuc_aciklama'],
                'hareketler'=>$data['hareketler'],
            ];
        }else{
            $dd = [
                'barkod' => $data['barkod_no'],
                'sonuc' => 'Bulunamadı',
            ];
            log::info($dd);
        }

        return view('frontend.cargo-track-done',$dd);
    }
}
