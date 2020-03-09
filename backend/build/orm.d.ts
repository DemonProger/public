import { MikroORM } from 'mikro-orm';
declare class Orm {
    private orm;
    getOrm(): Promise<MikroORM>;
    private createOrm;
}
declare const _default: Orm;
export default _default;
