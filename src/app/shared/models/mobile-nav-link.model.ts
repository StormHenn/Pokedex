export class MobileNavLink {
    public name: string;
    public link: string;
    public icon: string;

    constructor(record: MobileNavLink) {
        this.name = record.name;
        this.link = record.link;
        this.icon = record.icon;
    }
}
