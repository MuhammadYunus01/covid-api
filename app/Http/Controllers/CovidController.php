<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Covid;
use PhpParser\Node\Stmt\Echo_;

class CovidController extends Controller
{
    public function index()
    {
        $user_get = Covid::all();

        if ($user_get) {
            $resource = [
                'messagge' => 'Get All Data',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource, 200);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource, 404);
        }
    }

    public function show($id)
    {
        $user_get = Covid::find($id);

        if ($user_get) {
            $resource = [
                'messagge' => 'Get Detail Data',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource, 200);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            #mengubah data yang ada menjadi format json
            return response()->json($resource, 404);
        }
    }

    public function search($nama)
    {
        $user_get = Covid::where('name', $nama)->get();

        if ($user_get) {
            $resource = [
                'messagge' => 'Get Data Detail By Name',
                'resource' =>  $user_get
            ];

            return response()->json($resource, 200);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            return response()->json($resource, 404);
        }
    }

    public function positive()
    {
        $user_get = Covid::where('status', 'positive')->get();

        if ($user_get) {
            $resource = [
                'messagge' => 'Get Data Positive',
                'resource' => $user_get
            ];
            return response()->json($resource, 200);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            return response()->json($resource, 404);
        }
    }

    public function recovered()
    {
        $user_get = Covid::where('status', 'recovered')->get();

        if ($user_get) {
            $resource = [
                'messagge' => 'Get Data Recovered',
                'resource' => $user_get
            ];
            return response()->json($resource, 200);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            return response()->json($resource, 404);
        }
    }

    public function dead()
    {
        $user_get = Covid::where('status', 'dead')->get();

        if ($user_get) {
            $resource = [
                'messagge' => 'Get Data Dead',
                'resource' => $user_get
            ];
            return response()->json($resource, 200);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];
            return response()->json($resource, 404);
        }
    }

    public function store(Request $request)
    {
        $input = $request->validate([
            'name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'status' => 'required',
            'in_date_at' => 'required',
            'out_date_at' => 'nullable'
        ]);
        //memasukan input pada varible sementara untuk direturn
        //memasukan input ke database
        $user_input = Covid::create($input);

        $resource = [
            'message' => 'New Patient Has Been Added Successfully',
            'resource' => $user_input
        ];

        return response()->json($resource, 201);
    }

    public function update(Request $request, $id)
    {
        $user_response = Covid::find($id);

        if ($user_response) {
            $user_response->update([
                'name' => $request->name ?? $user_response->name, // ?? merupakan statement ketika response update tidak diisi maka akan memakai data yang lama
                'phone' => $request->phone ?? $user_response->phone,
                'address' => $request->address ?? $user_response->address,
                'status' => $request->status ?? $user_response->status,
                'in_date_at' => $request->in_date_at ?? $user_response->in_date_at,
                'out_date_at' => $request->out_date_at ?? $user_response->out_date_at
            ]);
            $resource = [
                'messagge' => 'Update Successfully',
                'resource' => $user_response
            ];

            return response()->json($resource, 201);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_response
            ];

            return response()->json($resource, 404);
        }
    }

    public function destroy($id)
    {
        $user_get = Covid::find($id);

        if ($user_get) {
            $user_get->delete();

            $resource = [
                'messagge' => 'Data Successfully Deleted',
                'resource' => $user_get
            ];

            return response()->json($resource, 204);
        } else {
            $resource = [
                'messagge' => 'Data Not Found',
                'resource' => $user_get
            ];

            return response()->json($resource, 404);
        }
    }
}
