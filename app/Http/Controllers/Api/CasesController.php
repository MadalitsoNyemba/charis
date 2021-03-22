<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LegalCase;
use App\Models\billing;
use App\Models\Documents;


class CasesController extends Controller
{
    public function getCases()
    { 
        $cases = LegalCase::all();
        return response()->json(['status' => true,'message'=>'successful','data'=>$cases],200);

    }

    public function singleCase($case_id)
    {
        $documents = Documents::where('case_id', $case_id)->get();
        // $billings = billing::where('case_id', $case_id)->get();
        $billings = billing::orderBy('created_at', 'desc')->with('LegalCase')->where('end_time','!=',NULL)->where('case_id', $case_id)->get()->groupBy(function($item){
            return $item->created_at->format('Y/m/d');
            })->map(function ($d) {
                // return $d->sum('duration');
                return collect([
                    'total' => $d->sum('duration'),
                    'data' => $d,
                ]);
        });

        return response()->json(['status' => true,'message'=>'successful','documents_data'=>$documents,'billings_data'=>$billings],200);

    }
}
