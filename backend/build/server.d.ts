import { Server } from '@overnightjs/core';
declare class BackServer extends Server {
    constructor();
    start(port: number): void;
    private setupControllers;
}
export default BackServer;
