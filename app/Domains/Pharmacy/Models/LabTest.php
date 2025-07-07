<?php

namespace App\Domains\Pharmacy\Models;

use Illuminate\Database\Eloquent\Model;
use App\Domains\Auth\Models\User;
class LabTest extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'lab_request_id', 'test_type', 'result_text',
        'result_file', 'reviewed_by', 'reviewed_at'
    ];

    public function request()
    {
        return $this->belongsTo(LabRequest::class, 'lab_request_id');
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }
}
