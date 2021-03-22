<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class billing extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'tbl_billing';
    protected $fillable = [
        'case_id', 'activity_name', 'duration', 'VAT', 'start_time', 'end_time', 'levy'
    ];
    public function LegalCase()
    {

        return $this->belongsTo('App\Models\LegalCase', "case_id");
    }

    public function scopeRunning($query)
    {
        return $query->whereNull('end_time');
    }
}
