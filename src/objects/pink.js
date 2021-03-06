(function() {
    "use strict";
    
    // Voss algorithm
    // http://www.firstpr.com.au/dsp/pink-noise/
    
    var MAX_KEY = 31;
    var fn = timbre.fn;
    
    function PinkNoiseNode(_args) {
        timbre.Object.call(this, _args);
        fn.fixAR(this);
        
        var whites = new Uint8Array(5);
        for (var i = 0; i < 5; ++i) {
            whites[i] = ((Math.random() * (1<<30))|0) % 25;
        }
        this._.whites = whites;
        this._.key = 0;
    }
    fn.extend(PinkNoiseNode);
    
    var $ = PinkNoiseNode.prototype;
    
    $.process = function(tickID) {
        var cell = this.cell;
        var _ = this._;
        
        if (this.tickID !== tickID) {
            this.tickID = tickID;
            
            var i, imax, j;
            var key = _.key, whites = _.whites;
            var mul = _.mul, add = _.add;
            var last_key, sum, diff;
            
            for (i = 0, imax = cell.length; i < imax; ++i) {
                last_key = key++;
                if (key > MAX_KEY) {
                    key = 0;
                }
                diff = last_key ^ key;
                for (j = sum = 0; j < 5; ++j) {
                    if (diff & (1 << j)) {
                        whites[j] = ((Math.random() * (1<<30))|0) % 25;
                    }
                    sum += whites[j];
                }
                cell[i] = ((sum * 0.01666666) - 1) * mul + add;
            }
            _.key = key;
        }
        return cell;
    };
    
    fn.register("pink", PinkNoiseNode);
    
})();
