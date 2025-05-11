// SLOT BOOKING

//------------ USER-------------

// id
// name
// email
// password [hash]
// role [user/admin]
// timeStamp

// ------------ locations ---------

// id
// name
// address
// spaces [objectid]

// ----------------- spaces -------------

// id
// name
// type
// location_id [reference]
// capacity
// amenities [wifi,ac,pantry]
// slots [reference]

// -----------------slots ----------------

// id
// space_id
// starttime
// end_time
// is_booked

//------------------ bookings -----------------

// id
// user_id
// slot_id
// space_id
// location_id
// status
// transaction_id
// timeStamp

//--------------------payment -------------

// id
// booking_id reference booking
// payment_method (card,upi ,net_bank)
// amount
// payment_status (pending,completed,failed)
// transaction_id
// timestamp
