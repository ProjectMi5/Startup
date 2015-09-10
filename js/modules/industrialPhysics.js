/**
 * startIndustrialPhysics_externally
 * 
 * @author Dominik Serve
 * @date 2015-09-10
 * 
 */
exports.startIndPhys = function(){
	var $btn = global.$('#startIndPhys');
	$btn.button('loading');
	$btn.attr('class', 'btn btn-success');
	
	var exec = require('child_process').execFile;

	console.log("Starting Industrial Physics");
	
	var exec = require('child_process').execFile;
	exec(process.cwd() + '\\config\\startIndustrialPhysics.cmd', function(error, stdout, stderr) {
		$btn.button('reset');
		console.log("stdout: " + stdout);
		console.log('Industrial Physics closed');
				
		if(!error){
			$btn.attr('class', 'btn btn-primary');
			$btn.attr('title', 'closed');
		} else {
			console.log("stderr: "+stderr);
			$btn.attr('class', 'btn btn-warning');
			$btn.attr('title', 'error');
		}
	});
};