@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">Dashboard</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <div id="result" class="border shadow p-2 mb-4"></div>
                        <button id="SpeechToTextButton">Klik hier</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
