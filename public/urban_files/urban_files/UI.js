/* Click boxes: Schedules day of week & morn/noon/night  */
function changeScheduleLink(linkId) {
		


function validateCoupon(type, callBack){
	var code = $('input[name=promo_code]').val();
		$.getJSON("/billing/json",{act:'validate-coupon', code:code, membership_type: type},function(j){		
			if(callBack)
				callBack(j);
		
			else if(!j)
			{
				alert('Promo Code is not valid');
			}
			else	
			{
				var cycle = j.cycles;
				var amount = j.amount;
			}
		}
	);
}


function getURLParam(name){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");  
	var regexS = "[\\?&]"+name+"=([^&#]*)";  
	var regex = new RegExp( regexS );  
	var results = regex.exec( window.location.href );  
	return ( results == null ) ?  null: results[1];
}