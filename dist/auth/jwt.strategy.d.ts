declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: {
        email: string;
        firstname: string;
        lastname: string;
        role: string;
    }): Promise<{
        email: string;
        firstname: string;
        lastname: string;
        role: string;
    }>;
}
export {};
