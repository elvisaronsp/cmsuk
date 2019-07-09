<?php
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
// Me route
Route::get('/me', ['middleware' => 'auth', function () {
	return \App\User::find( auth()->user()->id );
}] );

Route::middleware(['auth'])->group(function () {
	Route::get('/', 'ApplicationController');
	Route::get('/{any}', 'ApplicationController')->where('any', '.*');
});

