<?php

namespace App\Http\Controllers;

use App\Models\Szavak;
use Illuminate\Http\Request;

class SzavakController extends Controller
{
    public function getAll(){
        return Szavak::all();
    }

    public function getByTemaId($id){
        return Szavak::all()->where("temaId", "=",$id);
    }
}
