<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;

class FrontendController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $body_class = '';

        // return view('dashboard', compact('body_class'));
        return view('frontend.index', compact('body_class'));
    }

    /**
     * Privacy Policy Page.
     *
     * @return \Illuminate\Http\Response
     */
    public function privacy()
    {
        $body_class = '';

        return view('frontend.privacy', compact('body_class'));
    }

    /**
     * Terms & Conditions Page.
     *
     * @return \Illuminate\Http\Response
     */
    public function terms()
    {
        $body_class = '';

        return view('frontend.terms', compact('body_class'));
    }

    public function who()
    {
        return view('frontend.who');
    }

    public function cerez()
    {
        return view('frontend.cerez');
    }

    public function hizliteklif()
    {
        return view('frontend.hizli-teklif');
    }

    public function destek()
    {
        return view('frontend.destek');
    }

    public function iletisim()
    {
        return view('frontend.iletisim');
    }

    public function kvkk()
    {
        return view('frontend.kvkk');
    }

    public function subeler()
    {
        return view('frontend.subeler');
    }
}
