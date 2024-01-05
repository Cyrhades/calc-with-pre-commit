export default class {

    addition(arg1, arg2, ...args) {
        let sum = 0;
        if(args.length > 0) sum = args.reduce((accumulator, current) => accumulator + current);
        
        return arg1+arg2+sum;
    }

    soustraction(arg1, arg2, ...args) {
        let sum = 0;
        if(args.length > 0) sum = args.reduce((accumulator, current) => accumulator + current);
        return arg1-arg2-sum;
    }

    multiplication(arg1, arg2, ...args) {
        let sum = 1;
        if(args.length > 0) sum = args.reduce((accumulator, current) => accumulator * current);
        return arg1*arg2*sum;
    }


    division(arg1, arg2, ...args) {
        if(arg2 == 0) {
            throw new Error(`La division par 0 n'est pas possible`);
        }
        if(args.length > 0) {
            let accumulator = arg1/arg2;
            for(let arg of args) {
                if(arg != 0) {
                    accumulator = accumulator/arg;
                } else {
                    throw new Error(`La division par 0 n'est pas possible`);
                }
            }
            return accumulator;
        }
        return arg1/arg2;
    }
}