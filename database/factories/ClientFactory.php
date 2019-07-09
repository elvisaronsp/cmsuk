<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Client;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Client::class, function (Faker $faker) {
    return [
        'company_id'=>1,
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'currency_code' => 'USD',
        'email' => $faker->unique()->safeEmail,
    ];
});
