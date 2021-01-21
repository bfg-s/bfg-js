export class Doc {

    reload () {

        window.location.reload();
    }

    redirect (url: string) {

        window.location.href = url;
    }

    set_url (url: string, title: string|null = null, state: any = {}) {

        window.history.pushState(state, title, url);
    }
}