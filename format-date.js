Date.prototype.format = function(formatString){
	var date = this
	
	formatString = formatString + ""
	
	function formatNumber(/**{Number|String}*/num){
		num = num + ""
		return "0".repeat(2 - num.length) + num
	}
	
	return formatString
		.replace(/y{2,4}/g, function(s){
			if(s.length == 4){
				return date.getFullYear()
			}else{
				return formatNumber(date.getFullYear() % 100) + s.slice(3)
			}
		})
		.replace(/M{2}/g, function(s){
			return formatNumber(date.getMonth() + 1)
		})
		.replace(/d{2}/g, function(s){
			return formatNumber(date.getDate() )
		})
		.replace(/H{1,2}/g, function(s){
			if(s.length == 2){
				return formatNumber(date.getHours())
			}
			return date.getHours()
		})
		.replace(/m{2}/g, function(s){
			if(s.length == 2){
				return formatNumber(date.getMinutes())
			}
			return date.getMinutes()
			
		})
		.replace(/s{2}/g, function(s){
			if(s.length == 2){
				return formatNumber(date.getSeconds())
			}
			return date.getSeconds()
		})
		.replace(/z{1,2}/i, function(s){
			var timezone = -date.getTimezoneOffset()
			
			return "GMT" + (timezone >= 0? "+": "-") + formatNumber( Math.abs(Math.floor(timezone / 60)) ) + ":" + formatNumber(timezone % 60)
		})
}