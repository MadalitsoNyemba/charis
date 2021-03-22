<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\billing;
use DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
class BillingController extends Controller
{
    public function getBillings()
    {

        // $billings = DB::table('tbl_billing')
        // ->select(DB::raw('DATE(created_at) as date'), DB::raw('sum(duration) as total'))
        // ->groupBy('date')
        // ->get();
        $billings = billing::orderBy('created_at', 'desc')->with('LegalCase')->where('end_time','!=',NULL)->get()->groupBy(function($item){
            return $item->created_at->format('Y/m/d');
            })->map(function ($d) {
                // return $d->sum('duration');
                return collect([
                    'total' => $d->sum('duration'),
                    'data' => $d,
                ]);
        });
        return response()->json(['status' => true,'message'=>'successful','data'=>$billings],200);

    }

    public function addBilling(request $request){
        Billing::create([
            'case_id' => $request->input('case_id'),
            'activity_name' => $request->input('activity_name'),
            'duration' => 0,
            'VAT' => 16.50,
            'levy' => 1.00,
            // 'start_time' => date()
            // 'end_time' => null
        ]);

        // $billings = billing::orderBy('created_at', 'desc')->with('LegalCase')->where('end_time','!=',NULL)->get()->groupBy(function($item){
        //     return $item->created_at->format('Y/m/d');
        //     })->map(function ($d) {
        //         return collect([
        //             'total' => $d->sum('duration'),
        //             'data' => $d,
        //         ]);
        // });

        // return response()->json(['status' => true,'message'=>'successful','data'=>$billings],200);
        return response()->json(['status' => true,'message'=>'successful'],200);

    }

    public function getRunningBilling()
    {

    
        // $billings = billing::orderBy('created_at', 'desc')->with('LegalCase')->get()->groupBy(function($item){
        //     return $item->created_at->format('Y/m/d');
        //     })->map(function ($d) {
        //         // return $d->sum('duration');
        //         return collect([
        //             'total' => $d->sum('duration'),
        //             'data' => $d,
        //         ]);
        // });
        $billings = billing::running()->with('LegalCase')->first() ?? [];

        if($billings == []){
            return response()->json(['status' => false,'message'=>'successful','data'=>$billings],200);
        }else{
            return response()->json(['status' => true,'message'=>'successful','data'=>$billings],200);

        }

    }


    public function stopBilling()
    {

        $billings = billing::running()->first();

        $billings::where('end_time',null)
        ->update([
        'end_time' => Carbon::now()->toDateTimeString(),
        'duration' => strtotime(Carbon::now()->toDateTimeString()) - strtotime($billings->start_time)
        ]);
        return response()->json(['status' => true,'message'=>'successful'],200);


    }


    public function editBilling()
    {

        $billings = billing::where('id',$request->input('id'))->first();

        $billings::where('id',$request->input('id'))
        ->update([
        'activity_name' => $request->input('activity_name'),
        'case_id' => $request->input('case_id'),
        'start_time' => $request->input('start_time'),
        'end_time' => $request->input('end_time'),
        'duration' => strtotime($request->input('end_time')) - strtotime($request->input('start_time'))
        ]);
        return response()->json(['status' => true,'message'=>'successful'],200);


    }

    public function deleteBilling($id)
    {

        billing::find($id)->delete();         
        return response()->json(['status' => true,'message'=>'successful'],200);

    }

    


}
