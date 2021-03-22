<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/billings', 'App\Http\Controllers\Api\BillingController@getBillings');
Route::get('/billing/running', 'App\Http\Controllers\Api\BillingController@getRunningBilling');
Route::get('/billing/stop', 'App\Http\Controllers\Api\BillingController@stopBilling');
Route::post('/billing/add', 'App\Http\Controllers\Api\BillingController@addBilling');
Route::get('/billing/delete/{id}', 'App\Http\Controllers\Api\BillingController@deleteBilling');
Route::get('/cases', 'App\Http\Controllers\Api\CasesController@getCases');
Route::get('/cases/singleCase/{case_id}', 'App\Http\Controllers\Api\CasesController@singleCase');
