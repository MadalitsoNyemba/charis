<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LegalCase extends Model
{
    use HasFactory;

    protected $table = 'tbl_cases';

    public function billing()
    {

        return $this->hasMany('App\Models\billing', "case_id");
    }

    public function Documents()
    {

        return $this->hasMany('App\Models\Documents', "case_id");
    }

}
