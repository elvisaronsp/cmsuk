@extends('layouts.app')

@section('content')
<div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
        <div class="card">
                <div slot="no-body" class="full-page-bg-color">
                        <div class="vx-row no-gutter justify-center items-center">
                            <div class="vx-col hidden lg:block lg:w-1/2">
                                <img src="images/pages/login.png" alt="login" class="mx-auto">
                            </div>
                            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                                <div class="p-8">
                                    <div class="vx-card__title mb-8">
                                        <h4 class="mb-4">Create Your Account</h4>
                                    </div>
                                    <form method="POST" action="{{ route('register') }}">
                                        @csrf
                                        <div class="vs-component vs-con-input-label vs-input w-full no-icon-border vs-input-primary is-label-placeholder">
                                            <div class="vs-con-input">
                                                <input id="name" type="text" name="name" class="vs-inputx vs-input--input normal hasIcon @error('name') is-invalid @enderror" autocomplete="name" value="{{ old('name') }}" style="border: 1px solid rgba(0, 0, 0, 0.2);"><span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                            Name
                                            </span><i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon icon-user null"></i>
                                            </div><span></span>
                                            @error('name')
                                                <span class="invalid-feedback text-danger" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>

                                        <div class="vs-component vs-con-input-label vs-input w-full no-icon-border vs-input-primary is-label-placeholder">
                                            <div class="vs-con-input">
                                                <input id="email" type="text" type="text" name="email" class="vs-inputx vs-input--input normal hasIcon @error('email') is-invalid @enderror" autocomplete="email" value="{{ old('email') }}" style="border: 1px solid rgba(0, 0, 0, 0.2);"><span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                            Email
                                            </span><i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon icon-user null"></i>
                                            </div><span></span>
                                            @error('email')
                                                <span class="invalid-feedback text-danger" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                        
                                        <div class="vs-component vs-con-input-label vs-input w-full mt-6 no-icon-border vs-input-primary is-label-placeholder">
                                                <!---->
                                                <div class="vs-con-input">
                                                    <input type="password" name="password" class="vs-inputx vs-input--input normal hasIcon @error('password') is-invalid @enderror" style="border: 1px solid rgba(0, 0, 0, 0.2);"><span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                                Password
                                              </span><i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon icon-lock null"></i>
                                                    <!---->
                                                </div><span></span>
                                                @error('password')
                                                <span class="invalid-feedback text-danger" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>

                                        <div class="vs-component vs-con-input-label vs-input w-full mt-6 no-icon-border vs-input-primary is-label-placeholder">
                                                <!---->
                                                <div class="vs-con-input">
                                                    <input type="password" name="password_confirmation" class="vs-inputx vs-input--input normal hasIcon @error('password_confirmation') is-invalid @enderror" style="border: 1px solid rgba(0, 0, 0, 0.2);"><span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                                Password Confirmation
                                              </span><i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon icon-lock null"></i>
                                                    <!---->
                                                </div><span></span>
                                                @error('password_confirmation')
                                                <span class="invalid-feedback text-danger" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                        </div>
                                                <button type="submit" class="vs-component vs-button float-right vs-button-primary vs-button-filled">
                                                    {{ __('Register') }}
                                                </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</div>
@endsection
