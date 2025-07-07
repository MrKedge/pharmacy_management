<?php

namespace App\Domains\Pharmacy\Models;

use Illuminate\Database\Eloquent\Model;
use App\Domains\Auth\Models\User;
class LabRequest extends Model
{
    protected $fillable = ['requested_by', 'patient_name', 'patient_id_number', 'status', 'remarks'];

    public function tests()
    {
        return $this->hasMany(LabTest::class, 'lab_request_id');
    }

    public function requestedBy()
    {
        return $this->belongsTo(User::class, 'requested_by');
    }
}
