// LLD DB DESIGN

// --------User -------------------------------

// id
// name
// email
// phone
// password  hash
// type  (rider,driver)
// timestamp

// ------- Driver -----------------------------

// id
// user_id  reference user id
// vehicle_id reference vehicle_id
// license_no img
// status  (available,notavailble, on_trip)
// rating (1-5)
// timestamp

// -----------vehicle--------------------------

// id
// driver_id
// vehicle number
// vehicle img
// make
// model
// vehicle_type('compact,sedan,suv)
// timestamp

//---------------- rides ------------------------

// id
// rider_id reference user_id
// driver_id
// start_loc
// end_loc
// start_time
// end_time
// status (requested,in_progress,completed,cancelled,failed)
// fare
// timeStamp

//-----------payment-------------------------------

// id
// ride_id reference user
// payment_method (card,upi ,net_bank)
// amount
// payment_status (pending,completed,failed)
// transaction_id
// timestamp

// ---------------locations-------------------------

// id
// user_id reference user_id
// driver_id reference driver_id
// location point lat long
// timestamp

//------------ rating --------------------------------

// id
// ride_id reference ride
// user_id
// rating (1-5)
// review
// timestamp
