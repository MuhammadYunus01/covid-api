<?php

use App\Http\Controllers\CovidController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/patients", [CovidController::class, 'index']);

Route::get("/patients/{id}", [CovidController::class, 'show']);

Route::get("/patients/search/{id}", [CovidController::class, 'search']);

Route::get("/patients/status/positive", [CovidController::class, 'positive']);

Route::get("/patients/status/recovered", [CovidController::class, 'recovered']);

Route::get("/patients/status/dead", [CovidController::class, 'dead']);

Route::post("/patients", [CovidController::class, 'store']);

Route::put("/patients/{id}", [CovidController::class, 'update']);

Route::delete("/patients/{id}", [CovidController::class, 'destroy']);
