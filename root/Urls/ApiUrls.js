const Domain = "192.168.100.16:8000"
const MainUrl = "http://"+Domain+"/api/"
const  WsUrl = `ws://${Domain}/`


export const ApiUrl = {
    logIn:MainUrl+"logIn",
    changePass:MainUrl+"changePass",
    setNewPass:MainUrl+"setNewPass",
    resetPass:MainUrl+"resetPass",
    checkPromo:MainUrl+"checkPromo",
    changeName:MainUrl+"changeName",
    updateRideRating:MainUrl+"updateRideRating",
    changePhone:MainUrl+"changePhone",
    dashboard:MainUrl+"dashboard",
    changeCity:MainUrl+"changeCity",
    getRideDetails:MainUrl+"getRideDetails",
    getAllRides:MainUrl+"getAllRides",
    verifyToken:MainUrl+"verifyToken/",
    RideDetail:MainUrl+"RideDetail",
    resendOTP:MainUrl+"resendOTP/",
    signUp:MainUrl+"signUp/",
    signupAsRider:MainUrl+"signupAsRider/",
    userProfile:MainUrl+"userProfile/",
    verifyOTP:MainUrl+"verifyOTP/",
    bookRide:MainUrl+"bookRide/",
    NearbyRides:MainUrl+"getNearbyRides/",
    test:MainUrl+"test/",
    cancelRide:MainUrl+"cancelRide",
    updateDP:MainUrl+"updateDP/",
    checkRideStatus:MainUrl+"checkRideStatus/",
    getVehicleTypes:MainUrl+"getVehicleTypes",
    rideAccepted:MainUrl+"rideAccepted/",
    checkOnGoingRide:MainUrl+"checkOnGoingRide/",
    dp:"http://"+Domain,

}

export const WsUrls ={
    Ride:WsUrl+"ws/socket-server/",
    RideLocationSharingGroup:WsUrl+'ws/socket-server/RideLocationSharingGroup'
}


export default  MainUrl;
