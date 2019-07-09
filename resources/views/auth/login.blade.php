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
                                <h4 class="mb-4">Login</h4>
                                <p>Welcome back, please login to your account.</p>
                            </div>
                            <form method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="vs-component vs-con-input-label vs-input w-full no-icon-border vs-input-primary is-label-placeholder">
                                        <!---->
                                        <div class="vs-con-input">
                                            <input id="email" type="email" type="text" name="email" class="vs-inputx vs-input--input normal hasIcon @error('email') is-invalid @enderror" autocomplete="email" value="{{ old('email') }}" style="border: 1px solid rgba(0, 0, 0, 0.2);"><span class="input-span-placeholder vs-input--placeholder normal normal vs-placeholder-label">
                                        Email
                                      </span><i class="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon feather icon icon-user null"></i>
                                            <!---->
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
                                
                                <div class="flex flex-wrap justify-between my-5">
                                        <div class="vs-component con-vs-checkbox mb-3 vs-checkbox-primary vs-checkbox-default">
                                            <input type="checkbox" id="remember" name="remember" class="vs-checkbox--input {{ old('remember') ? 'checked' : '' }}" value="false">
                                            <span class="checkbox_x vs-checkbox" style="border: 2px solid rgb(180, 180, 180);">
                                                <span class="vs-checkbox--check">
                                                    <i class="vs-icon notranslate icon-scale vs-checkbox--icon  material-icons null">check</i>
                                                </span>
                                            </span>
                                            <span class="con-slot-label">Remember Me</span>
                                        </div>
                                        <a href="{{ route("password.request") }}" class="">Forgot Password?</a>
                                    </div>
                                    <button name="button" class="vs-component vs-button vs-button-primary vs-button-border" style="background: transparent;">
                                        <span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;">
                                        </span>
                                        <span class="vs-button-text vs-button--text"> <a href="{{ route('register') }}">Register</a>  </span>
                                        <span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);"></span>
                                    </button>
                                    <button name="submit" class="vs-component vs-button float-right vs-button-primary vs-button-filled">
                                        <span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;">
                                        </span>
                                        <span class="vs-button-text vs-button--text">Login</span>
                                        <span class="vs-button-linex" style="top: auto; bottom: -2px; left: 50%; transform: translate(-50%);">
                                        </span>
                                    </button>
                                    <div class="vs-component vs-divider">
                                        <span class="vs-divider-border after" style="width: 100%; border-top: 1px solid rgba(0, 0, 0, 0.1);">
                                        </span>
                                        <span class="vs-divider--text" style="color: rgba(0, 0, 0, 0.8);">OR</span>
                                        <span class="vs-divider-border before" style="width: 100%; border-top: 1px solid rgba(0, 0, 0, 0.1);">
                                        </span>
                                    </div>
                            </form>
                                <div class="social-login flex flex-wrap justify-between">
                                    <div class="social-login-buttons flex flex-wrap items-center mt-4">
                                    <div class="social-login-buttons flex flex-wrap items-center mt-4">
                                        <div style="background:#1551b1;" class="bg-facebook pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" class="text-white h-4 w-4 svg-inline--fa fa-facebook-f fa-w-9"><path fill="currentColor" d="M215.8 85H264V3.6C255.7 2.5 227.1 0 193.8 0 124.3 0 76.7 42.4 76.7 120.3V192H0v91h76.7v229h94V283h73.6l11.7-91h-85.3v-62.7c0-26.3 7.3-44.3 45.1-44.3z"></path>
                                            </svg>
                                        </div>
                                        <div style="background:#00aaff;" class="bg-twitter pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-white h-4 w-4 svg-inline--fa fa-twitter fa-w-16"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                            </svg>
                                        </div>
                                        <div style="background:#4285F4;" class="bg-google pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" class="text-white h-4 w-4 svg-inline--fa fa-google fa-w-16"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                                            </svg>
                                        </div>
                                        <div style="background:#333;" class="bg-github pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" class="text-white h-4 w-4 svg-inline--fa fa-github-alt fa-w-15"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                                            </svg>
                                        </div>
                                        </div>
                                    <button name="button" class="vs-component vs-button mt-4 vs-button-null vs-button-filled" style="background: rgb(235, 84, 36);"><span class="vs-button-backgroundx vs-button--background" style="opacity: 1; left: 20px; top: 20px; width: 0px; height: 0px; transition: width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s;"></span>
                                        <!----><span class="vs-button-text vs-button--text">Auth0</span><span class="vs-button-linex" style="top: auto; bottom: -2px; background: rgb(235, 84, 36); left: 50%; transform: translate(-50%);"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
