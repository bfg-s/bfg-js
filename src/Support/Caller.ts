import {anyObject} from "./Request";
import {ApplicationContainer} from "./Application";

export class Caller {

    [key: string]: any;

    make (app: ApplicationContainer) {

        return (command: string|anyObject, ...value: Array<any>) => {

            if (typeof command === 'string') {

                let obj: any = app,
                    context = {},
                    chunks = String(command).split('.'),
                    chunks_last_index = chunks.length-1;

                chunks.map((p: string, i: number) => {
                    if (obj) {

                        let d = obj[p];

                        if (i === chunks_last_index) {

                            context = obj;
                        }

                        obj = obj[p];
                    }
                });

                if (typeof obj === 'function') {
                    obj.apply(context, value);
                } else {
                    app.log.error(`Command ${command} not found!`);
                }
            }

            else if (Array.isArray(command)) {

                try {

                    app.obj.each(command, (commande: Array<any>) => {

                        let d = !Array.isArray(commande[1]) ? [commande[1]] : commande[1];
                        app.call(commande[0], ...d);
                    });

                } catch (e) {

                    console.error(e);
                }
            }

            else if (typeof command === 'object') {

                try {

                    app.obj.each(command, (props: Array<any>, commande: string) => {

                        let d = !Array.isArray(props) ? [props] : props;
                        app.call(commande, ...d);
                    });

                } catch (e) {

                    console.error(e);
                }
            }
        }
    }
}