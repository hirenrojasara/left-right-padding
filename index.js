module.exports = new function LeftRightPadding(){

    this.lpad = function(str, val, count, strLength){

        if( arguments.length == 2) {
            return val.toString() + str.toString();
        } else if(arguments.length == 3 ){
            if(count < 1 ){
                console.log("Count should not be less than 1");
                return str;
            }else{
                for(var i=0; i<count; i++){
                    str =  val.toString() + str.toString();
                }
                return str;
            }
        }
        else if(arguments.length == 4 ){

            var hasCountConstraint = count > 0;

            while(str.length < strLength){

                str =  val.toString() + str.toString();
                if(hasCountConstraint){
                    count--;
                    if(count == 0 )
                    { break; }
                }
            }
            return str;
        } else {
            return str || undefined;
        }
    }

     this.rpad = function(str, val, count, strLength){

        if( arguments.length == 2) {
            return  str.toString() + val.toString();
        } else if(arguments.length == 3 ){
            if(count < 1 ){
                console.log("Count should not be less than 1");
                return str;
            }else{
                for(var i=0; i<count; i++){
                    str =  str.toString() + val.toString();
                }
                return str;
            }
        }
        else if(arguments.length == 4 ){

            var hasCountConstraint = count > 0;

            while(str.length < strLength){

                str =  str.toString() + val.toString() ;
                if(hasCountConstraint){
                    count--;
                    if(count == 0 )
                    { break; }
                }
            }
            return str;
        } else {
            return str || undefined;
        }
    }
    return this;
}
