import {anyObject} from "./Request";

export class Caller {

    [key: string]: any;

    call (command: string|anyObject, ...value: Array<any>) {

        if (typeof command === 'string') {

            // String(command).split('.').reduce((obj: anyItems, i: string) => {
            //     return obj[i] !== undefined ? obj[i] : undefined;
            // }, this);

            // console.log(this.obj.get(command, this));

            this.obj.get(command, this)(...value);
        }

        else if (Array.isArray(command)) {

            this.obj.each(command, (commande: Array<any>) => {
                this.call(commande[0], ...(!Array.isArray(commande[1]) ? [commande[1]] : commande[1]));
            });
        }

        else if (typeof command === 'object') {

            this.obj.each(command, (props: Array<any>, commande: string) => {
                this.call(commande, ...(!Array.isArray(props) ? [props] : props));
            });
        }
    }
}