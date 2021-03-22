<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    use HasFactory;

    protected $table = 'tbl_case_documents';
 
    public function LegalCase()
    {

        return $this->belongsTo('App\Models\LegalCase', "case_id");
    }
}
