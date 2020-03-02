declare class Logs {
    private isConsoleUse;
    constructor(isConsoleUse?: boolean);
    info(message: string): void;
    error(message: string): void;
    warn(message: string): void;
}
declare const _default: Logs;
export default _default;
